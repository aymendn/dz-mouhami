CREATE TABLE "social_auth_nonce" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "server_url" varchar(255) NOT NULL,
  "timestamp" int NOT NULL,
  "salt" varchar(65) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "social_auth_nonce_server_url_timestamp_salt_f6284463_uniq" ("server_url","timestamp","salt")
);