import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const MonitoringRiwayatTdkLoginPage = () => {
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
                  className="hover:font-bold text-center text-lg text-white-A700"
                >
                  <Text size="txtPoppinsBold18">Monitoring</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:font-bold text-center text-lg hover:text-white-A700 text-white-A700_7f"
                >
                  <Text size="txtPoppinsMedium18">Konfigurasi</Text>
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
            <Button
              className="!text-white-A700 cursor-pointer font-medium min-w-[113px] rounded-[24px] text-center text-lg"
              color="teal_700"
              size="sm"
              variant="fill"
            >
              Login
            </Button>
          </div>
        </header>
        <div className="flex flex-col md:gap-10 gap-[88px] items-center justify-start max-w-[1440px] p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start max-w-[904px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
              size="txtPoppinsBold40"
            >
              Anda Belum Login!
            </Text>
            <Line className="bg-white-A700 h-0.5 w-[6%]" />
            <Text
              className="leading-[28.00px] max-w-[904px] md:max-w-full text-center text-gray-50 text-xl"
              size="txtPoppinsRegular20"
            >
              Silahkan login terlebih dahulu untuk dapat mengakses semua
              fitur-fitur yang terdapat dalam website SPAM.
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
              Ke Halaman Login
            </Button>
          </div>
        </div>
        <Footer className="bg-black-900_01 flex gap-[43px] items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default MonitoringRiwayatTdkLoginPage;
