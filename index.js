const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// ライブラリ読み込み
const unirest = require('unirest');
const uuidv1 = require('uuid/v1');

// 定数設定
const accessToken = 'MY_ACCESS_TOKEN';
const location_id = 'MY_LOCATION_ID';
const url = 'http://localhost:3000';

// POSTのBody処理に必要
const bodyParser = require('body-parser');
app.use(bodyParser());

// 静的ファイルはpublic以下に
app.use(express.static('public'));

// レンダリングはejs
app.set('view engine', 'ejs');

// 注文処理
app.post('/orders', function (req, res) {
  // 注文処理を実行します
  console.log(req.body);
  
  // データを取得します
  
  // URL
  
  // REST APIをコールします
    // POSTメソッドを指定します
    // ヘッダー情報です。アクセストークンを指定します
    // sendの中でパラメータを指定します
      // Squareから取得したnonceを設定します
      // 金額を指定します
      // ユニークなIDを設定します
      // 処理がうまくいけばこちらに結果がきます
      // 再読込で処理が重複実行されないよう、リダイレクトします

});

// EコマースAPIの処理が成功した場合です
app.get('/success', function(req, res) {
  
});

// Square CheckoutのURLを生成してリダイレクトします。
app.post('/checkout', function(req, res) {
  // パラメータの設定
    // 決済後に戻ってくるURL
    // ユニークなID
    // 住所を必要とするかどうか
    // 販売店のサポートメールアドレス
    // 注文情報について
      // サーバ側で指定するリファレンスIDです。
    // 購入者のメールアドレス（オプション）
    // 購入者の配送先情報（オプション）
  
  // 擬似的に5つの商品を生成します
      // 商品名
      // 数量（文字列指定）
      // 商品価格
      // 値引き情報
        // 値引きの名称
        // 値引き価格
      // 税金に関する情報
        // 税金の名前
        // 税金のパーセンテージ
        // 種類
  
  // Web APIのURL
  
  // REST APIをコールします
    // POSTメソッドを指定します
    // ヘッダー情報です。アクセストークンを指定します
    // sendの中でパラメータを指定します
      // 処理がうまくいけばこちらに結果がきます
      // Square CheckoutのURLに飛びます
});

// Square Checkout後にコールバックされるURLです
app.get('/callback', function(req, res) {
  
});

app.listen(port, function () {
  console.log(`http://127.0.0.1:${port}/ を開いてください。`);
});
