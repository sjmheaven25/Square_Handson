const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// 静的ファイルはpublic以下に
app.use(express.static('public'));

// 注文処理
app.post('/orders', function (req, res) {
  // 注文処理を実行します
  
});

app.listen(port, function () {
  console.log(`http://127.0.0.1:${port}/ を開いてください。`);
});
