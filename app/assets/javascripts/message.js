$(function(){

  function buildHTML(message){
  var text = message.text ? `${message.text}` : "";
  var image = message.image ? `${message.image}`:"";
  var html =`<div class="message" data-message-id = ${ message.id }>
               <div class="upper-info">
                 <p class="upper-info__user">
                   ${ message.name }
                 </p>
                 <p class="upper-info__date">
                  <span class="supText">
                    ${ message.created_at }
                  </span>
                 </p>
                </div>
               <div class="message__text">
                  ${ text }
               </div>
               <div class ="image">
               <image src="${image}">
                </div>`
    return html;
  }
  function scroll() {
    $('.messages').animate({scrollTop: $(".messages")[0].scrollHeight});
}
  $("#new_message").on("submit",function(event){
    event.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#new_message')[0].reset();
      $('.submit').prop('disabled', false);
      scroll()
  })
  .fail(function(){
    alert('送信できません。');
    $('.form__submit').prop('disabled', false);
})
.always(function() {
  $(".submit").removeAttr("disabled");
  });
})
var reloadMessages = function() {
  if (window.location.href.match(/\/groups\/\d+\/messages/)){
  var last_message_id = $('.message:last').data("message-id");
  $.ajax({
    url:'api/messages',
    type: 'GET',
    dataType: 'json',
    data: {last_id: last_message_id} 
  })
  .done(function(messages) {
    var insertHTML = '';
    messages.forEach(function(message){
      insertHTML = buildHTML(message);
      $('.messages').append(insertHTML);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
  })
  .fail(function() {
    console.log('error');
  })
  .always(function(){
   $(".submit").removeAttr("disabled");
  })
}else{
  return;
}
}
setInterval(reloadMessages, 5000);
})

