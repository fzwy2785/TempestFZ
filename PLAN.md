# 6-month Web3 + Python Plan
# 🎯 目标

* 6 个月内，以**每天 2 小时**为主，完成从零到可投递的 **Web3 全栈 + 智能合约**技能树；
* 作品集 ≥ 3 个（含前后端+合约+文档+演示）；
* 会用 **Solidity/Foundry/Hardhat + React/Next.js + Ethers.js/Viem + web3.py/Python 数据**；
* 优先适配**国际远程**，兼容日本本地岗位。

---

# 学习原则（Why 这样设计）

1. **Solidity + React 是找工主线**：与岗位技能匹配度最高；
2. **Python 作为竞争力加成**：脚本化运维、数据抓取、自动化、分析；
3. **以项目驱动**：每 2–4 周产出可展示的里程碑；
4. **安全与测试优先**：面试与实战都重视（Foundry/Hardhat 测试、审计常识）；
5. **英语 README + Demo 视频**：面向国际远程；
6. **低干扰工具链**：Mac 可复用（你已装有 Homebrew、nvm）。

---

# 每日配比（2 小时）

* 主线 90 分钟：JS/TS ⇢ Solidity ⇢ React/Next + Ethers/Viem ⇢ 项目部署
* Python 30 分钟：语法 ⇢ web3.py ⇢ Pandas/数据脚本 ⇢ 小工具
* 每周 1 天留 20 分钟做总结/复盘/打卡

---

# 24 周路线图（每周清单 + 可度量产出）

> 备注：★ 为“可验证交付物”；✅ 为达成条件。每周至少在 GitHub 打一个 Tag 并发一条英文周报（Issue/Discussion）。

## Phase 0 · Week 0（准备日，0.5–1 天）

* 装好：Node LTS、pnpm、VS Code、Solidity 插件、Foundry、MetaMask、Git。
* ★ 创建 GitHub 仓库 `web3-journey`，写 `README(EN/中文)` 说明目标与计划。

## Phase 1 · JS/TS & 计算思维（Week 1–4）

**Week 1** 基础 JS

* 变量/类型/函数/数组/对象；Node 基本 I/O。
* ★ CLI Todo/Weather 小工具；✅ 代码通过 `node` 运行，含 README。

**Week 2** 现代 JS & TS 入门

* 模块化、Promise/async、Fetch；TS 基础类型。
* ★ 重写 Week1 工具为 TS 版本；✅ `pnpm build && pnpm start` 通过。

**Week 3** Git/测试思维

* Git 分支/PR；Vitest/Jest；ESLint/Prettier。
* ★ 给工具补 6+ 单测；✅ CI 通过（GitHub Actions）。

**Week 4** 计算思维/数据结构

* Map/Set、时间复杂度、常见题型（两数之和/括号匹配）。
* ★ 5 道题解（中文+英文），✅ 每题复杂度分析清晰。

## Phase 2 · 区块链基础 & Solidity（Week 5–12）

**Week 5** 区块链基元

* 钱包、公私钥、交易、Nonce、Gas、EVM、ABI。
* ★ 用 `cast`/`web3.py` 读取链高度与余额；✅ mainnet/testnet 均可。

**Week 6** Solidity 语法 I

* 状态变量、函数、事件、错误、modifier、fallback/receive。
* ★ “储蓄罐”合约 + 单测（Foundry）；✅ 存取款与事件测试覆盖>80%。

**Week 7** Solidity 语法 II

* 继承、库、接口、`try/catch`、`delegatecall` 场景。
* ★ 计费器/白名单合约；✅ 基于 `Ownable` 权限控制。

**Week 8** 标准：ERC-20

* `transfer/approve/permit(EIP-2612)`、`EIP-20` 事件。
* ★ 自定义 ERC-20（含 Permit）+ Fuzz 测试；✅ 符合接口、边界过关。

**Week 9** 标准：ERC-721 / 721A

* 元数据、`tokenURI`、批量 mint、版税（EIP-2981）。
* ★ NFT 合约（721A）+ 基准测试；✅ Gas 报告附在 README。

**Week 10** 合约安全

