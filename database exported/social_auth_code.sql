CREATE TABLE "social_auth_code" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "email" varchar(254) NOT NULL,
  "code" varchar(32) NOT NULL,
  "verified" tinyint(1) NOT NULL,
  "timestamp" datetime(6) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "social_auth_code_email_code_801b2d02_uniq" ("email","code"),
  KEY "social_auth_code_code_a2393167" ("code"),
  KEY "social_auth_code_timestamp_176b341f" ("timestamp")
);