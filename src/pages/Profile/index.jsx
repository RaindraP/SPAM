import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const ProfilePage = () => {
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
                  className="text-center text-lg text-white-A700_7f"
                >
                  <Text size="txtPoppinsMedium18">Home</Text>
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
        <div className="flex flex-col md:gap-10 gap-[126px] items-center justify-center p-[120px] md:px-10 sm:px-5 w-auto md:w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-auto">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
              size="txtPoppinsBold40"
            >
              User Profile
            </Text>
            <Line className="bg-white-A700 h-0.5 w-[22%]" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[126px] items-center justify-between max-w-[1200px] mx-auto w-full">
            <div className="bg-white-A700 flex sm:flex-1 flex-col gap-6 items-center justify-start md:px-10 sm:px-5 px-[155px] py-24 w-[486px] sm:w-full">
              <Text
                className="bg-clip-text bg-gradient1  md:text-3xl sm:text-[28px] text-[32px] text-transparent w-auto"
                size="txtPoppinsBold32"
              >
                Foto Profil
              </Text>
              <div className="flex flex-col gap-4 items-center justify-start w-auto">
                <Img
                  className="h-[169px] md:h-auto rounded-[50%] w-[170px]"
                  src="images/img_whatsappimage20231019_169x170.png"
                  alt="whatsappimageTwenty_One"
                />
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_mdipen.svg"
                    alt="mdipen"
                  />
                  <Text
                    className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                    size="txtPoppinsBold24Gray700"
                  >
                    Ganti Profil
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-[38px] items-start justify-start w-auto sm:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                size="txtPoppinsBold32WhiteA700"
              >
                Personal Information
              </Text>
              <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                <Text
                  className="sm:text-[21.13px] md:text-[23.13px] text-[25.13px] text-blue_gray-100"
                  size="txtPoppinsRegular2513"
                >
                  Pande Dani
                </Text>
                <Line className="bg-gray-600 h-px w-full" />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="sm:text-[21.13px] md:text-[23.13px] text-[25.13px] text-blue_gray-100"
                  size="txtPoppinsRegular2513"
                >
                  gorengnuggetsendiri@gmail.com
                </Text>
                <Line className="bg-gray-600 h-px mt-1 w-full" />
              </div>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                size="txtPoppinsBold32WhiteA700"
              >
                Change Password
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="sm:text-[21.13px] md:text-[23.13px] text-[25.13px] text-gray-600_01"
                  size="txtPoppinsRegular2513Gray60001"
                >
                  Masukkan password lama
                </Text>
                <Line className="bg-gray-600 h-px mt-1 w-full" />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="sm:text-[21.13px] md:text-[23.13px] text-[25.13px] text-gray-600_01"
                  size="txtPoppinsRegular2513Gray60001"
                >
                  Masukkan password baru
                </Text>
                <Line className="bg-gray-600 h-px mt-1 w-full" />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="sm:text-[21.13px] md:text-[23.13px] text-[25.13px] text-gray-600_01"
                  size="txtPoppinsRegular2513Gray60001"
                >
                  Konfirmasi password
                </Text>
                <Line className="bg-gray-600 h-px mt-1 w-full" />
              </div>
              <div className="flex sm:flex-col flex-row gap-[38px] items-start justify-start w-auto sm:w-full">
                <Button
                  className="cursor-pointer font-medium min-w-[275px] text-center text-lg"
                  shape="round"
                  color="teal_700"
                  size="sm"
                  variant="fill"
                >
                  Simpan Perubahan
                </Button>
                <Button
                  className="!text-teal-700 cursor-pointer font-medium min-w-[275px] outline-[2px] text-center text-lg"
                  shape="round"
                  color="teal_700"
                  size="sm"
                  variant="outline"
                >
                  Batalkan
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-black-900_01 flex gap-[43px] items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default ProfilePage;
