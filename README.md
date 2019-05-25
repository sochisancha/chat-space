## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

- has_many :messages
- has_many :groups, through: :members


|Column|Type|Options|
|------|----|-------|
|text|text||
|image|string||
|created_at|datetime|null:false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

- belongs_to :user
- belongs_to :group
- has_many :members
 
## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group-name|string|null:false|

- has_many :users
- has_many :messages, through: :members
- has_many :members

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user




