import React from "react";

import { Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1200px] w-full">
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
                <Text
                  className="text-center text-lg text-white-A700"
                  size="txtPoppinsRegular18WhiteA700"
                >
                  Home
                </Text>
              </li>
              <li>
                <Text
                  className="text-center text-lg text-white-A700"
                  size="txtPoppinsMedium18WhiteA700"
                >
                  Monitoring
                </Text>
              </li>
              <li>
                <Text
                  className="text-center text-lg text-white-A700"
                  size="txtPoppinsMedium18WhiteA700"
                >
                  Konfigurasi
                </Text>
              </li>
              <li>
                <Text
                  className="text-center text-lg text-white-A700"
                  size="txtPoppinsMedium18WhiteA700"
                >
                  Contact
                </Text>
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
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
