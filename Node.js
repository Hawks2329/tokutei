const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// POSTリクエストを受け付けるエンドポイント
app.post('/api', (req, res) => {
    const data = req.body;

    // サーバーサイドでデータを表示
    console.log('受信したデータ:', data);

    // クライアントに成功応答を送信
    res.json({ message: 'データを受信しました。' });
});

app.listen(port, () => {
    console.log(`サーバーがポート ${port} で起動しました。`);
});
