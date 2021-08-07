import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import drilldown from "highcharts/modules/drilldown";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

drilldown(Highcharts);

const ColumnChart = ({ language }) => {
  const topCountries = useSelector((state) => state.countries.topCountries);
  const classes = useStyles();
  const [options, setOptions] = useState({});
  const { t } = useTranslation();
  const darkMode = localStorage.getItem("darkMode");

  const initialOptions = {
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> people<br/>',
      useHTML: true,
    },
  };

  useEffect(() => {
    let data = topCountries.map((country) => {
      return {
        name: country.country,
        y: country.cases,
        flag: country.countryInfo.flag,
        drilldown: country.country,
      };
    });

    let drilldownData = topCountries.map((country) => {
      return {
        name: country.country,
        id: country.country,
        data: [
          [t("ColumnChart.Active"), country.active],
          [t("ColumnChart.Recovered"), country.recovered],
          [t("ColumnChart.Deaths"), country.deaths],
        ],
      };
    });

    const newOptions = {
      ...initialOptions,
      xAxis: {
        type: "category",
        labels: {
          useHTML: true,
          animate: true,
          formatter: function () {
            var value = this.value,
              output;

            data.forEach(function (country) {
              if (country.name === value) {
                output = country.flag;
              }
            });
            return `<span><img src=${output} style="max-width: 40px; height: 25px;"/><br></span>`;
          },
        },
      },
      series: [
        {
          name: t("ColumnChart.Name"),
          colorByPoint: true,
          data: data,
        },
      ],
      drilldown: {
        series: drilldownData,
      },
    };

    if (darkMode === "true") {
      setOptions({
        ...newOptions,
        chart: {
          type: "column",
          height: 500,
          backgroundColor: "#666666",
        },
        title: {
          text: t("ColumnChart.Title"),
          style: { color: "#ececec" },
        },
        subtitle: {
          text: t("ColumnChart.SubTitle"),
          style: { color: "#ececec" },
        },
        yAxis: {
          title: {
            text: t("yAxis"),
            style: { color: "#ececec" },
          },
          labels: {
            style: { color: "#ececec" },
          },
        },
      });
    } else {
      setOptions({
        ...newOptions,
        chart: {
          type: "column",
          height: 500,
          backgroundColor: "#FFF",
        },
        title: {
          text: t("ColumnChart.Title"),
          style: { color: "#333333" },
        },
        subtitle: {
          text: t("ColumnChart.SubTitle"),
          style: { color: "#333333" },
        },
        yAxis: {
          title: {
            text: t("yAxis"),
            style: { color: "#333333" },
          },
          labels: {
            style: { color: "#333333" },
          },
        },
      });
    }
  }, [language, topCountries, darkMode]);

  return (
    <div className={classes.column__chart}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default React.memo(ColumnChart);
