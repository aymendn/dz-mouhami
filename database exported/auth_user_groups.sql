CREATE TABLE "auth_user_groups" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "user_id" int NOT NULL,
  "group_id" int NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "auth_user_groups_user_id_group_id_94350c0c_uniq" ("user_id","group_id"),
  KEY "auth_user_groups_group_id_97559544_fk_auth_group_id" ("group_id"),
  CONSTRAINT "auth_user_groups_group_id_97559544_fk_auth_group_id" FOREIGN KEY ("group_id") REFERENCES "auth_group" ("id"),
  CONSTRAINT "auth_user_groups_user_id_6a12ed8b_fk_auth_user_id" FOREIGN KEY ("user_id") REFERENCES "auth_user" ("id")
);insert into `auth_user_groups` (`group_id`, `id`, `user_id`) values (1, '1', 2);
insert into `auth_user_groups` (`group_id`, `id`, `user_id`) values (1, '6', 3);
insert into `auth_user_groups` (`group_id`, `id`, `user_id`) values (1, '2', 6);
insert into `auth_user_groups` (`group_id`, `id`, `user_id`) values (1, '5', 8);
insert into `auth_user_groups` (`group_id`, `id`, `user_id`) values (1, '4', 10);
insert into `auth_user_groups` (`group_id`, `id`, `user_id`) values (1, '3', 285);
