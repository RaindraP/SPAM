import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
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
        <div className="flex md:flex-col flex-row md:gap-10 gap-[74px] items-center justify-start w-auto md:w-full">
          <ul className="flex sm:flex-col flex-row gap-14 sm:hidden items-end justify-start w-auto common-row-list">
            <li>
              <Text
                className="hover:font-bold text-center text-lg text-white-A700_7f"
                size="txtPoppinsMedium18"
              >
                Home
              </Text>
            </li>
            <li>
              <Text
                className="hover:font-bold text-center text-lg text-white-A700_7f"
                size="txtPoppinsMedium18"
              >
                Monitoring
              </Text>
            </li>
            <li>
              <Text
                className="hover:font-bold text-center text-lg text-white-A700_7f"
                size="txtPoppinsMedium18"
              >
                Konfigurasi
              </Text>
            </li>
            <li>
              <Text
                className="hover:font-bold text-center text-lg text-white-A700_7f"
                size="txtPoppinsBold18WhiteA7007f"
              >
                Contact
              </Text>
            </li>
          </ul>
          <Button
            className="!text-white-A700 cursor-pointer font-medium font-poppins min-w-[113px] rounded-[24px] text-center text-lg"
            color="teal_700"
            size="sm"
            variant="fill"
          >
            Login
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
