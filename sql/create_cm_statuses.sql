create table cm_statuses(
id serial,
status varchar(10) unique not null,
created_at timestamp not null default current_timestamp,
primary key(id ,status)
)
/

comment on table cm_statuses is 'ステータスマスタ'
/
comment on column cm_statuses.id is 'ステータスID'
/
comment on column cm_statuses.status is '可変区分'
/
comment on column cm_statuses.created_at is '登録日時'

-- drop table cm_statuses cascade;
