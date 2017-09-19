// 定数の定義
var url = ''; // コールバックするURL
var client_id = ''; // SquareのアプリケーションID

// Onsen UIが使える状態になったところから処理開始
ons.ready(function() {
  // ボタンを押した時のイベント処理
  $('#square').on('click', function(e) {
    // 変数の取得
    var price = $('#price').val();
    var notes = $('#notes').val();
    var supported_tender_types = $("input[name='supported_tender_types[]']:checked").map(function() {
      return $(this).val();
    }).toArray();

    // パラメータの生成
    var dataParameter = {
      // インテントのアクション。 com.squareup.pos.action.CHARGE 固定です。
      "action": "com.squareup.pos.action.CHARGE",
      // POSレジアプリがコールバックするURL
      "S.com.squareup.pos.WEB_CALLBACK_URI": url,
      // アプリケーションID（自分のものに置き換えてください）
      "S.com.squareup.pos.CLIENT_ID": client_id,
      // バージョン（現在は1.3固定です）
      "S.com.squareup.pos.API_VERSION": 'v1.3',
      // 金額に関する情報
      "i.com.squareup.pos.TOTAL_AMOUNT": price,
      "S.com.squareup.pos.CURRENCY_CODE": "JPY",
      // 利用できる決済方法
      "S.com.squareup.pos.TENDER_TYPES": supported_tender_types.join(","),
      // パッケージ。必ず com.squareup を指定
      "package": "com.squareup",
      // 取引に関する説明書き
      "S.com.squareup.pos.NOTE": notes
    };
    
    // URLの生成
    params = [];
    for (var key in dataParameter) {
      params.push(`${key}=${dataParameter[key]}`);
    }
    var uri = "intent:#Intent;" + params.join(';') + ';end';
    
    // POSレジアプリ呼び出し
    location.href = uri;
  });
});