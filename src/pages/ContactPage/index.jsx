import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ContactPagePage = () => {
  return (
    <>
      <div className="bg-blue_gray-700 flex flex-col font-poppins items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:px-5 px-[120px] py-10 w-full" />
        <div className="flex flex-col md:gap-10 gap-[88px] items-center justify-start max-w-[1440px] p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start max-w-[904px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
              size="txtPoppinsBold40"
            >
              Contact Us
            </Text>
            <Line className="bg-white-A700 h-0.5 w-[6%]" />
            <Text
              className="text-center text-gray-50 text-xl w-auto"
              size="txtPoppinsRegular20"
            >
              Contact the website owner here!
            </Text>
          </div>
          <div className="bg-gray-500 flex flex-col items-center justify-start max-w-[1318px] mx-auto md:px-5 px-[155px] py-24 rounded-[10px] w-full">
            <div className="flex flex-col items-center justify-start w-auto md:w-full">
              <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-auto md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_materialsymbol.svg"
                  alt="materialsymbol"
                />
                <Text
                  className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                  size="txtPoppinsBold24Gray700"
                >
                  spaminfo@gmail.com
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_materialsymbol_black_900.svg"
                  alt="materialsymbol_One"
                />
                <a
                  href="https://www.linkedin.com/in/raindrapramathana/"
                  className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text size="txtPoppinsBold24Gray700">
                    https://www.linkedin.com/in/raindrapramathana/
                  </Text>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-black-900_01 flex gap-[43px] items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default ContactPagePage;
