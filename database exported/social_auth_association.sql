CREATE TABLE "social_auth_association" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "server_url" varchar(255) NOT NULL,
  "handle" varchar(255) NOT NULL,
  "secret" varchar(255) NOT NULL,
  "issued" int NOT NULL,
  "lifetime" int NOT NULL,
  "assoc_type" varchar(64) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "social_auth_association_server_url_handle_078befa2_uniq" ("server_url","handle")
);