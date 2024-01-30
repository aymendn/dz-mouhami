CREATE TABLE "social_auth_usersocialauth" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "provider" varchar(32) NOT NULL,
  "uid" varchar(255) NOT NULL,
  "user_id" int NOT NULL,
  "created" datetime(6) NOT NULL,
  "modified" datetime(6) NOT NULL,
  "extra_data" json NOT NULL DEFAULT (_utf8mb3'{}'),
  PRIMARY KEY ("id"),
  UNIQUE KEY "social_auth_usersocialauth_provider_uid_e6b5e668_uniq" ("provider","uid"),
  KEY "social_auth_usersocialauth_user_id_17d28448_fk_auth_user_id" ("user_id"),
  KEY "social_auth_usersocialauth_uid_796e51dc" ("uid"),
  CONSTRAINT "social_auth_usersocialauth_user_id_17d28448_fk_auth_user_id" FOREIGN KEY ("user_id") REFERENCES "auth_user" ("id")
);