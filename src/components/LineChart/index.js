import React from "react";
import moment from "moment";
import { useState } from "react";
import { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { useStyles } from "./styles";
import { useTranslation } from "react-i18next";

const LineChart = ({ data }) => {
  const { t } = useTranslation();
  const [options, setOptions] = useState({});
  const classes = useStyles();
  const language = localStorage.getItem("i18nextLng");
  const darkMode = localStorage.getItem("darkMode");

  const initialOptions = {
    colors: ["#032cf7", "#28a745", "#c9302c"],

    credits: {
      enabled: false,
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
  };

  useEffect(() => {
    const categories = data[0].map((day) => moment(day).format("DD/MM/YYYY"));

    const newOptions = {
      ...initialOptions,
      xAxis: {
        categories: categories,
        crosshair: true,
      },
      series: [
        {
          name: t("TotalCases.Cases"),
          data: data[1],
        },
        {
          name: t("TotalCases.Recovered"),
          data: data[2],
        },
        {
          name: t("TotalCases.Death"),
          data: data[3],
        },
      ],
    };

    if (darkMode === "true") {
      setOptions({
        ...newOptions,
        chart: {
          height: 500,
          backgroundColor: "#666666",
        },
        title: {
          text: t("TitleLineChart"),
          style: { color: "#ececec" },
        },
        legend: {
          layout: "horizontal",
          align: "center",
          itemStyle: { color: "#ececec" },
          itemHoverStyle: { color: "#FFF" },
          verticalAlign: "top",
        },
        yAxis: {
          min: 0,
          title: {
            text: t("yAxis"),
            style: { color: "#ececec" },
          },
          labels: {
            align: "right",
            style: { color: "#ececec" },
          },
        },
      });
    } else {
      setOptions({
        ...newOptions,
        chart: {
          height: 500,
          backgroundColor: "#FFF",
        },
        legend: {
          layout: "horizontal",
          align: "center",
          verticalAlign: "top",
          itemStyle: { color: "#333333" },
          itemHoverStyle: { color: "#000" },
        },
        title: {
          text: t("TitleLineChart"),
          style: { color: "#333333" },
        },
        yAxis: {
          min: 0,
          title: {
            text: t("yAxis"),
            style: { color: "#333333" },
          },
          labels: {
            align: "right",
            style: { color: "#333333" },
          },
        },
      });
    }
  }, [data, language, darkMode]);

  return (
    <div className={classes.lineChart}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default React.memo(LineChart);
