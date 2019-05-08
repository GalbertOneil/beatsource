class CreateJoinTableCratesSongs < ActiveRecord::Migration[5.2]
  def change
    create_join_table :crates, :songs do |t|
      # t.index [:crate_id, :song_id]
      # t.index [:song_id, :crate_id]
    end
  end
end
