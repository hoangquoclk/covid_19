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
    const categories = data.days.map((day) => moment(day).format("DD/MM/YYYY"));
    let title = "";
    let color = "";
    if (data.type === "cases") {
      title = t("TotalCases.Inflection");
      color = "#032cf7";
    } else if (data.type === "deaths") {
      title = t("TotalCases.Death");
      color = "#c9302c";
    } else {
      title = t("TotalCases.Recovered");
      color = "#28a745";
    }

    return {
      chart: {
        height: 500,
        width: 1000,
      },
      title: {
        text: title,
      },
      xAxis: {
        categories: categories,
        crosshair: true,
      },
      colors: [color],
      yAxis: {
        min: 0,
        title: {
          text: t("yAxis"),
        },
        labels: {
          align: "right",
        },
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
          name: title,
          data: data.data,
        },
      ],
    };
  };

  useEffect(() => {
    setOptions(generateOptions(data));
    // console.log("da doi language");
  }, [data, language]);

  return (
    <div className={classes.lineChart}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default React.memo(LineChart);
