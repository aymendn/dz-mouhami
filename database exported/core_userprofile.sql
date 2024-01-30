CREATE TABLE "core_userprofile" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "google_id" varchar(255) DEFAULT NULL,
  "github_id" varchar(255) DEFAULT NULL,
  "user_id" int NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "user_id" ("user_id"),
  UNIQUE KEY "google_id" ("google_id"),
  UNIQUE KEY "github_id" ("github_id"),
  CONSTRAINT "core_userprofile_user_id_5141ad90_fk_auth_user_id" FOREIGN KEY ("user_id") REFERENCES "auth_user" ("id")
);insert into `core_userprofile` (`github_id`, `google_id`, `id`, `user_id`) values (NULL, '107165280403269563176', '1', 5);
insert into `core_userprofile` (`github_id`, `google_id`, `id`, `user_id`) values (NULL, '115039464032994668019', '2', 6);
insert into `core_userprofile` (`github_id`, `google_id`, `id`, `user_id`) values (NULL, '107025491291478133865', '3', 7);
insert into `core_userprofile` (`github_id`, `google_id`, `id`, `user_id`) values (NULL, '104796679324665718382', '4', 8);
insert into `core_userprofile` (`github_id`, `google_id`, `id`, `user_id`) values (NULL, '108013915897749410362', '5', 9);
insert into `core_userprofile` (`github_id`, `google_id`, `id`, `user_id`) values (NULL, '107980078186357022268', '6', 10);
insert into `core_userprofile` (`github_id`, `google_id`, `id`, `user_id`) values (NULL, '115430279394707054369', '7', 11);
insert into `core_userprofile` (`github_id`, `google_id`, `id`, `user_id`) values (NULL, '103239152631012722502', '8', 12);
insert into `core_userprofile` (`github_id`, `google_id`, `id`, `user_id`) values (NULL, '109868501616063302785', '9', 23);
insert into `core_userprofile` (`github_id`, `google_id`, `id`, `user_id`) values (NULL, '111673473933994976461', '10', 285);
insert into `core_userprofile` (`github_id`, `google_id`, `id`, `user_id`) values (NULL, '101174417417873145845', '11', 3);
insert into `core_userprofile` (`github_id`, `google_id`, `id`, `user_id`) values (NULL, '103271661641721684814', '12', 538);
insert into `core_userprofile` (`github_id`, `google_id`, `id`, `user_id`) values (NULL, '111445512904888268130', '13', 540);
insert into `core_userprofile` (`github_id`, `google_id`, `id`, `user_id`) values (NULL, '110267901358137892491', '14', 541);
