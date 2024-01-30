CREATE TABLE "account_emailaddress" (
  "id" int NOT NULL AUTO_INCREMENT,
  "email" varchar(254) NOT NULL,
  "verified" tinyint(1) NOT NULL,
  "primary" tinyint(1) NOT NULL,
  "user_id" int NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "account_emailaddress_user_id_email_987c8728_uniq" ("user_id","email"),
  KEY "account_emailaddress_upper" ((upper(`email`))),
  CONSTRAINT "account_emailaddress_user_id_2c513194_fk_auth_user_id" FOREIGN KEY ("user_id") REFERENCES "auth_user" ("id")
);insert into `account_emailaddress` (`email`, `id`, `primary`, `user_id`, `verified`) values ('a_bensmail@estin.dz', 1, 1, 2, 1);
insert into `account_emailaddress` (`email`, `id`, `primary`, `user_id`, `verified`) values ('yassermessahli0@gmail.com', 2, 1, 3, 1);
insert into `account_emailaddress` (`email`, `id`, `primary`, `user_id`, `verified`) values ('y_messahli@estin.dz', 3, 1, 4, 1);
