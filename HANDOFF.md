# AI 教学与学术项目看板 (Math-Dashboard) 交接文档 (HANDOFF.md)

> **文档生成时间**：2026-10-15  
> **项目定位**：研究生 AI 公选课配套工具看板，集中收录、分类展示前沿 AI 教学、学术科研、数学建模与智能体开源生态项目。  
> **代码仓库**：`https://github.com/kingofu/math-dashboard.git` (分支: `main`)  
> **本地根目录**：`D:\研究生AI公选课\web_dashboard`

---

## 1. 核心架构与关键资产

### 1.1 文件目录结构
```text
D:\研究生AI公选课\web_dashboard\
├── index.html               # 前端展示单页应用（支持深浅/复古/北欧/工业等5套主题，左侧分类动态渲染）
├── data.js                  # 核心数据源（全局变量 GLOBAL_DATA 包含 PROJECTS 与 CATEGORIES）
├── HANDOFF.md               # 本交接文档
├── README.md                # 仓库基本介绍
└── .gitignore               # Git 忽略文件配置
```

### 1.2 数据现状指标
* **收录项目总数**：**227 个**
* **项目序号约束**：严格遵循 `num: 1..227` 连续递增自增，无任何断号与重复。
* **受控分类总数**：**13 个核心标准分类**（已将旧版分散的学术润色、去AI化等子类完整并入论文写作与投稿）。

---

## 2. 标准分类字典 (13 个核心分类)

数据录入、移动与检索必须严格限定在以下 13 个标准 `category_id`，禁止随意增加未受控分类：

| # | category_id | category_name | 涵盖领域与代表项目 |
|---|---|---|---|
| 1 | `tutoring` | 智能教学与启发式辅导 | 启发式教学、解题辅导、互动课件系统（如 SocraticLM, edulab, DeepTutor） |
| 2 | `teaching_prep` | 教案与备课工具 | 自动出题、题库管理、教案生成、组卷助手（如 math-question-bank, AmTiKu, gaokaomath） |
| 3 | `slide_generation` | 幻灯片生成与演示 | PPT/幻灯片生成、Web演示文稿导出（如 dashi-ppt-skill, guizang-ppt-skill） |
| 4 | `visualization` | 数学可视化与动画生成 | Manim动画、学术配图、动效解说视频、Origin联动（如 Academic Figure Skill, EditaPlot, anything2explainer） |
| 5 | `literature_retrieval`| 文献检索与阅读 | 论文检索、文献调研、综述生成、学术问答（如 literature-survey-skill, ChatPaper） |
| 6 | `paper_writing` | 论文写作与投稿 | 论文撰写、结构梳理、学术润色、去AI感改稿（如 Nature-Paper-Skills, human-writing, talk-normal） |
| 7 | `math_modeling` | 形式化数学与数模竞赛 | 数模竞赛工具包、华为杯作战中枢、Lean4定理证明（如 Mrite, Huaweibei-cool, cumcm-step-review） |
| 8 | `doc_conversion` | 文档转换与内容解析 | 公式识别、OCR提取、PDF/Markdown/Docx互转（如 LaTeXSnipper, MinerU, PaddleOCR） |
| 9 | `formatting` | 其他文档自动化工具 | LaTeX模板规范、Word/Docx排版与自动化编译（如 latex-paper, pandoc_docx_template） |
| 10| `agent_framework` | 智能体框架与平台 | 多智能体框架、自动化研究工作流平台（如 OpenMAIC, Auto-claude-code-research-in-sleep） |
| 11| `agent_clients` | AI客户端与桌面工具 | 桌面端AI工具、CLI终端、上手教程（如 claude-howto-zh-cn, AionUi） |
| 12| `agent_integration`| MCP/插件与技能集成 | 专用MCP Server、技能包、工具箱集成（如 planning-with-files, lean-lsp-mcp） |
| 13| `other` | 其他学术与教学工具 | 其它综合类学术软件、数据集、开源书籍（如 pumpkin-book, OpenSpec） |

---

## 3. 专属自动化运维技能 (dashboard-project-manager)

看板已全量配备专属自动化技能，存放在本地系统技能目录：  
`C:\Users\Administrator\.gemini\config\skills\dashboard-project-manager\`

> [!IMPORTANT]
> **硬性执行门禁（Zero Ad-hoc Script Rule）**：  
> 严禁手写临时的 scratch 脚本修改 `data.js`！所有收录、修改、删除、重排和更新操作**必须且只能**调用该技能 `scripts/` 下的标准 CLI 工具链。

### 3.1 常用操作指令

#### A. 新增收录项目（单个或批量）
构建 JSON Payload（单对象或数组），调用 `import_projects.py` 一键导入：
```bash
python "C:\Users\Administrator\.gemini\config\skills\dashboard-project-manager\scripts\import_projects.py" "payload.json" --push
```
* **工作流**：Agent 负责理解仓库并编写精炼中文介绍和标签 → 脚本负责 URL 查重、分类校验、自动递增 `num` 编号、写入 `data.js` 并自动执行 `git commit` 和 `git push`。

#### B. 分批并发更新 Star 数
```bash
python "C:\Users\Administrator\.gemini\config\skills\dashboard-project-manager\scripts\batch_update_stars.py" --push
```
* **性能特性**：40个/批，20 线程并发，1.5 秒超时降级，每批即时回写，更新完毕后自动完成 Git 推送（220+ 项目全量刷新仅需约 30 秒）。

#### C. 项目删除与索引重排
```bash
# 删除指定 ID 或名称的项目，并自动重排全量项目的 num 为 1..N
python "C:\Users\Administrator\.gemini\config\skills\dashboard-project-manager\scripts\manage_project.py" --delete <ID_OR_NAME> --push

# 项目重命名
python "C:\Users\Administrator\.gemini\config\skills\dashboard-project-manager\scripts\manage_project.py" --rename <ID> "<NEW_NAME>" --push

# 调整项目所属分类
python "C:\Users\Administrator\.gemini\config\skills\dashboard-project-manager\scripts\manage_project.py" --move <ID> <NEW_CAT_ID> --push
```

#### D. 数据合法性校验
```bash
python "C:\Users\Administrator\.gemini\config\skills\dashboard-project-manager\scripts\validate_data.py"
```
* 检查语法格式、`num: 1..N` 严格连续性、URL 唯一性与 13 个分类合规性。

---

## 4. 近期重要演进记录

1. **分类架构收敛**：消除了松散的“学术润色”、“智能助理”等边界重叠分类，精简为受控的 13 维体系，提升看板侧边栏交互体验。
2. **数模生态深度收录**：成体系收录了面向国赛（CUMCM）、研赛（华为杯）、美赛（MCM/ICM）的解题流水线、审核门禁与去 AI 味改稿技能（如 `Huaweibei-cool`, `cumcm-step-review`, `huawei-cup-modeling-skill` 等）。
3. **运维工具链产品化**：彻底告别早期的临时散装脚本，将“数据校验-抓取-写入-重排-Git推送”固化为成熟的自动化 Skill。

---

## 5. 后续维护建议与待办事项

1. **定期刷新 Star 数据**：建议每周或重大节点执行一次 `batch_update_stars.py --push`，保持看板社区热度数据与 GitHub 实时对齐。
2. **死链定期巡检**：后续可在 `validate_data.py` 中扩充 HTTP 404 检测逻辑，识别失效仓库。
3. **前端搜索体验优化**：后续可根据标签密度，在 `index.html` 前端增加按 Tags 组合筛选的多维度过滤功能。
