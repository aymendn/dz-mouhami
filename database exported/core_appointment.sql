CREATE TABLE "core_appointment" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "status" varchar(255) NOT NULL,
  "client_id" bigint NOT NULL,
  "lawyer_id" bigint NOT NULL,
  "date" date NOT NULL,
  "time_slot_id" bigint NOT NULL,
  "note" longtext NOT NULL DEFAULT (_utf8mb3''),
  "start_time" varchar(255) NOT NULL,
  PRIMARY KEY ("id"),
  KEY "core_appointment_client_id_b9888242_fk_core_clientprofile_id" ("client_id"),
  KEY "core_appointment_lawyer_id_e11f0919_fk_core_lawyerprofile_id" ("lawyer_id"),
  KEY "core_appointment_time_slot_id_6bb45558_fk_core_timeslot_id" ("time_slot_id"),
  CONSTRAINT "core_appointment_client_id_b9888242_fk_core_clientprofile_id" FOREIGN KEY ("client_id") REFERENCES "core_clientprofile" ("id"),
  CONSTRAINT "core_appointment_lawyer_id_e11f0919_fk_core_lawyerprofile_id" FOREIGN KEY ("lawyer_id") REFERENCES "core_lawyerprofile" ("id"),
  CONSTRAINT "core_appointment_time_slot_id_6bb45558_fk_core_timeslot_id" FOREIGN KEY ("time_slot_id") REFERENCES "core_timeslot" ("id")
);insert into `core_appointment` (`client_id`, `date`, `id`, `lawyer_id`, `note`, `start_time`, `status`, `time_slot_id`) values ('10', '2024-01-28', '11', '540', '', '9:00:00', 'Accepted', '2');
insert into `core_appointment` (`client_id`, `date`, `id`, `lawyer_id`, `note`, `start_time`, `status`, `time_slot_id`) values ('10', '2024-01-28', '12', '2', '', '9:00:00', 'Pending', '5');
insert into `core_appointment` (`client_id`, `date`, `id`, `lawyer_id`, `note`, `start_time`, `status`, `time_slot_id`) values ('10', '2024-01-29', '13', '540', '', '9:00:00', 'Accepted', '3');
insert into `core_appointment` (`client_id`, `date`, `id`, `lawyer_id`, `note`, `start_time`, `status`, `time_slot_id`) values ('10', '2024-01-29', '14', '540', '', '9:00:00', 'Pending', '4');
