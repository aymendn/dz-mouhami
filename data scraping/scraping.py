from bs4 import BeautifulSoup
import requests
import pandas as pd
import random as rd
# from lorem.text import TextLorem

# the main page url
url = "https://avocatalgerien.com/"


# initialize the tables
user_table = pd.DataFrame(
    columns=[
        "first name",
        "last name",
        "bio",
        "phone",
        "specialiation",
        "language",
        "approved",
    ]
)
adress_table = pd.DataFrame(columns=["country", "state", "city", "zip_code"])

images_table = pd.DataFrame(columns=["image"])

i = 1
while url:
    # get the html content of the page
    html = requests.get(url)
    soup = BeautifulSoup(html.content, "html.parser")
    lawyers = soup.find_all("article", id=True)

    for lawyer in lawyers:
        # get the link to the profile page of the lowyer
        read_more = lawyer.find("div", itemprop="location").find(
            "span", class_="read-more"
        )
        link = read_more.a.get("href")

        # get the profile page
        profile_page = requests.get(link)
        profile_soup = BeautifulSoup(profile_page.content, "html.parser")

        profile_details_left = profile_soup.find(
            "section", class_="contact-details clearfix"
        ).find("div", class_="details-left")
        
        profile_details_right = profile_soup.find(
            "section", class_="contact-details clearfix"
        ).find("div", class_="details-right")
        
        image_url = profile_details_right.find("img", class_="listing_thumbnail").get("src")
        

        # get the name, location and bio
        raw_name = profile_details_left.find("h1").a.text
        raw_location = (
            profile_details_left.find("div", itemprop="location")
            .find_all("li")[0]
            .text.strip()
        )
        bio = (
            profile_soup.find_all("article")[0]
            .find("section", itemprop="description")
            .text.strip()
        )

        # get the first name and last name
        raw_name = raw_name.replace("Maitre", "").replace("MAITRE", "").strip()
        first_name = raw_name.split(" ")[0]
        last_name = " ".join(raw_name.split(" ")[1:])

        # possible languages
        languages = ["arabe", "francais", "anglais"]

        # get the categories
        raw_categories = profile_details_left.find('p', class_='listing-cat')
        categories = ", ".join([cat.text for cat in raw_categories.find_all('a')])

        # add the image raw
        new_image = {
            "image": image_url
        }
        images_table = images_table._append(new_image, ignore_index=True)

        # create the user row
        new_user = {
            "first name": first_name,
            "last name": last_name,
            "bio": bio,  # random
            "phone": rd.choice(["05", '06', '07']) + str(rd.randint(10000000, 99999999)),
            "specialiation": categories,  # random
            "language": rd.choice(languages),  # random
            "approved": True,  # random
        }
        user_table = user_table._append(new_user, ignore_index=True)

        # split raw_location by ',' and '-'
        raw_location = raw_location.replace("Algérie", "").strip()
        raw_location = raw_location.replace("Algeria", "").strip()
        raw_location = raw_location.split(',')
        raw_location = [loc.strip() for loc in raw_location]
        
        state = raw_location.pop() if len(raw_location) > 0 else ''
        city = raw_location.pop() if len(raw_location) > 0 else ''
        street = raw_location.pop() if len(raw_location) > 0 else ''
        

        # create adress row
        new_location = {
            "country": 'Algerie',
            "state": state,
            "city": city,
            "street": street,
            "zip_code": '19000',
        }

        adress_table = adress_table._append(new_location, ignore_index=True)

    url = soup.find("a", class_="next page-numbers")
    if url:
        url = url.get("href")

    print("page {} done".format(i))
    i += 1

user_table.to_csv("users.csv", index=False)
adress_table.to_csv("adresses.csv", index=False)
images_table.to_csv("images.csv", index=False)