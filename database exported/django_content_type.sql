CREATE TABLE "django_content_type" (
  "id" int NOT NULL AUTO_INCREMENT,
  "app_label" varchar(100) NOT NULL,
  "model" varchar(100) NOT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "django_content_type_app_label_model_76bd3d3b_uniq" ("app_label","model")
);insert into `django_content_type` (`app_label`, `id`, `model`) values ('account', 8, 'emailaddress');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('account', 9, 'emailconfirmation');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('admin', 1, 'logentry');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('auth', 3, 'group');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('auth', 2, 'permission');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('auth', 4, 'user');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('authtoken', 33, 'token');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('authtoken', 34, 'tokenproxy');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('contenttypes', 5, 'contenttype');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('core', 13, 'address');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('core', 14, 'administrator');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('core', 20, 'appointment');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('core', 36, 'clientimage');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('core', 15, 'clientprofile');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('core', 17, 'lawyerdocument');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('core', 21, 'lawyerimage');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('core', 16, 'lawyerprofile');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('core', 18, 'review');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('core', 19, 'timeslot');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('core', 35, 'userprofile');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('drf_social_oauth2', 32, 'multifactorauth');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('oauth2_provider', 23, 'accesstoken');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('oauth2_provider', 22, 'application');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('oauth2_provider', 24, 'grant');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('oauth2_provider', 26, 'idtoken');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('oauth2_provider', 25, 'refreshtoken');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('sessions', 6, 'session');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('sites', 7, 'site');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('social_django', 27, 'association');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('social_django', 28, 'code');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('social_django', 29, 'nonce');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('social_django', 31, 'partial');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('social_django', 30, 'usersocialauth');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('socialaccount', 10, 'socialaccount');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('socialaccount', 11, 'socialapp');
insert into `django_content_type` (`app_label`, `id`, `model`) values ('socialaccount', 12, 'socialtoken');
