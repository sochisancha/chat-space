class Group < ApplicationRecord
  has_many :users, though :member
  has_many :messages
  has_many :members
end
