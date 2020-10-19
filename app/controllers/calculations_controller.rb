class CalculationsController < ApplicationController
  before_action :authenticate_user!, only: [:create]

  def index    
    @calculation = Calculation.new
  end

  def create    
    @calculation = Calculation.new(calculation_params)
    if @calculation.save
      redirect_to root_path
    else
      render :index
    end
  end

  private

  def calculation_params
    params.require(:calculation).permit(:total_payment,:total_people,:group_name_one,:people_one,:ratio_one,:price_one,:group_name_two,:people_two,:ratio_two,:price_two, :group_name_three,:people_three,:ratio_three,:price_three,:indivisible_number).merge(user_id: current_user.id)
  end
end
