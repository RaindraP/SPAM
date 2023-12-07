import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Img, Line, List, ReactTable, Text } from "components";
import Footer from "components/Footer";
import MonitoringRiwayatGenre from "components/MonitoringRiwayatGenre";

const MonitoringRiwayatPage = () => {
  const tableData = React.useRef([
    {
      date: "1",
      title: "06:00",
      author: "216.400 V",
      genre: "0.071 A",
      progress: "0.007 kWh",
    },
    {
      date: "22/10/2022",
      title: "06:30",
      author: "216.500 V",
      genre: "0.072 A",
      progress: "0.007 kWh",
    },
    {
      date: "22/05/2022",
      title: "07:00",
      author: "216.600 V",
      genre: "0.072 A",
      progress: "0.007 kWh",
    },
    {
      date: "14/07/2020",
      title: "07:30",
      author: "216.300 V",
      genre: "0.07 A",
      progress: "0.007 kWh",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("date", {
        cell: (info) => (
          <div className="flex flex-col h-[82px] md:h-auto items-center justify-start p-[22px] sm:px-5">
            <Text
              className="text-gray-900 text-xl w-auto"
              size="txtPoppinsMedium20"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <MonitoringRiwayatGenre
            className="flex flex-row gap-2.5 items-center justify-start min-w-[224px] p-[22px] sm:px-5"
            username="No"
          />
        ),
      }),
      tableColumnHelper.accessor("one", {
        cell: (info) => <Line className="h-[82px] md:w-full" />,
        header: (info) => <Line className="h-[74px] min-w-[1px] md:w-full" />,
      }),
      tableColumnHelper.accessor("title", {
        cell: (info) => (
          <div className="flex flex-col h-[82px] md:h-auto items-center justify-start px-3 py-[22px]">
            <Text
              className="text-gray-900 text-xl w-auto"
              size="txtPoppinsMedium20"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <MonitoringRiwayatGenre
            className="flex flex-row gap-2.5 items-center justify-start min-w-[224px] p-[22px] sm:px-5"
            username="Time"
          />
        ),
      }),
      tableColumnHelper.accessor("two", {
        cell: (info) => <Line className="h-[82px] md:w-full" />,
        header: (info) => <Line className="h-[74px] min-w-[1px] md:w-full" />,
      }),
      tableColumnHelper.accessor("author", {
        cell: (info) => (
          <div className="flex flex-1 md:flex-1 flex-col h-[82px] md:h-auto items-center justify-start px-3 py-[22px] md:w-full">
            <Text
              className="text-gray-900 text-xl w-auto"
              size="txtPoppinsMedium20"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <MonitoringRiwayatGenre className="flex flex-1 md:flex-1 flex-row gap-2.5 items-center justify-start min-w-[260px] p-[22px] sm:px-5 md:w-full" />
        ),
      }),
      tableColumnHelper.accessor("three", {
        cell: (info) => <Line className="h-[82px] md:w-full" />,
        header: (info) => <Line className="h-[74px] min-w-[1px] md:w-full" />,
      }),
      tableColumnHelper.accessor("genre", {
        cell: (info) => (
          <div className="flex flex-1 md:flex-1 flex-col h-[82px] md:h-auto items-center justify-start px-3 py-[22px] md:w-full">
            <Text
              className="text-gray-900 text-xl w-auto"
              size="txtPoppinsMedium20"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <MonitoringRiwayatGenre
            className="flex flex-1 md:flex-1 flex-row gap-2.5 items-center justify-start min-w-[260px] p-[22px] sm:px-5 md:w-full"
            vectorTwo="images/img_vector.svg"
            vectorThree="images/img_vector.svg"
            vectorFour="images/img_vector.svg"
            vectorFive="images/img_vector.svg"
            username="Ampere"
          />
        ),
      }),
      tableColumnHelper.accessor("four", {
        cell: (info) => <Line className="h-[82px] md:w-full" />,
        header: (info) => <Line className="h-[74px] min-w-[1px] md:w-full" />,
      }),
      tableColumnHelper.accessor("progress", {
        cell: (info) => (
          <div className="flex flex-col items-center justify-center">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
              size="txtPoppinsMedium22"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <MonitoringRiwayatGenre
            className="flex flex-row gap-2.5 items-center justify-center min-w-[224px] p-[22px] sm:px-5"
            username="kWh"
          />
        ),
      }),
      tableColumnHelper.accessor("five", {
        cell: (info) => <Line className="h-[82px] md:w-full" />,
        header: (info) => <Line className="h-[74px] min-w-[1px] md:w-full" />,
      }),
      tableColumnHelper.accessor("six", {
        cell: (info) => <Line className="h-[82px] md:w-full" />,
        header: (info) => <Line className="h-[74px] min-w-[1px] md:w-full" />,
      }),
    ];
  }, []);

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
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-[88px] items-center justify-start max-w-[1440px] p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start max-w-[904px] mx-auto w-full">
            <Text
              className="bg-clip-text bg-gradient1  sm:text-4xl md:text-[38px] text-[40px] text-transparent w-auto"
              size="txtPoppinsBold40Yellow900"
            >
              Monitoring Realtime
            </Text>
            <Line className="bg-gray-700 h-0.5 w-[6%]" />
            <Text
              className="leading-[28.00px] max-w-[904px] md:max-w-full text-center text-gray-700 text-xl"
              size="txtPoppinsRegular20Gray700"
            >
              This page exhibits details regarding energy consumption. This
              interface will deliver real-time information about energy usage to
              users.
            </Text>
          </div>
          <div className="flex flex-col md:gap-10 gap-16 items-start justify-start max-w-[996px] mx-auto w-full">
            <List
              className="sm:flex-col flex-row md:gap-10 grid md:grid-cols-1 grid-cols-2 justify-between max-w-[996px] w-full"
              orientation="horizontal"
            >
              <div className="flex sm:flex-1 flex-col gap-[27px] items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                  size="txtPoppinsBold24Gray700"
                >
                  Voltase
                </Text>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <div className="bg-white-A700 border border-gray-700 border-solid flex md:pr-10 sm:pr-5 pr-[107px] relative rounded-lg w-full">
                    <div className="bg-red-A100 h-10 my-auto w-[45%]"></div>
                    <Text
                      className="ml-[-10px] text-2xl md:text-[22px] text-gray-700 sm:text-xl z-[1]"
                      size="txtPoppinsBold24Gray700"
                    >
                      216.400 V
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-96 sm:w-full">
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtPoppinsBold16"
                    >
                      0
                    </Text>
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtPoppinsBold16"
                    >
                      1023
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-[27px] items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                  size="txtPoppinsBold24Gray700"
                >
                  Ampere
                </Text>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <div className="bg-white-A700 border border-gray-700 border-solid flex md:pr-10 sm:pr-5 pr-[139px] relative rounded-lg w-full">
                    <div className="bg-red-A100 h-10 my-auto w-[45%]"></div>
                    <Text
                      className="ml-[-10px] text-2xl md:text-[22px] text-gray-700 sm:text-xl z-[1]"
                      size="txtPoppinsBold24Gray700"
                    >
                      0.071 A
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-96 sm:w-full">
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtPoppinsBold16"
                    >
                      0
                    </Text>
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtPoppinsBold16"
                    >
                      1023
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col items-center justify-center max-w-[995px] w-full">
              <div className="flex flex-col gap-[27px] items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                  size="txtPoppinsBold24Gray700"
                >
                  kWh (Kilo Watt-Hour)
                </Text>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <div className="bg-white-A700 border border-gray-700 border-solid flex md:pr-10 sm:pr-5 pr-[115px] relative rounded-lg w-full">
                    <div className="bg-red-A100 h-10 my-auto w-[45%]"></div>
                    <Text
                      className="ml-[-31.5px] text-2xl md:text-[22px] text-gray-700 sm:text-xl z-[1]"
                      size="txtPoppinsBold24Gray700"
                    >
                      0.007 kWh
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-96 sm:w-full">
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtPoppinsBold16"
                    >
                      0
                    </Text>
                    <Text
                      className="text-base text-gray-700 w-auto"
                      size="txtPoppinsBold16"
                    >
                      1023
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[88px] items-center justify-start max-w-[1200px] mx-auto md:px-5 py-[120px] w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-auto md:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
              size="txtPoppinsBold40"
            >
              Monitoring History
            </Text>
            <Line className="bg-white-A700 h-0.5 w-[6%]" />
            <Text
              className="leading-[28.00px] max-w-[904px] md:max-w-full text-center text-gray-50 text-xl"
              size="txtPoppinsRegular20"
            >
              This page showcases real-time voltage consumption and historical
              monitoring data recorded by the devices, providing insights about
              past usage patterns.
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1200px] rounded-lg w-full">
            <div className="overflow-auto w-full">
              <ReactTable
                columns={tableColumns}
                data={tableData.current}
                rowClass={""}
                headerClass=""
              />
            </div>
            <Line className="bg-gray-300 h-px w-full" />
            <Line className="bg-gray-300 h-px w-full" />
            <Line className="bg-gray-300 h-px w-full" />
            <Line className="bg-gray-300 h-px w-full" />
            <Line className="bg-gray-300 h-px w-full" />
            <Line className="bg-gray-300 h-px w-full" />
          </div>
        </div>
        <Footer className="bg-black-900_01 flex gap-[43px] items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default MonitoringRiwayatPage;
