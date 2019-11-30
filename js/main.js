$( document ).ready(function() {
  $("#btn").click(
  function(){
    sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
    return false; 
  }
);
});

function sendAjaxForm(result_form, ajax_form, url {
  $.ajax({
      url:     action_ajax_form.php, 
      type:     "POST", 
      dataType: "html", 
      data: $("#"+ajax_form).serialize(),  
      success: function(response) { 
        result = $.parseJSON(response);
        $('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
    },
    error: function(response) { 
          $('#result_form').html('Ошибка. Данные не отправлены.');
    }
 });
}

}$(document).ready(function() {  
  $("#validate").keyup(function(){
     
     var email = $("#validate").val();
   
     if(email != 0)
     {
     if(isValidEmailAddress(email))
     {
     $("#validEmail").css({
   "background-image": "url('validyes.png')"
     });
     } else {
     $("#validEmail").css({
   "background-image": "url('validno.png')"
     });
     }
     } else {
     $("#validEmail").css({
   "background-image": "none"
     }); 
     }
   
     });
   
     });
   
     function isValidEmailAddress(emailAddress) {
     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
     return pattern.test(emailAddress);
     }