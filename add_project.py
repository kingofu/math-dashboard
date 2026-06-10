# -*- coding: utf-8 -*-
import sys
import os
import re
import json
import requests
from bs4 import BeautifulSoup

# Ensure stdout uses UTF-8 to prevent encoding issues in Windows console
if sys.platform.startswith('win'):
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.detach())

# Configuration
JS_FILE_NAME = "data.js"

CATEGORIES = {
    'tutoring': {'name': '智能教学与启发式辅导 (Tutoring & Socratic Learning)'},
    'visualization': {'name': '数学可视化与动画生成 (Math Visualization & Animation)'},
    # Formatting sub-categories
    'doc_conversion': {'name': '文档转换与内容解析 (Doc Conversion & Parsing)'},
    'slide_generation': {'name': '幻灯片生成与演示 (Slide Generation & Presentation)'},
    'teaching_prep': {'name': '教案与备课工具 (Teaching Plan & Prep Tools)'},
    'formatting': {'name': '其他文档自动化 (Other Formatting Tools)'},
    # Academic sub-categories
    'paper_writing': {'name': '论文写作与投稿 (Paper Writing & Submission)'},
    'literature_retrieval': {'name': '文献检索与阅读 (Literature Retrieval & Reading)'},
    'academic_polish': {'name': '学术润色与去AI化 (Academic Polishing)'},
    'academic_writing': {'name': '其他论文分析与写作辅助 (Other Academic Tools)'},
    'math_modeling': {'name': '形式化数学与数模竞赛 (Formalized Math & Modeling)'},
    # Agent sub-categories
    'agent_framework': {'name': '智能体框架与平台 (Agent Framework & Platform)'},
    'agent_clients': {'name': 'AI客户端与桌面工具 (AI Client & Desktop Tools)'},
    'agent_integration': {'name': 'MCP/插件与技能集成 (MCP/Plugin & Skill Integration)'},
    'agent': {'name': '其他AI智能体与集成 (Other Agent & Integration)'},
    'other': {'name': '其他学术与教学工具 (Other Tools)'}
}

KEYWORD_RULES = {
    'visualization': ['manim', 'visual', 'anim', '动画', '可视化', 'rendering', '3blue1brown', 'svg', 'chart'],
    'tutoring': ['socratic', 'tutor', 'chat', '问答', '陪练', '互动课堂', '教学助手', 'maic', '助教', '启发', '教学', '教育', 'student', 'classroom'],
    # Formatting sub-categories
    'doc_conversion': ['pdf.*markdown', 'xparse', 'omml', '公式转换', '文档.*解析', '格式.*转换', 'extract.*table', '文档.*结构化', 'parse.*document', 'convert.*format'],
    'slide_generation': ['幻灯片', 'ppt.*master', 'ppt.*generat', 'slide.*generat', 'powerpoint', '演示文稿', 'guizang.*ppt', 'codex.*ppt', 'manim.*slide', 'visual.*slide', 'next.*slide'],
    'teaching_prep': ['教案', 'teaching.*plan', 'lesson.*plan', '备课', 'grade.*lens', '复习笔记', '项目.*答辩', '答辩.*辅助', 'knowledge.*review', 'defense'],
    # Academic sub-categories
    'paper_writing': ['paper.*writ', 'writing.*paper', 'writer.*skill', 'journal.*adapt', 'latex.*writer', 'grant.*writer', '论文.*写作', 'research.*writing', 'paper.*spine', 'research.*skill.*库'],
    'literature_retrieval': ['paper.*search', 'paper.*fetch', 'arxiv', 'rag.*paper', 'paper.*qa', '文献.*检索', 'read.*paper', 'semantic.*scholar', 'cite.*check', 'cite.*verify', 'chatpaper', '引用.*一致性'],
    'academic_polish': ['slop', 'humaniz', '润色', '去AI', 'polish.*writing', 'de.*ai', 'rewrit', '改写', 'human.*writing', 'stop.*slop', 'humanizer'],
    # Agent sub-categories
    'agent_framework': ['multi.*agent', 'agent.*framework', 'framework.*agent', 'platform.*agent', 'agent.*platform', 'knowledge.*platform', 'autogen', 'weknora'],
    'agent_clients': ['desktop', 'client.*switch', 'aionui', 'lobsterai', 'claude.*desktop', '客户端', '桌面.*工具', '终端.*助手'],
    'agent_integration': ['mcp', 'plugin.*library', 'skill.*library', 'skill.*manager', 'browser.*extension', '插件.*管理', 'anysearch', 'skills.*official', 'plugin.*ecosystem', '插件.*生态'],
    # Parent categories (catch-all)
    'formatting': ['latex', 'docx', 'word', 'pdf', 'formatting', 'doc_chat', 'generator', '排版', 'markdown'],
    'academic_writing': ['nature', 'research', 'paper', '学术', '研', '论文', 'spotlight', 'neurips', 'review', 'spine', 'cite'],
    'math_modeling': ['mathlib', 'lean 4', '建模', 'modeling', 'contest', '竞赛', 'archon', 'theorem', 'formali'],
    'agent': ['agent', '智能体', 'github', 'developer', '开发工具', 'api', 'codegraph', '图谱', 'lsp', 'git', 'code.*assist'],
    'other': []
}

