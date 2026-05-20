const express = require("express");

const app = express();

app.use(express.json());

app.post("/ai", (req, res) => {

    const userInput = req.body.prompt;

    let result = "";

    if(userInput.includes("你好")) {
        result = "你好，我是 AI 助手";
    } else {
        result = "我收到你的问题：" + userInput;
    }

    res.json({
        success: true,
        answer: result
    });

});

app.listen(3000, () => {
    console.log("服务器启动成功");
});