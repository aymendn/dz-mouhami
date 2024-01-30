CREATE TABLE "core_clientimage" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "image" varchar(100) DEFAULT NULL,
  "user_id" int NOT NULL,
  PRIMARY KEY ("id"),
  KEY "core_clientimage_user_id_70c5176a_fk_auth_user_id" ("user_id"),
  CONSTRAINT "core_clientimage_user_id_70c5176a_fk_auth_user_id" FOREIGN KEY ("user_id") REFERENCES "auth_user" ("id")
);insert into `core_clientimage` (`id`, `image`, `user_id`) values ('1', 'https://lh3.googleusercontent.com/a/ACg8ocLcY8oDD8J2286AAe5V1YsAkDSgaiqjArISJBzjEclm=s96-c', 23);
insert into `core_clientimage` (`id`, `image`, `user_id`) values ('2', 'https://lh3.googleusercontent.com/a/ACg8ocLIcRJ9PvWefiCnUdMjjBCkGToKU3-sJYFTEi-CGNwfezI=s96-c', 285);
insert into `core_clientimage` (`id`, `image`, `user_id`) values ('3', 'https://lh3.googleusercontent.com/a/ACg8ocLQZj8cX2rvPYOt65_MFCup1tU4juV60j0xX-w_Xv16zg=s96-c', 3);
insert into `core_clientimage` (`id`, `image`, `user_id`) values ('4', 'https://lh3.googleusercontent.com/a/ACg8ocIdveb337saQN5suAm6tDh7p9JITIKwf0RtrlO2rC6S=s96-c', 538);
insert into `core_clientimage` (`id`, `image`, `user_id`) values ('5', 'https://lh3.googleusercontent.com/a/ACg8ocL_NXOHdVN4PUvzzF_dR-br6NZas1c5L1iX2v1qBX1tZkY=s96-c', 540);
insert into `core_clientimage` (`id`, `image`, `user_id`) values ('6', 'https://lh3.googleusercontent.com/a/ACg8ocKFU0Jm07N6Z1-sPMXvzObW3-KcHt2x_Je4HEF1n7jO4w=s96-c', 541);
