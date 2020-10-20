class Calculation < ApplicationRecord
  belongs_to :user

  with_options numericality: {greater_than_or_equal_to: 0} do
    validates :total_payment
    validates :total_people
    validates :people_one
    validates :ratio_one
    validates :price_one
    validates :people_two
    validates :ratio_two
    validates :price_two
  end
end