* 复入/访问控制/DoS/价格预言机/签名重放；`pull over push`。
* ★ 完成 3 题 Ethernaut & 写解题报告；✅ 漏洞复现实验录屏。

**Week 11** 工具链：Foundry & Hardhat

* Foundry（forge/cast/anvil）速度快；Hardhat 适合 JS 生态与部署脚本。
* ★ 同一合约分别用两套工具测试；✅ CI 同时跑通。

**Week 12** 测试网部署

* Sepolia/Holesky；私钥与 RPC 管理；.env 安全；多环境配置。
* ★ 将 ERC-20 与 NFT 部署到 testnet；✅ 在区块浏览器验证合约。

## Phase 3 · 前端 + DApp（Week 13–20）

**Week 13** React 基础

* 组件/状态/Hooks；Next.js + App Router；CSR/SSR 基础。
* ★ Next.js 启动脚手架 + Tailwind；✅ 可访问 `/health`。

**Week 14** 钱包连接 & 合约交互

* Ethers.js & Viem、wagmi、RainbowKit；读取/写入交易、事件监听。
* ★ “账户仪表盘”页面（余额、最近交易）✅ 支持切换网络。

**Week 15** DApp 模式 I（ERC-20 工具）

* Approve/Allowance、批量转账、签名 `permit` 流程。
* ★ “代币工具箱”前端；✅ 连接你 Week 8 的 ERC-20。

**Week 16** DApp 模式 II（NFT Mint）

* 铸造白名单、Merkle 树；上传元数据到 IPFS（web3.storage/Pinata）。
* ★ Mint 站点；✅ 可视化铸造进度、铸造上限控制。

**Week 17** DApp 模式 III（投票/DAO）

* 可升级合约初识；链上/链下提案；签名与校验。
* ★ 简易 DAO 投票；✅ 前端展示提案与投票权重。

**Week 18** UX/错误处理/性能

* 交易状态提示、重试/取消、队列；Gas 估算；小组件抽象。
* ★ 共用 `useTx()` Hook；✅ 失败路径有清晰提示。

**Week 19** 部署与可观测性

* Vercel/Cloudflare Pages；Sentry/LogRocket；合约上下文配置。
* ★ 前端正式上线；✅ README 内含演示链接与截图。

**Week 20** 可访问性与国际化

* i18n（en/zh/ja）、语义化、键盘可达性。
* ★ 最终 UI 打磨；✅ Lighthouse 基础分数 ≥ 90。

## Phase 4 · 总结、强化与求职（Week 21–24）

**Week 21** 项目整合

* 选 2–3 个最佳项目打磨功能、补测试、补文档。
* ★ 录英文 Demo（3–5 分钟）；✅ 脚本与字幕。

**Week 22** 面试准备（Solidity）

* 常考：存储布局、代理/可升级、权限模型、事件与索引、签名与 EIP-712、重入防护、`tx.origin` 与 `msg.sender`、`CREATE2`、Gas 优化。
* ★ 20 道问答卡片；✅ 每题 2–3 句英文要点。

**Week 23** 面试准备（前端 & DApp）

* wagmi/Viem/ethers 区别、钱包注入、事件驱动 UI、缓存与 SWR、部署与环境变量安全。
* ★ 手写 2 个常见交互代码片段；✅ 讲清楚权衡。

**Week 24** 求职一周冲刺

* 简历（英文/日文），项目导向；LinkedIn/GitHub 优化；
* 针对性求职话术（自我介绍/项目深挖/安全问题）；
* ★ 投递 30+ 定制化岗位，记录表格；✅ 每日复盘并迭代简历。

---

# 三个“作品集级”项目（任选其二+）

1. **Token 工具箱**（ERC-20 + 前端）

   * 功能：余额/转账/批量转账/Permit、Allowance 可视化、事件流。
   * 技术：Foundry+Hardhat 测试、Next.js+wagmi+Viem、RainbowKit、Vercel。
   * 文档：英文 README、架构图、Gas 报告、.env 模板、演示视频。

