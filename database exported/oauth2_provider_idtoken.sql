CREATE TABLE "oauth2_provider_idtoken" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "jti" char(32) NOT NULL,
  "expires" datetime(6) NOT NULL,
  "scope" longtext NOT NULL,
  "created" datetime(6) NOT NULL,
  "updated" datetime(6) NOT NULL,
  "application_id" bigint DEFAULT NULL,
  "user_id" int DEFAULT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "jti" ("jti"),
  KEY "oauth2_provider_idto_application_id_08c5ff4f_fk_oauth2_pr" ("application_id"),
  KEY "oauth2_provider_idtoken_user_id_dd512b59_fk_auth_user_id" ("user_id"),
  CONSTRAINT "oauth2_provider_idto_application_id_08c5ff4f_fk_oauth2_pr" FOREIGN KEY ("application_id") REFERENCES "oauth2_provider_application" ("id"),
  CONSTRAINT "oauth2_provider_idtoken_user_id_dd512b59_fk_auth_user_id" FOREIGN KEY ("user_id") REFERENCES "auth_user" ("id")
);