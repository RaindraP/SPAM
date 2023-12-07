import React from "react";

const sizeClasses = {
  txtPoppinsBold16: "font-bold font-poppins",
  txtPoppinsBold18: "font-bold font-poppins",
  txtPoppinsLight12: "font-light font-poppins",
  txtPoppinsBold32WhiteA700: "font-bold font-poppins",
  txtPoppinsMedium18WhiteA700: "font-medium font-poppins",
  txtPoppinsBold32: "font-bold font-poppins",
  txtPoppinsBold36: "font-bold font-poppins",
  txtPoppinsBold14: "font-bold font-poppins",
  txtPoppinsRegular32: "font-normal font-poppins",
  txtPoppinsBold1831: "font-bold font-poppins",
  txtPoppinsBold4708: "font-bold font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsBold36WhiteA700: "font-bold font-poppins",
  txtPoppinsBold40Yellow900: "font-bold font-poppins",
  txtPoppinsMedium18Teal700: "font-medium font-poppins",
  txtPoppinsBold40: "font-bold font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsRegular14Black90099: "font-normal font-poppins",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsBold24: "font-bold font-poppins",
  txtPoppinsMedium18Gray600: "font-medium font-poppins",
  txtPoppinsMedium22: "font-medium font-poppins",
  txtPoppinsRegular2513: "font-normal font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsRegular64: "font-normal font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsRegular20Gray700: "font-normal font-poppins",
  txtPoppinsRegular2513Gray60001: "font-normal font-poppins",
  txtPoppinsBold24Gray700: "font-bold font-poppins",
  txtPoppinsRegular18WhiteA700: "font-normal font-poppins",
  txtPoppinsBold18WhiteA7007f: "font-bold font-poppins",
  txtSpaceGroteskRegular18: "font-normal font-spacegrotesk",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
