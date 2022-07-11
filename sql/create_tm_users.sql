create table tm_users(
id serial,
first_name varchar(10),
last_name varchar(10),
status varchar(10) not null default 'enable' references cm_statuses(status),
created_at timestamp not null default current_timestamp,
primary key (id)
)
/

-- 論理名
comment on table stg.tm_users is 'ユーザマスタ'
/
comment on column stg.tm_users.id is '利用者ID'
/
comment on column stg.tm_users.first_name is '名'
/
comment on column stg.tm_users.last_name is '姓'
/
comment on column stg.tm_users.status is '可変区分'
/
comment on column stg.tm_users.created_at is '登録日時'


-- drop table tm_users cascade
