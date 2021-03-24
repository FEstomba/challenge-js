create schema alkemy;
use alkemy;

create table operations(
    id bigint auto_increment not null,
    date date not null,
    concept varchar(64) not null,
    amount double not null,
    type varchar(7) not null,
    PRIMARY KEY (id)

);
