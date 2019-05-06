class Crate < ApplicationRecord
    belongs_to :user
    has_and_belongs_to_many :songs, optional: true

end
