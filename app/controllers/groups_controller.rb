class GroupsController < ApplicationController
  
  before_action :set_group, only: [:edit, :update]
  
  def index
  end
  def new
    @group = Group.new
    @group.users << current_user
  end
  def create
    @group = Group.new(create_params)
    @group.users << current_user
    if @group.save
    redirect_to group_messages_path(@group), notice: "グループを作成しました。"
    else
      render :new 
    end
  end
  def edit
    @user = current_user
  end
  def update
    @group.update(create_params)
     @group.users << current_user
    if @group.save
      redirect_to group_messages_path(@group), notice: 'グループを編集しました'

    else
      render :edit
    end
  end
  

  private
  
  def create_params
    params.require(:group).permit(:name, user_ids: [])
  end
  def set_group
    @group = Group.find(params[:id])
  end



end

