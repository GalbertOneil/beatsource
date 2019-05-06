class Song < ApplicationRecord
    has_and_belongs_to_many :crate, optional: true

end
