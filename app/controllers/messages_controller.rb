class MessagesController < ApplicationController
  
    before_action :set_group
    
    def index
      @message = Message.new
      @messages = @group.messages.includes(:user)
      @groups = Group.all
    end
    def create
        @message = @group.messages.new(create_params)
       if @message.save
        respond_to do |format|
          format.html{redirect_to group_messages_path(@group),notice:"メッセージが送信されました。"}
          format.json
        end
       else
        @messages = @group.messages.includes(:user)
        flash.now[:alert] = 'メッセージを入力してください。'
        render :index
       end
    end

    private
  def create_params
    params.require(:message).permit(:text,:message,:image).merge(user_id: current_user.id)
  end
  def set_group
    @group = Group.find(params[:group_id])
  end
  end
