class CalculationsController < ApplicationController
  before_action :authenticate_user!, only: [:create]

  def new    
    @calculation = Calculation.new
  end

  def create    
    @calculation = Calculation.new(calculation_params)
    if @calculation.save
      redirect_to root_path, notice: '計算内容を保存しました。'
    else
      render :new
    end
  end

  def index
    @calculations = Calculation.all.order('created_at DESC')
  end

  def destroy
    @calculation = Calculation.find(params[:id])
    if @calculation.destroy
      redirect_to calculations_path(current_user)
    else
      render :index
    end
  end

  private

  def calculation_params
    params.require(:calculation).permit(:total_payment,:total_people,:group_name_one,:people_one,:ratio_one,:price_one,:group_name_two,:people_two,:ratio_two,:price_two, :group_name_three,:people_three,:ratio_three,:price_three,:indivisible_number).merge(user_id: current_user.id)
  end
end
