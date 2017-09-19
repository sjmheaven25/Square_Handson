// �萔�̒�`
var url = ''; // �R�[���o�b�N����URL
var client_id = ''; // Square�̃A�v���P�[�V����ID

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
});