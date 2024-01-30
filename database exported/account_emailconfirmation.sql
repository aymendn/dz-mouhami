CREATE TABLE "account_emailconfirmation" (
  "id" int NOT NULL AUTO_INCREMENT,
  "created" datetime(6) NOT NULL,
  "sent" datetime(6) DEFAULT NULL,
  "key" varchar(64) NOT NULL,
  "email_address_id" int NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "key" ("key"),
  KEY "account_emailconfirm_email_address_id_5b7f8c58_fk_account_e" ("email_address_id"),
  CONSTRAINT "account_emailconfirm_email_address_id_5b7f8c58_fk_account_e" FOREIGN KEY ("email_address_id") REFERENCES "account_emailaddress" ("id")
);