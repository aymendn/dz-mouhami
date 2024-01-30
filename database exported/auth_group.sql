CREATE TABLE "auth_group" (
  "id" int NOT NULL AUTO_INCREMENT,
  "name" varchar(150) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "name" ("name")
);insert into `auth_group` (`id`, `name`) values (1, 'Lawyer');
