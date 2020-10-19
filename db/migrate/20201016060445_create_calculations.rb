class CreateCalculations < ActiveRecord::Migration[6.0]
  def change
    create_table :calculations do |t|
      t.integer :total_payment, null: false
      t.integer :total_people, null: false

      t.string :group_name_one
      t.integer :people_one, null: false
      t.integer :ratio_one, null: false
      t.integer :price_one, null: false

      t.string :group_name_two
      t.integer :people_two, null: false
      t.integer :ratio_two, null: false
      t.integer :price_two, null: false

      t.string :group_name_three
      t.integer :people_three
      t.integer :ratio_three
      t.integer :price_three

      t.integer :indivisible_number, null: false
      
      t.integer :user_id,    null: false,foreign_key: true
      t.timestamps
    end
  end
end
