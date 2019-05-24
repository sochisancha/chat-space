## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user-image|text|null: false|
|message_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

- has_many :messages
- has_many :groups, through: :members


|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|text||
|created_at|datetime|null:false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

- belongs_to :user
- belongs_to :group
 
## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|

- has_many :users
- has_many :messages, through: :members

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user




