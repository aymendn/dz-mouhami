CREATE TABLE "core_timeslot" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "start_time" time(6) NOT NULL,
  "end_time" time(6) NOT NULL,
  "day" varchar(255) NOT NULL,
  "lawyer_id" bigint NOT NULL,
  PRIMARY KEY ("id"),
  KEY "core_timeslot_lawyer_id_a5af2b0f_fk_core_lawyerprofile_id" ("lawyer_id"),
  CONSTRAINT "core_timeslot_lawyer_id_a5af2b0f_fk_core_lawyerprofile_id" FOREIGN KEY ("lawyer_id") REFERENCES "core_lawyerprofile" ("id")
);insert into `core_timeslot` (`day`, `end_time`, `id`, `lawyer_id`, `start_time`) values ('Monday', '17:00:00.000000', '2', '541', '09:00:00.000000');
insert into `core_timeslot` (`day`, `end_time`, `id`, `lawyer_id`, `start_time`) values ('Tuesday', '18:00:00.000000', '3', '541', '10:00:00.000000');
insert into `core_timeslot` (`day`, `end_time`, `id`, `lawyer_id`, `start_time`) values ('Wednesday', '16:30:00.000000', '4', '541', '09:30:00.000000');
insert into `core_timeslot` (`day`, `end_time`, `id`, `lawyer_id`, `start_time`) values ('Thursday', '16:00:00.000000', '5', '2', '08:00:00.000000');
insert into `core_timeslot` (`day`, `end_time`, `id`, `lawyer_id`, `start_time`) values ('Friday', '17:30:00.000000', '6', '2', '10:30:00.000000');
insert into `core_timeslot` (`day`, `end_time`, `id`, `lawyer_id`, `start_time`) values ('Friday', '16:00:00.000000', '7', '540', '08:00:00.000000');
insert into `core_timeslot` (`day`, `end_time`, `id`, `lawyer_id`, `start_time`) values ('Moday', '17:00:00.000000', '8', '541', '09:00:00.000000');
