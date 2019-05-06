class RenameColumnSongsinCratetoFormat < ActiveRecord::Migration[5.2]
  def change
    rename_column :crates, :song, :format
  end
end
