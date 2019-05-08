class CreateCrates < ActiveRecord::Migration[5.2]
  def change
    create_table :crates do |t|
      t.integer :user_id
      t.string :crate_name
      t.string :song

      t.timestamps
    end
  end
end
