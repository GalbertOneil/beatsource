class RemoveSongsRef < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :crate_id
  end
end
