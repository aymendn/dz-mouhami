CREATE TABLE "socialaccount_socialapp" (
  "id" int NOT NULL AUTO_INCREMENT,
  "provider" varchar(30) NOT NULL,
  "name" varchar(40) NOT NULL,
  "client_id" varchar(191) NOT NULL,
  "secret" varchar(191) NOT NULL,
  "key" varchar(191) NOT NULL,
  "provider_id" varchar(200) NOT NULL,
  "settings" json NOT NULL DEFAULT (_utf8mb3'{}'),
  PRIMARY KEY ("id")
);insert into `socialaccount_socialapp` (`client_id`, `id`, `key`, `name`, `provider`, `provider_id`, `secret`, `settings`) values ('159094331037-bh9moh5r16ogrug3f31c48v0vtsv4l70.apps.googleusercontent.com', 1, '', 'Google SSO', 'google', '', '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', '{}');
