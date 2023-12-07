import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const HalamanKonfigurasiPage = () => {
  return (
    <>
      <div className="bg-blue_gray-700 flex flex-col font-poppins items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <header className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:px-5 px-[120px] py-10 w-full">
          <div className="flex flex-row gap-4 items-center justify-start w-auto">
            <Img
              className="h-[85px] w-[73px]"
              src="images/img_laptop.svg"
              alt="laptop"
            />
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900_e2 text-center w-auto"
              size="txtPoppinsBold36"
            >
              SPAM
            </Text>
          </div>
          <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[74px] items-center justify-start w-auto md:w-full">
            <ul className="flex sm:flex-col flex-row gap-14 sm:hidden items-end justify-start w-auto common-row-list">
              <li>
                <a
                  href="javascript:"
                  className="hover:font-bold text-center text-lg hover:text-white-A700 text-white-A700_7f"
                >
                  <Text size="txtPoppinsMedium18">Home</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:font-bold text-center text-lg hover:text-white-A700 text-white-A700_7f"
                >
                  <Text size="txtPoppinsMedium18">Monitoring</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:font-bold text-center text-lg text-white-A700"
                >
                  <Text size="txtPoppinsBold18">Konfigurasi</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:font-bold text-center text-lg hover:text-white-A700 text-white-A700_7f"
                >
                  <Text size="txtPoppinsMedium18">Contact</Text>
                </a>
              </li>
            </ul>
            <div className="bg-teal-700 flex flex-row gap-4 items-start justify-start sm:px-5 px-8 py-4 rounded-[24px] w-auto">
              <Text
                className="text-center text-lg text-white-A700 w-auto"
                size="txtPoppinsMedium18WhiteA700"
              >
                Pande Dani
              </Text>
              <Img
                className="h-6 md:h-auto rounded-[50%] w-6"
                src="images/img_whatsappimage20231019.png"
                alt="whatsappimageTwenty"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col md:gap-10 gap-[88px] items-center justify-start max-w-[1440px] p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start max-w-[904px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
              size="txtPoppinsBold40"
            >
              Halaman Konfigurasi Alat IoT
            </Text>
            <Line className="bg-white-A700 h-0.5 w-[6%]" />
            <Text
              className="leading-[28.00px] text-center text-gray-50 text-xl"
              size="txtPoppinsRegular20"
            >
              <>
                To operate the application, please ensure that the device and
                application are connected to the internet. Configure the device
                (NodeMCU) by setting up the connection.
                <br />
                To establish a connection with the server, access the
                server&#39;s IP address and send sensor data values to the
                server. The server will then store the data in the database.
              </>
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
              Panduan Pemasangan Alat IoT
            </Button>
          </div>
        </div>
        <Footer className="bg-black-900_01 flex gap-[43px] items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default HalamanKonfigurasiPage;
