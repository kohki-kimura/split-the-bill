class CreateCaluclations < ActiveRecord::Migration[6.0]
  def change
    create_table :caluclations do |t|
      t.integer :total_payment, null: false
      t.integer :total_people, null: false

      t.string :group_name_one, null: false
      t.integer :people_one, null: false
      t.integer :ratio_one, null: false
      t.integer :price_one, null: false

      t.string :group_name_two, null: false
      t.integer :people_two, null: false
      t.integer :ratio_two, null: false
      t.integer :price_two, null: false

      t.string :group_name_three, null: false
      t.integer :people_three, null: false
      t.integer :ratio_three, null: false
      t.integer :price_three, null: false
      t.timestamps
    end
  end
end
