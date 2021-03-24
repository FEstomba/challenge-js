create schema alkemy;
use alkemy;

create table OPERATIONS(
    ID bigint auto_increment not null,
    DATE date not null,
    CONCEPT varchar(64) not null,
    AMOUNT double not null,
    TYPE varchar(7) not null,
    PRIMARY KEY (ID)

);
