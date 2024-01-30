CREATE TABLE "django_site" (
  "id" int NOT NULL AUTO_INCREMENT,
  "domain" varchar(100) NOT NULL,
  "name" varchar(50) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "django_site_domain_a2e37b91_uniq" ("domain")
);insert into `django_site` (`domain`, `id`, `name`) values ('example.com', 1, 'example.com');
insert into `django_site` (`domain`, `id`, `name`) values ('localhost:8000', 2, 'localhost');
