import React from "react";

import { Img, Text } from "components";

const MonitoringRiwayatGenre = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-5 items-center justify-start p-0.5 w-5">
          <div className="flex flex-row items-center justify-evenly mt-0.5 w-[94%] md:w-full">
            {!!props?.userimage ? (
              <Img className="h-px w-px" alt="vector" src={props?.userimage} />
            ) : null}
            {!!props?.vectorOne ? (
              <Img className="h-px" alt="vector_One" src={props?.vectorOne} />
            ) : null}
          </div>
          <div className="flex flex-row items-center justify-evenly mt-[3px] w-[94%] md:w-full">
            {!!props?.vectorTwo ? (
              <Img
                className="h-px w-px"
                alt="vector_Two"
                src={props?.vectorTwo}
              />
            ) : null}
            {!!props?.vectorThree ? (
              <Img
                className="h-px"
                alt="vector_Three"
                src={props?.vectorThree}
              />
            ) : null}
          </div>
          <div className="flex flex-row items-center justify-evenly my-0.5 w-[94%] md:w-full">
            {!!props?.vectorFour ? (
              <Img
                className="h-px w-px"
                alt="vector_Four"
                src={props?.vectorFour}
              />
            ) : null}
            {!!props?.vectorFive ? (
              <Img className="h-px" alt="vector_Five" src={props?.vectorFive} />
            ) : null}
          </div>
        </div>
        {!!props?.username ? (
          <Text
            className="text-gray-900 text-xl w-auto"
            size="txtPoppinsMedium20"
          >
            {props?.username}
          </Text>
        ) : null}
      </div>
    </>
  );
};

MonitoringRiwayatGenre.defaultProps = {};

export default MonitoringRiwayatGenre;
