CREATE TABLE "core_clientprofile" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "age" int NOT NULL,
  "gender" varchar(255) NOT NULL,
  "phone_number" varchar(255) NOT NULL,
  "address_id" bigint NOT NULL,
  "user_id" int NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "user_id" ("user_id"),
  KEY "core_clientprofile_address_id_e7f9c28c_fk_core_address_id" ("address_id"),
  CONSTRAINT "core_clientprofile_address_id_e7f9c28c_fk_core_address_id" FOREIGN KEY ("address_id") REFERENCES "core_address" ("id"),
  CONSTRAINT "core_clientprofile_user_id_289d8c1d_fk_auth_user_id" FOREIGN KEY ("user_id") REFERENCES "auth_user" ("id")
);insert into `core_clientprofile` (`address_id`, `age`, `gender`, `id`, `phone_number`, `user_id`) values ('7', 12, 'M', '6', '2543453543', 5);
insert into `core_clientprofile` (`address_id`, `age`, `gender`, `id`, `phone_number`, `user_id`) values ('12', 12, 'M', '10', '234234', 7);
insert into `core_clientprofile` (`address_id`, `age`, `gender`, `id`, `phone_number`, `user_id`) values ('284', 45, 'F', '12', '45354', 23);
insert into `core_clientprofile` (`address_id`, `age`, `gender`, `id`, `phone_number`, `user_id`) values ('539', 20, 'F', '13', '9072626261', 9);
insert into `core_clientprofile` (`address_id`, `age`, `gender`, `id`, `phone_number`, `user_id`) values ('540', 45, 'F', '14', '555222111', 540);
insert into `core_clientprofile` (`address_id`, `age`, `gender`, `id`, `phone_number`, `user_id`) values ('541', 55, 'F', '15', '0555222111', 541);
