CREATE TABLE "socialaccount_socialapp_sites" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "socialapp_id" int NOT NULL,
  "site_id" int NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "socialaccount_socialapp_sites_socialapp_id_site_id_71a9a768_uniq" ("socialapp_id","site_id"),
  KEY "socialaccount_socialapp_sites_site_id_2579dee5_fk_django_site_id" ("site_id"),
  CONSTRAINT "socialaccount_social_socialapp_id_97fb6e7d_fk_socialacc" FOREIGN KEY ("socialapp_id") REFERENCES "socialaccount_socialapp" ("id"),
  CONSTRAINT "socialaccount_socialapp_sites_site_id_2579dee5_fk_django_site_id" FOREIGN KEY ("site_id") REFERENCES "django_site" ("id")
);insert into `socialaccount_socialapp_sites` (`id`, `site_id`, `socialapp_id`) values ('1', 1, 1);
