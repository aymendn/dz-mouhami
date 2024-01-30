CREATE TABLE "core_administrator" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "user_id" int NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "user_id" ("user_id"),
  CONSTRAINT "core_administrator_user_id_969c501b_fk_auth_user_id" FOREIGN KEY ("user_id") REFERENCES "auth_user" ("id")
);