TAG_RULES = [
    (re.compile(r'manim|animation|动画'), '数学动画'),
    (re.compile(r'visual|可视化'), '可视化'),
    (re.compile(r'socratic|苏格拉底'), '苏格拉底教学'),
    (re.compile(r'tutor|教学|教育|助教|course|classroom'), '智能助教'),
    (re.compile(r'latex|docx|word|ppt|pdf|slides|排版|formatting'), '文档自动化'),
    (re.compile(r'modeling|建模'), '数学建模'),
    # 学术细分标签（在学术科研之前匹配，优先分配）
    (re.compile(r'paper.*writ|journal.*adapt|grant.*writer|latex.*writer|draft|论文.*写作|research.*writing'), '论文写作'),
    (re.compile(r'paper.*search|paper.*fetch|arxiv|rag.*paper|paper.*qa|文献.*检索|semantic.*scholar'), '文献检索'),
    (re.compile(r'slop|humaniz|去AI|润色|polish|de.*ai|rewrit|改写|human.*writing'), '学术润色'),
    (re.compile(r'paper|research|论文|学术'), '学术科研'),
    # AI细分标签（在AI智能体之前匹配）
    (re.compile(r'agent.*framework|autogen|multi.*agent|agent.*platform'), '智能体框架'),
    (re.compile(r'mcp|plugin.*manager|skill.*manager|插件|skill.*library|skill.*pack'), 'MCP与插件'),
    (re.compile(r'code|developer|plugin|开发工具|api'), '开发工具'),
    (re.compile(r'agent|智能体'), 'AI智能体')
]

def normalize_url(url):
    """Normalize URL by trimming, removing parameters, lowercasing domain, and removing trailing slash."""
    url = url.strip()
    url = re.split(r'\?|#', url)[0]
    if url.endswith('/'):
        url = url[:-1]
    
    match = re.match(r'^(https?://)([^/]+)(.*)$', url, re.IGNORECASE)
    if match:
        scheme, domain, path = match.groups()
        url = f"{scheme.lower()}{domain.lower()}{path.lower()}"
    
    return url

def load_projects_from_js(filepath):
    """Read the data.js file and extract the PROJECTS and CATEGORIES JSON."""
    if not os.path.exists(filepath):
        return [], {}
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    proj_match = re.search(r'PROJECTS:\s*(\[.*?\]),', content, re.DOTALL)
    cat_match = re.search(r'CATEGORIES:\s*(\[.*\])\n\};', content, re.DOTALL)
    
    if not proj_match:
        return [], {}
        
    try:
        projects = json.loads(proj_match.group(1))
        categories = json.loads(cat_match.group(1)) if cat_match else []
        return projects, categories
    except Exception as e:
        print(f"[错误] 解析 JS 中的项目数据失败: {e}")
        return [], {}

