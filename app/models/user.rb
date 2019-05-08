class User < ApplicationRecord
    has_secure_password
    has_many :crates

    def self.from_token_request(request)
        username = request.params["auth"] && request.params["auth"]["username"]
        self.find_by(username: username)
    end

    def to_token_payload
        {
            id: id,
            username: username
        }
       end

end