2. **NFT Mint & 市场 Demo**（721A + 前端）

   * 功能：白名单 Merkle、限量、签名铸造、二级市场挂单/成交（简化）。
   * 技术：IPFS（web3.storage/Pinata）、事件索引、前端订单簿。
   * 安全：重入/授权边界/价格校验；附 Ethernaut 学习链接。

3. **DAO 投票系统**（治理 Token + 投票合约 + UI）

   * 功能：提案/投票/执行、快照式权重、时间锁。
   * 技术：可升级代理（OpenZeppelin UUPS）、多网络部署脚本、i18n。

---

# Python “30 分钟支线”路线（并行 24 周）

* Week 1–2：语法（if/for/list/dict/函数）；`requests`/`dotenv`；
* Week 3–4：`web3.py` 读链高、余额、ERC-20 代币信息；
* Week 5–6：批量地址处理、签名与交易发送（testnet）；
* Week 7–8：Etherscan/Blockscout API 抓取交易历史；
* Week 9–10：`pandas` 清洗与聚合（近 30 天活跃、费用分布）；
* Week 11–12：小工具：**“地址监控机器人”**（新交易即日志输出/邮件）；
* Week 13–16：The Graph 入门（可选）或直接按 REST/CSV 做分析报表；
* Week 17–20：为你的 DApp 写“运营脚本”（批量空投/白名单铸造）；
* Week 21–24：整理脚本到 `scripts/` 并写使用说明与示例配置。

---

# 工具与栈（建议统一）

* **语言**：TS（主），Python（辅），Solidity（合约）
* **合约**：Foundry（测试快）+ Hardhat（部署/脚本丰富）
* **前端**：Next.js + wagmi + Viem（或 ethers.js）+ Tailwind + RainbowKit
* **部署**：Vercel（前端）、Holesky/Sepolia（合约）
* **存储**：IPFS（web3.storage/Pinata）
* **质量**：ESLint/Prettier、Vitest、GitHub Actions、Sentry

---

# 节奏表（每周模板）

* Mon–Thu（4×90'+30'）：学习 + Coding
* Fri（90'）：测试/重构/补文档；（30'）Python 小结
* Sat（30'）：英文周报（本周做了什么 / 下周计划 / 阻碍）
* Sun：休息或补课

---

# 验收标准（可量化）

* 测试覆盖率：核心合约 ≥ 80%，关键分支有 Fuzz/Property Test
* Lint/CI：所有分支 PR 必须过 Lint + Test + Build
* 文档：每个项目 README（EN/中文）+ 架构图 + .env 样例 + 运行命令
* 演示：每个项目 3–5 分钟英文录屏（讲清“问题→方案→权衡”）
* 面试清单：40 题 Solidity & 20 题 DApp 问答卡片

---

# 求职作战（Week 21–24 重点）

* **渠道**：LinkedIn、Web3.career、CryptoJobs、RemoteOK、AngelList（Wellfound）
* **素材**：英文/日文简历（项目导向）、GitHub 置顶 3 项目、个人站/Notion 作品集
* **打法**：每个 JD 定制求职信（3 段：动机/匹配/作品链接），日更投递表
* **面试**：

  * 行为面：STAR 法，1 分钟自我介绍；
  * 技术面：白板合约题、事件/日志、EIP-2612/712 签名流程；
  * 家庭作业：48 小时内给最小 Demo（你已有模板仓库可复用）。

---

# 你现在可以立刻做的事（Today Checklist）

1. 新建 GitHub 仓库 `web3-journey`，提交本路线 `PLAN.md`；
2. 装 Foundry：`curl -L https://foundry.paradigm.xyz | bash && foundryup`
3. 初始化合约仓库：`forge init token-toolbox && cd token-toolbox && forge build`
4. 打开 Issue：`[Week 1] JS 基础与 CLI 小工具`；
5. 约定每天一个 140 字英文学习日志（提交到仓库）。

---

# 选项 A / B（先学顺序）

* **A：Solidity-first（更快进入岗位核心，建议）**：Week 1 后即进入合约主线；JS/前端并行推进。
* **B：JS-first（曲线更稳）**：先把 Week 1–4 打实，再进合约。

> 任选其一即可，我会按你的选择细化到「每日任务级别」。
