import React from "react";

import { Button, Img, Input, Line, Radio, Text } from "components";

const RegisterPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 gap-[118px] items-start mx-auto md:pr-10 sm:pr-5 pr-[122px] w-full">
        <div className="h-[1203px] md:h-[900px] pb-[303px] relative w-[66%] md:w-full">
          <div className="h-[900px] mx-auto w-full">
            <Img
              className="h-[900px] m-auto object-cover w-full"
              src="images/img_bg.png"
              alt="bg"
            />
            <div className="absolute flex sm:flex-col flex-row gap-[20.93px] items-center justify-center left-[18%] top-[41%] w-auto">
              <Img
                className="h-[111px] w-[95px]"
                src="images/img_logoimg.svg"
                alt="group"
              />
              <div className="flex flex-col items-start justify-center w-auto">
                <Text
                  className="sm:text-[37.08px] md:text-[43.08px] text-[47.08px] text-center text-white-A700 w-auto"
                  size="txtPoppinsBold4708"
                >
                  SPAM
                </Text>
                <Text
                  className="text-[18.31px] text-white-A700 w-auto"
                  size="txtPoppinsBold1831"
                >
                  Smart Electricity Energy Monitoring
                </Text>
              </div>
            </div>
          </div>
          <Img
            className="absolute bottom-1/4 h-[280px] left-[0] object-cover"
            src="images/img_group2.png"
            alt="groupTwo"
          />
        </div>
        <div className="flex flex-col gap-[38px] items-center justify-start md:mt-0 mt-[132px] w-[26%] md:w-full">
          <div className="flex flex-col gap-2 items-start justify-start">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
              size="txtPoppinsBold24"
            >
              Welcome
            </Text>
            <Text
              className="text-blue_gray-900 text-lg"
              size="txtPoppinsRegular18"
            >
              Sign In to Access Full Feature of SPAM
            </Text>
          </div>
          <div className="flex flex-col gap-[27px] items-center justify-center w-auto">
            <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-[30px] items-start justify-start w-[53%] md:w-full">
                    <Radio
                      value="62"
                      className="text-gray-600 text-left text-sm"
                      inputClassName="h-[18px] mr-[5px] shadow-bs1 w-[18px]"
                      checked={false}
                      name="sixtytwo"
                      label="62"
                      id="62"
                    ></Radio>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-1 w-2"
                        src="images/img_iconarrow.svg"
                        alt="iconarrow"
                      />
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Phone No.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-between mt-0.5 w-full">
                    <Line className="bg-gray-600 h-px w-1/5" />
                    <Line className="bg-gray-600 h-px w-[76%]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mt-[25px] w-full">
                <Text
                  className="text-gray-600 text-sm"
                  size="txtPoppinsRegular14"
                >
                  Email
                </Text>
                <Line className="bg-gray-600 h-px mt-1 w-full" />
              </div>
              <Input
                name="displayname"
                placeholder="Display Name"
                className="p-0 placeholder:text-gray-600 sm:pr-5 text-left text-sm w-full"
                wrapClassName="mt-[26px] pr-[35px] w-full"
                type="text"
              ></Input>
              <Input
                name="password"
                placeholder="Password"
                className="p-0 placeholder:text-gray-600 text-left text-sm w-full"
                wrapClassName="flex mt-[25px] w-full"
                type="password"
                prefix={
                  <Img
                    className="mt-2 mb-1.5 mr-[13px]"
                    src="images/img_password.svg"
                    alt="password"
                  />
                }
                suffix={
                  <Img
                    className="mt-[3px] mb-0.5 ml-[35px]"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                }
                size="sm"
              ></Input>
              <Input
                name="confirmpassword"
                placeholder="Confirm Password"
                className="p-0 placeholder:text-gray-600 sm:pr-5 text-left text-sm w-full"
                wrapClassName="flex mt-[25px] pr-[35px] w-full"
                type="password"
                prefix={
                  <Img
                    className="mt-2 mb-1.5 mr-[13px]"
                    src="images/img_password.svg"
                    alt="password"
                  />
                }
                size="sm"
              ></Input>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[340px] text-center text-lg"
              shape="round"
              color="teal_700"
              size="sm"
              variant="fill"
            >
              Sign Up for Free
            </Button>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <div className="bg-gray-600 h-px w-1/5"></div>
              <Text
                className="text-black-900_99 text-sm w-auto"
                size="txtPoppinsRegular14Black90099"
              >
                Or sign in with
              </Text>
              <Line className="bg-gray-600 h-px w-1/4" />
            </div>
            <div className="flex flex-row gap-5 items-start justify-start w-auto">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[150px] rounded-[5px]"
                leftIcon={
                  <Img
                    className="h-4 mt-px mb-1.5 mr-[5px]"
                    src="images/img_google.svg"
                    alt="google"
                  />
                }
                color="teal_700"
                size="xs"
                variant="outline"
              >
                <div className="leading-[normal] text-base text-left">
                  Google
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[150px] rounded-[5px]"
                leftIcon={
                  <Img
                    className="mr-[5px] my-1"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                }
                color="teal_700"
                size="xs"
                variant="outline"
              >
                <div className="leading-[normal] text-base text-left">
                  Microsoft
                </div>
              </Button>
            </div>
            <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
              <a
                href="javascript:"
                className="text-center text-gray-600 text-lg w-auto"
              >
                <Text size="txtPoppinsMedium18Gray600">
                  Already have an account?
                </Text>
              </a>
              <a
                href="javascript:"
                className="text-center text-lg text-teal-700 w-auto"
              >
                <Text size="txtPoppinsMedium18Teal700">Login</Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
