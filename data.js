const GLOBAL_DATA = {
    PROJECTS: [
        {
                "num": 1,
                "name": "OpenMAIC",
                "url": "https://github.com/THU-MAIC/OpenMAIC",
                "description": "OpenMAIC（Multi-Agent Interactive Classroom）是由清华大学开源的 AI 互动课程生成系统。用户输入任意主题，AI 自动生成一整套互动课程——包含幻灯片、语音讲解、课后测验、交互式模拟实验，甚至还有 AI 同学跟你一起上课、辩论、提问。",
                "stars": "18.7k",
                "category_id": "agent_framework",
                "category_name": "智能体框架与平台",
                "tags": [
                        "智能体框架",
                        "AI智能体",
                        "智能助教"
                ]
        },
        {
                "num": 2,
                "name": "CogniLoop",
                "url": "https://github.com/itsmorninghao/CogniLoop",
                "description": "CogniLoop 是一个基于大语言模型的智能教学助手系统，教师上传课程文档后，AI 可基于内容自动生成题目集，并对学生回答进行自动评分 and 详细解析。",
                "stars": "470",
                "category_id": "tutoring",
                "category_name": "智能教学与启发式辅导",
                "tags": [
                        "智能助教",
                        "通用工具"
                ]
        },
        {
                "num": 3,
                "name": "MathClaw",
                "url": "https://github.com/MathClaw-ruc/MathClaw",
                "description": "MathClaw 是由 RUC 团队开发的多模态 AI 学习助手，专为中学数学设计，集成多种通信渠道，提供结构化问题求解工作台和持久化学习进度记录，实现个性化学习支撑。",
                "stars": "443",
                "category_id": "tutoring",
                "category_name": "智能教学与启发式辅导",
                "tags": [
                        "智能助教",
                        "数学教育"
                ]
        },
        {
                "num": 4,
                "name": "SocraticLM",
                "url": "https://github.com/Ljyustc/SocraticLM",
                "description": "SocraticLM 是由中科大与讯飞联合研发的首个实现苏格拉底教学法的智能辅学大模型，通过引入\"启发式提问\"教学范式，实现教学模式的革命性升级。该研究入选 NeurIPS'2024 Spotlight，在教学评估上超越 GPT-4 达 12% 以上。",
                "stars": "175",
                "category_id": "tutoring",
                "category_name": "智能教学与启发式辅导",
                "tags": [
                        "智能助教",
                        "通用工具"
                ]
        },
        {
                "num": 5,
                "name": "DeepTutor",
                "url": "https://github.com/HKUDS/DeepTutor",
                "description": "DeepTutor 是香港大学 HKUDS 团队开发的开源 AI 教学平台，39 天斩获 10,000+ GitHub Stars。它不只是\"聊天机器人\"，而是真正的\"私人学习教练\"，支持五大模式无缝切换：聊天、深度解题、测验生成、深度研究、数学动画。",
                "stars": "24.8k",
                "category_id": "tutoring",
                "category_name": "智能教学与启发式辅导",
                "tags": [
                        "智能助教",
                        "通用工具"
                ]
        },
        {
                "num": 6,
                "name": "MateChat Socratic Tutor",
                "url": "https://gitcode.com/kaminono/MatechatSocraticTutor",
                "description": "通过精心设计的 Prompt Chain 和可视化组件，模拟一位循循善诱的导师，引导学生通过启发式提问自行悟出答案，而非直接给出结论。",
                "stars": "N/A",
                "category_id": "tutoring",
                "category_name": "智能教学与启发式辅导",
                "tags": [
                        "智能助教",
                        "通用工具"
                ]
        },
        {
                "num": 7,
                "name": "Manimator",
                "url": "https://github.com/HyperCluster-Tech/manimator",
                "description": "Manimator 是一个利用大语言模型将科研论文和自然语言提示转化为解释性动画的开源系统。它采用多阶段流水线：LLM 解析输入文本生成结构化场景描述 → 代码专用 LLM 将描述翻译为可执行的 Manim Python 代码 → 渲染为视频。",
                "stars": "63",
                "category_id": "visualization",
                "category_name": "数学可视化与动画生成",
                "tags": [
                        "可视化",
                        "数学动画"
                ]
        },
        {
                "num": 8,
                "name": "Math-To-Manim",
                "url": "https://github.com/HarleyCoops/Math-To-Manim",
                "description": "用户用文字描述数学概念或公式，背后的 AI 模型将理解 these 描述，并将其转化为可执行的 Manim Python 代码，进而生成相应动画。",
                "stars": "2.4k",
                "category_id": "visualization",
                "category_name": "数学可视化与动画生成",
                "tags": [
                        "可视化",
                        "数学动画"
                ]
        },
        {
                "num": 9,
                "name": "Manim Skill",
                "url": "https://github.com/adithya-s-k/manim_skill",
                "description": "Manim Skill 让 Claude 能直接输出可运行 of Manim 动画代码，使普通 LLM 从\"只能描述概念\"升级为\"能生成可直接渲染的动画\"，即从\"说不清\"到\"一看就懂\"的质变。",
                "stars": "930",
                "category_id": "visualization",
                "category_name": "数学可视化与动画生成",
                "tags": [
                        "可视化",
                        "数学动画"
                ]
        },
        {
                "num": 10,
                "name": "MathLens",
                "url": "https://github.com/shuyicc/MathLens",
                "description": "MathLens 是专业数学老师辅导 skill，用于深入浅出地解答数学题，并生成 HTML 讲解文档和带配音的 Manim 动画视频，讲解细致、浅显易懂，适合一般学情的学生。",
                "stars": "376",
                "category_id": "visualization",
                "category_name": "数学可视化与动画生成",
                "tags": [
                        "可视化",
                        "数学教育",
                        "智能助教"
                ]
        },
        {
                "num": 11,
                "name": "manim-slides (Engine)",
                "url": "https://github.com/jeertmans/manim-slides",
                "description": "【底层渲染引擎】提供 Manim-Slides 的原生底层支持，可无缝导出 RevealJS HTML 动画演示文件。",
                "stars": "878",
                "category_id": "visualization",
                "category_name": "数学可视化与动画生成",
                "tags": [
                        "可视化",
                        "数学动画",
                        "通用工具"
                ]
        },
        {
                "num": 12,
                "name": "math-viz-kit",
                "url": "https://github.com/edu-ai-builders/math-viz-kit",
                "description": "提供 127 个交互式数学可视化 HTML 文件，覆盖小学到大学 123 个核心知识点，基于认知负荷理论等学习科学设计，支持按学段筛选 and 网格预览。",
                "stars": "39",
                "category_id": "visualization",
                "category_name": "数学可视化与动画生成",
                "tags": [
                        "可视化",
                        "数学教育"
                ]
        },
        {
                "num": 13,
                "name": "skill-anything",
                "url": "https://github.com/SYuan03/Skill-Anything",
                "description": "Skill-Anything 将 PDF、视频、网页、音频等多样来源转化为结构化学习材料------生成 12 节 Markdown 学习指南，包括摘要、概念图、笔记、术语表、备考单、6 类测验、闪卡、练习等。",
                "stars": "284",
                "category_id": "formatting",
                "category_name": "教案与文档自动化",
                "tags": [
                        "通用工具",
                        "文档自动化"
                ]
        },
        {
                "num": 14,
                "name": "teaching-plan-generator",
                "url": "https://github.com/s1tuK1n9/teaching-plan-generator",
                "description": "通过学习用户的 Word 模板和历史教案风格，用一句话自动生成格式标准的多层次教案（.docx 格式）。",
                "stars": "10",
                "category_id": "teaching_prep",
                "category_name": "教案与备课工具",
                "tags": [
                        "文档自动化",
                        "通用工具"
                ]
        },
        {
                "num": 15,
                "name": "word_chat",
                "url": "https://github.com/Grant-leo/word_chat",
                "description": "实现\"格式与内容分离\"的自动化排版，并具备 LaTeX → Word 原生 OMML 公式的高精度转换能力。",
                "stars": "71",
                "category_id": "doc_conversion",
                "category_name": "文档转换与内容解析",
                "tags": [
                        "文档自动化",
                        "通用工具"
                ]
        },
        {
                "num": 16,
                "name": "xparse-skills",
                "url": "https://github.com/intsig-textin/xparse-skills",
                "description": "作为桥梁，将 PDF/图片/Office 等非结构化文档转换为结构化的 Markdown 或 JSON，精准提取公式、表格和层级结构。",
                "stars": "26",
                "category_id": "doc_conversion",
                "category_name": "文档转换与内容解析",
                "tags": [
                        "通用工具",
                        "文档自动化"
                ]
        },
        {
                "num": 17,
                "name": "ppt-master",
                "url": "https://github.com/hugohe3/ppt-master",
                "description": "将 PDF、DOCX、Markdown 等文档一键转化为原生可编辑的 PPTX，支持 SVG 渲染、图表生成、实时预览、视觉标注编辑、模板复制、页面动画、语音旁白和声音克隆等功能。",
                "stars": "29.3k",
                "category_id": "slide_generation",
                "category_name": "幻灯片生成与演示",
                "tags": [
                        "文档自动化",
                        "通用工具",
                        "可视化"
                ]
        },
        {
                "num": 18,
                "name": "powerpoint-skill",
                "url": "https://github.com/Noi1r/powerpoint-skill",
                "description": "专为学术论文 and 科研笔记设计的 PPT 生成技能。核心亮点是原生 OMML 数学公式渲染（通过 pandoc）和五层图表管线（Graphviz/Mermaid/TikZ/PptxGenJS/PDF 提取），包含内容密度守卫、数学幻灯片模板和视觉 QA 流程。",
                "stars": "90",
                "category_id": "slide_generation",
                "category_name": "幻灯片生成与演示",
                "tags": [
                        "文档自动化",
                        "通用工具"
                ]
        },
        {
                "num": 19,
                "name": "nature-skills",
                "url": "https://github.com/Yuan1z0825/nature-skills",
                "description": "将 Nature 期刊的学术规范固化为可复用的 AI 技能，涵盖图表生成、论文润色、引文检索、审稿回复等全流程。",
                "stars": "21.3k",
                "category_id": "paper_writing",
                "category_name": "论文写作与投稿",
                "tags": [
                        "开发工具",
                        "论文写作"
                ]
        },
        {
                "num": 20,
                "name": "academic-research-skills",
                "url": "https://github.com/Imbad0202/academic-research-skills",
                "description": "集成 Deep Research（13-agent）和 Academic Paper（12-agent）等多智能体团队，覆盖文献综述、论文撰写、模拟评审和质量门禁。",
                "stars": "32.9k",
                "category_id": "academic_writing",
                "category_name": "论文分析与写作辅助",
                "tags": [
                        "学术科研",
                        "论文写作"
                ]
        },
        {
                "num": 21,
                "name": "MathModeling-skills",
                "url": "https://github.com/zhnnky329/MathModeling-skills",
                "description": "包含 26 个专用技能，覆盖问题解析、方法验证、代码生成与审查、结果冻结、论文撰写、独立审计等全流程，支持 Python 和 MATLAB/北太天元。 【核心专长】：擅长逻辑控制与选型（注入强制基准线对比规则），及保障数据物理隔离阻断与真实结果提取。",
                "stars": "186",
                "category_id": "math_modeling",
                "category_name": "形式化数学与数模竞赛",
                "tags": [
                        "数学建模",
                        "学术科研",
                        "文档自动化"
                ]
        },
        {
                "num": 22,
                "name": "科研写作助手 (research-writing-skill)",
                "url": "https://github.com/Norman-bury/research-writing-skill",
                "description": "将论文写作升级为可追踪、可复用的工程化协作流。覆盖头脑风暴、章节规划、逐章写作、图表生成与自审全流程，提供 LaTeX 模板及去 AI 化写作支持。",
                "stars": "2.4k",
                "category_id": "paper_writing",
                "category_name": "论文写作与投稿",
                "tags": [
                        "论文写作",
                        "学术科研"
                ]
        },
        {
                "num": 23,
                "name": "claude-plugins-official",
                "url": "https://github.com/anthropics/claude-plugins-official",
                "description": "包含 28 个官方插件和 30+ 个社区插件，全面覆盖学习增强、代码质量、可视化、形式化验证、数据科学。",
                "stars": "30.4k",
                "category_id": "agent_integration",
                "category_name": "MCP/插件与技能集成",
                "tags": [
                        "MCP与插件",
                        "开发工具",
                        "AI智能体"
                ]
        },
        {
                "num": 24,
                "name": "codegraph",
                "url": "https://github.com/colbymchenry/codegraph",
                "description": "将任意代码库预构为语义知识图谱，让 AI Agent 通过查询图谱替代文件扫描，平均节省 59% Token、70% Tool Call。",
                "stars": "51.9k",
                "category_id": "agent_framework",
                "category_name": "智能体框架与平台",
                "tags": [
                        "智能体框架",
                        "开发工具"
                ]
        },
        {
                "num": 25,
                "name": "Understand-Anything",
                "url": "https://github.com/opencode-skills/Understand-Anything",
                "description": "将代码库转化为交互式知识图谱的 Claude Code 插件。通过多智能体管道分析代码结构，构建可视化项目地图，支持架构导览、自然语言问答、变更影响分析，适配 Claude Code/Cursor/Codex/Gemini CLI 等多平台。",
                "stars": "1k+",
                "category_id": "agent_framework",
                "category_name": "智能体框架与平台",
                "tags": [
                        "可视化",
                        "开发工具"
                ]
        },
        {
                "num": 26,
                "name": "Claude Code 中文全面上手指南 (claude-howto-zh-cn)",
                "url": "https://github.com/lhfer/claude-howto-zh-cn",
                "description": "本土化重写的面向中国小白用户的 Claude Code 中文教程",
                "stars": "1.9k",
                "category_id": "agent",
                "category_name": "AI智能体与集成框架",
                "tags": [
                        "开发工具",
                        "AI智能体"
                ]
        },
        {
                "num": 27,
                "name": "Stop Slop (stop-slop)",
                "url": "https://github.com/hardikpandya/stop-slop",
                "description": "旨在消除大模型写作痕迹（去 AI 感）的系统规则与提示词集合，帮助用户润色、精简和重写文本，使其符合纯正的人类表达习惯。",
                "stars": "11.4k",
                "category_id": "academic_polish",
                "category_name": "学术润色与去AI化",
                "tags": [
                        "通用工具",
                        "学术润色",
                        "论文写作"
                ]
        },
        {
                "num": 28,
                "name": "openhanako",
                "url": "https://github.com/liliMozi/openhanako",
                "description": "一个具有记忆、个性和自主性的个人 AI 智能体项目，最新版本运行相对稳定。",
                "stars": "4.9k",
                "category_id": "agent_framework",
                "category_name": "智能体框架与平台",
                "tags": [
                        "智能体框架",
                        "AI智能体"
                ]
        },
        {
                "num": 29,
                "name": "Archon",
                "url": "https://github.com/frenzymath/Archon",
                "description": "PKU-AI4Math团队开源的自动形式化学术智能体系统，主要用于数学研究、定理证明等学术研究场景。",
                "stars": "139",
                "category_id": "math_modeling",
                "category_name": "形式化数学与数模竞赛",
                "tags": [
                        "学术科研",
                        "数学建模",
                        "开发工具"
                ]
        },
        {
                "num": 30,
                "name": "ReadPaper",
                "url": "https://github.com/CrisChenYingyan/ReadPaper",
                "description": "学术论文阅读与整理辅助工具。",
                "stars": "0",
                "category_id": "literature_retrieval",
                "category_name": "文献检索与阅读",
                "tags": [
                        "文献检索",
                        "学术科研"
                ]
        },
        {
                "num": 31,
                "name": "image-to-editable-ppt-skill",
                "url": "https://github.com/ningzimu/image-to-editable-ppt-skill",
                "description": "将幻灯片图片、PDF和扫描版PPTX转换为可编辑幻灯片的工具。",
                "stars": "686",
                "category_id": "slide_generation",
                "category_name": "幻灯片生成与演示",
                "tags": [
                        "文档自动化",
                        "开发工具",
                        "MCP与插件"
                ]
        },
        {
                "num": 32,
                "name": "deepseek-pp",
                "url": "https://github.com/zhu1090093659/deepseek-pp",
                "description": "为 DeepSeek 网页版注入类原生工具调用、长期记忆、自定义 Skill 和自动化复杂任务的浏览器增强插件，彻底释放深度思考模型能力。",
                "stars": "837",
                "category_id": "agent_integration",
                "category_name": "MCP/插件与技能集成",
                "tags": [
                        "MCP与插件",
                        "开发工具"
                ]
        },
        {
                "num": 33,
                "name": "CiteCheck",
                "url": "https://github.com/color4-alt/CiteCheck",
                "description": "快速检查学术论文文献引用及语义匹配程度的学术工具。",
                "stars": "49",
                "category_id": "literature_retrieval",
                "category_name": "文献检索与阅读",
                "tags": [
                        "文献检索",
                        "学术科研"
                ]
        },
        {
                "num": 34,
                "name": "Humanizer-zh",
                "url": "https://github.com/op7418/Humanizer-zh",
                "description": "消除中文写作中的 AI 痕迹，润色文本以模仿人类风格的去 AI 化工具。",
                "stars": "10.8k",
                "category_id": "academic_polish",
                "category_name": "学术润色与去AI化",
                "tags": [
                        "学术润色",
                        "论文写作"
                ]
        },
        {
                "num": 35,
                "name": "Seedance Storyboard",
                "url": "https://github.com/elementsix/elementsix-skills",
                "description": "一键生成专业视频分镜提示词并复制到 Seedance 2.0 的脚本工具。",
                "stars": "289",
                "category_id": "other",
                "category_name": "其他学术与教学工具",
                "tags": [
                        "通用工具"
                ]
        },
        {
                "num": 36,
                "name": "Skill Manager",
                "url": "https://github.com/mode-io/skill-manager",
                "description": "本地 AI 技能与 MCP 管理器。支持自动扫描和收纳本地已有的 Skills、按不同客户端/IDE（如 Claude Code, Cursor）一键启闭，以及可视化管理 MCP 服务。",
                "stars": "102",
                "category_id": "agent_integration",
                "category_name": "MCP/插件与技能集成",
                "tags": [
                        "开发工具",
                        "MCP与插件"
                ]
        },
        {
                "num": 37,
                "name": "baoyu-skills",
                "url": "https://github.com/JimLiu/baoyu-skills",
                "description": "专为内容创作者设计的 Claude Code 自动化工作流。内置三大技能包：小红书图文与信息图一键生成、图像生成后端集成、以及网页转 MD 与图片压缩等加工工具。",
                "stars": "22.0k",
                "category_id": "agent_integration",
                "category_name": "MCP/插件与技能集成",
                "tags": [
                        "开发工具",
                        "MCP与插件"
                ]
        },
        {
                "num": 38,
                "name": "琢玉工坊 (zhuoyu-workshop-skill)",
                "url": "https://github.com/handsomeZR-netizen/zhuoyu-workshop-skill",
                "description": "面向高校学生的项目包装与结题答辩辅助工具。提供项目诊断、学术报告润色、PPT 大纲及答辩讲稿一键生成、评委问答模拟（Q&A）以及代码 Debug 规范流程。",
                "stars": "46",
                "category_id": "teaching_prep",
                "category_name": "教案与备课工具",
                "tags": [
                        "文档自动化",
                        "学术科研",
                        "开发工具"
                ]
        },
        {
                "num": 39,
                "name": "paper-fetch-skill",
                "url": "https://github.com/Dictation354/paper-fetch-skill",
                "description": "输入 DOI、论文链接或标题，即可将学术论文全文从网页自动解析转换为 AI 易读的结构化 Markdown，解决以往 AI 只能阅读摘要的痛点，支持 CLI 与 MCP 服务。",
                "stars": "173",
                "category_id": "literature_retrieval",
                "category_name": "文献检索与阅读",
                "tags": [
                        "文献检索",
                        "学术科研",
                        "开发工具"
                ]
        },
        {
                "num": 40,
                "name": "awesome-ai-research-writing",
                "url": "https://github.com/Leey21/awesome-ai-research-writing",
                "description": "面向 AI 学术论文写作的开源提示词与技能集合，涵盖论文翻译（支持中译英 LaTeX 格式）、润色改写、逻辑检查以及消除大模型写作痕迹（去 AI 感）等精选模版。",
                "stars": "28.9k",
                "category_id": "paper_writing",
                "category_name": "论文写作与投稿",
                "tags": [
                        "论文写作",
                        "学术科研",
                        "学术润色"
                ]
        },
        {
                "num": 41,
                "name": "architecture-diagram-generator",
                "url": "https://github.com/Cocoon-AI/architecture-diagram-generator",
                "description": "专为绘制系统架构图设计的 Claude AI 技能，允许 AI 自动绘制高颜值的暗黑模式系统架构图，并输出为独立的交互式 HTML 和 SVG 矢量图资产。",
                "stars": "6.1k",
                "category_id": "visualization",
                "category_name": "数学可视化与动画生成",
                "tags": [
                        "可视化",
                        "开发工具"
                ]
        },
        {
                "num": 42,
                "name": "process-flow-diagram-generator",
                "url": "https://github.com/Cocoon-AI/process-flow-diagram-generator",
                "description": "专为生成业务流程图和逻辑工作流图设计的 Claude AI 技能，支持将复杂步骤转换为逻辑清晰、风格统一的暗黑主题流程图（输出 HTML/SVG 格式）。",
                "stars": "37",
                "category_id": "visualization",
                "category_name": "数学可视化与动画生成",
                "tags": [
                        "可视化",
                        "开发工具"
                ]
        },
        {
                "num": 43,
                "name": "NovaForge",
                "url": "https://github.com/SiriusFzh/NovaForge",
                "description": "通用知识整理与复习笔记模板集合，提供 LaTeX、Typst 和 Markdown 三版本。内置 7 步模块化结构，提供考研真题、文献卡片、实验记录等 6 种开箱即用的复习场景模板。",
                "stars": "500",
                "category_id": "teaching_prep",
                "category_name": "教案与备课工具",
                "tags": [
                        "文档自动化",
                        "学术科研"
                ]
        },
        {
                "num": 44,
                "name": "OfficeCLI",
                "url": "https://github.com/iOfficeAI/OfficeCLI",
                "description": "面向 AI 智能体的 Microsoft Office 命令行操作套件。AI 仅需通过单行命令即可读写、编辑和生成 Word、Excel 与 PPT，免去 Office 安装和重型 Python 库依赖。",
                "stars": "7.3k",
                "category_id": "agent_integration",
                "category_name": "MCP/插件与技能集成",
                "tags": [
                        "文档自动化",
                        "开发工具",
                        "MCP与插件"
                ]
        },
        {
                "num": 45,
                "name": "GradeLens 智阅",
                "url": "https://github.com/zjkaaap/GradeLens-",
                "description": "端到端 AI 自动阅卷系统。教师拍照上传学生手写答卷，多模态大模型对照试卷与标准答案进行单题评分、扣分诊断与评语。",
                "stars": "4",
                "category_id": "tutoring",
                "category_name": "智能教学与启发式辅导",
                "tags": [
                        "智能助教",
                        "开发工具"
                ]
        },
        {
                "num": 46,
                "name": "web-video-presentation",
                "url": "https://github.com/ConardLi/garden-skills/tree/main/skills/web-video-presentation",
                "description": "基于 Vite+React+TS 的视频录制演示文稿生成技能。能够将口播稿、大纲转换为 1920x1080 浏览器画面及视觉 Beat，支持音画同步标记与 TTS 语音合成，专为录屏演示设计。",
                "stars": "8.4k",
                "category_id": "visualization",
                "category_name": "数学可视化与动画生成",
                "tags": [
                        "可视化",
                        "开发工具"
                ]
        },
        {
                "num": 47,
                "name": "marker",
                "url": "https://github.com/datalab-to/marker",
                "description": "一款高精度、快速的 PDF 转 Markdown 与 JSON 的格式转换工具。能够精准提取表格、公式和排版，为大模型或 AI 智能体快速阅读文献提供极佳的数据预处理支持。",
                "stars": "36.2k",
                "category_id": "agent_integration",
                "category_name": "MCP/插件与技能集成",
                "tags": [
                        "文档自动化",
                        "MCP与插件"
                ]
        },
        {
                "num": 48,
                "name": "mathlib4",
                "url": "https://github.com/leanprover-community/mathlib4",
                "description": "Lean 4 的形式化数学定理库，数理逻辑与定理证明领域的顶级学术项目。",
                "stars": "3.5k",
                "category_id": "math_modeling",
                "category_name": "形式化数学与数模竞赛",
                "tags": [
                        "学术科研",
                        "数学建模"
                ]
        },
        {
                "num": 49,
                "name": "Auto-Empirical-Research-Skills",
                "url": "https://github.com/brycewang-stanford/Auto-Empirical-Research-Skills",
                "description": "斯坦福学者开源的 23k+ 实证科研技能库，包含 CoPaper.AI 等自动化实证论文写作工具。",
                "stars": "2.0k",
                "category_id": "paper_writing",
                "category_name": "论文写作与投稿",
                "tags": [
                        "论文写作",
                        "学术科研"
                ]
        },
        {
                "num": 50,
                "name": "PaperSpine",
                "url": "https://github.com/WUBING2023/PaperSpine",
                "description": "面向学术论文精读与重写修改的智能技能，基于证据意识蓝图和修改矩阵辅助论文打磨。",
                "stars": "3.3k",
                "category_id": "paper_writing",
                "category_name": "论文写作与投稿",
                "tags": [
                        "论文写作",
                        "学术科研"
                ]
        },
        {
                "num": 51,
                "name": "Research-Pilot",
                "url": "https://github.com/QZhang2111/Research-Pilot",
                "description": "领航智能体框架，帮助 AI 深入理解、维护和迭代学术研究项目和 claims 证据链。",
                "stars": "20",
                "category_id": "agent_framework",
                "category_name": "智能体框架与平台",
                "tags": [
                        "智能体框架",
                        "AI智能体",
                        "学术科研"
                ]
        },
        {
                "num": 52,
                "name": "math-modeling-skill",
                "url": "https://github.com/XiaoMaColtAI/math-modeling-skill",
                "description": "数学建模技能 - 为CUMCM、MCM/ICM等数学建模竞赛提供结构化的三阶段工作流程：建模分析、代码实现、论文撰写。包含丰富的算法资源库(优化/预测/评价/图论/机器学习等)、角色指导文档、论文模板和实用工具脚本。 【核心专长】：擅长注入专业算法推导逻辑（算法外脑），以及定向撰写论文、强制清洗空泛套话保障一句话一数据。",
                "stars": "336",
                "category_id": "math_modeling",
                "category_name": "形式化数学与数模竞赛",
                "tags": [
                        "数学建模",
                        "学术科研"
                ]
        },
        {
                "num": 53,
                "name": "visual-cognition-slides",
                "url": "https://github.com/edu-ai-builders/visual-cognition-slides",
                "description": "基于认知心理学和教学设计的 HTML slides 生成工具，专门优化课件排版与知识留存。",
                "stars": "72",
                "category_id": "slide_generation",
                "category_name": "幻灯片生成与演示",
                "tags": [
                        "文档自动化",
                        "可视化"
                ]
        },
        {
                "num": 54,
                "name": "codex-ppt-skill",
                "url": "https://github.com/ningzimu/codex-ppt-skill",
                "description": "专为批量生成图片形式 PowerPoint 的 Codex 演示文稿生成技能。",
                "stars": "2.1k",
                "category_id": "slide_generation",
                "category_name": "幻灯片生成与演示",
                "tags": [
                        "文档自动化",
                        "通用工具"
                ]
        },
        {
                "num": 55,
                "name": "YouDub-webui",
                "url": "https://github.com/liuzhao1225/YouDub-webui",
                "description": "智能视频翻译与配音工具（支持音色克隆与多语种互译），可用于国际化微课视频制作。",
                "stars": "4.8k",
                "category_id": "formatting",
                "category_name": "教案与文档自动化",
                "tags": [
                        "可视化",
                        "文档自动化"
                ]
        },
        {
                "num": 56,
                "name": "skills (TypeScript)",
                "url": "https://github.com/mattpocock/skills",
                "description": "【前端工程组件】知名 TypeScript 专家 Matt Pocock 提供的前端代码实战与架构技能集合库。",
                "stars": "136k",
                "category_id": "agent_integration",
                "category_name": "MCP/插件与技能集成",
                "tags": [
                        "开发工具",
                        "MCP与插件"
                ]
        },
        {
                "num": 57,
                "name": "anysearch-skill",
                "url": "https://github.com/anysearch-ai/anysearch-skill",
                "description": "面向 AI 智能体的统一实时搜索 API 工具技能。",
                "stars": "3.5k",
                "category_id": "agent_integration",
                "category_name": "MCP/插件与技能集成",
                "tags": [
                        "开发工具",
                        "MCP与插件"
                ]
        },
        {
                "num": 58,
                "name": "WeKnora",
                "url": "https://github.com/Tencent/WeKnora",
                "description": "腾讯开源的知识平台，一键将分散文档转换为可对话 RAG 库与自维护推理智能体。",
                "stars": "16.5k",
                "category_id": "agent_framework",
                "category_name": "智能体框架与平台",
                "tags": [
                        "开发工具",
                        "智能体框架"
                ]
        },
        {
                "num": 59,
                "name": "cc-switch",
                "url": "https://github.com/farion1231/cc-switch",
                "description": "AI 终端编程助手管理客户端，支持可视化控制 Claude Code、Codex 等命令行工具。",
                "stars": "105k",
                "category_id": "agent_clients",
                "category_name": "AI客户端与桌面工具",
                "tags": [
                        "开发工具",
                        "AI智能体"
                ]
        },
        {
                "num": 60,
                "name": "AionUi",
                "url": "https://github.com/iOfficeAI/AionUi",
                "description": "本地开源的 AI 编程协作桌面客户端，对接 20+ 款 CLI 开发助手（如 Claude Code）。",
                "stars": "28.5k",
                "category_id": "agent_clients",
                "category_name": "AI客户端与桌面工具",
                "tags": [
                        "开发工具",
                        "AI智能体"
                ]
        },
        {
                "num": 61,
                "name": "DeepSeek-Reasonix",
                "url": "https://github.com/esengine/DeepSeek-Reasonix",
                "description": "针对前缀缓存稳定性高度优化的 DeepSeek 终端编程助理。",
                "stars": "15.8k",
                "category_id": "agent_clients",
                "category_name": "AI客户端与桌面工具",
                "tags": [
                        "开发工具",
                        "AI智能体"
                ]
        },
        {
                "num": 62,
                "name": "claude-desktop-zh-cn",
                "url": "https://github.com/javaht/claude-desktop-zh-cn",
                "description": "Claude 官方桌面版（Windows/macOS）的汉化与修补补丁包。",
                "stars": "3.4k",
                "category_id": "agent_clients",
                "category_name": "AI客户端与桌面工具",
                "tags": [
                        "开发工具",
                        "AI智能体"
                ]
        },
        {
                "num": 63,
                "name": "LobsterAI",
                "url": "https://github.com/netease-youdao/LobsterAI",
                "description": "网易有道开源的全场景 AI 桌面编程与日常任务代理助理。",
                "stars": "5.2k",
                "category_id": "agent_clients",
                "category_name": "AI客户端与桌面工具",
                "tags": [
                        "开发工具",
                        "AI智能体"
                ]
        },
        {
                "num": 64,
                "name": "paper-qa",
                "url": "https://github.com/future-house/paper-qa",
                "description": "高精度 RAG 工具，用于基于科学文献解答问题并生成精确引文。",
                "stars": "8.7k",
                "category_id": "literature_retrieval",
                "category_name": "文献检索与阅读",
                "tags": [
                        "文献检索",
                        "学术科研"
                ]
        },
        {
                "num": 65,
                "name": "PersonalExam",
                "url": "https://github.com/notcall3/PersonalExam",
                "description": "一个基于LLM和知识图谱协同的个性化出题系统，使用BKT算法、RAG引擎和OpenPangu模型，实现个性化的智能题目生成和推荐。",
                "stars": "1",
                "category_id": "tutoring",
                "category_name": "智能教学与启发式辅导",
                "tags": [
                        "通用工具",
                        "开发工具",
                        "智能助教"
                ]
        },
        {
                "num": 66,
                "name": "DataFlow-EDU",
                "url": "https://github.com/Heartune/DataFlow-EDU",
                "description": "【AI赋能 · 解放教师生产力】DataFlow-EDU是一个端到端的学科语料库&Benchmark生成项目，落地应用于教师的出题工作。具备WebUI与TUI支持，已上线官网www.dataflow-edu.site.",
                "stars": "309",
                "category_id": "tutoring",
                "category_name": "智能教学与启发式辅导",
                "tags": [
                        "通用工具",
                        "开发工具",
                        "智能助教"
                ]
        },
        {
                "num": 67,
                "name": "ChatPaper",
                "url": "https://github.com/kaixindelele/ChatPaper",
                "description": "Use ChatGPT to summarize the arXiv papers. 全流程加速科研，利用chatgpt进行论文全文总结+专业翻译+润色+审稿+审稿回复",
                "stars": "19.5k",
                "category_id": "literature_retrieval",
                "category_name": "文献检索与阅读",
                "tags": [
                        "文献检索",
                        "学术科研",
                        "论文写作"
                ]
        },
        {
                "num": 68,
                "name": "paper-search-cli",
                "url": "https://github.com/dr-dumpling/paper-search-cli",
                "description": "专为大模型 Agent 优化的命令行工具，支持学术论文检索、期刊指标查询及 PDF 下载。",
                "stars": "75",
                "category_id": "literature_retrieval",
                "category_name": "文献检索与阅读",
                "tags": [
                        "文献检索",
                        "学术科研",
                        "开发工具"
                ]
        },
        {
                "num": 69,
                "name": "journal-adapt-writing-skill",
                "url": "https://github.com/WantongC/journal-adapt-writing-skill",
                "description": "通过分析目标期刊的已发表论文学习其写作规范，并逐节自动重写您的手稿以匹配目标期刊风格。",
                "stars": "641",
                "category_id": "paper_writing",
                "category_name": "论文写作与投稿",
                "tags": [
                        "文档自动化",
                        "论文写作"
                ]
        },
        {
                "num": 70,
                "name": "manim-slides-skill (Agent)",
                "url": "https://github.com/rubenbranco/manim-slides-skill",
                "description": "【智能体技能封装】代码驱动型 Skill，基于底层 Manim 引擎为大模型深度定制，核心优势在于自动化生成强大的数学动画与逻辑推导。",
                "stars": "1",
                "category_id": "visualization",
                "category_name": "数学可视化与动画生成",
                "tags": [
                        "数学动画",
                        "文档自动化"
                ]
        },
        {
                "num": 71,
                "name": "guizang-ppt-skill",
                "url": "https://github.com/op7418/guizang-ppt-skill",
                "description": "单文件 HTML 翻页演示，提供“电子杂志风”与“瑞士国际主义风”双视觉系统，适合演讲与个人风格表达，支持 Codex 配图与多平台封面生成。",
                "stars": "18.1k",
                "category_id": "slide_generation",
                "category_name": "幻灯片生成与演示",
                "tags": [
                        "文档自动化",
                        "开发工具"
                ]
        },
        {
                "num": 72,
                "name": "next-slide",
                "url": "https://github.com/codesstar/next-slide",
                "description": "CSS 驱动型演示库，利用 HTML/CSS 结构解耦设计，适合快速原型与前端工程师展示技术方案。",
                "stars": "34",
                "category_id": "slide_generation",
                "category_name": "幻灯片生成与演示",
                "tags": [
                        "通用工具",
                        "可视化"
                ]
        },
        {
                "num": 73,
                "name": "skills (Claude Official)",
                "url": "https://github.com/anthropics/skills",
                "description": "【Claude官方底层】为 Claude Code 构建的通用与行业垂直大模型 Skill 库，涵盖文档协作、OCR 识别及提示词生成等工程基建能力。",
                "stars": "153k",
                "category_id": "agent_integration",
                "category_name": "MCP/插件与技能集成",
                "tags": [
                        "开发工具",
                        "MCP与插件"
                ]
        },
        {
                "num": 74,
                "name": "GLM-skills",
                "url": "https://github.com/zai-org/GLM-skills",
                "description": "为 GLM 平台构建的通用/行业垂直 Skill 库，涵盖文档协作、OCR 识别及自动化提示词生成等工程能力。",
                "stars": "423",
                "category_id": "agent_integration",
                "category_name": "MCP/插件与技能集成",
                "tags": [
                        "通用工具",
                        "MCP与插件",
                        "开发工具"
                ]
        },
        {
                "num": 75,
                "name": "science-skills",
                "url": "https://github.com/google-deepmind/science-skills/",
                "description": "GDM 官方科学技能包，整合 AlphaGenome、AFDB、UniProt 等 30+ 数据库资源，以更高的事实对齐率和 Token 效率加速 Agent 科研工作流。",
                "stars": "2k",
                "category_id": "agent_integration",
                "category_name": "MCP/插件与技能集成",
                "tags": [
                        "MCP与插件",
                        "学术科研",
                        "开发工具"
                ]
        },
        {
                "num": 76,
                "name": "MathModel-Skill",
                "url": "https://github.com/yushui2022/mathmodel-skill",
                "description": "面向大模型 Agent（Trae, Claude Code, Codex）的原生数学建模全工作流技能，涵盖题目解析、数学建模、代码生成、证据交叉检查、论文撰写及 Word 导出。 【核心专长】：全链路自动化总线，擅长提取清洗数据等变量与数据基建，及独立生成实验代码并运行。",
                "stars": "164",
                "category_id": "math_modeling",
                "category_name": "形式化数学与数模竞赛",
                "tags": [
                        "文档自动化",
                        "数学建模",
                        "学术科研",
                        "开发工具",
                        "MCP与插件"
                ]
        },
        {
                "num": 77,
                "name": "mathmodel-skill",
                "url": "https://github.com/handsomezr-netizen/mathmodel-skill",
                "description": "三竞赛 (CUMCM/MCM/电工杯) 数学建模 skill — harness-agnostic, 同时支持 Claude Code 与 Codex CLI, 全程问答式 (Friendly Mode), 10 阶段 + 4 反馈层 + per-Qi 加权聚合 + 题型 dim 加权 + empirical 实测分位锚定。 【核心专长】：擅长最终编译与终审，包含 LaTeX 自动化编译与 10 维打分评估 (render_paper + score_artifact)。",
                "stars": "111",
                "category_id": "math_modeling",
                "category_name": "形式化数学与数模竞赛",
                "tags": [
                        "文档自动化",
                        "数学建模",
                        "开发工具",
                        "MCP与插件"
                ]
        },
        {
                "num": 78,
                "name": "skills (RunComfy)",
                "url": "https://github.com/doany-ai/skills",
                "description": "【RunComfy生态组件】RunComfy Agent Skills 官方镜像镜像与工具集。",
                "stars": "2",
                "category_id": "agent_integration",
                "category_name": "MCP/插件与技能集成",
                "tags": [
                        "MCP与插件",
                        "开发工具"
                ]
        },
        {
                "num": 79,
                "name": "VoxCPM",
                "url": "https://github.com/OpenBMB/VoxCPM",
                "description": "VoxCPM2：无分词器的跨语种语音生成 TTS 大模型，支持创意声音设计与高保真声音克隆。",
                "stars": "30.8k",
                "category_id": "other",
                "category_name": "其他学术与教学工具",
                "tags": [
                        "通用工具"
                ]
        },
        {
                "num": 80,
                "name": "MinerU",
                "url": "https://github.com/opendatalab/MinerU",
                "description": "将 PDF 和 Office 等复杂多模态文档解析转换为适用于 Agent 工作流、大语言模型友好的 Markdown / JSON 格式。",
                "stars": "68.1k",
                "category_id": "doc_conversion",
                "category_name": "文档转换与内容解析",
                "tags": [
                        "文档自动化",
                        "开发工具"
                ]
        },
        {
                "num": 81,
                "name": "autogen",
                "url": "https://github.com/microsoft/autogen",
                "description": "面向智能体人工智能的编程框架。",
                "stars": "59.1k",
                "category_id": "agent_framework",
                "category_name": "智能体框架与平台",
                "tags": [
                        "智能体框架",
                        "AI智能体"
                ]
        },
        {
                "num": 82,
                "name": "Paper RAG",
                "url": "https://github.com/oomol-lab/paper-rag",
                "description": "基于检索增强生成（RAG）技术的学术文献分析与问答智能体，支持对本地及在线 PDF 进行语义分块和高精度内容检索。",
                "stars": "2",
                "category_id": "literature_retrieval",
                "category_name": "文献检索与阅读",
                "tags": [
                        "文档自动化",
                        "文献检索"
                ]
        },
        {
                "num": 83,
                "name": "Cite Verify",
                "url": "https://github.com/jonckr/cite-verify",
                "description": "学术论文引用一致性自动验证工具，可核查参考文献的真实性，防止 AI 写作中的文献伪造和幻觉。",
                "stars": "1",
                "category_id": "literature_retrieval",
                "category_name": "文献检索与阅读",
                "tags": [
                        "文献检索",
                        "学术科研"
                ]
        },
        {
                "num": 84,
                "name": "LaTeX Writer",
                "url": "https://github.com/EvolvingLMMs-Lab/lmms-lab-writer",
                "description": "面向 LaTeX 学术论文排版与自动生成的协作编写助手，支持数学公式、表格及 BibTeX 引用的一键生成和校验。",
                "stars": "230",
                "category_id": "paper_writing",
                "category_name": "论文写作与投稿",
                "tags": [
                        "文档自动化",
                        "论文写作"
                ]
        },
        {
                "num": 85,
                "name": "Stats Sanity",
                "url": "https://github.com/inbharatai/claude-skills",
                "description": "学术论文统计数据合理性审查技能，自动核对正文中的 p 值、样本量和置信区间，确保实验数据逻辑自洽。",
                "stars": "16",
                "category_id": "academic_writing",
                "category_name": "论文分析与写作辅助",
                "tags": [
                        "学术科研",
                        "开发工具"
                ]
        },
        {
                "num": 86,
                "name": "Pepro Pack",
                "url": "https://github.com/inbharatai/claude-skills/tree/main/skills/pepro-pack",
                "description": "用于学术研究的可重复性构建工具包，自动化打包实验环境、日志与配置以实现结果的一键复现。",
                "stars": "16",
                "category_id": "academic_writing",
                "category_name": "论文分析与写作辅助",
                "tags": [
                        "学术科研",
                        "开发工具"
                ]
        },
        {
                "num": 87,
                "name": "Survey Builder",
                "url": "https://github.com/surveyjs/survey-creator",
                "description": "学术调研与问卷设计自动生成器，能够根据研究主题快速生成符合统计规范的结构化 JSON 问卷。",
                "stars": "1.3k",
                "category_id": "academic_writing",
                "category_name": "论文分析与写作辅助",
                "tags": [
                        "学术科研",
                        "论文写作"
                ]
        },
        {
                "num": 88,
                "name": "Grant Writer",
                "url": "https://github.com/K-Dense-AI/claude-scientific-writer",
                "description": "科研项目基金申请书（Grant）撰写助手，适配 NSF、NIH 等多机构规范，辅助生成研究方案和经费预算说明。",
                "stars": "2k",
                "category_id": "paper_writing",
                "category_name": "论文写作与投稿",
                "tags": [
                        "论文写作",
                        "学术科研"
                ]
        },
        {
                "num": 89,
                "name": "origin-mcp",
                "url": "https://github.com/Ge-Shun/origin-mcp",
                "description": "本地 MCP 服务器，让 AI 助手能够自动化操作 Origin/OriginPro 进行数据和图像处理。",
                "stars": "28",
                "category_id": "agent_integration",
                "category_name": "MCP/插件与技能集成",
                "tags": [
                        "可视化",
                        "开发工具"
                ]
        },
        {
                "num": 90,
                "name": "MineProof",
                "url": "https://github.com/Promylas/MineProof",
                "description": "从学术论文中提取数学证明资产的工具，支持项目级定理规划、证明模块提取、人机协同证明修复以及论文级证明草稿生成。",
                "stars": "3",
                "category_id": "paper_writing",
                "category_name": "论文写作与投稿",
                "tags": [
                        "论文写作",
                        "学术科研"
                ]
        },
        {
                "num": 91,
                "name": "axiom-lean-engine",
                "url": "https://github.com/AxiomMath/axiom-lean-engine",
                "description": "面向自动定理证明器与 Lean 4 形式化数学的评估与元编程实用工具集。",
                "stars": "118",
                "category_id": "math_modeling",
                "category_name": "形式化数学与数模竞赛",
                "tags": [
                        "通用工具",
                        "数学建模"
                ]
        },
        {
                "num": 92,
                "name": "teaching-plan-analytic-geometry",
                "url": "https://github.com/Hans774882968/teaching-plan-analytic-geometry",
                "description": "通过GeoGebra与AI大语言模型结合，自动生成互动式数学教案的研究项目。支持嵌入GeoGebra画板、Markdown渲染与教案Schema化配置。",
                "stars": "31",
                "category_id": "teaching_prep",
                "category_name": "教案与备课工具",
                "tags": [
                        "开发工具",
                        "通用工具"
                ]
        },
        {
                "num": 93,
                "name": "cartesian-ai",
                "url": "https://github.com/Heht571/cartesian-ai",
                "description": "结合AI聊天界面与GeoGebra几何画板的交互式数学学习平台。支持自然语言描述绘制几何图形，提供简单模式与智能规划模式。",
                "stars": "4",
                "category_id": "other",
                "category_name": "其他学术与教学工具",
                "tags": [
                        "通用工具",
                        "数学教育",
                        "可视化"
                ]
        },
        {
                "num": 94,
                "name": "GeoChat",
                "url": "https://github.com/tiwe0/GeoChat",
                "description": "基于Next.js的自然语言GeoGebra绘图工具。通过与大语言模型对话，自动生成GeoGebra命令并实时绘图。",
                "stars": "81",
                "category_id": "tutoring",
                "category_name": "智能教学与启发式辅导",
                "tags": [
                        "通用工具",
                        "数学教育",
                        "可视化"
                ]
        },
        {
                "num": 95,
                "name": "remotion",
                "url": "https://github.com/remotion-dev/remotion",
                "description": "基于 React 的程序化视频制作框架，通过组件化方式生成动态动画和教学视频",
                "stars": "50.6k",
                "category_id": "visualization",
                "category_name": "数学可视化与动画生成",
                "tags": [
                        "数学动画",
                        "智能助教"
                ]
        },
        {
                "num": 96,
                "name": "edge-tts",
                "url": "https://github.com/rany2/edge-tts",
                "description": "从 Python 调用 Microsoft Edge 在线语音合成服务，无需 Edge 浏览器或 API 密钥即可生成自然语音",
                "stars": "11.3k",
                "category_id": "teaching_prep",
                "category_name": "教案与备课工具",
                "tags": [
                        "开发工具",
                        "通用工具"
                ]
        },
        {
                "num": 97,
                "name": "good-question",
                "url": "https://github.com/Rimagination/good-question",
                "description": "便携式智能体技能，帮助用户锐化研究问题、提炼核心假设、完善科研问题表述",
                "stars": "170",
                "category_id": "literature_retrieval",
                "category_name": "文献检索与阅读",
                "tags": [
                        "学术科研",
                        "AI智能体"
                ]
        },
        {
                "num": 98,
                "name": "math-skills",
                "url": "https://github.com/panpanc/math-skills",
                "description": "面向 AI 智能体的数学能力技能包，涵盖基础数学推理与计算能力增强",
                "stars": "9",
                "category_id": "math_modeling",
                "category_name": "形式化数学与数模竞赛",
                "tags": [
                        "AI智能体",
                        "数学建模",
                        "开发工具"
                ]
        },
        {
                "num": 99,
                "name": "AI-Research-SKILLs",
                "url": "https://github.com/orchestra-research/AI-research-SKILLs",
                "description": "面向 AI 模型的综合开源研究技能库，打包技能后 Claude/Copilot/Gemini 代理即可成为全功能 AI 研究助手",
                "stars": "9.9k",
                "category_id": "agent_framework",
                "category_name": "智能体框架与平台",
                "tags": [
                        "学术润色",
                        "学术科研",
                        "开发工具"
                ]
        },
        {
                "num": 100,
                "name": "science-superpowers",
                "url": "https://github.com/K-Dense-AI/science-superpowers",
                "description": "面向 AI 研究智能体的可组合计算科学方法论技能包，基于预注册范式的科学领域 Superpowers 重新实现",
                "stars": "216",
                "category_id": "agent_framework",
                "category_name": "智能体框架与平台",
                "tags": [
                        "学术科研",
                        "AI智能体"
                ]
        },
        {
                "num": 101,
                "name": "DeepResearchAgent",
                "url": "https://github.com/SkyworkAI/DeepResearchAgent",
                "description": "基于层级式多智能体协作的深度研究框架，通过顶层规划智能体协调多个专用下层智能体，实现自动化任务分解与高效执行",
                "stars": "3.5k",
                "category_id": "agent_framework",
                "category_name": "智能体框架与平台",
                "tags": [
                        "学术润色",
                        "学术科研",
                        "智能体框架",
                        "AI智能体"
                ]
        },
        {
                "num": 102,
                "name": "QAnything",
                "url": "https://github.com/netease-youdao/QAnything",
                "description": "有道出品的本地知识库问答系统，支持 PDF/Word/PPT/Excel/图片/网页等多格式文档解析、向量检索与 LLM 驱动的精准问答，支持纯离线部署",
                "stars": "14k",
                "category_id": "doc_conversion",
                "category_name": "文档转换与内容解析",
                "tags": [
                        "文档自动化",
                        "AI智能体"
                ]
        },
        {
                "num": 103,
                "name": "ragflow",
                "url": "https://github.com/infiniflow/ragflow",
                "description": "领先的开源 RAG 引擎，融合检索增强生成与 Agent 能力，支持深度文档理解、多源数据检索、可追溯引用与自动化 RAG 工作流",
                "stars": "83.2k",
                "category_id": "doc_conversion",
                "category_name": "文档转换与内容解析",
                "tags": [
                        "AI智能体",
                        "文档自动化",
                        "MCP与插件"
                ]
        },
        {
                "num": 104,
                "name": "OpenMathpix",
                "url": "https://github.com/JhuoW/OpenMathpix",
                "description": "开源 Mathpix 替代工具，从截图和图片中即时提取 LaTeX 公式、数学方程与文本",
                "stars": "2",
                "category_id": "doc_conversion",
                "category_name": "文档转换与内容解析",
                "tags": [
                        "文档自动化",
                        "开发工具"
                ]
        },
        {
                "num": 105,
                "name": "examcraft-ai",
                "url": "https://github.com/DreZeo/examcraft-ai",
                "description": "基于 AI 的桌面试卷生成工具，支持智能题目生成、编辑排版、试卷预览与导出",
                "stars": "1",
                "category_id": "teaching_prep",
                "category_name": "教案与备课工具",
                "tags": [
                        "文档自动化",
                        "学术科研",
                        "智能助教"
                ]
        },
        {
                "num": 106,
                "name": "MathPaper",
                "url": "https://github.com/AFObject/MathPaper",
                "description": "基于 HTML/KaTeX 的数学试卷排版系统，支持仿高考格式的自动排版与渲染",
                "stars": "1",
                "category_id": "formatting",
                "category_name": "其他文档自动化",
                "tags": [
                        "文档自动化",
                        "学术科研"
                ]
        },
        {
                "num": 107,
                "name": "engineering-figure-agent",
                "url": "https://github.com/heyu-233/engineering-figure-agent",
                "description": "Agent-native figure production for engineering and CS papers. 把工程论文里的系统架构图、算法流程图、实验曲线和多面板图，拆成可控的生成流程：概念图走 image mode，精确数值图走 plot mode。",
                "stars": "241",
                "category_id": "visualization",
                "category_name": "数学可视化与动画生成",
                "tags": [
                        "可视化",
                        "学术科研",
                        "论文写作"
                ]
        },
        {
                "num": 108,
                "name": "PNG-to-SVG-",
                "url": "https://github.com/yangqirui2020/PNG-to-SVG-",
                "description": "辅助生成、重构和检查论文图 SVG 的 Codex skill。支持将 PNG/JPG/PDF 截图重构为 Figma 兼容、公式排版规范的矢量可编辑 SVG。",
                "stars": "8",
                "category_id": "visualization",
                "category_name": "数学可视化与动画生成",
                "tags": [
                        "可视化",
                        "学术科研",
                        "SVG排版"
                ]
        },
        {
                "num": 109,
                "name": "paper-search-mcp",
                "url": "https://github.com/openags/paper-search-mcp",
                "description": "支持从 arXiv, PubMed, bioRxiv, Google Scholar 等多源平台一键并发检索、去重和下载学术论文的 MCP 服务端，支持 OpenAlex 和 Unpaywall，专为 AI 辅助科研设计。",
                "stars": "1.9k",
                "category_id": "literature_retrieval",
                "category_name": "文献检索与阅读",
                "tags": [
                        "文献检索",
                        "MCP",
                        "智能助教",
                        "学术科研"
                ]
        },
        {
                "num": 110,
                "name": "fireworks-tech-graph",
                "url": "https://github.com/yizhiyanhua-ai/fireworks-tech-graph",
                "description": "支持从自然语言生成出版级 SVG+PNG 技术图表的工具。支持 14 种图表类型，包括 UML 类图、时序图、系统架构图以及 RAG、智能体工作流等多种专业模型图的渲染与排版，支持多图组合及样式自定义。",
                "stars": "7.9k",
                "category_id": "visualization",
                "category_name": "数学可视化与动画生成",
                "tags": [
                        "可视化",
                        "架构图",
                        "时序图",
                        "智能助教"
                ]
        },
        {
                "num": 111,
                "name": "research-gap-pipeline",
                "url": "https://github.com/g2zz/research-gap-pipeline",
                "description": "面向文献综述与论文选题的研究空白发现流水线。将文献检索、表格清洗、逐篇编码、主题归纳、研究 Gap 识别等繁杂步骤拆解为一套可复核、可追溯的标准化流程，每一个选题均可回溯到具体文献。",
                "stars": "1",
                "category_id": "literature_retrieval",
                "category_name": "文献检索与阅读",
                "tags": [
                        "文献检索",
                        "论文写作",
                        "学术科研",
                        "智能助教"
                ]
        },
        {
                "num": 112,
                "name": "MathModelAgent",
                "url": "https://github.com/jihe520/MathModelAgent",
                "description": "专为数学建模设计的 AI 智能体与技能包。支持自动化运行数学建模任务流程，并可自动生成一份结构完整、可直接提交的数学建模学术论文。",
                "stars": "2.4k",
                "category_id": "math_modeling",
                "category_name": "形式化数学与数模竞赛",
                "tags": [
                        "数学建模",
                        "论文写作",
                        "AI智能体",
                        "学术科研"
                ]
        }
],
    CATEGORIES: [
        {
                "id": "tutoring",
                "name": "智能教学与启发式辅导"
        },
        {
                "id": "teaching_prep",
                "name": "教案与备课工具"
        },
        {
                "id": "slide_generation",
                "name": "幻灯片生成与演示"
        },
        {
                "id": "visualization",
                "name": "数学可视化与动画生成"
        },
        {
                "id": "literature_retrieval",
                "name": "文献检索与阅读"
        },
        {
                "id": "paper_writing",
                "name": "论文写作与投稿"
        },
        {
                "id": "academic_polish",
                "name": "学术润色与去AI化"
        },
        {
                "id": "academic_writing",
                "name": "其他论文分析与写作辅助"
        },
        {
                "id": "math_modeling",
                "name": "形式化数学与数模竞赛"
        },
        {
                "id": "doc_conversion",
                "name": "文档转换与内容解析"
        },
        {
                "id": "formatting",
                "name": "其他文档自动化工具"
        },
        {
                "id": "agent_framework",
                "name": "智能体框架与平台"
        },
        {
                "id": "agent_clients",
                "name": "AI客户端与桌面工具"
        },
        {
                "id": "agent_integration",
                "name": "MCP/插件与技能集成"
        },
        {
                "id": "agent",
                "name": "其他AI智能体与集成"
        },
        {
                "id": "other",
                "name": "其他学术与教学工具"
        }
]
};

const PROJECTS = GLOBAL_DATA.PROJECTS;
const CATEGORIES = GLOBAL_DATA.CATEGORIES;
