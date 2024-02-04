import csv
import mysql.connector
import random as rd
 
# MySQL database connection parameters
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'root',
    'port': 3306,
    'database': 'dz-mouhami',
}

query = """
INSERT INTO core_lawyerprofile (specialization, phone_number, bio, address_id, language, approved, rating, user_id)
VALUES ('test_specialization', 'test_phone_number', 'test_bio', 1, 'test_language', 1, 3.5, 1)
"""


# Establish a connection to the MySQL database
connection = mysql.connector.connect(**db_config)

# # Create a cursor object to execute SQL queries
cursor = connection.cursor()

# # Path to your CSV file
users_csv_path = 'users.csv'
adress_csv_path = 'adresses.csv'
image_csv_path = 'images.csv'

# # SQL query to insert data into the MySQL table
lawyer_insert_query = """
INSERT INTO core_lawyerprofile (id, bio, phone_number, specialization, language, approved, address_id, rating, user_id)
VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
"""
user_insert_query = """
INSERT INTO auth_user (id, first_name, last_name, is_superuser, is_staff, is_active, password, username, email, date_joined)
VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
"""
address_insert_query = """
INSERT INTO core_address (id, street, city, state, zip_code, country)
VALUES (%s, %s, %s, %s, %s, %s)
"""
image_insert_query = """
INSERT INTO core_lawyerimage (id, image, lawyer_id)
VALUES (%s, %s, %s)
"""


# # Read data from the CSV file and insert into the MySQL table
with open(users_csv_path, 'r', encoding="utf-8") as users_file, open(adress_csv_path, 'r', encoding="utf-8") as address_file, open(image_csv_path, 'r', encoding="utf-8") as images_file:
    users_csv_reader = csv.reader(users_file)
    address_csv_reader = csv.reader(address_file)
    images_csv_reader  = csv.reader(images_file)

    next(users_csv_reader)  # Skip the header user if it exists
    next(address_csv_reader)  # Skip the header user if it exists
    next(images_csv_reader)  # Skip the header user if it exists

    i = 1
    for user, address, image in zip(users_csv_reader, address_csv_reader, images_csv_reader):        
        # Execute the insert query with the values from the CSV
        lawyer_params = (user[0],user[3], user[4], user[5], user[6], user[7], address[0],rd.randint(0, 5), user[0])
        user_params = (user[0], user[1], user[2], 0, 0, 1, rd.randint(10000000, 99999999), 
                       user[1] + user[2], user[1] + user[2] + "@gmail.com", "2024-01-26 00:42:31.426751")
        address_params = (address[0], address[1], address[2], address[3], address[4], address[5])
        image_params = (image[0], image[1], image[2])
        try:
            cursor.execute(user_insert_query, user_params)
        except Exception as e:
            print(e)
            continue        
        cursor.execute(address_insert_query, address_params)
        cursor.execute(lawyer_insert_query, lawyer_params)
        cursor.execute(image_insert_query, image_params)

        print("row {} done".format(i))
        i += 1



# Commit the changes to the database
connection.commit()

# # Close the cursor and connection
cursor.close()
connection.close()
