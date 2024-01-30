CREATE TABLE "auth_user_user_permissions" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "user_id" int NOT NULL,
  "permission_id" int NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "auth_user_user_permissions_user_id_permission_id_14a6b632_uniq" ("user_id","permission_id"),
  KEY "auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm" ("permission_id"),
  CONSTRAINT "auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm" FOREIGN KEY ("permission_id") REFERENCES "auth_permission" ("id"),
  CONSTRAINT "auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id" FOREIGN KEY ("user_id") REFERENCES "auth_user" ("id")
);