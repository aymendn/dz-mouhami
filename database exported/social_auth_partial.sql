CREATE TABLE "social_auth_partial" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "token" varchar(32) NOT NULL,
  "next_step" smallint unsigned NOT NULL,
  "backend" varchar(32) NOT NULL,
  "timestamp" datetime(6) NOT NULL,
  "data" json NOT NULL DEFAULT (_utf8mb3'{}'),
  PRIMARY KEY ("id"),
  KEY "social_auth_partial_token_3017fea3" ("token"),
  KEY "social_auth_partial_timestamp_50f2119f" ("timestamp"),
  CONSTRAINT "social_auth_partial_chk_1" CHECK ((`next_step` >= 0))
);