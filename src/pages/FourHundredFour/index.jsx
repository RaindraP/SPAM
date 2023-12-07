import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const FourHundredFourPage = () => {
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
              404 Not Found!
            </Text>
            <Line className="bg-white-A700 h-0.5 w-[6%]" />
            <Text
              className="text-center text-gray-50 text-xl w-auto"
              size="txtPoppinsRegular20"
            >
              Halaman yang anda kunjungi tidak ada.{" "}
            </Text>
          </div>
          <div className="flex flex-col md:gap-10 gap-[88px] items-center justify-start w-[29%] md:w-full">
            <Img
              className="h-[342px] w-[339px]"
              src="images/img_questionscuate.svg"
              alt="questionscuate"
            />
            <Button
              className="cursor-pointer font-medium min-w-[340px] text-center text-lg"
              shape="round"
              color="teal_700"
              size="sm"
              variant="fill"
            >
              Kembali ke Home
            </Button>
          </div>
        </div>
        <Footer className="bg-black-900_01 flex gap-[43px] items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default FourHundredFourPage;
