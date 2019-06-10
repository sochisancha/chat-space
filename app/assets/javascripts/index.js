$(function(){
  var user_list = $("#user-search-result");
  function appendUser(user){
    var html = `<div class="chat-group-user clearfix">
                  <div class="chat-group-user__name">${user.name}</div>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
               </div>`
      user_list.append(html);
  }
  function appendErrMsgToHTML(msg){
  var html = `<div class="chat-group-user clearfix">
                <div class="chat-group-user__name">${msg}</div>
              </div>`
      user_list.append(html);
  }
  function appendList(member_id,member_name){
    var html = `<div class="chat-group-user clearfix">
                <input name='group[user_ids][]' type='hidden' value=${member_id}>
                  <div class="chat-group-user__name">${member_name}</div>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                </div>`
    var member_list = $("#chat-group-users");
                member_list.append(html);
    }

 $("#user-search-field").on("keyup",function(){
   var input = $("#user-search-field").val();
   $.ajax({
    type: 'GET',
    url: '/users',
      data: { keyword: input },
      dataType: 'json',
      processData:true,
      contentType:false
   })
   .done(function(users){
    $("#user-search-result").empty();
     if (users.length == 0 ){
        appendErrMsgToHTML("一致する名前はありません");
     }else{
       users.forEach(function(user){appendUser(user);})
     }
   })
   .fail(function() {
    alert('グループの編集に失敗しました');
  })
 })

$(document).on("click",".user-search-add",function(){
  var member_name = $(this).data("user-name");
  var member_id = $(this).data("user-id");
 appendList(member_id,member_name);
  $(this).parent().remove();
  })

  $(document).on("click",".user-search-remove",function(){
    $(this).parent().remove();
 })
})
 


