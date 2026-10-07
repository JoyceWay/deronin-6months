# DeRonin 六个月中文实战站 — v2 内容完整版 Prompt（2026-10-07 定稿）

> 七层存档-01 原文。本版 = v2 完整重制 + 内容一次到位：2026-10-06 v2 的 prompt 原文未存档，本次把 10-06 晚到 10-07 的全部更新一次写死；2–4 页正文由 Muse 按 DeRonin 原文提炼、Joyce 授权定稿，不再是空壳。
> 使用说明：把下面代码块里的英文 prompt 原样粘贴进 Antigravity，生成 5 个页面。生成后走 P0 自查。
> 注意：如果目录里有 10-06 生成的旧文件，5 个页面覆盖重写。

```
Build a pure static 5-page learning website (HTML + one shared CSS file,
no frameworks, no JavaScript unless trivial). Chinese primary, English secondary.

================ SITE MAP ================
5 pages, identical top navigation on every page (5 items, bilingual).
All internal links use real filenames (index.html, guide.html, resources.html,
notes.html, build-log.html) — no "#" placeholder links.
1. index.html — 首页 / Home
2. guide.html — 指南 / Guide
3. resources.html — 资料库 / Resources
4. notes.html — 笔记本 / Notes
5. build-log.html — 建站手记 / Build Log (OWN visual system — see below)

LINK ARCHITECTURE (all ids must match exactly across pages):
- External links: open in new tab (target="_blank" rel="noopener").
- resources.html: month sections id="m1".."m6"; week blocks id="week-1".."week-24".
- notes.html: entries id="note-1".."note-24".
- resources.html Week N block ends with "我的笔记 →" linking to notes.html#note-N.
- notes.html entry N starts with "← 回 Week N 资料" linking to resources.html#week-N.
- resources.html top: M1–M6 anchor目录 for long-page navigation.

================ GLOBAL DESIGN (pages 1–4) ================
- Background #FAF9F6 (warm paper); text #2E2A26 (ink gray);
  accent #D4A853 (matte gold) for numbers, dividers, tags, links.
- Titles: English large above, Chinese smaller beneath.
- Body: Simplified Chinese primary; key English terms bilingual at first mention.
- Reading width ~700px, centered, generous whitespace, calm minimal.
- Short sentences.
- Fonts: Inter + "Noto Sans SC" for headings/body; "JetBrains Mono" for
  code/labels. Fallbacks: -apple-system, "PingFang SC", "Microsoft YaHei",
  sans-serif / monospace. Load via Google Fonts.

================ FOOTER (pages 1–4) ================
- Slim footer on every page: thin matte-gold hairline on top, quiet and small.
- Line 1: "学习中 · Work in progress — 学到哪章，更新到哪章。"
- Line 2: the 5 nav links (small) + source credit link.
- No copyright line, no decoration.

================ RESPONSIVE ================
- ≤640px: single column; top nav stacks vertically; 700px column becomes
  full width with 20px side padding; entry cards stack vertically;
  tables scroll horizontally (never squish columns);
  build-log H1 scales 60px → 42px, card padding 34px→22px.

================ SEO & SHARING ================
- <html lang="zh-CN">. Semantic HTML: header/nav/main/footer/article.
- Every page: unique <title> (e.g. "资料库 · 24 周 — DeRonin 六个月中文实战站")
  + one-sentence Chinese meta description.
- OG tags on every page: og:title, og:description, og:type=website,
  og:image="og-cover.png" (1200×630 share image, provided — place it
  next to the HTML files).

================ PAGE 1: index.html ================
- Hero: "6 个月，成为 AI 工程师" + "Become an AI Engineer in 6 Months".
- Source credit at top: https://x.com/DeRonin_/status/2033587293064204349
  labeled: 原文来自 DeRonin_ · Original by DeRonin_
- 4 entry cards linking to guide / resources / notes / build-log.
  Fixed bilingual titles + one-line descriptions (use exactly):
  指南 / Guide — 从这里开始：学习路线与使用说明；
  资料库 / Resources — M1–M6 · 24 周：每章配套的学习资料；
  笔记本 / Notes — 学习笔记：按周更新，学到哪记到哪；
  建站手记 / Build Log — 建站全记录：prompt 档案、决策日志、踩坑实录.
- Progress dashboard: 6 month cards (M1–M6). Each card: month label +
  one-line theme, status text (未开始 / 学习中 / 已完成 — static text,
  Joyce updates it as she learns), link to resources.html#mN and to the
  month's first note entry notes.html#note-N. This dashboard is the visible
  learning progress; keep it prominent under the 4 entry cards.

================ PAGE 2: guide.html ================
Title: 指南 / Guide. CONTENT (use exactly, render as sections):

## 这个站是什么
DeRonin《6 个月成为 AI Engineer》路线图的中文实战站。原文 1 万多词，这里的每一页都是能直接动手的中文行动版。

## 适合谁
会一点编程、想转 AI 工程的人。不需要数学博士学位，需要的是动手。

## 怎么用
1. 按 M1→M6 的顺序学，每月一个主题。
2. 每周一个小目标：资料库里有每周的资源清单，先看标 **[必读]** 的，**[选读]** 按需看。
3. 每学完一周，在笔记本记下心得——学到哪，记到哪。
4. 好奇这个站怎么建的？去建站手记看，prompt、决策、踩坑全公开。
(Items 2–4 link to resources.html, notes.html, build-log.html respectively.)

## 路线图一句话导读
AI 工程师≠训练模型。真实工作是在现有模型上构建产品：调 LLM API、写提示词、做 RAG、搭 Agent、部署上线。6 个月，每月交付一个能跑的项目，你就是 AI 工程师。

## 原文出处
英文原文：DeRonin_《How to become an AI Engineer in 6 months (RESOURCES)》
https://x.com/DeRonin_/status/2033587293064204349

================ PAGE 3: resources.html ================
Title: 资料库 / Resources.
- Top of page: M1–M6 anchor目录 (jump links to #m1..#m6).
- Month sections carry id="m1".."m6"; week blocks id="week-1".."week-24".
- Render each week as a block: bilingual week label (e.g. "Week 1 · Python"),
  resource list (each item: resource name hyperlinked to its URL + 一句话简介
  in Chinese), then a 动手 task callout.
- Tag every resource: [必读] = matte-gold #D4A853 solid tag, white text;
  [选读] = gray outline tag, muted text. 必读 item listed first in each week.
- Each week block ends with "我的笔记 →" linking to notes.html#note-N.
- CONTENT (use exactly):

### M1：代码基本功
**Week 1 · Python**
- [必读] CS50P：哈佛 Python 入门 https://cs50.harvard.edu/python/ —— 哈佛的 Python 入门课
- [选读] Python for Everybody（Coursera，可免费旁听）https://www.coursera.org/specializations/python —— 零基础友好的 Python 入门课
- [选读] Python 官方教程 https://docs.python.org/3/tutorial/ —— 查漏补缺的手册
- 动手：写一个 CLI 小工具（记账本/天气查询），数据存 JSON 文件

**Week 2 · Git 与终端**
- [必读] Learn Git Branching https://learngitbranching.js.org/ —— 可视化练分支，半小时上手
- [选读] Pro Git（免费书）https://git-scm.com/book/en/v2 —— Git 权威指南
- [选读] MIT Missing Semester https://missing.csail.mit.edu/ —— 终端与工具链，CS 必修课
- 动手：每个项目都建 GitHub 仓库，从第一天养成习惯

**Week 3 · JSON / API / HTTP / 异步**
- [必读] MDN：HTTP 概述 https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview —— 先搞懂 GET/POST 和状态码
- [选读] requests 官方文档 https://requests.readthedocs.io/en/latest/ —— Python 发请求就用它
- [选读] Real Python：async/await https://realpython.com/async-io-python/ —— 异步一次讲透
- 动手：调用免费的 Open-Meteo 天气 API，把返回的 JSON 整理干净

**Week 4 · SQL / Pandas / FastAPI**
- [必读] FastAPI 官方教程 https://fastapi.tiangolo.com/tutorial/ —— 半天搭出第一个 API
- [选读] SQLBolt https://sqlbolt.com/ —— 交互式学 SQL，边练边学
- [选读] Kaggle Pandas 课程 https://www.kaggle.com/learn/pandas —— 数据处理上手最快
- 动手：跑通一个 FastAPI 应用，浏览器打开 /docs 玩一圈

### M2：LLM 应用开发
**Week 5 · 提示词基本功**
- [必读] Anthropic 提示词工程文档 https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview —— 官方指南，先看它
- [选读] OpenAI 提示词指南 https://platform.openai.com/docs/guides/prompt-engineering —— 对照看两家的思路差异
- [选读] PromptingGuide.ai https://www.promptingguide.ai/ —— 提示词技巧的百科全书
- 动手：为同一个真实任务写 5 版提示词，对比输出差异

**Week 6 · 结构化输出 + 工具调用**
- [必读] Anthropic Tool Use 文档 https://docs.anthropic.com/en/docs/build-with-claude/tool-use —— 工具调用官方指南
- [选读] OpenAI Structured Outputs 指南 https://platform.openai.com/docs/guides/structured-outputs —— 让模型稳定吐 JSON
- [选读] Instructor https://python.useinstructor.com/ —— Pydantic 结构化输出神器
- 动手：做一个发票解析器，返回结构化的 Python 对象

**Week 7 · 流式输出 + 对话状态**
- [必读] Simon Willison：流式 LLM API 原理 https://til.simonwillison.net/llms/streaming-llm-apis —— 流式讲得最透的一篇
- [选读] Anthropic Streaming 文档 https://docs.anthropic.com/en/api/messages-streaming —— 官方流式接口文档
- [选读] OpenAI 对话状态管理 https://platform.openai.com/docs/guides/conversation-state —— 多轮对话的上下文怎么存
- 动手：写一个终端多轮聊天机器人，带 /reset 和每轮 token 计数

**Week 8 · 成本 / 延迟 / 失败处理 / 注入防御**
- [必读] OWASP LLM01：提示词注入 https://genai.owasp.org/llmrisk/llm01-prompt-injection/ —— 安全风险必读
- [选读] OpenAI Tokenizer https://platform.openai.com/tokenizer —— 花钱之前先算 token
- [选读] Tenacity https://tenacity.readthedocs.io/ —— 重试退避，失败处理的标配库
- 动手：给你的应用加上重试、超时和降级，别让一次坏输出搞崩全场

### M3：RAG
**Week 9 · Embeddings + 切块**
- [必读] Weaviate：RAG 切块策略 https://weaviate.io/blog/chunking-strategies-for-rag —— 切块是 RAG 的隐形胜负手
- [选读] Stack Overflow：直观理解 Embeddings https://stackoverflow.blog/2023/11/09/an-intuitive-introduction-to-text-embeddings/ —— 先建立直觉
- [选读] OpenAI Embeddings 指南 https://platform.openai.com/docs/guides/embeddings
- 动手：embed 20 个句子，做一个最近邻搜索

**Week 10 · 向量数据库 + 元数据过滤**
- [必读] Chroma https://docs.trychroma.com/ —— 本地原型最快，上手零摩擦
- [选读] Pinecone 学习中心 https://www.pinecone.io/learn/ —— 托管向量库的系统教程
- [选读] pgvector https://github.com/pgvector/pgvector —— 已经在用 Postgres 就选它
- 动手：把 50–100 页文档索引进 Chroma，写一个 top-5 查询函数

**Week 11 · 重排 + 检索质量**
- [必读] Pinecone：提升检索质量 https://www.pinecone.io/learn/retrieval-augmented-generation/#retrieval-quality —— 语义漂移、切块边界问题的解法
- [选读] Cohere Rerank 文档 https://docs.cohere.com/docs/reranking-with-cohere —— 两阶段检索的第二阶段
- 动手：给 Week 10 的检索加上 rerank，对比 top-5 质量变化

**Week 12 · 幻觉控制 + 引用 + 框架**
- [必读] LlamaIndex RAG 入门 https://developers.llamaindex.ai/python/framework/understanding/rag/ —— M3 用 LlamaIndex
- [选读] Anthropic Citations https://docs.anthropic.com/en/docs/build-with-claude/citations —— 让回答带上出处
- [选读] LangChain RAG Agent https://docs.langchain.com/oss/python/langchain/rag —— M4 转 LangChain 做 Agent
- 动手：做一个"和你的文档聊天"的 FastAPI 应用，10–20 个 PDF，回答带引用

### M4：Agent 与评测
**Week 13 · Agent 循环 + 工具选择**
- [必读] Anthropic：Building Effective Agents https://www.anthropic.com/research/building-effective-agents —— Agent 必读，先读它
- [选读] OpenAI 实用 Agent 指南（PDF）https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf
- [选读] LangChain Academy：LangGraph 入门 https://academy.langchain.com/courses/intro-to-langgraph
- 动手：不用框架，纯手写一个 Agent（raw API + 3 个工具）

**Week 14 · 状态管理 + 失败重试**
- [必读] LangGraph 状态管理 https://langchain-ai.github.io/langgraph/concepts/low_level/#state —— TypedDict 状态与检查点
- [选读] Real Python：LangGraph https://realpython.com/langgraph-python/ —— 实战教程
- 动手：给 Week 13 的 Agent 加上最大迭代次数和工具级重试

**Week 15 · 什么时候不用 Agent + 工作流模式**
- [必读] Anthropic Workflow Patterns https://www.anthropic.com/research/building-effective-agents#workflow-patterns —— 链式、路由、并行、编排四种模式
- [选读] Simon Willison：设计 Agentic Loops https://simonwillison.net/2025/Sep/30/designing-agentic-loops/
- 记住：3 个固定的 LLM 调用，永远比"可能调 3 次"的 Agent 更快更便宜更好调
- 动手：做一个 3 步内容流水线——抽事实→并行生成推文+帖子+摘要→打分选最优

**Week 16 · 评测 + 成功指标**
- [必读] Hamel Husain：你的 AI 产品需要 Evals https://hamel.dev/blog/posts/evals/ —— 先读这篇再谈评测
- [选读] DeepEval https://deepeval.com/docs/getting-started —— 开源评测框架
- [选读] Promptfoo https://github.com/promptfoo/promptfoo —— prompt 回归测试
- 动手：给 M3 的 RAG 管线搭评测——30 组问答，改一个参数就重跑

### M5：部署与可靠性
**Week 17 · FastAPI 生产部署 + Docker**
- [必读] Docker 官方入门 https://docs.docker.com/get-started/ —— 容器是部署的基本功
- [选读] FastAPI 部署文档 https://fastapi.tiangolo.com/deployment/ —— Gunicorn + Uvicorn workers，别裸跑
- 动手：把 M3 的 RAG 应用容器化，docker compose 一键起（app + 向量库 + Redis）

**Week 18 · 后台任务 + 鉴权安全**
- [必读] OWASP API Security Top 10 https://owasp.org/API-Security/ —— 上线前对照检查
- [选读] FastAPI 后台任务 https://fastapi.tiangolo.com/tutorial/background-tasks/ —— 轻量任务直接用
- [选读] FastAPI 安全文档 https://fastapi.tiangolo.com/tutorial/security/ —— JWT 与 API Key
- 动手：给应用加上鉴权、限流，密钥全部走环境变量

**Week 19 · 可观测 + 提示词版本管理**
- [必读] Langfuse https://langfuse.com/docs/observability/overview —— 每次 LLM 调用全链路追踪
- [选读] LangSmith https://smith.langchain.com/ —— LangChain 生态的观测
- 注：提示词即代码——版本化每一次修改，能 A/B 测试，能回滚
- 动手：接上追踪，看一次完整请求的 prompt、输出、token、延迟、成本

**Week 20 · 成本监控 + 缓存**
- [必读] Helicone https://www.helicone.ai/ —— 成本与用量监控
- [选读] LiteLLM https://github.com/BerriAI/litellm —— 多模型统一网关
- [选读] Redis 官方文档 https://redis.io/docs/ —— 相同请求直接缓存，别重复花钱
- 动手：设每日/每月花费上限，给高频请求加上缓存，统计命中率

### M6：选方向，成为能上场的人
三个方向三选一，Week 21–Week 23 各对应一个方向，Week 24 通用。

**Week 21 · 方向一：AI 产品工程师（想快速进初创公司选它）**
- [必读] Google People + AI Guidebook https://pair.withgoogle.com/guidebook/ —— AI 产品的 UX 设计指南
- [选读] Vercel AI SDK https://sdk.vercel.ai/docs —— 前端 AI 应用的最快路径
- [选读] Streamlit https://docs.streamlit.io/ —— Python 一把梭做出 demo
- 动手：本月交付 2–3 个完整可演示的项目，部署上线

**Week 22 · 方向二：应用 ML / LLM 工程师（想走更硬核的技术路线选它）**
- [必读] OpenAI 微调指南 https://platform.openai.com/docs/guides/fine-tuning —— 先搞清何时该微调、何时不该
- [选读] Unsloth https://github.com/unslothai/unsloth —— 高效微调工具
- [选读] Ollama https://ollama.ai/ —— 本地跑开源模型做实验
- 动手：用 LoRA 微调一个小模型，对比微调前后效果，算清成本账

**Week 23 · 方向三：AI 自动化工程师（想立刻给企业做东西选它）**
- [必读] n8n 文档 https://docs.n8n.io/ —— 工作流自动化平台
- [选读] Temporal https://docs.temporal.io/ —— 可靠的工作流编排
- 动手：做一个端到端的线索筛选系统——导入线索→LLM 逐个调研→打分排序→写个性化 outreach→记入表格/CRM（能卖钱的那种）

**Week 24 · 作品集打磨 + 出发**
- 整理 6 个月的项目：每个都有 README、能跑的 demo、清晰的文档
- GitHub 主页收拾干净，项目置顶
- 公开分享学习过程（X / LinkedIn）：教是最好的学，声誉带来机会
- 别等"准备好了"：有能跑的项目就可以开始投简历、接单。市场奖励 ship 的人，不奖励完美主义者

================ PAGE 4: notes.html ================
Title: 笔记本 / Notes.
CONTENT (use exactly for the opening):
这里是学习笔记。按月分类，按周更新，学到哪，记到哪。
心得、踩坑、灵感——都记在这里。空着的地方，是还没学到的未来。
Structure: 6 month sections (M1–M6, same month themes as resources.html),
in learning order M1 → M6. Each month section: month label + theme line,
then its 4 week entries in week order.
Each week entry: id="note-1".."note-24"; week label + date line; backlink
"← 回 Week N 资料" to resources.html#week-N; 心得 body area (empty for now).
New 心得 are appended inside the matching week entry as dated sub-entries —
entries grow, the month/week skeleton stays stable no matter how many notes
accumulate.
- 心得 sub-entry format (fixed): date (e.g. "10-15") + one-line Chinese
  title + body. Example: "10-15 · 原来 embedding 就是查字典". Render
  sub-entries with clear visual separation inside the week entry.
Do NOT invent note content. Muse summarizes 心得 from conversations with
Joyce; Joyce chooses and suggests; finalized text goes live via incremental
prompt updates.
M6 notes (21–24): render all three direction entries labeled 方向一/二/三 +
Week 24. Once Joyce picks her direction, the unchosen direction entries are
removed via incremental update — do not leave permanently empty slots.

================ PAGE 5: build-log.html (LOCKED DESIGN — do not restyle) ================
This page uses its OWN visual system, intentionally different from pages 1–4.
Top nav on this page: transparent background (grid paper shows through),
dark #16161A text, same 5 bilingual items; active item ("建站手记") marked
with a rust #B0603C underline.
- Background #F4F6F9 with graph-paper grid: 28px lines rgba(120,140,170,.13).
- Content column max-width 880px, centered.
- Fonts: Inter (headings/body) + JetBrains Mono (labels/annotations/tags/code).
- Top pill "WORKSHOP": #1F1F23 bg, white mono 11.5px, letter-spacing .24em,
  border-radius 8px.
- H1 "BUILD LOG": Inter 800, 60px, #16161A. Subtitle "建站手记": 18px,
  #7A8BA0, letter-spacing .42em.
- Annotations: mono 13px, rust #B0603C, format "↳ fig.XX — note".
- Cards: white, 1px solid #E4E9F0, border-radius 16px, padding 34px 36px,
  margin-top 30px, box-shadow 0 10px 28px rgba(50,70,100,.07).
- Card header: "01 · PROMPT ARCHIVE" mono bold 15.5px #16161A + Chinese gray.
- Tags: 1.5px dashed rust border, rust text, 12.5px, border-radius 8px.
- Code: mono 13px, #FAFBFD bg, 1.5px #E4E9F0 border, radius 9px.
- Tables: "field" / "question" mono 12px gray headers, hairline dividers.
- Rust #B0603C ONLY in annotations/tags/highlights — never large backgrounds.

BUILD-LOG CONTENT (8 cards, use exactly):

### 七层筛选器（layer filter — 页面级工具栏，Card 01 上方）
位置：标题区（WORKSHOP pill / H1 BUILD LOG / 建站手记 / 项目 meta 行）下方、
Card 01 上方。筛选器控制整页 8 张卡，不属于任何一张卡。
- 一行 pill 按钮：[全部] [01 原文] [02 为什么] [03 怎么来] [04 diff]
  [05 思维] [06 验证] [07 模式]。按钮 type="button"，JetBrains Mono 12px，
  圆角 20px，1.5px 浅灰边；当前选中项 rust #B0603C 高亮。
- 每个层按钮后跟该层内容块数量（如 "07 模式 · 3"），由 JS 在页面加载时
  统计 [data-layer] 个数自动生成。
- 内容块用 data-layer="NN" 标注归属层；整卡归属一层时标在 card div 上；
  可属多层，如 data-layer="01 04"。
- 点击某层：只显示该层的内容块，其余 display:none；过滤后无可见内容的卡片
  整卡隐藏（JS 检查每张卡除标题外是否还有可见子元素）；筛选栏与七层解释表
  始终可见。点"全部"恢复全文。
- 专业交互（必须）：每次选择后 JS 用
  scrollIntoView({behavior:'smooth'}) 平滑回到筛选栏，视口稳定，
  绝不突然跳页。
- data-layer 归属对照：
  - 01: Card 01 顶部版本段落（v1 / v2 / v1→v2 diff / v2完整版）
  - 02: Card 03 整卡
  - 03: Card 05 复盘段落（10-05→10-07）
  - 04: Card 08 整卡；Card 01 的 v1→v2 diff 行（标 data-layer="01 04"）
  - 05: Card 05 "质量来自三点"段、"内容策略反转的取舍"段
  - 06: Card 02 / Card 04 / Card 06 整卡；Card 01 fig.06 回填清单 + 记分行
  - 07: Card 07 整卡；Card 05 四条心法
    （大方向先对齐 / 需求一次说全 / 带最小上下文 / 好坏都要存）
- Card 01 另加"七层解释"表（列：层 / 解释 / 谁填），use exactly：
  01 prompt 全文存档——保证可复现 / Muse（先存档再粘贴）；
  02 关键决策的技术理由——下次同类问题直接抄 / Muse 从对话提炼；
  03 需求从聊天变成 prompt 的全过程——还原沟通路径 / Muse 整理；
  04 与上一版的差异——一眼看懂改了什么 / Muse 对比；
  05 Joyce 思维过程的迭代——记录认知升级 / Muse 提炼，Joyce 确认；
  06 AI 到底听懂了多少——对照清单打勾，跑偏项分类记坑 / 真机用后 Muse 帮记；
  07 沉淀出的 prompt 技巧——下次写 prompt 直接抄 / Muse 提炼，真机后补充。

Card 01 · PROMPT ARCHIVE 档案. Tags: v1-单页版 · 2026-10-05 / v2-五页版 ·
2026-10-06 / v2-完整版 · 2026-10-07.
- v1: 六个月内容装进一个页面。需求一次说全，AI 一次做对。原文已归档。
- v2: 五页——首页入口仪表盘；指南、资料库、笔记本、手记各一页。导航、配色、
  700px 阅读宽一次写死。
- v1→v2 diff: 单页→五页；新增五项顶部导航；首页四张入口卡片；纯静态无框架。
- v2完整版（2026-10-07）: 10-06 v2 prompt 原文未存档，本次完整重制；build-log
  视觉锁定网格纸+白卡片，8 章内容一次写死。
- fig.02: 七层存档：01原文 02为什么这样写 03怎么来的 04与上一版diff 05思维迭代
  06效果验证（待真机） 07可复用模式（待真机）。
- fig.06 v2 完整版效果验证回填清单（网站生成后逐项打勾）：
  1) 5 页文件名全 2) 导航 5 项双语一致 3) 三色用对 4) 700px+双语标题
  5) footer 三件套 6) 三字体加载 7) 移动端 ≤640px 8) 4 卡片文案一字不差
  9) dashboard 六卡+深链 10) 24 周+23 必读+40 选读 11) 双向锚点通+外链新标签
  12) notes 月结构+24 空位 13) build-log 视觉锁定+8 卡片一字不差 14) SEO/OG 全。
  记分：忠实执行 __/14，跑偏项记入 Card 04。
- Code: DO NOT: no lorem ipsum, no fake content, no placeholder images.

Card 02 · ITERATION RATINGS 迭代评级. fig.03: 三档通用，后续项目沿用。
- ✅ 好的：暖纸三色一次定死零返工；需求一次说全 v2 一次做对；方向评审前置。
- ➖ 一般的：v2 提示词当时没存原文。教训：写完先存档。
- ❌ 踩坑的：未验证"终端 bug"差点入库，已拦截。铁律：亲验才入库。

Card 03 · DECISION LOG 决策日志. fig.04: 每次为什么这样定，都有出处。
- [2026-10-05] 暖纸三色 #FAF9F6 / #2E2A26 / #D4A853：第一版一次定死，零返工。
- [2026-10-05] 纯静态无框架：P0 动手作业，Joyce 亲手建仓库、看 diff、讲代码、commit/push、开 Pages。
- [2026-10-06] 五页结构：index / guide / resources / notes / build-log。
- [2026-10-06] 700px 阅读宽：长文舒适刚需；中文正文，英文术语首次配双语。
- [2026-10-06] 双语标题：英文大在上、中文小在下。
- [2026-10-07] 手记视觉锁定：六轮迭代对比多版，否决 Kindle 手写版（"不好看，乱"），锁定网格纸+白卡片 mockup。"保持这个，不要变了。"
- [2026-10-07] 内容策略反转：10-05 定的"学到哪章做哪章"改为"一次生成"。24 周内容一次写死。
- [2026-10-07] 必读/选读制：63 个资源链接全部分级，每周 1 个必读（深读），其余选读。
- [2026-10-07] 双向链接：resources Week N ↔ notes note-N 锚点互链；dashboard 深链到周。
- [2026-10-07] 笔记按月分类：M1–M6 月结构，月内按周；新心得以日期子条目追加。
- [2026-10-07] 手记页无输入框：纯静态站无后端，走正道不加。心得分工：Muse 总结，Joyce 选择和建议。

Card 04 · PITFALLS 踩坑记录. fig.05: 本章铁律：Joyce 亲自验证过才能写。
- 未验证先写（已拦截）：验证过再加，不能有误导。
- v2 原文事后补档：写完先存档再庆祝（流程硬性步骤）。
- 空着比错着强。

Card 05 · COMMUNICATION 沟通迭代. fig.06: 聊天发散，prompt 收敛。
- 大方向先对齐：贵的东西动手前先评审方向。
- 需求一次说全：下单前把聊天里的要求收拢成清单。
- 带最小上下文：关键约束每次重申。
- 好坏都要存：这次好坏都记，下次直接用。
- 复盘 10-05→10-07：v1 上线零返工 → v2 一次生成成功但原文丢失（教训变制度：先存档再庆祝）→ 视觉六轮迭代锁定 → 内容一次到位。质量来自三点：方向评审前置、结构内容定稿三步走、每个坑都长出一条规矩。
- 内容策略反转的取舍：原"学到哪做哪章"（验证前置，网站永远半成品）→ 现"一次生成"（网站先完整，验证后置到学习过程）。简介有原文出处，非编造。先完成再完美。

Card 06 · DATA SCHEMA 数据字段. fig.07: 先有真问题，再加字段。
- 总用时 / 迭代次数 / AI 沟通次数 / 一次通过率（prompt 质量硬指标） /
  返工次数 / 好一般坑计数 / 上线后缺陷数 / 新概念数。

Card 07 · TYPOGRAPHY SPEC 排版规范. fig.08: 这是招牌，终身适用。
- 三色 #FAF9F6 / #2E2A26 / #D4A853；阅读宽 700px；双语标题英上中下；
  中文正文短句；克制留白；数字承诺用数字，收集用圆点，流程用箭头。
- 注：手记页用网格纸+白卡片，和主站暖纸风刻意区分。

Card 08 · CHANGELOG 标准变更日志. fig.09: 规矩怎么变的，都有档。
- 2026-10-05：暖纸三色定死；v1 单页版 prompt 定稿；P0 动手制确立。
- 2026-10-06：双语标题制式 + 700px + 五页导航；v2 五页版 prompt 定稿（原文未存档，丢失）；晚定五页框架。
- 2026-10-07：8 章法定稿；七层存档法确立；"未验证不入库"铁律；手记视觉六轮迭代锁定。
- 2026-10-07：v2 完整版 prompt 重制（一贴即用）；2–4 页内容一次到位（guide 全文 + 24 周 + notes 开篇）。
- 2026-10-07：必读/选读制（23 必读 + 40 选读）；双向链接架构；笔记按月分类；SEO/OG 与发布前补齐（footer、移动端、字体栈）。

Footer: fig.10 本页完. 06 效果验证 / 07 可复用模式 —— 等真机用过网站后补。

================ DO NOT ================
- No lorem ipsum, no fake content, no placeholder images or text.
- Do not change either visual system. Do not mix warm-paper style into
  build-log.html or grid-paper style into pages 1–4.
- No dark backgrounds. No JavaScript frameworks.
- Page content is complete and fixed — render it exactly as given.
  Do not invent additional resources, links, or descriptions.
- Resource tags: 必读 = matte-gold #D4A853 solid tag, white text;
  选读 = gray outline tag, muted text. 必读 listed first in each week.
- Anchor ids week-N ↔ note-N must match exactly between resources.html
  and notes.html; dashboard links to #m1..#m6 must exist.
```

## P0 通过标准（自查）

1. prompt 原样粘贴进 Antigravity ✓/✗
2. 生成 5 个页面 ✓/✗
3. 看过 diff，知道改了什么 ✓/✗
4. 问过它不懂的代码段 ✓/✗
5. 能用自己的话讲出 3 段代码的作用 ✓/✗
6. commit + push ✓/✗
7. GitHub Pages 线上能打开 ✓/✗
