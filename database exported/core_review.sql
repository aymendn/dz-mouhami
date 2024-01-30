CREATE TABLE "core_review" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "rating" int unsigned NOT NULL,
  "comment" longtext NOT NULL,
  "client_id" bigint NOT NULL,
  "lawyer_id" bigint NOT NULL,
  "created_at" datetime(6) NOT NULL,
  "image" varchar(100) DEFAULT NULL,
  PRIMARY KEY ("id"),
  KEY "core_review_client_id_b571437b_fk_core_clientprofile_id" ("client_id"),
  KEY "core_review_lawyer_id_89f7747f_fk_core_lawyerprofile_id" ("lawyer_id"),
  CONSTRAINT "core_review_client_id_b571437b_fk_core_clientprofile_id" FOREIGN KEY ("client_id") REFERENCES "core_clientprofile" ("id"),
  CONSTRAINT "core_review_lawyer_id_89f7747f_fk_core_lawyerprofile_id" FOREIGN KEY ("lawyer_id") REFERENCES "core_lawyerprofile" ("id"),
  CONSTRAINT "core_review_rating_4149f4b6_check" CHECK ((`rating` >= 0))
);insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('12', 'goood one', '2024-01-27 16:09:51.081483', '6', 'https://lh3.googleusercontent.com/a/ACg8ocLcY8oDD8J2286AAe5V1YsAkDSgaiqjArISJBzjEclm=s96-c', '2', 3);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('12', 'very good', '2024-01-27 16:13:35.665887', '7', 'https://lh3.googleusercontent.com/a/ACg8ocLcY8oDD8J2286AAe5V1YsAkDSgaiqjArISJBzjEclm=s96-c', '2', 4);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'very good', '2024-01-27 16:16:40.343482', '8', '', '2', 4);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'very good', '2024-01-27 17:33:33.507553', '9', '', '2', 4);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'aymen chikour', '2024-01-27 17:36:09.088603', '10', '', '2', 5);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'test test tet', '2024-01-27 19:09:11.206235', '11', '', '2', 3);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'test test tet', '2024-01-27 19:09:31.649635', '12', '', '2', 3);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'test test tet', '2024-01-27 19:09:47.461822', '13', '', '2', 3);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'test test tet', '2024-01-27 19:09:59.694960', '14', '', '2', 3);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'test test tet', '2024-01-27 19:10:17.652209', '15', '', '2', 3);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'test test tet', '2024-01-27 19:10:32.557554', '16', '', '2', 3);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'test test tet', '2024-01-27 19:11:03.034974', '17', '', '2', 3);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'test test tet', '2024-01-27 19:11:45.594104', '18', '', '2', 3);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'very good', '2024-01-28 08:51:53.733703', '19', '', '2', 4);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'very good', '2024-01-28 08:52:36.224416', '20', '', '100', 5);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'Tres bon', '2024-01-28 23:32:08.591616', '21', '', '480', 5);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'Tres bon travail', '2024-01-28 23:45:24.822993', '22', '', '2', 5);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'test', '2024-01-29 00:03:23.441580', '23', '', '541', 4);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'Test Review', '2024-01-29 00:11:47.769313', '24', '', '541', 4);
insert into `core_review` (`client_id`, `comment`, `created_at`, `id`, `image`, `lawyer_id`, `rating`) values ('10', 'Test review 5', '2024-01-29 00:13:09.673921', '25', '', '541', 5);
