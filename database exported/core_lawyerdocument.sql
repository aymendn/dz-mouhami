CREATE TABLE "core_lawyerdocument" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "pdf_file" varchar(100) NOT NULL,
  "lawyer_id" bigint NOT NULL,
  PRIMARY KEY ("id"),
  KEY "core_lawyerdocument_lawyer_id_88347eba_fk_core_lawyerprofile_id" ("lawyer_id"),
  CONSTRAINT "core_lawyerdocument_lawyer_id_88347eba_fk_core_lawyerprofile_id" FOREIGN KEY ("lawyer_id") REFERENCES "core_lawyerprofile" ("id")
);