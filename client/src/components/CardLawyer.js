import React from "react";
import locationlogo from "../assets/location.svg";
import { Link } from "react-router-dom";
import { Image } from "react-img-placeholder";
import profilePlaceholder from "../assets/profileImage.jpg";

const CardLawyer = ({
  id,
  first_name: firstName,
  last_name: lastName,
  specialization,
  bio,
  image,
  rating,
  location,
}) => {
  // get the first part before the comma
  specialization = specialization.split(",")[0] || "";

  // if bio is null or nan, set it to "Aucune bio"
  if (bio === "nan" || !bio) {
    bio = "Aucune bio";
  }

  // if bio is too long, cut it
  if (bio.length > 80) {
    bio = bio.substring(0, 80) + "...";
  }
  return (
    <Link to={`/lawyer/${id}`}>
      <div className="transform duration-150 hover:bg-gray-100 hover:border-gray-300 border-gray-100 transition  ease-in-out  h-[234px] bg-white p-4 rounded-lg my-2 flex cursor-pointer border-2 w-full">
        {/* Image on the left */}
        <Image
          key={image}
          src={image || profilePlaceholder}
          alt="Picture of the author"
          width={200}
          height={200}
          placeholderColor="#dde7ee"
          className="aspect-auto md:aspect-square  rounded-md me-4 object-cover"
        />

        <div className="rounded-lg">
          {/* Name */}
          <h2 className="text-xl text-[#094B72] font-medium mb-1">
            {firstName + " " + lastName}
          </h2>

          {/* Localization */}
          <p className="flex items-center  mb-2 text-[#094b72cf] ">
            <img src={locationlogo} alt="Location" className="me-1 w-4" />
            {location}
          </p>

          {/* Categories psk c un tableau asslan */}
          {/* <div className="flex gap-2 flex-wrap">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="text-[#094B72] border-2 border-yellow-400 rounded-full  py-1 px-3 text-center"
                >
                  <p className="text-sm font-semibold">{category}</p>
                </div>
              ))}
            </div> */}
          <div className="text-[#094B72] border-2 border-yellow-400 rounded-full  py-1 px-3 text-center">
            <p className="text-sm font-semibold">{specialization}</p>
          </div>

          {/* Small text */}
          <p className="text-[#708FA2] text-sm mt-2">{bio}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardLawyer;
