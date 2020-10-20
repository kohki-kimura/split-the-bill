class Calculation < ApplicationRecord
  belongs_to :user

  with_options presence: true do
    validates :total_payment
    validates :total_people
    validates :people_two
    validates :ratio_two
    validates :price_two
  end
end
