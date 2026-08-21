const GLOBAL_DATA = {
        "PROJECTS": [
                {
                        "num": 1,
                        "name": "OpenMAIC",
                        "url": "https://github.com/THU-MAIC/OpenMAIC",
                        "description": "OpenMAIC（Multi-Agent Interactive Classroom）是由清华大学开源的 AI 互动课程生成系统。用户输入任意主题，AI 自动生成一整套互动课程——包含幻灯片、语音讲解、课后测验、交互式模拟实验，甚至还有 AI 同学跟你一起上课、辩论、提问。",
                        "stars": "20.7k",
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
                        "stars": "471",
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
                        "stars": "403",
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
                        "stars": "177",
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
                        "stars": "34.8k",
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
                        "stars": "70",
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
                        "stars": "2.5k",
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
                        "stars": "989",
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
                        "stars": "354",
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
                        "stars": "912",
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
                        "stars": "58",
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
                        "stars": "316",
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
                        "stars": "21",
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
                        "stars": "81",
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
                        "stars": "30",
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
                        "stars": "44.9k",
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
                        "stars": "106",
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
                        "stars": "34.7k",
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
                        "stars": "42.0k",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
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
                        "stars": "473",
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
                        "stars": "3.0k",
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
                        "stars": "33.4k",
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
                        "stars": "65.9k",
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
                        "url": "https://github.com/Egonex-AI/Understand-Anything",
                        "description": "将代码库转化为交互式知识图谱的 Claude Code 插件。通过多智能体管道分析代码结构，构建可视化项目地图，支持架构导览、自然语言问答、变更影响分析，适配 Claude Code/Cursor/Codex/Gemini CLI 等多平台。",
                        "stars": "79.0k",
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
                        "stars": "2.3k",
                        "category_id": "agent_clients",
                        "category_name": "AI客户端与桌面工具",
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
                        "stars": "15.5k",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
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
                        "stars": "5.9k",
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
                        "stars": "193",
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
                        "name": "image-to-editable-ppt-skill",
                        "url": "https://github.com/ningzimu/image-to-editable-ppt-skill",
                        "description": "将幻灯片图片、PDF和扫描版PPTX转换为可编辑幻灯片的工具。",
                        "stars": "1.9k",
                        "category_id": "slide_generation",
                        "category_name": "幻灯片生成与演示",
                        "tags": [
                                "文档自动化",
                                "开发工具",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 31,
                        "name": "deepseek-pp",
                        "url": "https://github.com/zhu1090093659/deepseek-pp",
                        "description": "为 DeepSeek 网页版注入类原生工具调用、长期记忆、自定义 Skill 和自动化复杂任务的浏览器增强插件，彻底释放深度思考模型能力。",
                        "stars": "1.5k",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "MCP与插件",
                                "开发工具"
                        ]
                },
                {
                        "num": 32,
                        "name": "CiteCheck",
                        "url": "https://github.com/color4-alt/CiteCheck",
                        "description": "快速检查学术论文文献引用及语义匹配程度的学术工具。",
                        "stars": "55",
                        "category_id": "literature_retrieval",
                        "category_name": "文献检索与阅读",
                        "tags": [
                                "文献检索",
                                "学术科研"
                        ]
                },
                {
                        "num": 33,
                        "name": "Humanizer-zh",
                        "url": "https://github.com/op7418/Humanizer-zh",
                        "description": "消除中文写作中的 AI 痕迹，润色文本以模仿人类风格的去 AI 化工具。",
                        "stars": "15.1k",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
                        "tags": [
                                "学术润色",
                                "论文写作"
                        ]
                },
                {
                        "num": 34,
                        "name": "Seedance Storyboard",
                        "url": "https://github.com/elementsix/elementsix-skills",
                        "description": "一键生成专业视频分镜提示词并复制到 Seedance 2.0 的脚本工具。",
                        "stars": "297",
                        "category_id": "other",
                        "category_name": "其他学术与教学工具",
                        "tags": [
                                "通用工具"
                        ]
                },
                {
                        "num": 35,
                        "name": "Skill Manager",
                        "url": "https://github.com/mode-io/skill-manager",
                        "description": "本地 AI 技能与 MCP 管理器。支持自动扫描和收纳本地已有的 Skills、按不同客户端/IDE（如 Claude Code, Cursor）一键启闭，以及可视化管理 MCP 服务。",
                        "stars": "114",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "开发工具",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 36,
                        "name": "baoyu-skills",
                        "url": "https://github.com/JimLiu/baoyu-skills",
                        "description": "专为内容创作者设计的 Claude Code 自动化工作流。内置三大技能包：小红书图文与信息图一键生成、图像生成后端集成、以及网页转 MD 与图片压缩等加工工具。",
                        "stars": "24.9k",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "开发工具",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 37,
                        "name": "琢玉工坊 (zhuoyu-workshop-skill)",
                        "url": "https://github.com/handsomeZR-netizen/zhuoyu-workshop-skill",
                        "description": "面向高校学生的项目包装与结题答辩辅助工具。提供项目诊断、学术报告润色、PPT 大纲及答辩讲稿一键生成、评委问答模拟（Q&A）以及代码 Debug 规范流程。",
                        "stars": "52",
                        "category_id": "teaching_prep",
                        "category_name": "教案与备课工具",
                        "tags": [
                                "文档自动化",
                                "学术科研",
                                "开发工具"
                        ]
                },
                {
                        "num": 38,
                        "name": "paper-fetch-skill",
                        "url": "https://github.com/Dictation354/paper-fetch-skill",
                        "description": "输入 DOI、论文链接或标题，即可将学术论文全文从网页自动解析转换为 AI 易读的结构化 Markdown，解决以往 AI 只能阅读摘要的痛点，支持 CLI 与 MCP 服务。",
                        "stars": "226",
                        "category_id": "literature_retrieval",
                        "category_name": "文献检索与阅读",
                        "tags": [
                                "文献检索",
                                "学术科研",
                                "开发工具"
                        ]
                },
                {
                        "num": 39,
                        "name": "awesome-ai-research-writing",
                        "url": "https://github.com/Leey21/awesome-ai-research-writing",
                        "description": "面向 AI 学术论文写作的开源提示词与技能集合，涵盖论文翻译（支持中译英 LaTeX 格式）、润色改写、逻辑检查以及消除大模型写作痕迹（去 AI 感）等精选模版。",
                        "stars": "32.8k",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
                        "tags": [
                                "论文写作",
                                "学术科研",
                                "学术润色"
                        ]
                },
                {
                        "num": 40,
                        "name": "architecture-diagram-generator",
                        "url": "https://github.com/Cocoon-AI/architecture-diagram-generator",
                        "description": "专为绘制系统架构图设计的 Claude AI 技能，允许 AI 自动绘制高颜值的暗黑模式系统架构图，并输出为独立的交互式 HTML 和 SVG 矢量图资产。",
                        "stars": "6.9k",
                        "category_id": "visualization",
                        "category_name": "数学可视化与动画生成",
                        "tags": [
                                "可视化",
                                "开发工具"
                        ]
                },
                {
                        "num": 41,
                        "name": "process-flow-diagram-generator",
                        "url": "https://github.com/Cocoon-AI/process-flow-diagram-generator",
                        "description": "专为生成业务流程图和逻辑工作流图设计的 Claude AI 技能，支持将复杂步骤转换为逻辑清晰、风格统一的暗黑主题流程图（输出 HTML/SVG 格式）。",
                        "stars": "48",
                        "category_id": "visualization",
                        "category_name": "数学可视化与动画生成",
                        "tags": [
                                "可视化",
                                "开发工具"
                        ]
                },
                {
                        "num": 42,
                        "name": "NovaForge",
                        "url": "https://github.com/SiriusFzh/NovaForge",
                        "description": "通用知识整理与复习笔记模板集合，提供 LaTeX、Typst 和 Markdown 三版本。内置 7 步模块化结构，提供考研真题、文献卡片、实验记录等 6 种开箱即用的复习场景模板。",
                        "stars": "620",
                        "category_id": "teaching_prep",
                        "category_name": "教案与备课工具",
                        "tags": [
                                "文档自动化",
                                "学术科研"
                        ]
                },
                {
                        "num": 43,
                        "name": "OfficeCLI",
                        "url": "https://github.com/iOfficeAI/OfficeCLI",
                        "description": "面向 AI 智能体的 Microsoft Office 命令行操作套件。AI 仅需通过单行命令即可读写、编辑和生成 Word、Excel 与 PPT，免去 Office 安装和重型 Python 库依赖。",
                        "stars": "27.7k",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "文档自动化",
                                "开发工具",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 44,
                        "name": "GradeLens 智阅",
                        "url": "https://github.com/zjkaaap/GradeLens-",
                        "description": "端到端 AI 自动阅卷系统。教师拍照上传学生手写答卷，多模态大模型对照试卷与标准答案进行单题评分、扣分诊断与评语。",
                        "stars": "5",
                        "category_id": "tutoring",
                        "category_name": "智能教学与启发式辅导",
                        "tags": [
                                "智能助教",
                                "开发工具"
                        ]
                },
                {
                        "num": 45,
                        "name": "web-video-presentation",
                        "url": "https://github.com/ConardLi/garden-skills/tree/main/skills/web-video-presentation",
                        "description": "基于 Vite+React+TS 的视频录制演示文稿生成技能。能够将口播稿、大纲转换为 1920x1080 浏览器画面及视觉 Beat，支持音画同步标记与 TTS 语音合成，专为录屏演示设计。",
                        "stars": "9.5k",
                        "category_id": "visualization",
                        "category_name": "数学可视化与动画生成",
                        "tags": [
                                "可视化",
                                "开发工具"
                        ]
                },
                {
                        "num": 46,
                        "name": "marker",
                        "url": "https://github.com/datalab-to/marker",
                        "description": "一款高精度、快速的 PDF 转 Markdown 与 JSON 的格式转换工具。能够精准提取表格、公式和排版，为大模型或 AI 智能体快速阅读文献提供极佳的数据预处理支持。",
                        "stars": "37.5k",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "文档自动化",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 47,
                        "name": "mathlib4",
                        "url": "https://github.com/leanprover-community/mathlib4",
                        "description": "Lean 4 的形式化数学定理库，数理逻辑与定理证明领域的顶级学术项目。",
                        "stars": "3.6k",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "学术科研",
                                "数学建模"
                        ]
                },
                {
                        "num": 48,
                        "name": "Auto-Empirical-Research-Skills",
                        "url": "https://github.com/brycewang-stanford/Auto-Empirical-Research-Skills",
                        "description": "斯坦福学者开源的 23k+ 实证科研技能库，包含 CoPaper.AI 等自动化实证论文写作工具。",
                        "stars": "3.4k",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
                        "tags": [
                                "论文写作",
                                "学术科研"
                        ]
                },
                {
                        "num": 49,
                        "name": "PaperSpine",
                        "url": "https://github.com/WUBING2023/PaperSpine",
                        "description": "面向学术论文精读与重写修改的智能技能，基于证据意识蓝图和修改矩阵辅助论文打磨。",
                        "stars": "4.0k",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
                        "tags": [
                                "论文写作",
                                "学术科研"
                        ]
                },
                {
                        "num": 50,
                        "name": "Research-Pilot",
                        "url": "https://github.com/QZhang2111/Research-Pilot",
                        "description": "领航智能体框架，帮助 AI 深入理解、维护和迭代学术研究项目和 claims 证据链。",
                        "stars": "25",
                        "category_id": "agent_framework",
                        "category_name": "智能体框架与平台",
                        "tags": [
                                "智能体框架",
                                "AI智能体",
                                "学术科研"
                        ]
                },
                {
                        "num": 51,
                        "name": "math-modeling-skill",
                        "url": "https://github.com/XiaoMaColtAI/math-modeling-skill",
                        "description": "数学建模技能 - 为CUMCM、MCM/ICM等数学建模竞赛提供结构化的三阶段工作流程：建模分析、代码实现、论文撰写。包含丰富的算法资源库(优化/预测/评价/图论/机器学习等)、角色指导文档、论文模板和实用工具脚本。 【核心专长】：擅长注入专业算法推导逻辑（算法外脑），以及定向撰写论文、强制清洗空泛套话保障一句话一数据。",
                        "stars": "438",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "数学建模",
                                "学术科研"
                        ]
                },
                {
                        "num": 52,
                        "name": "visual-cognition-slides",
                        "url": "https://github.com/edu-ai-builders/visual-cognition-slides",
                        "description": "基于认知心理学和教学设计的 HTML slides 生成工具，专门优化课件排版与知识留存。",
                        "stars": "76",
                        "category_id": "slide_generation",
                        "category_name": "幻灯片生成与演示",
                        "tags": [
                                "文档自动化",
                                "可视化"
                        ]
                },
                {
                        "num": 53,
                        "name": "codex-ppt-skill",
                        "url": "https://github.com/ningzimu/codex-ppt-skill",
                        "description": "专为批量生成图片形式 PowerPoint 的 Codex 演示文稿生成技能。",
                        "stars": "4.8k",
                        "category_id": "slide_generation",
                        "category_name": "幻灯片生成与演示",
                        "tags": [
                                "文档自动化",
                                "通用工具"
                        ]
                },
                {
                        "num": 54,
                        "name": "YouDub-webui",
                        "url": "https://github.com/liuzhao1225/YouDub-webui",
                        "description": "智能视频翻译与配音工具（支持音色克隆与多语种互译），可用于国际化微课视频制作。",
                        "stars": "5.1k",
                        "category_id": "formatting",
                        "category_name": "教案与文档自动化",
                        "tags": [
                                "可视化",
                                "文档自动化"
                        ]
                },
                {
                        "num": 55,
                        "name": "skills (Matt Pocock)",
                        "url": "https://github.com/mattpocock/skills",
                        "description": "【前端工程组件】知名 TypeScript 专家 Matt Pocock 提供的前端代码实战与架构技能集合库。",
                        "stars": "213.9k",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "开发工具",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 56,
                        "name": "anysearch-skill",
                        "url": "https://github.com/anysearch-ai/anysearch-skill",
                        "description": "面向 AI 智能体的统一实时搜索 API 工具技能。",
                        "stars": "4.4k",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "开发工具",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 57,
                        "name": "WeKnora",
                        "url": "https://github.com/Tencent/WeKnora",
                        "description": "腾讯开源的知识平台，一键将分散文档转换为可对话 RAG 库与自维护推理智能体。",
                        "stars": "18.3k",
                        "category_id": "agent_framework",
                        "category_name": "智能体框架与平台",
                        "tags": [
                                "开发工具",
                                "智能体框架"
                        ]
                },
                {
                        "num": 58,
                        "name": "cc-switch",
                        "url": "https://github.com/farion1231/cc-switch",
                        "description": "AI 终端编程助手管理客户端，支持可视化控制 Claude Code、Codex 等命令行工具。",
                        "stars": "117.5k",
                        "category_id": "agent_clients",
                        "category_name": "AI客户端与桌面工具",
                        "tags": [
                                "开发工具",
                                "AI智能体"
                        ]
                },
                {
                        "num": 59,
                        "name": "AionUi",
                        "url": "https://github.com/iOfficeAI/AionUi",
                        "description": "本地开源的 AI 编程协作桌面客户端，对接 20+ 款 CLI 开发助手（如 Claude Code）。",
                        "stars": "30.1k",
                        "category_id": "agent_clients",
                        "category_name": "AI客户端与桌面工具",
                        "tags": [
                                "开发工具",
                                "AI智能体"
                        ]
                },
                {
                        "num": 60,
                        "name": "DeepSeek-Reasonix",
                        "url": "https://github.com/esengine/DeepSeek-Reasonix",
                        "description": "针对前缀缓存稳定性高度优化的 DeepSeek 终端编程助理。",
                        "stars": "27.0k",
                        "category_id": "agent_clients",
                        "category_name": "AI客户端与桌面工具",
                        "tags": [
                                "开发工具",
                                "AI智能体"
                        ]
                },
                {
                        "num": 61,
                        "name": "claude-desktop-zh-cn",
                        "url": "https://github.com/javaht/claude-desktop-zh-cn",
                        "description": "Claude 官方桌面版（Windows/macOS）的汉化与修补补丁包。",
                        "stars": "6.0k",
                        "category_id": "agent_clients",
                        "category_name": "AI客户端与桌面工具",
                        "tags": [
                                "开发工具",
                                "AI智能体"
                        ]
                },
                {
                        "num": 62,
                        "name": "LobsterAI",
                        "url": "https://github.com/netease-youdao/LobsterAI",
                        "description": "网易有道开源的全场景 AI 桌面编程与日常任务代理助理。",
                        "stars": "5.9k",
                        "category_id": "agent_clients",
                        "category_name": "AI客户端与桌面工具",
                        "tags": [
                                "开发工具",
                                "AI智能体"
                        ]
                },
                {
                        "num": 63,
                        "name": "paper-qa",
                        "url": "https://github.com/future-house/paper-qa",
                        "description": "高精度 RAG 工具，用于基于科学文献解答问题并生成精确引文。",
                        "stars": "9.0k",
                        "category_id": "literature_retrieval",
                        "category_name": "文献检索与阅读",
                        "tags": [
                                "文献检索",
                                "学术科研"
                        ]
                },
                {
                        "num": 64,
                        "name": "PersonalExam",
                        "url": "https://github.com/notcall3/PersonalExam",
                        "description": "一个基于LLM和知识图谱协同的个性化出题系统，使用BKT算法、RAG引擎和OpenPangu模型，实现个性化的智能题目生成和推荐。",
                        "stars": "2",
                        "category_id": "tutoring",
                        "category_name": "智能教学与启发式辅导",
                        "tags": [
                                "通用工具",
                                "开发工具",
                                "智能助教"
                        ]
                },
                {
                        "num": 65,
                        "name": "DataFlow-EDU",
                        "url": "https://github.com/Heartune/DataFlow-EDU",
                        "description": "【AI赋能 · 解放教师生产力】DataFlow-EDU是一个端到端的学科语料库&Benchmark生成项目，落地应用于教师的出题工作。具备WebUI与TUI支持，已上线官网www.dataflow-edu.site.",
                        "stars": "308",
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
                        "name": "ChatPaper",
                        "url": "https://github.com/kaixindelele/ChatPaper",
                        "description": "Use ChatGPT to summarize the arXiv papers. 全流程加速科研，利用chatgpt进行论文全文总结+专业翻译+润色+审稿+审稿回复",
                        "stars": "19.7k",
                        "category_id": "literature_retrieval",
                        "category_name": "文献检索与阅读",
                        "tags": [
                                "文献检索",
                                "学术科研",
                                "论文写作"
                        ]
                },
                {
                        "num": 67,
                        "name": "paper-search-cli",
                        "url": "https://github.com/dr-dumpling/paper-search-cli",
                        "description": "专为大模型 Agent 优化的命令行工具，支持学术论文检索、期刊指标查询及 PDF 下载。",
                        "stars": "123",
                        "category_id": "literature_retrieval",
                        "category_name": "文献检索与阅读",
                        "tags": [
                                "文献检索",
                                "学术科研",
                                "开发工具"
                        ]
                },
                {
                        "num": 68,
                        "name": "journal-adapt-writing-skill",
                        "url": "https://github.com/WantongC/journal-adapt-writing-skill",
                        "description": "通过分析目标期刊的已发表论文学习其写作规范，并逐节自动重写您的手稿以匹配目标期刊风格。",
                        "stars": "745",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
                        "tags": [
                                "文档自动化",
                                "论文写作"
                        ]
                },
                {
                        "num": 69,
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
                        "num": 70,
                        "name": "guizang-ppt-skill",
                        "url": "https://github.com/op7418/guizang-ppt-skill",
                        "description": "单文件 HTML 翻页演示，提供“电子杂志风”与“瑞士国际主义风”双视觉系统，适合演讲与个人风格表达，支持 Codex 配图与多平台封面生成。",
                        "stars": "23.8k",
                        "category_id": "slide_generation",
                        "category_name": "幻灯片生成与演示",
                        "tags": [
                                "文档自动化",
                                "开发工具"
                        ]
                },
                {
                        "num": 71,
                        "name": "next-slide",
                        "url": "https://github.com/codesstar/next-slide",
                        "description": "CSS 驱动型演示库，利用 HTML/CSS 结构解耦设计，适合快速原型与前端工程师展示技术方案。",
                        "stars": "45",
                        "category_id": "slide_generation",
                        "category_name": "幻灯片生成与演示",
                        "tags": [
                                "通用工具",
                                "可视化"
                        ]
                },
                {
                        "num": 72,
                        "name": "skills (Claude Official)",
                        "url": "https://github.com/anthropics/skills",
                        "description": "【Claude官方底层】为 Claude Code 构建的通用与行业垂直大模型 Skill 库，涵盖文档协作、OCR 识别及提示词生成等工程基建能力。",
                        "stars": "168.2k",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "开发工具",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 73,
                        "name": "GLM-skills",
                        "url": "https://github.com/zai-org/GLM-skills",
                        "description": "为 GLM 平台构建的通用/行业垂直 Skill 库，涵盖文档协作、OCR 识别及自动化提示词生成等工程能力。",
                        "stars": "459",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "通用工具",
                                "MCP与插件",
                                "开发工具"
                        ]
                },
                {
                        "num": 74,
                        "name": "science-skills",
                        "url": "https://github.com/google-deepmind/science-skills/",
                        "description": "GDM 官方科学技能包，整合 AlphaGenome、AFDB、UniProt 等 30+ 数据库资源，以更高的事实对齐率和 Token 效率加速 Agent 科研工作流。",
                        "stars": "2.7k",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "MCP与插件",
                                "学术科研",
                                "开发工具"
                        ]
                },
                {
                        "num": 75,
                        "name": "MathModel-Skill",
                        "url": "https://github.com/yushui2022/mathmodel-skill",
                        "description": "面向大模型 Agent（Trae, Claude Code, Codex）的原生数学建模全工作流技能，涵盖题目解析、数学建模、代码生成、证据交叉检查、论文撰写及 Word 导出。 【核心专长】：全链路自动化总线，擅长提取清洗数据等变量与数据基建，及独立生成实验代码并运行。",
                        "stars": "268",
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
                        "num": 76,
                        "name": "mathmodel-skill",
                        "url": "https://github.com/handsomezr-netizen/mathmodel-skill",
                        "description": "三竞赛 (CUMCM/MCM/电工杯) 数学建模 skill — harness-agnostic, 同时支持 Claude Code 与 Codex CLI, 全程问答式 (Friendly Mode), 10 阶段 + 4 反馈层 + per-Qi 加权聚合 + 题型 dim 加权 + empirical 实测分位锚定。 【核心专长】：擅长最终编译与终审，包含 LaTeX 自动化编译与 10 维打分评估 (render_paper + score_artifact)。",
                        "stars": "193",
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
                        "num": 77,
                        "name": "VoxCPM",
                        "url": "https://github.com/OpenBMB/VoxCPM",
                        "description": "VoxCPM2：无分词器的跨语种语音生成 TTS 大模型，支持创意声音设计与高保真声音克隆。",
                        "stars": "33.4k",
                        "category_id": "other",
                        "category_name": "其他学术与教学工具",
                        "tags": [
                                "通用工具"
                        ]
                },
                {
                        "num": 78,
                        "name": "MinerU",
                        "url": "https://github.com/opendatalab/MinerU",
                        "description": "将 PDF 和 Office 等复杂多模态文档解析转换为适用于 Agent 工作流、大语言模型友好的 Markdown / JSON 格式。",
                        "stars": "77.4k",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "文档自动化",
                                "开发工具"
                        ]
                },
                {
                        "num": 79,
                        "name": "autogen",
                        "url": "https://github.com/microsoft/autogen",
                        "description": "面向智能体人工智能的编程框架。",
                        "stars": "60.4k",
                        "category_id": "agent_framework",
                        "category_name": "智能体框架与平台",
                        "tags": [
                                "智能体框架",
                                "AI智能体"
                        ]
                },
                {
                        "num": 80,
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
                        "num": 81,
                        "name": "Cite Verify",
                        "url": "https://github.com/jonckr/cite-verify",
                        "description": "学术论文引用一致性自动验证工具，可核查参考文献的真实性，防止 AI 写作中的文献伪造和幻觉。",
                        "stars": "3",
                        "category_id": "literature_retrieval",
                        "category_name": "文献检索与阅读",
                        "tags": [
                                "文献检索",
                                "学术科研"
                        ]
                },
                {
                        "num": 82,
                        "name": "lmms-lab-writer",
                        "url": "https://github.com/EvolvingLMMs-Lab/lmms-lab-writer",
                        "description": "面向 LaTeX 学术论文排版与自动生成的协作编写助手，支持数学公式、表格及 BibTeX 引用的一键生成和校验。",
                        "stars": "262",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
                        "tags": [
                                "文档自动化",
                                "论文写作"
                        ]
                },
                {
                        "num": 83,
                        "name": "survey-creator",
                        "url": "https://github.com/surveyjs/survey-creator",
                        "description": "学术调研与问卷设计自动生成器，能够根据研究主题快速生成符合统计规范的结构化 JSON 问卷。",
                        "stars": "1.3k",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
                        "tags": [
                                "学术科研",
                                "论文写作"
                        ]
                },
                {
                        "num": 84,
                        "name": "claude-scientific-writer",
                        "url": "https://github.com/K-Dense-AI/claude-scientific-writer",
                        "description": "基于 Claude Code 的通用学术与科学文献写作助手。支持针对 Nature、Science、Cell 等顶级期刊以及 NSF、NIH 等资助机构进行规范格式化排版，在生成正文前通过 Perplexity 实时检索并核实参考文献真实性以防幻觉。",
                        "stars": "2.1k",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
                        "tags": [
                                "学术科研",
                                "论文写作",
                                "开发工具",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 85,
                        "name": "origin-mcp",
                        "url": "https://github.com/Ge-Shun/origin-mcp",
                        "description": "本地 MCP 服务器，让 AI 助手能够自动化操作 Origin/OriginPro 进行数据和图像处理。",
                        "stars": "72",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "可视化",
                                "开发工具"
                        ]
                },
                {
                        "num": 86,
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
                        "num": 87,
                        "name": "axiom-lean-engine",
                        "url": "https://github.com/AxiomMath/axiom-lean-engine",
                        "description": "面向自动定理证明器与 Lean 4 形式化数学的评估与元编程实用工具集。",
                        "stars": "132",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "通用工具",
                                "数学建模"
                        ]
                },
                {
                        "num": 88,
                        "name": "teaching-plan-analytic-geometry",
                        "url": "https://github.com/Hans774882968/teaching-plan-analytic-geometry",
                        "description": "通过GeoGebra与AI大语言模型结合，自动生成互动式数学教案的研究项目。支持嵌入GeoGebra画板、Markdown渲染与教案Schema化配置。",
                        "stars": "33",
                        "category_id": "teaching_prep",
                        "category_name": "教案与备课工具",
                        "tags": [
                                "开发工具",
                                "通用工具"
                        ]
                },
                {
                        "num": 89,
                        "name": "cartesian-ai",
                        "url": "https://github.com/Heht571/cartesian-ai",
                        "description": "结合AI聊天界面与GeoGebra几何画板的交互式数学学习平台。支持自然语言描述绘制几何图形，提供简单模式与智能规划模式。",
                        "stars": "5",
                        "category_id": "other",
                        "category_name": "其他学术与教学工具",
                        "tags": [
                                "通用工具",
                                "数学教育",
                                "可视化"
                        ]
                },
                {
                        "num": 90,
                        "name": "GeoChat",
                        "url": "https://github.com/tiwe0/GeoChat",
                        "description": "基于Next.js的自然语言GeoGebra绘图工具。通过与大语言模型对话，自动生成GeoGebra命令并实时绘图。",
                        "stars": "99",
                        "category_id": "tutoring",
                        "category_name": "智能教学与启发式辅导",
                        "tags": [
                                "通用工具",
                                "数学教育",
                                "可视化"
                        ]
                },
                {
                        "num": 91,
                        "name": "remotion",
                        "url": "https://github.com/remotion-dev/remotion",
                        "description": "基于 React 的程序化视频制作框架，通过组件化方式生成动态动画和教学视频",
                        "stars": "53.3k",
                        "category_id": "visualization",
                        "category_name": "数学可视化与动画生成",
                        "tags": [
                                "数学动画",
                                "智能助教"
                        ]
                },
                {
                        "num": 92,
                        "name": "edge-tts",
                        "url": "https://github.com/rany2/edge-tts",
                        "description": "从 Python 调用 Microsoft Edge 在线语音合成服务，无需 Edge 浏览器或 API 密钥即可生成自然语音",
                        "stars": "11.5k",
                        "category_id": "teaching_prep",
                        "category_name": "教案与备课工具",
                        "tags": [
                                "开发工具",
                                "通用工具"
                        ]
                },
                {
                        "num": 93,
                        "name": "good-question",
                        "url": "https://github.com/Rimagination/good-question",
                        "description": "便携式智能体技能，帮助用户锐化研究问题、提炼核心假设、完善科研问题表述",
                        "stars": "250",
                        "category_id": "literature_retrieval",
                        "category_name": "文献检索与阅读",
                        "tags": [
                                "学术科研",
                                "AI智能体"
                        ]
                },
                {
                        "num": 94,
                        "name": "math-skills",
                        "url": "https://github.com/panpanc/math-skills",
                        "description": "面向 AI 智能体的数学能力技能包，涵盖基础数学推理与计算能力增强",
                        "stars": "12",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "AI智能体",
                                "数学建模",
                                "开发工具"
                        ]
                },
                {
                        "num": 95,
                        "name": "AI-Research-SKILLs",
                        "url": "https://github.com/orchestra-research/AI-research-SKILLs",
                        "description": "面向 AI 模型的综合开源研究技能库，打包技能后 Claude/Copilot/Gemini 代理即可成为全功能 AI 研究助手",
                        "stars": "10.7k",
                        "category_id": "agent_framework",
                        "category_name": "智能体框架与平台",
                        "tags": [
                                "学术润色",
                                "学术科研",
                                "开发工具"
                        ]
                },
                {
                        "num": 96,
                        "name": "science-superpowers",
                        "url": "https://github.com/K-Dense-AI/science-superpowers",
                        "description": "面向 AI 科研智能体的可组合计算科学方法论技能包。提倡基于预注册（Pre-registration）设计范式，提供科学研究领域的底层系统支撑与可复用算法逻辑。",
                        "stars": "259",
                        "category_id": "agent_framework",
                        "category_name": "智能体框架与平台",
                        "tags": [
                                "学术科研",
                                "AI智能体",
                                "开发工具"
                        ]
                },
                {
                        "num": 97,
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
                        "num": 98,
                        "name": "QAnything",
                        "url": "https://github.com/netease-youdao/QAnything",
                        "description": "有道出品的本地知识库问答系统，支持 PDF/Word/PPT/Excel/图片/网页等多格式文档解析、向量检索与 LLM 驱动的精准问答，支持纯离线部署",
                        "stars": "14.0k",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "文档自动化",
                                "AI智能体"
                        ]
                },
                {
                        "num": 99,
                        "name": "ragflow",
                        "url": "https://github.com/infiniflow/ragflow",
                        "description": "领先的开源 RAG 引擎，融合检索增强生成与 Agent 能力，支持深度文档理解、多源数据检索、可追溯引用与自动化 RAG 工作流",
                        "stars": "87.3k",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "AI智能体",
                                "文档自动化",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 100,
                        "name": "OpenMathpix",
                        "url": "https://github.com/JhuoW/OpenMathpix",
                        "description": "开源 Mathpix 替代工具，从截图和图片中即时提取 LaTeX 公式、数学方程与文本",
                        "stars": "3",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "文档自动化",
                                "开发工具"
                        ]
                },
                {
                        "num": 101,
                        "name": "examcraft-ai",
                        "url": "https://github.com/DreZeo/examcraft-ai",
                        "description": "基于 AI 的桌面试卷生成工具，支持智能题目生成、编辑排版、试卷预览与导出",
                        "stars": "2",
                        "category_id": "teaching_prep",
                        "category_name": "教案与备课工具",
                        "tags": [
                                "文档自动化",
                                "学术科研",
                                "智能助教"
                        ]
                },
                {
                        "num": 102,
                        "name": "MathPaper",
                        "url": "https://github.com/AFObject/MathPaper",
                        "description": "基于 HTML/KaTeX 的数学试卷排版系统，支持仿高考格式的自动排版与渲染",
                        "stars": "2",
                        "category_id": "formatting",
                        "category_name": "其他文档自动化",
                        "tags": [
                                "文档自动化",
                                "学术科研"
                        ]
                },
                {
                        "num": 103,
                        "name": "engineering-figure-agent",
                        "url": "https://github.com/heyu-233/engineering-figure-agent",
                        "description": "Agent-native figure production for engineering and CS papers. 把工程论文里的系统架构图、算法流程图、实验曲线和多面板图，拆成可控的生成流程：概念图走 image mode，精确数值图走 plot mode。",
                        "stars": "265",
                        "category_id": "visualization",
                        "category_name": "数学可视化与动画生成",
                        "tags": [
                                "可视化",
                                "学术科研",
                                "论文写作"
                        ]
                },
                {
                        "num": 104,
                        "name": "PNG-to-SVG-",
                        "url": "https://github.com/yangqirui2020/PNG-to-SVG-",
                        "description": "辅助生成、重构和检查论文图 SVG 的 Codex skill。支持将 PNG/JPG/PDF 截图重构为 Figma 兼容、公式排版规范的矢量可编辑 SVG。",
                        "stars": "10",
                        "category_id": "visualization",
                        "category_name": "数学可视化与动画生成",
                        "tags": [
                                "可视化",
                                "学术科研",
                                "SVG排版"
                        ]
                },
                {
                        "num": 105,
                        "name": "paper-search-mcp",
                        "url": "https://github.com/openags/paper-search-mcp",
                        "description": "支持从 arXiv, PubMed, bioRxiv, Google Scholar 等多源平台一键并发检索、去重和下载学术论文的 MCP 服务端，支持 OpenAlex 和 Unpaywall，专为 AI 辅助科研设计。",
                        "stars": "2.4k",
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
                        "num": 106,
                        "name": "fireworks-tech-graph",
                        "url": "https://github.com/yizhiyanhua-ai/fireworks-tech-graph",
                        "description": "支持从自然语言生成出版级 SVG+PNG 技术图表的工具。支持 14 种图表类型，包括 UML 类图、时序图、系统架构图以及 RAG、智能体工作流等多种专业模型图的渲染与排版，支持多图组合及样式自定义。",
                        "stars": "9.8k",
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
                        "num": 107,
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
                        "num": 108,
                        "name": "MathModelAgent",
                        "url": "https://github.com/jihe520/MathModelAgent",
                        "description": "专为数学建模设计的 AI 智能体与技能包。支持自动化运行数学建模任务流程，并可自动生成一份结构完整、可直接提交的数学建模学术论文。",
                        "stars": "2.7k",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "数学建模",
                                "论文写作",
                                "AI智能体",
                                "学术科研"
                        ]
                },
                {
                        "num": 109,
                        "name": "PaddlePaddle/PaddleOCR",
                        "url": "https://github.com/PaddlePaddle/PaddleOCR",
                        "description": "由百度开源的超大规模 OCR 工具库，支持 80+ 种语言的文字检测与识别，涵盖版面分析、表格识别、公式识别等完整文档解析管线。",
                        "stars": "87.5k",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "OCR",
                                "文档自动化",
                                "学术科研"
                        ]
                },
                {
                        "num": 110,
                        "name": "binary-husky/gpt_academic",
                        "url": "https://github.com/binary-husky/gpt_academic",
                        "description": "专为科研与论文写作优化的 GPT 增强工具，支持论文翻译、润色、摘要生成、审稿模拟、公式渲染等一站式学术写作辅助。",
                        "stars": "71.1k",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
                        "tags": [
                                "论文写作",
                                "学术科研",
                                "学术润色"
                        ]
                },
                {
                        "num": 111,
                        "name": "hiroi-sora/Umi-OCR",
                        "url": "https://github.com/hiroi-sora/Umi-OCR",
                        "description": "免费、离线、开源的 Windows OCR 工具，支持截图 OCR、批量文档识别、PDF 转文字，无需联网即可使用。",
                        "stars": "46.1k",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "OCR",
                                "文档自动化",
                                "通用工具"
                        ]
                },
                {
                        "num": 112,
                        "name": "datalab-to/surya",
                        "url": "https://github.com/datalab-to/surya",
                        "description": "多语言文档 OCR 与版面分析工具包，支持文本检测、识别、表格/公式/图片检测以及阅读顺序排序，性能优异。",
                        "stars": "21.3k",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "OCR",
                                "文档自动化",
                                "学术科研"
                        ]
                },
                {
                        "num": 113,
                        "name": "lukas-blecher/LaTeX-OCR",
                        "url": "https://github.com/lukas-blecher/LaTeX-OCR",
                        "description": "利用深度学习将公式图片直接转换为 LaTeX 代码，支持手写与印刷体，准确率高。",
                        "stars": "16.5k",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "OCR",
                                "文档自动化",
                                "数学建模"
                        ]
                },
                {
                        "num": 114,
                        "name": "getomni-ai/zerox",
                        "url": "https://github.com/getomni-ai/zerox",
                        "description": "基于视觉模型的文档内容提取工具，能高效从 PDF、图片等文件中提取结构化文本与表格。",
                        "stars": "12.3k",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "文档自动化",
                                "通用工具",
                                "学术科研"
                        ]
                },
                {
                        "num": 115,
                        "name": "opendatalab/PDF-Extract-Kit",
                        "url": "https://github.com/opendatalab/PDF-Extract-Kit",
                        "description": "一站式 PDF 内容提取工具，支持版面分析、文字识别、公式检测与表格提取，输出结构化 Markdown/JSON。",
                        "stars": "9.9k",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "文档自动化",
                                "OCR",
                                "学术科研"
                        ]
                },
                {
                        "num": 116,
                        "name": "Yuliang-Liu/MonkeyOCR",
                        "url": "https://github.com/Yuliang-Liu/MonkeyOCR",
                        "description": "基于多模态大模型的新型文档理解与 OCR 系统，擅长复杂版面、手写体与低质量文档的识别。",
                        "stars": "6.6k",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "OCR",
                                "文档自动化",
                                "AI智能体"
                        ]
                },
                {
                        "num": 117,
                        "name": "oomol-lab/pdf-craft",
                        "url": "https://github.com/oomol-lab/pdf-craft",
                        "description": "创新的 PDF 转换工具，支持将 PDF 高精度转换为 Markdown、DOCX、LaTeX 等多种格式，保留原始排版与图表。",
                        "stars": "6.1k",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "文档自动化",
                                "通用工具",
                                "学术科研"
                        ]
                },
                {
                        "num": 118,
                        "name": "MarkPDFdown/markpdfdown",
                        "url": "https://github.com/MarkPDFdown/markpdfdown",
                        "description": "轻量级 PDF 转 Markdown 转换器，专注保留文档结构与数学公式，适合 AI 预处理与知识库构建。",
                        "stars": "2.0k",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "文档自动化",
                                "通用工具"
                        ]
                },
                {
                        "num": 119,
                        "name": "RQLuo/MixTeX-Latex-OCR",
                        "url": "https://github.com/RQLuo/MixTeX-Latex-OCR",
                        "description": "多模态 LaTeX OCR 系统，支持图文混合识别与公式推理，能处理包含图片和手写标注的复杂文档。",
                        "stars": "1.6k",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "OCR",
                                "文档自动化",
                                "数学建模"
                        ]
                },
                {
                        "num": 120,
                        "name": "opendatalab/UniMERNet",
                        "url": "https://github.com/opendatalab/UniMERNet",
                        "description": "专为数学表达式识别设计的深度学习模型，可高精度识别手写与印刷体数学公式并输出 LaTeX。",
                        "stars": "494",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "OCR",
                                "文档自动化",
                                "数学建模"
                        ]
                },
                {
                        "num": 121,
                        "name": "Rimagination/scansci-pdf",
                        "url": "https://github.com/Rimagination/scansci-pdf",
                        "description": "面向科学文献的 PDF 扫描与解析工具，针对学术 PDF 的版面结构（双栏、标题、公式、参考文献）做了专门优化。",
                        "stars": "715",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "文档自动化",
                                "学术科研",
                                "文献检索"
                        ]
                },
                {
                        "num": 122,
                        "name": "RoffyS/MarkEverythingDown",
                        "url": "https://github.com/RoffyS/MarkEverythingDown",
                        "description": "一站式多格式转 Markdown 工具，支持 PDF、DOCX、PPTX、HTML、图片等文件批量转换为结构化 MD。",
                        "stars": "340",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "文档自动化",
                                "通用工具"
                        ]
                },
                {
                        "num": 123,
                        "name": "CarrotWuDev/WordMarker",
                        "url": "https://github.com/CarrotWuDev/WordMarker",
                        "description": "将 AI 生成的 Markdown 内容自动格式化为排版精美的 Word 文档，支持自定义模板、公式渲染和目录生成。",
                        "stars": "107",
                        "category_id": "formatting",
                        "category_name": "其他文档自动化工具",
                        "tags": [
                                "文档自动化",
                                "通用工具",
                                "论文写作"
                        ]
                },
                {
                        "num": 124,
                        "name": "slidevjs/slidev",
                        "url": "https://github.com/slidevjs/slidev",
                        "description": "面向开发者的幻灯片框架，基于 Markdown 编写、Vue 驱动，支持代码高亮、公式渲染、演讲者笔记与交互式组件，一键导出 PDF/PPTX。",
                        "stars": "48.1k",
                        "category_id": "slide_generation",
                        "category_name": "幻灯片生成与演示",
                        "tags": [
                                "可视化",
                                "文档自动化",
                                "开发工具"
                        ]
                },
                {
                        "num": 125,
                        "name": "Achuan-2/SlideSCI",
                        "url": "https://github.com/Achuan-2/SlideSCI",
                        "description": "专为科研论文汇报设计的 PPT 生成工具，支持从 Markdown/LaTeX 自动生成学术风格幻灯片，内置 CITATION.cff 引用格式。",
                        "stars": "2.5k",
                        "category_id": "slide_generation",
                        "category_name": "幻灯片生成与演示",
                        "tags": [
                                "文档自动化",
                                "学术科研",
                                "论文写作"
                        ]
                },
                {
                        "num": 126,
                        "name": "LearnPrompt/humanize-ppt",
                        "url": "https://github.com/LearnPrompt/humanize-ppt",
                        "description": "通过 AI 提纲一键生成精美演示文稿的工具，专注于让内容呈现更自然、更具人文气息，适合教学与汇报场景。",
                        "stars": "749",
                        "category_id": "slide_generation",
                        "category_name": "幻灯片生成与演示",
                        "tags": [
                                "文档自动化",
                                "通用工具",
                                "可视化"
                        ]
                },
                {
                        "num": 127,
                        "name": "Achuan-2/pandoc_docx_template",
                        "url": "https://github.com/Achuan-2/pandoc_docx_template",
                        "description": "基于 Pandoc 的 Markdown 转 Word 模板系统，提供学术论文、报告、教案等多种排版模板，一键导出标准格式 DOCX。",
                        "stars": "976",
                        "category_id": "formatting",
                        "category_name": "其他文档自动化工具",
                        "tags": [
                                "文档自动化",
                                "通用工具",
                                "论文写作"
                        ]
                },
                {
                        "num": 128,
                        "name": "lfnovo/open-notebook",
                        "url": "https://github.com/lfnovo/open-notebook",
                        "description": "开源 NotebookLM 替代品，支持多文档 RAG 问答、自动笔记生成、语音摘要与知识库构建，专为研究者与学习者设计。",
                        "stars": "36.7k",
                        "category_id": "literature_retrieval",
                        "category_name": "文献检索与阅读",
                        "tags": [
                                "文献检索",
                                "学术科研",
                                "AI智能体"
                        ]
                },
                {
                        "num": 129,
                        "name": "microsoft/AI-For-Beginners",
                        "url": "https://github.com/microsoft/AI-For-Beginners",
                        "description": "微软官方出品的 AI 入门课程（12 周 24 课），涵盖符号 AI、神经网络、深度学习、强化学习与生成式 AI，含实战项目与测验。",
                        "stars": "64.6k",
                        "category_id": "tutoring",
                        "category_name": "智能教学与启发式辅导",
                        "tags": [
                                "智能助教",
                                "通用工具",
                                "学术科研"
                        ]
                },
                {
                        "num": 130,
                        "name": "HKUSTDial/Supervisor-Skills",
                        "url": "https://github.com/HKUSTDial/Supervisor-Skills",
                        "description": "面向研究生导师的 AI 技能包，涵盖选题指导、论文批注、审稿回复、学术写作辅导等科研全流程支持。",
                        "stars": "5.4k",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
                        "tags": [
                                "论文写作",
                                "学术科研",
                                "智能助教"
                        ]
                },
                {
                        "num": 131,
                        "name": "PDFMathTranslate-next/PDFMathTranslate-next",
                        "url": "https://github.com/PDFMathTranslate-next/PDFMathTranslate-next",
                        "description": "专为 PDF 论文翻译设计的工具，保留原文公式、图表与排版，支持中英互译与多语种翻译，翻译质量高。",
                        "stars": "2.9k",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "文档自动化",
                                "论文写作",
                                "学术科研"
                        ]
                },
                {
                        "num": 132,
                        "name": "moonlarry/codex-paper-skills",
                        "url": "https://github.com/moonlarry/codex-paper-skills",
                        "description": "面向 Codex CLI 的论文写作技能集合，涵盖文献综述、论文框架生成、LaTeX 排版、图表制作与格式校对。",
                        "stars": "114",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
                        "tags": [
                                "论文写作",
                                "学术科研",
                                "文档自动化"
                        ]
                },
                {
                        "num": 133,
                        "name": "moonlarry/awesome-llm-paper-wiki",
                        "url": "https://github.com/moonlarry/awesome-llm-paper-wiki",
                        "description": "LLM 论文知识库与导航 Wiki，系统整理了大语言模型领域的经典与前沿论文，按主题分类并附有解读和代码链接。",
                        "stars": "76",
                        "category_id": "literature_retrieval",
                        "category_name": "文献检索与阅读",
                        "tags": [
                                "文献检索",
                                "学术科研",
                                "论文写作"
                        ]
                },
                {
                        "num": 134,
                        "name": "redleafnew/zotero-javascripts",
                        "url": "https://github.com/redleafnew/zotero-javascripts",
                        "description": "面向 Zotero 用户的 JavaScript 批处理脚本集合，实现文献批量管理、标签清洗、条目合并、引用格式自定义等自动化操作。",
                        "stars": "282",
                        "category_id": "literature_retrieval",
                        "category_name": "文献检索与阅读",
                        "tags": [
                                "文献检索",
                                "学术科研",
                                "文档自动化"
                        ]
                },
                {
                        "num": 135,
                        "name": "datawhalechina/pumpkin-book",
                        "url": "https://github.com/datawhalechina/pumpkin-book",
                        "description": "《南瓜书》——周志华《机器学习》公式详解与推导，将书中所有数学公式逐条详细推导，是 ML 学习者的伴侣读物。",
                        "stars": "25.9k",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "数学建模",
                                "学术科研",
                                "通用工具"
                        ]
                },
                {
                        "num": 136,
                        "name": "zhanwen/MathModel",
                        "url": "https://github.com/zhanwen/MathModel",
                        "description": "数学建模全资源库，收录历年赛题与优秀论文、常用算法代码（Python/MATLAB）、模型讲解与参赛经验，一站式备战数模竞赛。",
                        "stars": "10.7k",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "数学建模",
                                "学术科研",
                                "文档自动化"
                        ]
                },
                {
                        "num": 137,
                        "name": "GAIR-NLP/MathPile",
                        "url": "https://github.com/GAIR-NLP/MathPile",
                        "description": "大规模数学 AI 数据集，包含 95 亿 token 的高质量数学文本，涵盖教科书、论文、论坛讨论等，专为数学大模型训练设计。",
                        "stars": "418",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "数学建模",
                                "学术科研",
                                "AI智能体"
                        ]
                },
                {
                        "num": 138,
                        "name": "justincasher/lean-explore",
                        "url": "https://github.com/justincasher/lean-explore",
                        "description": "面向 Lean 4 证明助手的语义搜索引擎，支持通过自然语言搜索定理、定义与证明，降低形式化数学的入门门槛。",
                        "stars": "75",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "数学建模",
                                "学术科研",
                                "开发工具"
                        ]
                },
                {
                        "num": 139,
                        "name": "xiaohanyu/awesome-tikz",
                        "url": "https://github.com/xiaohanyu/awesome-tikz",
                        "description": "TikZ 资源精选合集，收录高质量 TikZ 代码示例、模板与教程，涵盖数学图形、流程图、神经网络图等各类学术插图。",
                        "stars": "1.8k",
                        "category_id": "visualization",
                        "category_name": "数学可视化与动画生成",
                        "tags": [
                                "可视化",
                                "文档自动化",
                                "学术科研"
                        ]
                },
                {
                        "num": 140,
                        "name": "philip-murray/reactive-manim",
                        "url": "https://github.com/philip-murray/reactive-manim",
                        "description": "基于 Manim 的响应式动画组件库，提供预构建的数学动画组件与组合模式，可快速搭建复杂的数学可视化场景。",
                        "stars": "67",
                        "category_id": "visualization",
                        "category_name": "数学可视化与动画生成",
                        "tags": [
                                "可视化",
                                "数学动画",
                                "开发工具"
                        ]
                },
                {
                        "num": 141,
                        "name": "rohitg00/agentmemory",
                        "url": "https://github.com/rohitg00/agentmemory",
                        "description": "AI 智能体长期记忆系统，为 LLM Agent 提供持久化存储、检索与回忆能力，支持向量搜索与结构化记忆。",
                        "stars": "26.9k",
                        "category_id": "agent_framework",
                        "category_name": "智能体框架与平台",
                        "tags": [
                                "智能体框架",
                                "AI智能体",
                                "开发工具"
                        ]
                },
                {
                        "num": 142,
                        "name": "jztan/pdf-mcp",
                        "url": "https://github.com/jztan/pdf-mcp",
                        "description": "基于 MCP 协议的 PDF 处理服务器，支持 AI Agent 通过标准 MCP 接口读写、解析和操作 PDF 文件，打通 Agent 与 PDF 数据的交互。",
                        "stars": "76",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "MCP与插件",
                                "文档自动化",
                                "开发工具"
                        ]
                },
                {
                        "num": 143,
                        "name": "alibaba/zvec",
                        "url": "https://github.com/alibaba/zvec",
                        "description": "阿里巴巴开源的向量数据库，专为 AI 智能体设计的高性能嵌入式向量存储，支持混合搜索与大规模相似性检索。",
                        "stars": "15.4k",
                        "category_id": "agent_framework",
                        "category_name": "智能体框架与平台",
                        "tags": [
                                "智能体框架",
                                "开发工具",
                                "AI智能体"
                        ]
                },
                {
                        "num": 144,
                        "name": "TapXWorld/ChinaTextbook",
                        "url": "https://github.com/TapXWorld/ChinaTextbook",
                        "description": "覆盖小初高全学科的 PDF 教材合集，按年级与科目分类整理，供教师与学生免费查阅与下载。",
                        "stars": "79.0k",
                        "category_id": "other",
                        "category_name": "其他学术与教学工具",
                        "tags": [
                                "通用工具",
                                "学术科研"
                        ]
                },
                {
                        "num": 145,
                        "name": "FrogGuaGuaGua/HighSchoolMathematics",
                        "url": "https://github.com/FrogGuaGuaGua/HighSchoolMathematics",
                        "description": "高中数学知识点系统梳理与可视化讲解项目，涵盖代数、几何、概率等核心模块，配有图文解释与例题。",
                        "stars": "385",
                        "category_id": "tutoring",
                        "category_name": "智能教学与启发式辅导",
                        "tags": [
                                "智能助教",
                                "数学教育",
                                "通用工具"
                        ]
                },
                {
                        "num": 146,
                        "name": "wmjordan/PDFPatcher",
                        "url": "https://github.com/wmjordan/PDFPatcher",
                        "description": "功能强大的 PDF 处理工具箱，支持书签编辑、页面提取与合并、OCR 识别、元数据修改、压缩优化等 30+ 实用功能。",
                        "stars": "12.6k",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "文档自动化",
                                "通用工具"
                        ]
                },
                {
                        "num": 147,
                        "name": "yhwu-is/Linear-Algebra-Left-Undone",
                        "url": "https://github.com/yhwu-is/Linear-Algebra-Left-Undone",
                        "description": "面向 AI 与数据科学的线性代数教材，注重直觉理解与代码实现，覆盖矩阵运算、特征分解、SVD 等核心内容。",
                        "stars": "728",
                        "category_id": "other",
                        "category_name": "其他学术与教学工具",
                        "tags": [
                                "通用工具",
                                "学术科研",
                                "数学教育"
                        ]
                },
                {
                        "num": 148,
                        "name": "gaokaomath",
                        "url": "https://github.com/deekur/gaokaomath",
                        "description": "历年高考数学真题合集与解答，包含全国卷及北京、上海、天津等各省市高考数学真题，持续更新。",
                        "stars": "1.4k",
                        "category_id": "teaching_prep",
                        "category_name": "教案与备课工具",
                        "tags": [
                                "高考数学",
                                "数学教育",
                                "备课资源"
                        ]
                },
                {
                        "num": 149,
                        "name": "Unlimited-OCR",
                        "url": "https://github.com/baidu/Unlimited-OCR",
                        "description": "百度开源的长文本/多页文档 OCR 解析模型。采用参考滑动窗口注意力（R-SWA）技术，实现恒定的 KV Cache，支持一键对数十页的超长 PDF/图像进行高效排版与公式转写。",
                        "stars": "23.5k",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "OCR",
                                "文档自动化",
                                "公式识别",
                                "开发工具"
                        ]
                },
                {
                        "num": 150,
                        "name": "AutoFigure-Edit",
                        "url": "https://github.com/ResearAI/AutoFigure-Edit",
                        "description": "基于 LLM 的学术论文插图自动生成与编辑系统。能够将论文的方法论章节（Method Section）直接转化为完全可编辑的矢量 SVG 图表，并内置可视化编辑器，支持一键模仿目标论文插图的视觉风格。",
                        "stars": "4.1k",
                        "category_id": "visualization",
                        "category_name": "数学可视化与动画生成",
                        "tags": [
                                "可视化",
                                "论文写作",
                                "学术科研",
                                "SVG排版"
                        ]
                },
                {
                        "num": 151,
                        "name": "html-presentation",
                        "url": "https://github.com/juanjuanjie/html-presentation",
                        "description": "基于 HTML 的技术与学术课程演示文稿制作工具，支持使用 Web 标准技术快速构建响应式、交互式的幻灯片。",
                        "stars": "94",
                        "category_id": "slide_generation",
                        "category_name": "幻灯片生成与演示",
                        "tags": [
                                "幻灯片",
                                "文档自动化",
                                "学术教学"
                        ]
                },
                {
                        "num": 152,
                        "name": "llm-for-zotero",
                        "url": "https://github.com/yilewang/llm-for-zotero",
                        "description": "基于 Zotero 文献库的学术科研智能体（Research Agent）。支持对本地文献进行高精度检索与问答，通过 MCP 协议与文献管理系统深度融合，构建可溯源的 RAG 文献问答与综述工作流。",
                        "stars": "2.6k",
                        "category_id": "literature_retrieval",
                        "category_name": "文献检索与阅读",
                        "tags": [
                                "文献检索",
                                "Zotero",
                                "MCP与插件",
                                "学术科研"
                        ]
                },
                {
                        "num": 153,
                        "name": "Math-model-skills",
                        "url": "https://github.com/WuXinbo-bo/Math-model-skills",
                        "description": "数学建模竞赛智能体工程群。基于 14 阶段流水线、7 种角色以及 35 个门禁规则设计的数学建模自动化智能体系统。",
                        "stars": "47",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "数学建模",
                                "AI智能体",
                                "开发工具",
                                "学术科研"
                        ]
                },
                {
                        "num": 154,
                        "name": "Light-skills",
                        "url": "https://github.com/Light0305/Light-skills",
                        "description": "Light —— 全流程科研技能包。包含 28 个覆盖文献调研到投稿全流程的实用技能，配套 9 个可核查知识库，完美适配主流 AI 编程客户端。",
                        "stars": "517",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "学术科研",
                                "智能助教",
                                "文献检索",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 155,
                        "name": "awesome-geogebra-ai",
                        "url": "https://github.com/Ceiei/awesome-geogebra-ai",
                        "description": "GeoGebra + AI 数学题可视化工具，将大模型与动态数学软件相结合，自动生成数学几何题的可视化图形与交互内容。",
                        "stars": "3",
                        "category_id": "visualization",
                        "category_name": "数学可视化与动画生成",
                        "tags": [
                                "可视化",
                                "数学教育",
                                "GeoGebra",
                                "开发工具"
                        ]
                },
                {
                        "name": "matlab-agentic-toolkit",
                        "url": "https://github.com/matlab/matlab-agentic-toolkit",
                        "description": "MATLAB 官方推出的智能体工具包，将 MATLAB 强大的数学计算与工程建模能力接入 AI 智能体，使其适配复杂的工程和科学计算工作流。",
                        "stars": "887",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "MATLAB",
                                "AI智能体",
                                "开发工具",
                                "MCP与插件"
                        ],
                        "num": 156
                },
                {
                        "name": "chengfeng-videocut-skills",
                        "url": "https://github.com/Agentchengfeng/chengfeng-videocut-skills",
                        "description": "基于 Claude Code 技能体系（Skills）构建的视频剪辑智能体，支持通过自然语言指令自动化执行视频剪辑与后期处理任务。",
                        "stars": "2.7k",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "视频剪辑",
                                "智能体",
                                "MCP与插件",
                                "开发工具"
                        ],
                        "num": 157
                },
                {
                        "name": "tutor-skills",
                        "url": "https://github.com/bevibing/tutor-skills",
                        "description": "专为 Claude Code 设计的智能助教技能。能够将 PDF、电子文档以及代码仓库深度解析并转化为结构化的 Obsidian 个人知识库与学习卡片。",
                        "stars": "1.1k",
                        "category_id": "tutoring",
                        "category_name": "智能教学与启发式辅导",
                        "tags": [
                                "Obsidian",
                                "智能助教",
                                "文档自动化",
                                "MCP与插件"
                        ],
                        "num": 158
                },
                {
                        "name": "sift-kg",
                        "url": "https://github.com/juanceresa/sift-kg",
                        "description": "通过大模型一键将任意文档集合提取并转化为关系明确的知识图谱的 CLI 智能工具，支持实体去重与人机协同确认。",
                        "stars": "668",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "知识图谱",
                                "文档自动化",
                                "学术科研",
                                "开发工具"
                        ],
                        "num": 159
                },
                {
                        "name": "deepx-code",
                        "url": "https://github.com/itmisx/deepx-code",
                        "description": "专为 DeepSeek 大模型深度定制的编程智能体。原生支持模型路由、代码图谱分析、OCR 截图识别以及自动上下文压缩，从底层节省 Token。",
                        "stars": "374",
                        "category_id": "agent_framework",
                        "category_name": "智能体框架与平台",
                        "tags": [
                                "DeepSeek",
                                "AI智能体",
                                "代码图谱",
                                "开发工具"
                        ],
                        "num": 160
                },
                {
                        "name": "visual-ip-illustrations",
                        "url": "https://github.com/yangchuansheng/visual-ip-illustrations",
                        "description": "专为学术分享或文章配图设计的 Codex 技能。支持一键生成手绘风格的 16:9 比例插画，并内置多种视觉 IP 设计路线。",
                        "stars": "243",
                        "category_id": "visualization",
                        "category_name": "数学可视化与动画生成",
                        "tags": [
                                "可视化",
                                "学术插图",
                                "开发工具",
                                "MCP与插件"
                        ],
                        "num": 161
                },
                {
                        "name": "bili-note",
                        "url": "https://github.com/Rimagination/bili-note",
                        "description": "视频学习助手工具。能够将 Bilibili 教学视频一键解析并导出为结构化 Markdown 学习笔记，同时对完整字幕及核心评论进行存档。",
                        "stars": "241",
                        "category_id": "tutoring",
                        "category_name": "智能教学与启发式辅导",
                        "tags": [
                                "Markdown",
                                "视频笔记",
                                "数学教育",
                                "智能助教"
                        ],
                        "num": 162
                },
                {
                        "name": "tex2word",
                        "url": "https://github.com/yfyang86/tex2word",
                        "description": "实用的文档格式转换工具，支持将学术界常用的 LaTeX 文档高保真地转换为 Word XML（docx 兼容）格式。",
                        "stars": "47",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "LaTeX",
                                "文档转换",
                                "文档自动化",
                                "学术科研"
                        ],
                        "num": 163
                },
                {
                        "name": "Scientific-research-SKILL",
                        "url": "https://github.com/Liu-MingH/Scientific-research-SKILL",
                        "description": "结构化 AI 辅助科研代码生成技能包。内置 6 重学术规范与安全护栏以及 11 套提示词模板，规范学术代码编写。",
                        "stars": "3",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "学术科研",
                                "代码生成",
                                "MCP与插件",
                                "开发工具"
                        ],
                        "num": 164
                },
                {
                        "name": "scholay/skills",
                        "url": "https://github.com/scholay/skills",
                        "description": "由 Scholay 社区维护并持续更新的开源学术 AI 技能集合，提供多项专门针对文献阅读与科研助手的扩展能力。",
                        "stars": "148",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "学术科研",
                                "智能助教",
                                "MCP与插件",
                                "开发工具"
                        ],
                        "num": 165
                },
                {
                        "num": 166,
                        "name": "geometry-assistant",
                        "url": "https://github.com/mindbeam-vc/geometry-assistant",
                        "description": "立体几何 3D 可视化辅助教学与解题工具。支持将立体几何题目（点、线、面及约束条件）数据渲染为交互式 3D 场景，生成自包含 HTML 文件以供旋转、缩放和渐进式解题展示，适配主流 AI 编程客户端。",
                        "stars": "10",
                        "category_id": "visualization",
                        "category_name": "数学可视化与动画生成",
                        "tags": [
                                "立体几何",
                                "3D渲染",
                                "数学教育",
                                "开发工具"
                        ]
                },
                {
                        "num": 167,
                        "name": "paint-doodle",
                        "url": "https://github.com/Mixiaxiaoyu/paint-doodle",
                        "description": "基于 Codex 技能体系（Skills）的 MS Paint 潦草手绘插画生成器。专门用于自动化生成具有“手绘与吐槽涂鸦感”的成语解释图、事件示意图或荒诞小故事插画。",
                        "stars": "19",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "插画生成",
                                "手绘涂鸦",
                                "开发工具",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 168,
                        "name": "word-mathtype-docx",
                        "url": "https://github.com/zhs7gmzw2t-debug/word-mathtype-docx",
                        "description": "Word 文档公式自动化转换工具与 Codex 技能包。支持将 .docx 文档中的 Office 原生公式（OMML）提取并转化为可编辑的 MathType OLE 对象，内置 MathML 校验与排版修复机制。",
                        "stars": "1",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "Word公式",
                                "MathType",
                                "文档自动化",
                                "文档转换"
                        ]
                },
                {
                        "name": "graphrag",
                        "url": "https://github.com/microsoft/graphrag",
                        "description": "微软开源的基于知识图谱的检索增强生成（RAG）系统。通过结合图结构和语言模型，从非结构化文本中提取出实体和关系，构建结构化知识网络以提供更精准的全局性问答。",
                        "stars": "35.4k",
                        "category_id": "agent_framework",
                        "category_name": "智能体框架与平台",
                        "tags": [
                                "GraphRAG",
                                "RAG",
                                "知识图谱",
                                "开发工具"
                        ],
                        "num": 169
                },
                {
                        "name": "ai-guide",
                        "url": "https://github.com/liyupi/ai-guide",
                        "description": "程序员鱼皮开源的 AI 资源导航与零基础 Vibe Coding 实操教程。涵盖 DeepSeek/Claude 等主流大模型玩法、编程智能体、RAG、MCP 知识与 AI 效率工具。",
                        "stars": "18.2k",
                        "category_id": "other",
                        "category_name": "其他学术与教学工具",
                        "tags": [
                                "AI教程",
                                "VibeCoding",
                                "开源文档",
                                "智能助教"
                        ],
                        "num": 170
                },
                {
                        "name": "hyperframes",
                        "url": "https://github.com/heygen-com/hyperframes",
                        "description": "HeyGen 开源的专为 AI 智能体设计的 HTML 视频渲染与生成系统。允许智能体通过编写 HTML 代码自动渲染和输出高质量视频。",
                        "stars": "40.6k",
                        "category_id": "visualization",
                        "category_name": "数学可视化与动画生成",
                        "tags": [
                                "视频生成",
                                "HTML渲染",
                                "AI智能体",
                                "开发工具"
                        ],
                        "num": 171
                },
                {
                        "name": "OpenMontage",
                        "url": "https://github.com/calesthio/OpenMontage",
                        "description": "开源的智能体驱动视频生产系统。包含 12 条自动化工作流管线、52 个工具和 500 多个 Agent 技能，可将 AI 编程助手直接转变为全功能的视频制作工作室。",
                        "stars": "47.4k",
                        "category_id": "agent_framework",
                        "category_name": "智能体框架与平台",
                        "tags": [
                                "视频剪辑",
                                "AI智能体",
                                "多智能体",
                                "开发工具"
                        ],
                        "num": 172
                },
                {
                        "name": "video-podcast-maker",
                        "url": "https://github.com/Agents365-ai/video-podcast-maker",
                        "description": "面向 AI 编程智能体的视频播客自动生成工具，支持全自动生产 4K 级别的视频播客内容。",
                        "stars": "1.5k",
                        "category_id": "visualization",
                        "category_name": "数学可视化与动画生成",
                        "tags": [
                                "视频播客",
                                "自动化视频",
                                "AI智能体",
                                "开发工具"
                        ],
                        "num": 173
                },
                {
                        "name": "penpot",
                        "url": "https://github.com/penpot/penpot",
                        "description": "开源、跨平台的协作设计与原型制作工具。支持 Web 标准（SVG 和 CSS），专为设计师和前端开发者打通设计到代码的代码级协作。",
                        "stars": "58.4k",
                        "category_id": "other",
                        "category_name": "其他学术与教学工具",
                        "tags": [
                                "Figma平替",
                                "原型设计",
                                "开源设计",
                                "通用工具"
                        ],
                        "num": 174
                },
                {
                        "name": "horseMD",
                        "url": "https://github.com/BND-1/horseMD",
                        "description": "一款免费开源的所见即所得 Markdown 编辑器（Typora 免费平替）。支持标签页多文件管理和直观的文件树导航。",
                        "stars": "352",
                        "category_id": "formatting",
                        "category_name": "其他文档自动化工具",
                        "tags": [
                                "Markdown",
                                "所见即所得",
                                "Typora平替",
                                "通用工具"
                        ],
                        "num": 175
                },
                {
                        "name": "Ameow",
                        "url": "https://github.com/Wutpeach/Ameow",
                        "description": "面向视频后期与内容创作者的轻量级桌面素材采集工具。支持整合网页视频、图片和本地文件，通过浏览器插件复用登录态一键解析和转码处理。",
                        "stars": "86",
                        "category_id": "other",
                        "category_name": "其他学术与教学工具",
                        "tags": [
                                "素材采集",
                                "视频下载",
                                "创作者工具",
                                "通用工具"
                        ],
                        "num": 176
                },
                {
                        "num": 177,
                        "name": "agent-skills-playground",
                        "url": "https://github.com/matlab/agent-skills-playground",
                        "description": "MATLAB 官方提供的智能体技能沙箱。主要用于原型设计和演示适用于 MATLAB 及 Simulink 任务的 Agent 技能（Skills）。",
                        "stars": "162",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "MATLAB",
                                "Simulink",
                                "AI智能体",
                                "开发工具"
                        ]
                },
                {
                        "num": 178,
                        "name": "simulink-agentic-toolkit",
                        "url": "https://github.com/matlab/simulink-agentic-toolkit",
                        "description": "Simulink 智能体工具包，为 AI 智能体赋予了在 Simulink 环境中开展系统建模与仿真控制等系统级开发能力。",
                        "stars": "926",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "Simulink",
                                "AI智能体",
                                "系统设计",
                                "开发工具"
                        ]
                },
                {
                        "num": 179,
                        "name": "rules (MATLAB)",
                        "url": "https://github.com/matlab/rules",
                        "description": "MATLAB 官方整理的 AI 编程辅助规则库。针对 Cursor、Windsurf、Claude Code 和 GitHub Copilot 等 AI 编程助手进行了优化，包含面向 MATLAB 开发的最佳实践与编码规范。",
                        "stars": "47",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "MATLAB",
                                "AI提示词",
                                "开发工具",
                                "规则配置"
                        ]
                },
                {
                        "num": 180,
                        "name": "prompts (MATLAB)",
                        "url": "https://github.com/matlab/prompts",
                        "description": "面向 MATLAB 开发的 AI 提示词（Prompts）精选合集。支持 MATLAB Copilot、GitHub Copilot、Claude 和 Cursor，涵盖实时脚本、信号处理、机器学习及控制系统等开发场景。",
                        "stars": "75",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "MATLAB",
                                "AI提示词",
                                "开发工具"
                        ]
                },
                {
                        "num": 181,
                        "name": "matlab-mcp-server",
                        "url": "https://github.com/matlab/matlab-mcp-server",
                        "description": "MathWorks 官方推出的 MATLAB MCP 服务端。支持 AI 应用通过标准 MCP 协议直接调用本地 MATLAB，为 Claude Code 和 VS Code 等编程智能体提供代码运行与控制能力。",
                        "stars": "1.3k",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "MATLAB",
                                "MCP与插件",
                                "AI智能体",
                                "开发工具"
                        ]
                },
                {
                        "num": 182,
                        "name": "mathVideoMaker",
                        "url": "https://github.com/GordenSun/mathVideoMaker",
                        "description": "基于 Cursor Agent 技能体系的数学视频与交互网页生成器。能够根据需求同步生成数学推导动画（基于 Manim 渲染为 MP4）与配套的交互式网页（自包含单 HTML，含 KaTeX 和 Canvas 交互），并提供机械化布局、缺字形检测及网页静态检查，保障无视觉能力大模型的生成质量。",
                        "stars": "270",
                        "category_id": "visualization",
                        "category_name": "数学可视化与动画生成",
                        "tags": [
                                "数学动画",
                                "Manim",
                                "交互网页",
                                "开发工具",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 183,
                        "name": "grant-master",
                        "url": "https://github.com/Lin-zhijie/grant-master",
                        "description": "中文项目申请书全流程写作工具链。支持课题理解、文献调研、论文精读、方案收敛、大纲规划、正文写作、审阅与 docx 文档输出。",
                        "stars": "92",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
                        "tags": [
                                "项目申请书",
                                "学术科研",
                                "正文写作",
                                "文档自动化"
                        ]
                },
                {
                        "num": 184,
                        "name": "OpenSpec",
                        "url": "https://github.com/Fission-AI/OpenSpec",
                        "description": "面向 AI 编程助手的规范驱动开发（SDD）框架。提倡在编写代码前先设计详尽的规范（Specification），让 AI 助手基于规范进行高准确率的编码和系统搭建。",
                        "stars": "64.6k",
                        "category_id": "agent_framework",
                        "category_name": "智能体框架与平台",
                        "tags": [
                                "规范驱动",
                                "AI编码",
                                "开发工具",
                                "智能体框架"
                        ]
                },
                {
                        "num": 185,
                        "name": "ponytail",
                        "url": "https://github.com/DietrichGebert/ponytail",
                        "description": "AI 智能体开发辅助工具。让你的 AI 代理能够像极其经验丰富但极简克制的“懒惰高级开发人员”一样思考——提倡用最少的代码解决问题，避免过度设计。",
                        "stars": "100.9k",
                        "category_id": "agent_framework",
                        "category_name": "智能体框架与平台",
                        "tags": [
                                "AI智能体",
                                "极简编码",
                                "开发工具"
                        ]
                },
                {
                        "num": 186,
                        "name": "Claude-Code-Skills-for-Academics",
                        "url": "https://github.com/aspi6246/Claude-Code-Skills-for-Academics",
                        "description": "专为学术研究人员与高校师生打造的 Claude Code AI 技能实操教案与科研工作流工具箱。包含论文审查润色、Beamer 课件制作与自动检查、科研代码审计、实证金融数据画像（含 R 语言高维固定效应回归模版）以及 Canvas LMS 教务系统自动化对接等实战指南。",
                        "stars": "149",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "学术培训",
                                "教案备课",
                                "ClaudeCode",
                                "学术科研"
                        ]
                },
                {
                        "num": 187,
                        "name": "Claude-Code-Presentation",
                        "url": "https://github.com/aspi6246/Claude-Code-Presentation",
                        "description": "面向学术界与高校师生介绍和培训 Claude Code 的全套宣讲素材包。包含培训演示文稿、Brownbag 技术分享指南（PDF）、软件界面与矩阵对比配图以及编辑器等角色画像说明文档。",
                        "stars": "426",
                        "category_id": "teaching_prep",
                        "category_name": "教案与备课工具",
                        "tags": [
                                "学术培训",
                                "教案备课",
                                "ClaudeCode",
                                "学术科研"
                        ]
                },
                {
                        "num": 188,
                        "name": "paperseek",
                        "url": "https://github.com/MingfengHong/paperseek",
                        "description": "基于 LLM 的学术文献发现与检索智能体。支持通过自然语言输入研究意图，自动生成并迭代校准检索式，抓取并整理 OpenAlex、Crossref 和 WoS 的元数据，用 LLM 排序过滤，同时支持扩展引用网络并导出可复核结果。",
                        "stars": "242",
                        "category_id": "literature_retrieval",
                        "category_name": "文献检索与阅读",
                        "tags": [
                                "文献检索",
                                "RAG",
                                "学术科研",
                                "AI智能体"
                        ]
                },
                {
                        "num": 189,
                        "name": "scientific-agent-skills",
                        "url": "https://github.com/K-Dense-AI/scientific-agent-skills",
                        "description": "面向科学发现与学术科研的 AI 智能体顶级技能库。内置 140 多个开箱即用的专业科研技能以及 100 多个涵盖生物、化学、医疗及药物发现的科学数据库连接，兼容 Cursor、Claude Code 等各大主流 AI 工具。",
                        "stars": "33.2k",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "学术科研",
                                "智能助教",
                                "MCP与插件",
                                "开发工具"
                        ]
                },
                {
                        "num": 190,
                        "name": "de-ai-writing",
                        "url": "https://github.com/tmacsyf/my_skills/tree/master/paper-skills/de-ai-writing",
                        "description": "基于 Codex 技能体系的学术论文 AI 痕迹扫描与修正工具。针对破折号滥用、伪转折、空洞句尾拔高等 10 条典型的 AI 生成写作模式实施精准扫描，提供修改建议报告并支持原位 LaTeX 排版修正。",
                        "stars": "0",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
                        "tags": [
                                "学术润色",
                                "去AI化",
                                "论文修改",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 191,
                        "name": "anti-defensive-writing",
                        "url": "https://github.com/Kiterlin/anti-defensive-writing",
                        "description": "基于 Codex 技能体系的学术论文与专业文本“反防御性写作”审查和修改工具。自动识别并修正文本中不必要的免责声明、犹豫表达与过度解释，使表述更直接、更具论证姿态。",
                        "stars": "84",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
                        "tags": [
                                "学术润色",
                                "论文写作",
                                "开发工具",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 192,
                        "name": "lean4-skills",
                        "url": "https://github.com/cameronfreer/lean4-skills",
                        "description": "面向 AI 编码智能体的 Lean 4 定理证明技能与工作流套件。提供结构化的证明/审查/高尔夫循环、mathlib 搜索、公理检查和安全护栏，兼容 Claude Code、Codex、Gemini CLI、Cursor 等多种宿主平台。",
                        "stars": "365",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "Lean4",
                                "定理证明",
                                "AI智能体",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 193,
                        "name": "lean-lsp-mcp",
                        "url": "https://github.com/oOo0oOo/lean-lsp-mcp",
                        "description": "基于语言服务器协议（LSP）的 Lean 定理证明器 MCP 服务端。支持 LLM 智能体与 Lean 项目进行丰富交互，包括获取诊断信息、目标状态、项信息和悬停文档，并内置 LeanSearch、Loogle 等外部定理搜索工具。",
                        "stars": "474",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "Lean4",
                                "MCP与插件",
                                "定理证明",
                                "开发工具"
                        ]
                },
                {
                        "num": 194,
                        "name": "Leanstral 1.5",
                        "url": "https://mistral.ai/news/leanstral-1-5/",
                        "description": "Mistral AI 发布的专用于 Lean 4 形式化证明的开源 MoE 大模型（119B 总参数 / 6B 激活）。在 miniF2F、PutnamBench 等基准上达到 SOTA，支持自动生成正确性属性并证明/反证，已在真实 Rust 代码库中发现未报告的 Bug。Apache-2.0 协议开源，提供免费 API。",
                        "stars": "6",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "Lean4",
                                "定理证明",
                                "AI智能体",
                                "开源模型"
                        ]
                },
                {
                        "num": 195,
                        "name": "planning-with-files",
                        "url": "https://github.com/OthmanAdi/planning-with-files",
                        "description": "面向 AI 编程智能体的持久化文件级规划工具。提供防崩溃的 markdown 计划记录，能跨上下文丢失或清空操作持久留存，并支持基于磁盘的多智能体共享状态与确定性完成门控，兼容 Claude Code、Cursor 等各大主流智能体。",
                        "stars": "26.1k",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "AI智能体",
                                "规划工具",
                                "MCP与插件",
                                "开发工具"
                        ]
                },
                {
                        "num": 196,
                        "name": "VeryMath",
                        "url": "https://verymath.github.io/",
                        "description": "面向 AI 辅助数学研究的开源平台。致力于构建可复用、可验证、可协作的科研工作流，覆盖论文阅读（提取证明依赖与定理结构）、计算数学（数值实验与符号检验）、Lean 4 形式化验证以及自动化研究演化。",
                        "stars": "N/A",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "数学科研",
                                "Lean4",
                                "计算数学",
                                "AI智能体"
                        ]
                },
                {
                        "num": 197,
                        "name": "LaTeXSnipper",
                        "url": "https://github.com/SakuraMathcraft/LaTeXSnipper",
                        "description": "功能强大的数学工作区与文档转换工具。支持屏幕截图 OCR、手写识别转 LaTeX 公式、Word/Office 插件式编辑以及基于 MathCraft OCR 与 MathLive 驱动的符号计算。",
                        "stars": "828",
                        "category_id": "doc_conversion",
                        "category_name": "文档转换与内容解析",
                        "tags": [
                                "公式识别",
                                "文档自动化",
                                "LaTeX",
                                "数学计算"
                        ]
                },
                {
                        "num": 198,
                        "name": "Academic Figure Skill",
                        "url": "https://github.com/TingxiYu/academic-figure-skill",
                        "description": "以“问题驱动而非模板驱动”为核心原则的学术配图技能包。每一张图从科学问题出发，通过 8 步闭环工作流（用户意图解析 → 原型分类 → 图型论证 → 环境探测 → 风格注入 → 资产检索 → 渲染生成 → 质量验证），输出可直接投稿的矢量 PDF 主文件 + 300dpi PNG 预览 + 统计报告。",
                        "stars": "201",
                        "category_id": "visualization",
                        "category_name": "数学可视化与动画生成",
                        "tags": [
                                "学术绘图",
                                "论文配图",
                                "开发工具",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 199,
                        "name": "Mrite",
                        "url": "https://github.com/Rzna-5559/Mrite",
                        "description": "专为国赛、美赛、MathorCup 等数学建模竞赛设计的 Claude Code 技能项目模板。放入赛题和附件数据后，AI 即可自动完成读取题目与附件、规划求解计划、编写 Python 代码求解并绘图、撰写含摘要和参考文献的 LaTeX 论文并自动编译排版为 PDF 且修复报错。",
                        "stars": "306",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "数学建模",
                                "LaTeX",
                                "Python求解",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 200,
                        "name": "中国大学生在线 - 数学建模专题",
                        "url": "https://dxs.moe.gov.cn/zx/hd/sxjm/",
                        "description": "教育部“中国大学生在线”全国大学生数学建模竞赛（CUMCM，高教社杯）官方合作专题平台。权威发布历届赛题下载、获奖名单、优秀论文展示、赛题讲评课、数模慕课及备赛经验分享。",
                        "stars": "N/A",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "数学建模",
                                "备赛资源",
                                "官方竞赛",
                                "优秀论文"
                        ]
                },
                {
                        "num": 201,
                        "name": "Idea2Paper",
                        "url": "https://github.com/AgentAlphaAGI/Idea2Paper",
                        "description": "端到端学术论文研究与写作智能体框架。通过显式分解科研阶段并引入契约化多智能体协作机制，将研究构想转化为逻辑严密、学术规范的学术叙事，重点解决科学范式生成与 argumentative 一致性挑战。",
                        "stars": "1.4k",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
                        "tags": [
                                "学术科研",
                                "论文写作",
                                "AI智能体",
                                "智能体框架"
                        ]
                },
                {
                        "num": 202,
                        "name": "Auto-claude-code-research-in-sleep",
                        "url": "https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep",
                        "description": "ARIS (Auto-Research-In-Sleep) 是一款轻量级、免框架的自主机器学习研究工作流与智能体技能集。支持跨模型评审循环、构想发现与实验自动化，深度适配 Claude Code、Antigravity 等编程助手以实现无人值守的科研探索。",
                        "stars": "14.6k",
                        "category_id": "agent_framework",
                        "category_name": "智能体框架与平台",
                        "tags": [
                                "学术科研",
                                "AI智能体",
                                "ML研究",
                                "开发工具"
                        ]
                },
                {
                        "num": 203,
                        "name": "dashi-ppt-skill",
                        "url": "https://github.com/chuspeeism/dashi-ppt-skill",
                        "description": "面向 AI 智能体的幻灯片生成与演示技能包。支持从多种视觉主题生成可在浏览器中直接编辑的演示文稿，并可导出为 HTML、PDF 和 PPTX 格式。",
                        "stars": "5.0k",
                        "category_id": "slide_generation",
                        "category_name": "幻灯片生成与演示",
                        "tags": [
                                "PPT生成",
                                "幻灯片",
                                "AI智能体",
                                "开发工具"
                        ]
                },
                {
                        "num": 204,
                        "name": "academic-research-skills-codex",
                        "url": "https://github.com/Imbad0202/academic-research-skills-codex",
                        "description": "学术研究技能套件（ARS）的 Codex 平台专属分发版本。将原生的科研多智能体工作流打包为单个 Codex 规范技能（SKILL.md），免除 Claude Code 插件依赖，便于在 Codex 等通用智能体终端一键运行。",
                        "stars": "6.3k",
                        "category_id": "agent_integration",
                        "category_name": "MCP/插件与技能集成",
                        "tags": [
                                "学术科研",
                                "Codex",
                                "AI智能体",
                                "开发工具"
                        ]
                },
                {
                        "num": 205,
                        "name": "latex-paper",
                        "url": "https://github.com/pmichaillat/latex-paper",
                        "description": "极其推崇学术论文排版最佳实践的极简 LaTeX 模板项目。提供高度结构化的文档目录与整洁的一句一行（One-sentence-per-line）差分格式，非常适合作为高水平学术论文的排版起点。",
                        "stars": "388",
                        "category_id": "formatting",
                        "category_name": "其他文档自动化",
                        "tags": [
                                "LaTeX模板",
                                "学术论文",
                                "排版规范",
                                "写作辅助"
                        ]
                },
                {
                        "num": 206,
                        "name": "Nature-Paper-Skills",
                        "url": "https://github.com/Boom5426/Nature-Paper-Skills",
                        "description": "专为 Nature 及其子刊投稿设计的 AI 智能体论文写作与编辑技能包。涵盖科学问题梳理、图表论证规划、参考文献卫生检查以及同行评审意见自动回复等全生命周期写作辅助。",
                        "stars": "425",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
                        "tags": [
                                "Nature",
                                "论文修改",
                                "AI智能体",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 207,
                        "name": "Research-Paper-Writing-Skills",
                        "url": "https://github.com/Master-cai/Research-Paper-Writing-Skills",
                        "description": "专为 AI 编码助手（如 Claude Code/Codex）优化的学术论文段落精修与写作技能集。支持针对摘要、引言、方法论到结论的细粒度逻辑重构与学术化表达润色。",
                        "stars": "6.0k",
                        "category_id": "paper_writing",
                        "category_name": "论文写作与投稿",
                        "tags": [
                                "学术润色",
                                "论文写作",
                                "开发工具",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 208,
                        "name": "claude-scholar",
                        "url": "https://github.com/Galaxy-Dawn/claude-scholar",
                        "description": "专为 Claude Code 打造的半自动化科研与实验开发智能体助手。内置 30+ 技能和 50+ 扩展指令，全面覆盖科研灵感发现、代码实验运行、论文大纲写作到最终投稿审查的闭环流程。",
                        "stars": "4.6k",
                        "category_id": "agent_framework",
                        "category_name": "智能体框架与平台",
                        "tags": [
                                "学术科研",
                                "ClaudeCode",
                                "AI智能体",
                                "开发工具"
                        ]
                },
                {
                        "num": 209,
                        "name": "literature-survey-skill",
                        "url": "https://github.com/SNL-UCSB/literature-survey-skill",
                        "description": "专为 Claude Code 开发的文献综述与学科现状快速调研技能。可自动化抓取指定学术库、抽取关键研究脉络并导出为结构化的文献对比矩阵与综述大纲报告。",
                        "stars": "67",
                        "category_id": "literature_retrieval",
                        "category_name": "文献检索与阅读",
                        "tags": [
                                "文献检索",
                                "文献综述",
                                "AI智能体",
                                "MCP与插件"
                        ]
                },
                {
                        "num": 210,
                        "name": "math-modeling-skill-pro",
                        "url": "https://github.com/skillforCUMCM/math-modeling-skill-pro",
                        "description": "数学建模竞赛专家 Skill Pro 工具箱。包含 139 篇高分案例卡、方法知识库、论文模板、代码骨架以及自动化验证工具，专为国赛与美赛等建模场景打造。",
                        "stars": "1",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "数学建模",
                                "案例卡",
                                "方法库",
                                "代码骨架"
                        ]
                },
                {
                        "num": 211,
                        "name": "review-cumcm-paper",
                        "url": "https://github.com/zhoufz021/review-cumcm-paper",
                        "description": "面向全国大学生数学建模竞赛（CUMCM）的论文证据链审核 Codex 技能。以原始赛题为索引，提供快速筛查、十二维全量评分、题型专项检查与修改复审，生成带原文页序/段落定位的修改报告。",
                        "stars": "1",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "数模评审",
                                "论文审核",
                                "CUMCM",
                                "AI技能"
                        ]
                },
                {
                        "num": 212,
                        "name": "CUMCM-Paper-And-SourceCode",
                        "url": "https://github.com/yan-fanyu/CUMCM-Paper-And-SourceCode",
                        "description": "2010至2024年全国大学生数学建模竞赛（CUMCM）历年参考获奖论文及源代码开源合集，覆盖多年国赛真题的求解代码、论文参考与赛题资料。",
                        "stars": "59",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "数模真题",
                                "获奖论文",
                                "源码合集",
                                "CUMCM"
                        ]
                },
                {
                        "num": 213,
                        "name": "cumcm-step-review",
                        "url": "https://github.com/yuanchen-home/cumcm-step-review",
                        "description": "面向 CUMCM 国赛的论文分步审核与写作工作流技能。支持十部分闭环审核（从问题重述、数据预处理到摘要定稿）、内置 93 篇优秀论文语料指南、7套顶刊配色数据图规范及 drawio 流程图生成。",
                        "stars": "3",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "数模分步审核",
                                "优秀论文写法",
                                "流程图绘制",
                                "CUMCM"
                        ]
                },
                {
                        "num": 214,
                        "name": "数学建模赛前训练与可复现交付指南",
                        "url": "https://studentp.cloud/guides/mathematical-modeling-competition-reproducibility-guide",
                        "description": "面向数学建模竞赛（CUMCM/MCM/ICM）的赛前训练与可复现交付合规指南。涵盖任务拆解矩阵、最小基线构建、引用清单维护、五类反证检验（数据/切分/参数/约束/解释）以及提交前独立验收流程。",
                        "stars": "N/A",
                        "category_id": "math_modeling",
                        "category_name": "形式化数学与数模竞赛",
                        "tags": [
                                "数模规范",
                                "可复现建模",
                                "备赛指南",
                                "验收清单"
                        ]
                },
                {
                        "num": 215,
                        "name": "math-question-bank",
                        "url": "https://github.com/JudgePeach/math-question-bank",
                        "description": "本地化高中数学题库管理系统。支持 LaTeX 公式实时渲染、基于大模型的 AI 智能题目解析与解答，以及公式 OCR 图像识别录入功能。",
                        "stars": "162",
                        "category_id": "teaching_prep",
                        "category_name": "教案与备课工具",
                        "tags": [
                                "数学题库",
                                "LaTeX",
                                "智能解析",
                                "高中数学"
                        ]
                }
        ],
        "CATEGORIES": [
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
                        "id": "other",
                        "name": "其他学术与教学工具"
                }
        ]
};

const PROJECTS = GLOBAL_DATA.PROJECTS;
const CATEGORIES = GLOBAL_DATA.CATEGORIES;
