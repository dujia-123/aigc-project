const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("AIGC 股票分析项目运行成功！");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
