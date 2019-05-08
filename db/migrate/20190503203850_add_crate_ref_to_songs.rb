class AddCrateRefToSongs < ActiveRecord::Migration[5.2]
  def change
    add_reference :songs, :crate, foreign_key: true
  end
end
