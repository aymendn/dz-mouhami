import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import balance from "../../assets/balance.svg";
import search from "../../assets/person_search.svg";
import ChoiceCards from "../../components/ChoiceCards";

const ChoicePage = () => {
  const dataItems = [
    { keyy:1,
      title: "I am a lawyer ",
      text: "Join our legal community to showcase your expertise and connect with clients.",
      img: balance,
    },
    { keyy:2,
      title: "Seeking Legal Assistance",
      text: "  Find trusted lawyers in Algeria. Let us guide you.",
      img: search,
    },
   
  ];
  return (
    <div>
      <Navbar />
      <div className="mt-8 text-center">
        <h1 className="text-[#0F3146] text-5xl font-semibold font-['Lexend_Exa'] -tracking-[0.42rem]">
          Choose your role
        </h1>
        <p className="p-4 text-[#496C80] text-md">
          Let's tailor your experience.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center py-12 gap-8 sm:gap-12">
      {dataItems.map((data, index) => (
          <ChoiceCards
            key={index}
            i={data.keyy}
            img={data.img}
            title={data.title}
            text={data.text}
          />
        ))}
      </div>

      <div className="mb-12 text-center">
       
        <p className="p-2 text-[#496C80] text-md">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default ChoicePage;
