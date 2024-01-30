CREATE TABLE "auth_group_permissions" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "group_id" int NOT NULL,
  "permission_id" int NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "auth_group_permissions_group_id_permission_id_0cd325b0_uniq" ("group_id","permission_id"),
  KEY "auth_group_permissio_permission_id_84c5c92e_fk_auth_perm" ("permission_id"),
  CONSTRAINT "auth_group_permissio_permission_id_84c5c92e_fk_auth_perm" FOREIGN KEY ("permission_id") REFERENCES "auth_permission" ("id"),
  CONSTRAINT "auth_group_permissions_group_id_b120cbf9_fk_auth_group_id" FOREIGN KEY ("group_id") REFERENCES "auth_group" ("id")
);