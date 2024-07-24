<?  //type="text/javascript"
 echo ' <!-- Plugins JS File -->

<script src="/coreHost/themes/YM/js/app.min.js"></script>
<script src="/coreHost/themes/YM/js/main.js"></script>
  

    ';
 echo placeModulEcho('metrika');


//Антиспам
  echo jsScript("
  $('#".safeSession('contactFormNameName')."').on('paste', function(e) {
  var old=$(e.target).val();
  setTimeout(function () {
    var text = $(e.target).val();
    console.log(text);
    $(e.target).val(old);
  }, 10);
});

  $('#".safeSession('contactFormMsgName')."').on('paste', function(e) {
  var old=$(e.target).val();
  setTimeout(function () {
    var text = $(e.target).val();
    console.log(text);
    $(e.target).val(old);
  }, 10);
});

  $('#c".safeSession('contactFormNameName')."').on('paste', function(e) {
  var old=$(e.target).val();
  setTimeout(function () {
    var text = $(e.target).val();
    console.log(text);
    $(e.target).val(old);
  }, 10);
});

  $('#c".safeSession('contactFormMsgName')."').on('paste', function(e) {
  var old=$(e.target).val();
  setTimeout(function () {
    var text = $(e.target).val();
    console.log(text);
    $(e.target).val(old);
  }, 10);
});


");

?>