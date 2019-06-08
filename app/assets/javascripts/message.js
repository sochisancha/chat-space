$(function(){

  function buildHTML(message){
  var html =`<div class="message">
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
                  ${ message.text }
               <div>
               <div class ="image">
               ${message.image}
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
      $('.input-text').val('');
      $('.submit').prop('disabled', false);
      scroll()
  })

  .fail(function(){
    alert('送信できません。');
    $('.submit').prop('disabled', false);
})


})


})

