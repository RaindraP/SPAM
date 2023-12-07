import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const LoginPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 gap-[118px] items-center mx-auto md:pr-10 sm:pr-5 pr-[122px] w-full">
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
        <div className="flex flex-col gap-9 items-start justify-start w-[26%] md:w-full">
          <div className="flex flex-col gap-[9px] items-start justify-start">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
              size="txtPoppinsBold24"
            >
              Hello!
            </Text>
            <Text
              className="text-blue_gray-900 text-lg"
              size="txtPoppinsRegular18"
            >
              Log In to Save Your Progress
            </Text>
          </div>
          <div className="flex flex-col gap-[27px] items-center justify-center w-auto">
            <div className="flex flex-col gap-[25px] items-center justify-start w-[97%] md:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-gray-600 text-sm"
                  size="txtPoppinsRegular14"
                >
                  Email/Phone
                </Text>
                <Line className="bg-gray-600 h-px w-full" />
              </div>
              <div className="flex flex-col gap-1.5 items-end justify-start w-full">
                <Input
                  name="groupThirteen"
                  placeholder="Password"
                  className="p-0 placeholder:text-gray-600 text-left text-sm w-full"
                  wrapClassName="flex w-full"
                  type="password"
                  prefix={
                    <Img
                      className="mr-[9px] my-[7px]"
                      src="images/img_password.svg"
                      alt="password"
                    />
                  }
                  suffix={
                    <Img
                      className="mt-[3px] mb-px ml-[35px]"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                  }
                ></Input>
                <a
                  href="javascript:"
                  className="text-gray-600 text-right text-xs"
                >
                  <Text size="txtPoppinsLight12">Forgot password?</Text>
                </a>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[340px] text-center text-lg"
              shape="round"
              color="teal_700"
              size="sm"
              variant="fill"
            >
              Login
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
                  <>Don&#39;t have an account?</>
                </Text>
              </a>
              <a
                href="javascript:"
                className="text-center text-lg text-teal-700 w-auto"
              >
                <Text size="txtPoppinsMedium18Teal700">Sign up</Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
