class Group < ApplicationRecord
  has_many :users, though :members
  has_many :messages
  has_many :members
end
