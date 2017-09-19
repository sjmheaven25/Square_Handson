// �萔�̒�`
var url = 'https://stormy-retreat-14719.herokuapp.com'; // �R�[���o�b�N����URL
var client_id = 'sq0idp-x3svdjjm33nM4EQstkE4kw'; // Square�̃A�v���P�[�V����ID

// Onsen UI���g�����ԂɂȂ����Ƃ��납�珈���J�n
ons.ready(function() {
  // �{�^�������������̃C�x���g����
  $('#square').on('click', function(e) {
    // �ϐ��̎擾
    var price = $('#price').val();
    var notes = $('#notes').val();
    var supported_tender_types = $("input[name='supported_tender_types[]']:checked").map(function() {
      return $(this).val();
    }).toArray();

    // �p�����[�^�̐���
    var dataParameter = {
      // �C���e���g�̃A�N�V�����B com.squareup.pos.action.CHARGE �Œ�ł��B
      "action": "com.squareup.pos.action.CHARGE",
      // POS���W�A�v�����R�[���o�b�N����URL
      "S.com.squareup.pos.WEB_CALLBACK_URI": url,
      // �A�v���P�[�V����ID�i�����̂��̂ɒu�������Ă��������j
      "S.com.squareup.pos.CLIENT_ID": client_id,
      // �o�[�W�����i���݂�1.3�Œ�ł��j
      "S.com.squareup.pos.API_VERSION": 'v1.3',
      // ���z�Ɋւ�����
      "i.com.squareup.pos.TOTAL_AMOUNT": price,
      "S.com.squareup.pos.CURRENCY_CODE": "JPY",
      // ���p�ł��錈�ϕ��@
      "S.com.squareup.pos.TENDER_TYPES": supported_tender_types.join(","),
      // �p�b�P�[�W�B�K�� com.squareup ���w��
      "package": "com.squareup",
      // ����Ɋւ����������
      "S.com.squareup.pos.NOTE": notes
    };
    
    // URL�̐���
    params = [];
    for (var key in dataParameter) {
      params.push(`${key}=${dataParameter[key]}`);
    }
    var uri = "intent:#Intent;" + params.join(';') + ';end';
    
    // POS���W�A�v���Ăяo��
    location.href = uri;
  });
  
  if (location.search) {
    try{
      // �R�[���o�b�N���ꂽ�ꍇ
      var url = location.search.replace('?', '');
      ary = url.split('&');
      var params = {};
      for (var i = 0; i < ary.length; i++) {
        values = ary[i].split('=');
        params[values[0]] = values[1];
      }
      if (params['com.squareup.pos.CLIENT_TRANSACTION_ID']) {
        // ���ϊ���
        $('.alert-dialog-title').text('���Ϗ�������');
        $('.alert-dialog-content').text('���ID��' + params['com.squareup.pos.CLIENT_TRANSACTION_ID'] + '�ł�');
        $('#dialog').show();
      }else{
        // ���σG���[
        $('.alert-dialog-title').text('���Ϗ������s');
        $('.alert-dialog-content').text('�G���[�R�[�h�F' + params['com.squareup.pos.ERROR_DESCRIPTION']);
        $('#dialog').show();
      }
    } catch(e) {
      // �G���[�̏ꍇ
      $('.alert-dialog-title').text('���Ϗ������s');
      $('.alert-dialog-content').text('�f�[�^���s���ł�');
      $('#dialog').show();
    }
  }

  var hideDialog = function() {
  $('#dialog').hide();
};
});