def save_projects_to_js(filepath, projects, categories):
    """Write the updated PROJECTS array back into data.js."""
    projects_json = json.dumps(projects, ensure_ascii=False, indent=8)
    categories_json = json.dumps(categories, ensure_ascii=False, indent=8) if categories else "[]"
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write("const GLOBAL_DATA = {\n")
        f.write(f"    PROJECTS: {projects_json},\n")
        f.write(f"    CATEGORIES: {categories_json}\n")
        f.write("};\n\n")
        f.write("const PROJECTS = GLOBAL_DATA.PROJECTS;\n")
        f.write("const CATEGORIES = GLOBAL_DATA.CATEGORIES;\n")
    return True

def parse_github_repo(owner, repo):
    """Fetch GitHub repository details using API and fallback to scraping if needed."""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
    
    api_url = f"https://api.github.com/repos/{owner}/{repo}"
    try:
        response = requests.get(api_url, headers=headers, timeout=8)
        if response.status_code == 200:
            data = response.json()
            name = data.get('name') or repo
            desc = data.get('description') or ""
            stars_count = data.get('stargazers_count') or 0
            topics = data.get('topics') or []
            
            if stars_count >= 1000:
                stars = f"{stars_count / 1000:.1f}k"
            else:
                stars = str(stars_count)
                
            return {
                'name': name,
                'description': desc,
                'stars': stars,
                'topics': topics,
                'is_github': True
            }
    except Exception as e:
        print(f"[警告] GitHub API 请求异常: {e}，将尝试网页解析兜底。")

    html_url = f"https://github.com/{owner}/{repo}"
    try:
        response = requests.get(html_url, headers=headers, timeout=8)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            
            desc_tag = soup.find('meta', {'name': 'description'})
            desc = desc_tag['content'] if desc_tag else ''
            desc = re.sub(r' - GitHub - .*$', '', desc).strip()
            desc = re.sub(r'^GitHub - [^:]+: ', '', desc).strip()
            
            stars = "N/A"
            star_link = soup.find('a', href=re.compile(rf'/{owner}/{repo}/stargazers'))
            if star_link:
                star_span = star_link.find('span')
                if star_span:
                    stars = star_span.text.strip()
                else:
                    stars = star_link.text.replace('star', '').replace('s', '').strip()
            
            topics = []
            topic_tags = soup.find_all('a', class_=re.compile(r'topic-tag'))
            for tag in topic_tags:
                topics.append(tag.text.strip())
                
            return {
                'name': repo,
                'description': desc,
                'stars': stars,
                'topics': topics,
                'is_github': True
            }
    except Exception as e:
        print(f"[错误] 网页抓取失败: {e}")
        
    return None

def parse_general_url(url):
    """Fetch generic web page details."""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
    try:
        response = requests.get(url, headers=headers, timeout=8)
        encoding = response.apparent_encoding
        if encoding:
            response.encoding = encoding
            
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            
            title_tag = soup.find('title')
            title = title_tag.text.strip() if title_tag else "未命名项目"
            title = re.split(r' - | \| | – ', title)[0].strip()
            
            desc = ""
            desc_tag = soup.find('meta', {'name': 'description'}) or soup.find('meta', {'property': 'og:description'})
            if desc_tag:
                desc = desc_tag.get('content', '').strip()
                
            return {
                'name': title,
                'description': desc,
                'stars': 'N/A',
                'topics': [],
                'is_github': False
            }
    except Exception as e:
        print(f"[错误] 通用网页请求失败: {e}")
        
    return None

def fetch_project_info(url):
    """Route and fetch project info depending on domain."""
    normalized_url = normalize_url(url)
    github_match = re.search(r'github\.com/([^/]+)/([^/]+)', normalized_url, re.IGNORECASE)
    if github_match:
        owner, repo = github_match.groups()
        return parse_github_repo(owner, repo)
    return parse_general_url(url)

