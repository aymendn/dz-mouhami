CREATE TABLE "oauth2_provider_refreshtoken" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "token" varchar(255) NOT NULL,
  "access_token_id" bigint DEFAULT NULL,
  "application_id" bigint NOT NULL,
  "user_id" int NOT NULL,
  "created" datetime(6) NOT NULL,
  "updated" datetime(6) NOT NULL,
  "revoked" datetime(6) DEFAULT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "access_token_id" ("access_token_id"),
  UNIQUE KEY "oauth2_provider_refreshtoken_token_revoked_af8a5134_uniq" ("token","revoked"),
  KEY "oauth2_provider_refr_application_id_2d1c311b_fk_oauth2_pr" ("application_id"),
  KEY "oauth2_provider_refreshtoken_user_id_da837fce_fk_auth_user_id" ("user_id"),
  CONSTRAINT "oauth2_provider_refr_access_token_id_775e84e8_fk_oauth2_pr" FOREIGN KEY ("access_token_id") REFERENCES "oauth2_provider_accesstoken" ("id"),
  CONSTRAINT "oauth2_provider_refr_application_id_2d1c311b_fk_oauth2_pr" FOREIGN KEY ("application_id") REFERENCES "oauth2_provider_application" ("id"),
  CONSTRAINT "oauth2_provider_refreshtoken_user_id_da837fce_fk_auth_user_id" FOREIGN KEY ("user_id") REFERENCES "auth_user" ("id")
);