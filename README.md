# AI 股票分析项目

## 项目介绍

这是一个基于 Node.js 的 AI 股票分析系统。

用户输入股票代码后，系统会调用 AI 大模型（LLM）对股票数据进行分析，并返回 JSON 格式的分析结果，包括股票总结、市场情绪以及风险等级。

项目部署在 Vercel 平台，并通过 GitHub 进行代码管理。

---

# 技术栈

## 前端
- HTML
- JavaScript

## 后端
- Node.js
- Express

## AI
- OpenAI API
- LLM（大语言模型）

## 数据格式
- JSON

## 部署
- Vercel

## 代码管理
- GitHub

---

# Prompt 示例

```txt
You are a stock analyst.

Return ONLY valid JSON.

{
  "summary":"...",
  "sentiment":"Bullish",
  "risk_level":"Medium"
}
Debug 记录
问题1

node is not defined

原因

Node.js 未正确安装，导致系统无法识别 node 命令。

解决

重新安装 Node.js，并重启 CMD 终端。

问题2

npm ERR! enoent package.json not found

原因

当前目录下没有 package.json 文件。

解决

先进入项目目录，再执行 npm install。

问题3

Git push 失败

原因

GitHub 未完成身份验证，或者 token 配置错误。

解决

重新登录 GitHub，并完成授权。

问题4

Cannot GET /

原因

Express 未配置首页路由。

解决

后续增加 app.get('/') 路由接口。

在线地址

https://aigc-project.vercel.app

GitHub 仓库

https://github.com/dujia-123/aigc-project