def classify_project(info):
    """Determine the best category for the project based on rules and keywords."""
    text_to_analyze = (info['name'] + " " + info['description'] + " " + " ".join(info['topics'])).lower()
    scores = {cat: 0 for cat in KEYWORD_RULES}
    
    # Sub-category priority boost: sub-category keyword matches count double
    sub_cats = {'doc_conversion','slide_generation','teaching_prep',
                'paper_writing','literature_retrieval','academic_polish',
                'agent_framework','agent_clients','agent_integration'}
    
    for category, keywords in KEYWORD_RULES.items():
        for kw in keywords:
            count = text_to_analyze.count(kw.lower())
            if category in sub_cats:
                count *= 2  # Double weight for sub-categories
            scores[category] += count
            
    if info.get('is_github'):
        for topic in info['topics']:
            topic_lower = topic.lower()
            if 'manim' in topic_lower or 'animation' in topic_lower or 'visual' in topic_lower:
                scores['visualization'] += 5
            if 'tutor' in topic_lower or 'education' in topic_lower or 'socratic' in topic_lower:
                scores['tutoring'] += 5
            # Formatting sub-categories
            if 'conversion' in topic_lower or 'markdown' in topic_lower:
                scores['doc_conversion'] += 5
            if 'slide' in topic_lower or 'presentation' in topic_lower:
                scores['slide_generation'] += 5
            if 'lesson' in topic_lower:
                scores['teaching_prep'] += 5
            # Academic sub-categories
            if 'writing' in topic_lower or 'latex' in topic_lower:
                scores['paper_writing'] += 5
            if 'search' in topic_lower or 'rag' in topic_lower or 'fetch' in topic_lower:
                scores['literature_retrieval'] += 5
            # Agent sub-categories
            if 'multi-agent' in topic_lower or 'ai-agent' in topic_lower or 'agent-framework' in topic_lower:
                scores['agent_framework'] += 5
            if 'mcp' in topic_lower:
                scores['agent_integration'] += 5
            if 'desktop' in topic_lower or 'client' in topic_lower:
                scores['agent_clients'] += 5
            # Parent categories (fallback - narrower scope)
            if 'latex' in topic_lower or 'docx' in topic_lower or 'pdf' in topic_lower:
                scores['formatting'] += 3
            if 'research' in topic_lower or 'paper' in topic_lower or 'science' in topic_lower:
                scores['academic_writing'] += 3
            if 'modeling' in topic_lower or 'mathlib' in topic_lower:
                scores['math_modeling'] += 5
            if 'developer' in topic_lower or 'tool' in topic_lower or 'agent' in topic_lower:
                scores['agent'] += 3

    max_score = 0
    best_cat = 'other'
    
    for category, score in scores.items():
        if score > max_score:
            max_score = score
            best_cat = category
            
    return best_cat

def generate_tags(info):
    """Generate tags based on matching regex rules."""
    name = info.get('name') or ""
    desc = info.get('description') or ""
    topics = info.get('topics') or []
    text_to_analyze = (name + " " + desc + " " + " ".join(topics)).lower()
    tags = []
    
    for regex, tag_name in TAG_RULES:
        if regex.search(text_to_analyze):
            tags.append(tag_name)
            
    if not tags:
        tags.append("通用工具")
        
    return tags

def resolve_non_standard_url(input_str):
    """Normalize input to standard URL or search GitHub if it is a keyword/name."""
    input_str = input_str.strip()
    if input_str.startswith(('http://', 'https://')):
        return input_str
        
    if '/' in input_str and len(input_str.split('/')) == 2:
        return f"https://github.com/{input_str}"
        
    # Search GitHub API
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
    search_url = f"https://api.github.com/search/repositories?q={input_str}"
    try:
        response = requests.get(search_url, headers=headers, timeout=8)
        if response.status_code == 200:
            items = response.json().get('items', [])
            if items:
                best_match = items[0]
                resolved = best_match.get('html_url')
                return resolved
    except Exception as e:
        pass
    return None

