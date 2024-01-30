CREATE TABLE "socialaccount_socialtoken" (
  "id" int NOT NULL AUTO_INCREMENT,
  "token" longtext NOT NULL,
  "token_secret" longtext NOT NULL,
  "expires_at" datetime(6) DEFAULT NULL,
  "account_id" int NOT NULL,
  "app_id" int DEFAULT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "socialaccount_socialtoken_app_id_account_id_fca4e0ac_uniq" ("app_id","account_id"),
  KEY "socialaccount_social_account_id_951f210e_fk_socialacc" ("account_id"),
  CONSTRAINT "socialaccount_social_account_id_951f210e_fk_socialacc" FOREIGN KEY ("account_id") REFERENCES "socialaccount_socialaccount" ("id"),
  CONSTRAINT "socialaccount_social_app_id_636a42d7_fk_socialacc" FOREIGN KEY ("app_id") REFERENCES "socialaccount_socialapp" ("id")
);insert into `socialaccount_socialtoken` (`account_id`, `app_id`, `expires_at`, `id`, `token`, `token_secret`) values (1, 1, '2024-01-25 01:55:51.032013', 1, 'ya29.a0AfB_byB6vNWuem4cDf-RIWR-NKdhOf__Evm8lgwnovFJpirBvoQpLVB1zUnscWkvfEWiZfjBncsuefcdgbCt2VlX7MsMtYgcc8byuDKsV2z2zY-QS3TE2D0ngs0hO_RT0hjAHlkoKvJpCShtFLxIyXsKcWDPSOzGGFgTaCgYKARESARISFQHGX2MixJRqMD5aiCJ_20Bl9ghNhA0171', '');
insert into `socialaccount_socialtoken` (`account_id`, `app_id`, `expires_at`, `id`, `token`, `token_secret`) values (2, 1, '2024-01-25 13:57:13.611906', 2, 'ya29.a0AfB_byCvqXUpz9P8N96tLYthLSSgejNMTPfwMuQnSKKjaW067_Uj9hTIl3RB9Vbo7BsyNO51vOyZNJ7Y3P0bHPvn5bt7Wn8LJPxj4VG9rF-nUP96IFcXQAe8OiW3l763JRtY75Kj173ALtF8DG2AsjvfUf2XHq4uxhBLaCgYKATsSARMSFQHGX2MisPD8W-nYz8CGbLgt0NnK6w0171', '');
insert into `socialaccount_socialtoken` (`account_id`, `app_id`, `expires_at`, `id`, `token`, `token_secret`) values (3, 1, '2024-01-25 14:00:48.012459', 3, 'ya29.a0AfB_byDRpNhCxJjE6WZKDblWDDiHuzXLwlNZXpT-VbI2TuHvoRXN3KhuG1Tth6szMk6pX2OBIStR8JMef_gwPMXom_dKRgDopX5OF1HCHpsceBi7ueoeBzRgt_5zs1ABY_WwMYeH4TKKEnb-RO-ehn3mQVyX0AWqZC6naCgYKAe0SARESFQHGX2Mi7S1OHfptptPkLQ9HzyhmNw0171', '');
