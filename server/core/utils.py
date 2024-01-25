from django.conf import settings
from requests_oauthlib import OAuth2Session


def google_setup(redirect_uri: str):
    session = OAuth2Session(
        settings.GOOGLE_CLIENT_ID,
        redirect_uri=redirect_uri,
        scope=[
            "openid",
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile",
        ],
    )

    authorization_url, _ = session.authorization_url(
        settings.GOOGLE_AUTH_URL, access_type="offline", prompt="select_account"
    )

    return authorization_url


def google_callback(redirect_uri: str, auth_uri: str):
    session = OAuth2Session(
        settings.GOOGLE_CLIENT_ID,
        redirect_uri=redirect_uri,
        scope=[
            "openid",
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile",
        ],
    )

    session.fetch_token(
        settings.GOOGLE_TOKEN_URL,
        client_secret=settings.GOOGLE_CLIENT_SECRET,
        authorization_response=auth_uri,
    )

    user_data = session.get("https://www.googleapis.com/oauth2/v1/userinfo").json()
    return user_data