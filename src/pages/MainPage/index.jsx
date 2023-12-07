import React from "react";

import { Button, Img, Line, List, Text } from "components";

const MainPagePage = () => {
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
                  className="hover:font-bold text-center text-lg text-white-A700"
                >
                  <Text size="txtPoppinsBold18">Home</Text>
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
        <div className="flex md:flex-col flex-row gap-6 items-center justify-center p-[120px] md:px-10 sm:px-5 w-auto md:w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-[7px] items-start justify-start w-auto md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                size="txtPoppinsRegular32"
              >
                <span className="text-white-A700 font-poppins text-left font-normal">
                  Stay{" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-bold">
                  informed
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  , Stay{" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-bold">
                  in control!
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  {" "}
                </span>
              </Text>
              <Text
                className="max-w-[792px] md:max-w-full md:text-5xl text-[64px] text-white-A700"
                size="txtPoppinsRegular64"
              >
                <span className="text-white-A700 font-poppins text-left font-normal">
                  Monitor{" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-bold">
                  Voltage, Ampere,
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  {" "}
                  and{" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-bold">
                  Kilowatts{" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-normal">
                  with{" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-bold">
                  Ease!
                </span>
              </Text>
            </div>
            <Button
              className="!text-white-A700 cursor-pointer font-medium min-w-[248px] rounded-[24px] md:text-3xl sm:text-[28px] text-[32px] text-center"
              color="teal_700"
              size="md"
              variant="fill"
            >
              Get Started
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-[32%] md:w-full">
            <div className="md:h-[241px] h-[303px] relative w-full">
              <div className="absolute md:h-[241px] h-[297px] inset-y-[0] left-[0] my-auto w-[90%]">
                <Img
                  className="absolute h-[193px] object-cover right-[0] top-[0] w-[58%]"
                  src="images/img_image8.png"
                  alt="imageEight"
                />
                <Img
                  className="absolute bottom-[0] h-[241px] left-[0] object-cover w-[81%]"
                  src="images/img_image7.png"
                  alt="imageSeven"
                />
              </div>
              <Img
                className="absolute bottom-[0] h-[185px] object-cover right-[0] w-[58%]"
                src="images/img_image10.png"
                alt="imageTen"
              />
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[88px] h-[958px] items-center justify-start p-[120px] md:px-10 sm:px-5 w-auto md:w-full"
          style={{ backgroundImage: "url('images/img_deviceusedsection.png')" }}
        >
          <div className="flex flex-col gap-4 items-center justify-start max-w-[904px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
              size="txtPoppinsBold40"
            >
              Device Used
            </Text>
            <Line className="bg-white-A700 h-0.5 w-[6%]" />
            <Text
              className="leading-[28.00px] max-w-[904px] md:max-w-full text-center text-gray-50 text-xl"
              size="txtPoppinsRegular20"
            >
              Showcases information about devices currently in use.
              Alternatively, the page is designed to display the devices that
              are actively being utilized.
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-[23px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1201px] mx-auto w-full"
            orientation="horizontal"
          >
            <div className="border border-solid border-white-A700 flex sm:flex-1 flex-col gap-6 items-center justify-start md:px-10 sm:px-5 px-[54px] py-12 rounded-lg shadow-bs2 w-auto sm:w-full">
              <div className="bg-gray-50_01 flex flex-col h-[132px] items-center justify-start p-1.5 rounded-[50%] w-[132px]">
                <Img
                  className="h-28 md:h-auto my-0.5 object-cover w-[99%]"
                  src="images/img_image4.png"
                  alt="imageFour"
                />
              </div>
              <div className="flex flex-col gap-2 items-center justify-start w-auto">
                <Text
                  className="leading-[31.00px] max-w-[185px] md:max-w-full text-center text-white-A700 text-xl"
                  size="txtPoppinsBold20"
                >
                  Node mcu ESP8266
                </Text>
                <Text
                  className="leading-[22.00px] max-w-[277px] md:max-w-full text-base text-justify text-white-A700"
                  size="txtPoppinsRegular16"
                >
                  ESP8266 merupakan modul wifi yang berfungsi sebagai perangkat
                  tambahan mikrokontroler seperti Arduino agar dapat terhubung
                  langsung dengan wifi dan membuat koneksi TCP/IP
                </Text>
              </div>
            </div>
            <div className="border border-solid border-white-A700 flex sm:flex-1 flex-col gap-6 items-center justify-start md:px-10 sm:px-5 px-[54px] py-12 rounded-lg shadow-bs2 w-auto sm:w-full">
              <div className="bg-gray-50_01 flex flex-col h-[132px] items-center justify-start pt-0.5 px-0.5 rounded-[50%] w-[132px]">
                <Img
                  className="h-[122px] md:h-auto mt-[7px] object-cover w-[122px]"
                  src="images/img_image3.png"
                  alt="imageThree"
                />
              </div>
              <div className="flex flex-col gap-2 items-center justify-start w-auto">
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtPoppinsBold20"
                >
                  PZEM 004T V3
                </Text>
                <Text
                  className="leading-[22.00px] max-w-[277px] md:max-w-full text-base text-justify text-white-A700"
                  size="txtPoppinsRegular16"
                >
                  PZEM-004T adalah sebuah sensor yang digunakan untuk mengukur
                  Tegangan (Voltage) dengan batas tegangan 80- 260V AC yang
                  dapat dihubungkan dengan Arduino UNO maupun opensource
                  lainnya.
                </Text>
              </div>
            </div>
            <div className="border border-solid border-white-A700 flex sm:flex-1 flex-col gap-6 items-center justify-start md:px-10 sm:px-5 px-[54px] py-12 rounded-lg shadow-bs2 w-auto sm:w-full">
              <div className="bg-gray-50_01 flex flex-col h-[132px] items-center justify-start p-[7px] rounded-[50%] w-[132px]">
                <Img
                  className="h-[74px] md:h-auto mb-7 mt-3.5 object-cover w-full"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
              </div>
              <div className="flex flex-col gap-2 items-center justify-start w-auto">
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtPoppinsBold20"
                >
                  Rangkaian
                </Text>
                <Text
                  className="leading-[22.00px] max-w-[277px] md:max-w-full text-base text-justify text-white-A700"
                  size="txtPoppinsRegular16"
                >
                  Berikut Rangkaian yang dipakai yaitu memakai ESP8266 dan PZEM
                  004T lalu diikuti oleh Kabel Jumper, Kabel Data, Breadboard,
                  dan Lampu.{" "}
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[61px] items-center justify-start p-[120px] md:px-10 sm:px-5 w-auto md:w-full">
          <Img
            className="h-[522px] w-[449px]"
            src="images/img_logoimg.svg"
            alt="logoimg"
          />
          <div className="flex flex-col gap-4 items-start justify-start max-w-[690px] w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-full"
              size="txtPoppinsBold40"
            >
              About Us
            </Text>
            <Line className="bg-white-A700 h-0.5 w-[8%]" />
            <Text
              className="leading-[150.00%] max-w-[690px] md:max-w-full text-gray-50 text-xl"
              size="txtPoppinsRegular20"
            >
              SPAM (Smart Electricity Energy Monitoring) is a website dedicated
              to the monitoring and efficient management of electrical energy
              consumption, placing a primary focus on efforts to reduce
              excessive energy consumption and promote environmental
              sustainability. In the era of the Internet of Things (IoT), the
              presence of smart devices and interconnected sensors has opened
              new opportunities for monitoring and managing energy usage more
              effectively. In this context, a well-designed and intuitive user
              interface plays a crucial role. This website can play a
              significant role in providing users with accurate, easily
              understandable information that is accessible for controlling and
              monitoring their energy usage.
            </Text>
          </div>
        </div>
        <footer className="bg-black-900_01 flex items-center justify-center md:px-5 px-[120px] py-20 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-center justify-between max-w-[1200px] w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Img
                  className="h-[85px] w-[73px]"
                  src="images/img_laptop.svg"
                  alt="laptop_One"
                />
                <div className="flex flex-col items-start justify-center w-auto">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 w-auto"
                    size="txtPoppinsBold36WhiteA700"
                  >
                    SPAM
                  </Text>
                  <Text
                    className="leading-[24.00px] text-sm text-white-A700"
                    size="txtPoppinsBold14"
                  >
                    <>
                      Smart Power Meter Measurement
                      <br />
                      and Monitoring
                    </>
                  </Text>
                </div>
              </div>
              <ul className="flex md:flex-1 sm:flex-col flex-row gap-14 items-end justify-start w-auto md:w-full common-column-list">
                <li>
                  <a
                    href="javascript:"
                    className="text-center text-lg text-white-A700"
                  >
                    <Text size="txtPoppinsBold18">Home</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-center text-lg text-white-A700_7f"
                  >
                    <Text size="txtPoppinsMedium18">Monitoring</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-center text-lg text-white-A700_7f"
                  >
                    <Text size="txtPoppinsMedium18">Konfigurasi</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-center text-lg text-white-A700_7f"
                  >
                    <Text size="txtPoppinsMedium18">Contact</Text>
                  </a>
                </li>
              </ul>
            </div>
            <Line className="bg-gradient  h-px mt-[43px] w-full" />
            <Text
              className="mt-[45px] text-lg text-white-A700 w-auto"
              size="txtSpaceGroteskRegular18"
            >
              © Designed by Raindra Pramathana
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MainPagePage;
