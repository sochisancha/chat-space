json.text @message.text
json.created_at @message.created_at.strftime("%Y/%m/%d(%a) %H:%M:%S")
json.name @message.user.name
json.id @message.id
json.image image_tag(@message.image)
