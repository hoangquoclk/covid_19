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

  const generateOptions = (data) => {
    const categories = data[0].map((day) => moment(day).format("DD/MM/YYYY"));

    return {
      chart: {
        height: 500,
      },
      title: {
        text: t("TitleLineChart"),
      },
      legend: {
        layout: "horizontal",
        align: "center",
        verticalAlign: "top",
      },
      xAxis: {
        categories: categories,
        crosshair: true,
      },
      colors: ["#032cf7", "#28a745", "#c9302c"],
      yAxis: {
        min: 0,
        title: {
          text: t("yAxis"),
        },
        labels: {
          align: "right",
        },
      },
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
  };

  useEffect(() => {
    setOptions(generateOptions(data));
  }, [data, language]);

  return (
    <div className={classes.lineChart}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default React.memo(LineChart);
