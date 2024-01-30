CREATE TABLE "authtoken_token" (
  "key" varchar(40) NOT NULL,
  "created" datetime(6) NOT NULL,
  "user_id" int NOT NULL,
  PRIMARY KEY ("key"),
  UNIQUE KEY "user_id" ("user_id"),
  CONSTRAINT "authtoken_token_user_id_35299eff_fk_auth_user_id" FOREIGN KEY ("user_id") REFERENCES "auth_user" ("id")
);insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-27 23:45:11.746604', '11d07fbfdf785f9b174a9712afbef52f8e7922df', 202);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-26 21:57:08.631119', '212f4bc4f6656e2b65f8b7434a9826a908cfc927', 3);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-27 19:26:17.714029', '2db8c8ae43f89d8f52dde7308d6f3bab2766ecb3', 180);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-27 19:03:38.664171', '394ccb89d8c5a512f587fa25ba987ebb554b6211', 281);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-25 13:19:42.884951', '3a398a6a080114686cd922310b84b3d0b2adac29', 5);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-27 16:41:10.044626', '3e7b69fbc35a2a8f1e48935f22e09d2b5726852b', 538);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-26 18:11:48.356140', '533ba7c8dccd71003fedea92076ab3ef94aaa243', 285);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-25 16:38:14.344631', '5d0239bcf16cbc415db012a0766a3b5c56a59825', 9);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-25 13:33:23.008843', '6aaeffb7d25c4697859f4135245956eec6012708', 6);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-27 19:13:44.783894', '871d025f1eb3ca3e96bef3ac72bf768059968fdf', 182);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-27 19:20:27.313888', '8e70aa952197a5e69ff357c1231dd4ca06f24d28', 272);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-28 21:12:05.263403', '8f768c46bb1dae7152590bc432f8db4891ac4853', 540);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-27 23:50:32.258678', 'a1fd2eeba8de7cd87f7bb402fd3432100840bfbc', 367);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-27 20:56:59.754812', 'a4d98e19c31cd40326cc0988e3abf1fe00219800', 462);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-25 21:19:06.521721', 'a5554930faa4b5eba6e81a9bc889150f26210bdc', 12);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-27 19:29:25.495405', 'ae1e264ec28a96e3bf5d02889fcf42a3471f4c53', 189);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-27 23:48:12.573347', 'c329cda36e7ec537a9af7ad7337a36e4c1981ea7', 514);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-25 17:19:31.546530', 'c942aa39c46d86e5d4d4647c971e1c6db6ff397f', 11);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-27 21:30:44.890071', 'ddde8dbdac58ae76ad2c00e022678c1de122a67e', 501);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-25 16:55:50.328683', 'ec3cce742b1fc84f23c0b427dffeb9890cd3041e', 10);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-25 16:32:30.690423', 'f3a5efd7177d847ce26ef236287f5f77e40bfc43', 8);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-26 13:37:53.950374', 'fa5b5b71139ace340120b57070f14a5429764199', 23);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-25 14:50:14.661259', 'fdb2c4b7c75d21ea4410177f3128f5e8627dd125', 7);
insert into `authtoken_token` (`created`, `key`, `user_id`) values ('2024-01-28 22:43:42.431156', 'fec84d606caf7e12e559dd676851aec0b64c009b', 541);