def check_english_desc(desc):
    eng_chars = len(re.findall(r'[a-zA-Z]', desc))
    cjk_chars = len(re.findall(r'[一-鿿]', desc))
    if cjk_chars == 0 and eng_chars > 20:
        return True
    if cjk_chars > 0 and (eng_chars / (cjk_chars + eng_chars)) > 0.7:
        return True
    return False

def check_complexity(info):
    """Detect if the project is a complex/multi-functional tool."""
    name = (info.get('name') or "").lower()
    desc = (info.get('description') or "").lower()
    topics = [t.lower() for t in info.get('topics', [])]
    
    complexity_keywords = ['skills', 'workshop', 'manager', 'pipeline', 'suite', 'framework', 'orchestrator', '工坊', '管理器', '套件', '管线']
    
    for kw in complexity_keywords:
        if kw in name or kw in desc or any(kw in t for t in topics):
            return True, kw
            
    return False, ""

def get_crowding_alerts(projects):
    """Check if any category or tag is getting too crowded."""
    alerts = []
    
    # Category counts
    cat_counts = {}
    for p in projects:
        cat_id = p.get('category_id')
        cat_counts[cat_id] = cat_counts.get(cat_id, 0) + 1
        
    if cat_counts.get('other', 0) >= 15:
        alerts.append(f"“其他”分类下的项目已达 {cat_counts['other']} 个，建议精细化新建分类。")
        
    # Tag counts
    tag_counts = {}
    for p in projects:
        for tag in p.get('tags', []):
            tag_counts[tag] = tag_counts.get(tag, 0) + 1
            
    for tag, count in tag_counts.items():
        if count >= 8:
            alerts.append(f"标记为“{tag}”的项目已达 {count} 个，建议为其独立划分子类别。")
            
    return alerts

