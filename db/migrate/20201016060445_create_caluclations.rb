class CreateCaluclations < ActiveRecord::Migration[6.0]
  def change
    create_table :caluclations do |t|

      t.timestamps
    end
  end
end
