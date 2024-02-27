from django.test import TestCase, Client
from django.urls import reverse
from .models import *
from rest_framework.authtoken.models import Token
import json


class IsLoggedInTest(TestCase):
    """
    test if user is logged in using any view that requires login,
    here we used the lawyers view as an example
    """

    def setUp(self):
        """
        this method is called before each test, to make some setups before testing
        """
        # populate the database with a user (it simulates the login process)
        self.user_token = "6aaeffb7d25c4697859f4135245956eec6012708"
        user = User.objects.create(id=1, username="testuser", password="123456")
        address = Address.objects.create(id=1, city="test city", street="test street")
        profile = LawyerProfile.objects.create(
            user=user, address=address, bio="this is a test bio"
        )
        token = Token.objects.create(user=user, key=self.user_token)

        # setup the client and the url
        self.client = Client()
        self.url = reverse("lawyer-profile-list")

    def test_login_success(self):
        """
        test if the user is logged in successfully
        """
        response = self.client.get(self.url, headers={"Authorization": self.user_token})
        self.assertEqual(
            response.status_code, 200
        )  # assert that the status code is 200
        # change the response from byte to dict
        response_dict = json.loads(response.content.decode("utf-8"))
        self.assertEqual(
            response_dict["bio"], "this is a test bio"
        )  # assert that the response contains the user's bio

    def test_login_fail(self):
        """
        test if the user is not logged in
        """
        response = self.client.get(self.url, headers={"Authorization": "wrong token"})
        self.assertEqual(response.status_code, 403)
        self.assertEqual(response.content, b'{"detail":"Not authenticated"}')


class AppointmentTest(TestCase):
    """
    this class has two tests about the appointments
    """

    def setUp(self):
        """
        test setup, it is called before each test
        """
        # add a lawyer
        self.user = User.objects.create(id=1, username="testlawyer", password="123456")
        self.token = Token.objects.create(
            user=self.user, key="89aef6b7d25c46h7859f41352q595teec6012708"
        )
        self.address = Address.objects.create(
            id=1, city="test city", street="test street"
        )
        self.lawyer = LawyerProfile.objects.create(
            user=self.user, address=self.address, bio="this is a test bio"
        )
        # add a client
        self.user2 = User.objects.create(id=2, username="testclient", password="123456")
        self.client = ClientProfile.objects.create(
            user=self.user2, address=self.address, age=19
        )
        # add an appointment
        self.timeslot = TimeSlot.objects.create(
            id=1,
            start_time="10:00:00",
            end_time="11:00:00",
            day="2020-05-01",
            lawyer=self.lawyer,
        )
        self.appointment = Appointment.objects.create(
            id=1,
            lawyer=self.lawyer,
            client=self.client,
            date="2020-05-01",
            time_slot=self.timeslot,
            status="Pending",
        )
        # setup the client and the url
        self.client = Client()

    def test_accept_appointment(self):
        """
        test if the lawyer can accept an appointment
        """
        self.url = reverse("accept-appointment", args=[self.appointment.id])
        response = self.client.post(self.url, headers={"Authorization": self.token.key})
        self.assertEqual(response.status_code, 201)
        self.assertEqual(
            response.content, b'{"success":true,"message":"Appointment accepted."}'
        )

    def test_appointment_statistics(self):
        """
        test if the lawyer can get his appointments statistics
        """
        self.url = reverse("statistics")
        response = self.client.get(self.url, headers={"Authorization": self.token.key})
        self.assertEqual(response.status_code, 200)
        response_dict = json.loads(response.content.decode("utf-8"))
        self.assertEqual(response_dict["all_appointments"], 1)