def main():
    import argparse
    parser = argparse.ArgumentParser(description="Add/Remove projects directly to HTML dashboard")
    parser.add_argument("url", nargs="?", help="Project URL or Name to add")
    parser.add_argument("--dry-run", action="store_true", help="Only preview the project details")
    parser.add_argument("--name", help="Custom project name")
    parser.add_argument("--desc", help="Custom project description")
    parser.add_argument("--stars", help="Custom star count")
    parser.add_argument("--delete", help="Delete project by ID (number) or exact URL/Name")
    
    args = parser.parse_args()
    
    # Load existing projects
    projects, categories_arr = load_projects_from_js(JS_FILE_NAME)
    
    # Handle deletion
    if args.delete:
        target = args.delete.strip()
        found_project = None
        
        # Try matching by ID (number)
        if target.isdigit():
            target_num = int(target)
            for p in projects:
                if p.get('num') == target_num:
                    found_project = p
                    break
        
        # Try matching by exact URL or Name
        if not found_project:
            normalized_target = normalize_url(target)
            for p in projects:
                if p.get('url') != 'N/A' and normalize_url(p.get('url', '')) == normalized_target:
                    found_project = p
                    break
                if p.get('name', '').lower() == target.lower():
                    found_project = p
                    break
                    
        if not found_project:
            print(json.dumps({"error": f"未找到匹配项目 (查询条件: '{target}')。"}, ensure_ascii=False))
            sys.exit(1)
            
        projects.remove(found_project)
        
        # Re-index project numbers
        for i, p in enumerate(projects):
            p['num'] = i + 1
            
        save_projects_to_js(JS_FILE_NAME, projects, categories_arr)
        
        output = {
            "success": True,
            "deleted": found_project,
            "total_remaining": len(projects)
        }
        print(json.dumps(output, ensure_ascii=False))
        sys.exit(0)
        
    # Standard addition flow
    url = args.url
    if not url:
        parser.print_help()
        sys.exit(1)
        
    dry_run = args.dry_run
    
    # Resolve non-standard URL
    resolved_url = resolve_non_standard_url(url)
    if not resolved_url:
        print(json.dumps({"error": f"无法将输入 '{url}' 解析为有效的网址或 GitHub 仓库。"}, ensure_ascii=False))
        sys.exit(1)
    url = resolved_url
    
    # Check duplicate
    normalized_target = normalize_url(url)
    is_duplicate = False
    for p in projects:
        if p.get('url') != 'N/A' and normalize_url(p.get('url', '')) == normalized_target:
            is_duplicate = True
            break
            
    if is_duplicate and not dry_run:
        print(json.dumps({"error": "该网址已在收藏列表中，请勿重复添加。"}, ensure_ascii=False))
        sys.exit(0)
        
    normalized_url = normalize_url(url)
    
    # Check if we have custom name and description
    if args.name and args.desc:
        info = {
            'name': args.name,
            'description': args.desc,
            'stars': args.stars or 'N/A',
            'topics': [],
            'is_github': False
        }
        github_match = re.search(r'github\.com/([^/]+)/([^/]+)', normalized_url, re.IGNORECASE)
        if github_match and not args.stars:
            owner, repo = github_match.groups()
            gh_info = parse_github_repo(owner, repo)
            if gh_info:
                info['stars'] = gh_info['stars']
                info['topics'] = gh_info['topics']
                info['is_github'] = True
    else:
        info = fetch_project_info(url)
        if not info:
            print(json.dumps({"error": "无法抓取或解析该网址。请检查网址可达性。"}, ensure_ascii=False))
            sys.exit(1)
            
        if args.name:
            info['name'] = args.name
        if args.desc:
            info['description'] = args.desc
        if args.stars:
            info['stars'] = args.stars
            
    info['url'] = url
    
    # Classify and Tag
    category = classify_project(info)
    tags = generate_tags(info)
    
    # Detect complexity
    is_complex, matched_word = check_complexity(info)
    complexity_hint = ""
    if is_complex and len(info['description']) < 40:
        complexity_hint = f"[💡 提示] 该项目具有多功能特征（匹配词：'{matched_word}'），但当前简介较短（仅 {len(info['description'])} 字）。建议补充丰富简介以体现其多模块特性。"
        
    if check_english_desc(info['description']):
        if complexity_hint:
            complexity_hint += " | "
        complexity_hint += "[🌍 翻译请求] 抓取到大段英文简介，请将结果直接发给 AI 助手进行专业翻译。"
    
    # Calculate next project number
    max_num = max(p.get('num', 0) for p in projects) if projects else 0
    next_num = max_num + 1
    
    # Clean description newlines
    clean_desc = info['description'].replace('\n', ' ').strip()
    clean_name = re.sub(r'^项目\s*\d+\s*[：:]\s*', '', info['name']).strip()
    clean_name = re.split(r'------', clean_name)[0].strip()
    
    new_project = {
        "num": next_num,
        "name": clean_name,
        "url": info['url'],
        "description": clean_desc,
        "stars": info['stars'],
        "category_id": category,
        "category_name": CATEGORIES[category]['name'].split(' (')[0], # Strip English in parent category name
        "tags": tags
    }
    
    if dry_run:
        result = {
            "project": new_project,
            "complexity_hint": complexity_hint,
            "is_duplicate": is_duplicate
        }
        print(json.dumps(result, ensure_ascii=False, indent=2))
    else:
        projects.append(new_project)
        save_projects_to_js(JS_FILE_NAME, projects, categories_arr)
        
        # Get crowding alerts
        crowding_alerts = get_crowding_alerts(projects)
        
        output = {
            "success": True,
            "inserted": new_project,
            "complexity_hint": complexity_hint,
            "crowding_alerts": crowding_alerts
        }
        print(json.dumps(output, ensure_ascii=False))

if __name__ == "__main__":
    main()
