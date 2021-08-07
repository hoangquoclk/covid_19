import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Container } from "@material-ui/core";
import { useStyles } from "./styles";

highchartsMap(Highcharts);

const MapChart = ({ mapData, language }) => {
  const classes = useStyles();
  const countries = useSelector((state) => state.countries.listCountries);
  const chartRef = useRef(null);
  const { t } = useTranslation();
  const [options, setOptions] = useState({});
  const [mapLoaded, setMapLoaded] = useState(false);
  const darkMode = localStorage.getItem("darkMode");

  const initOptions = {
    title: {
      text: null,
    },
    credits: {
      enabled: false,
    },
    colors: [
      "rgba(255,196,170,1)",
      "rgba(255,164,128,1)",
      "rgba(255,100,100,1)",
      "rgba(255,0,0,1)",
      "rgba(218,0,0,1)",
      "rgba(142,1,1,1)",
      "rgba(86,0,0,1)",
    ],

    mapNavigation: {
      enabled: true,
    },
    colorAxis: {
      dataClassColor: "category",
      dataClasses: [
        {
          to: 1000,
        },
        {
          from: 1000,
          to: 10000,
        },
        {
          from: 10000,
          to: 100000,
        },
        {
          from: 100000,
          to: 500000,
        },
        {
          from: 500000,
          to: 1000000,
        },
        {
          from: 1000000,
          to: 5000000,
        },
        {
          from: 5000000,
        },
      ],
    },
    legend: {
      title: {
        text: t("Map.MapLegendTitle"),
      },
      layout: "vertical",
      align: "left",
      floating: true,
      verticalAlign: "bottom",
    },
    series: [
      {
        name: t("TotalCases.Cases"),
        joinBy: ["hc-key", "key"],
        tooltip: {
          valueSuffix: ` ${t("Map.cases")}`,
          pointFormat:
            '<span class="f32"><span class="flag {point.properties.hc-key}">' +
            "</span></span> {point.name} " +
            '<span style="font-size:13px; font-weight: 600">{point.value}</span>',
        },
      },
    ],
  };

  useEffect(() => {
    if (mapData && Object.keys(mapData).length && countries.length) {
      const mapKey = mapData.features.map((feature) => {
        return feature.properties["hc-key"];
      });

      const data = countries.map((country) => {
        let key = country.countryInfo.iso2;
        if (key === null || key === "") return;
        key = key.toLowerCase();
        return { key: key, value: country.cases };
      });

      const newData = mapKey.map((key) => {
        for (let i of data) {
          if (i) {
            if (key === i.key) {
              return i;
            }
          }
        }
        return { key: key, value: 0 };
      });

      if (darkMode === "true") {
        setOptions(() => ({
          ...initOptions,
          chart: {
            height: "500",
            backgroundColor: "#666666",
          },
          title: {
            text: t("Map.MapTitle"),
            style: { color: "#ececec", fontSize: "18px" },
          },
          series: [
            { ...initOptions.series[0], mapData: mapData, data: newData },
          ],
        }));
      } else {
        setOptions(() => ({
          ...initOptions,
          chart: {
            height: "500",
            backgroundColor: "#FFF",
          },
          title: {
            text: t("Map.MapTitle"),
            style: { color: "#333333", fontSize: "18px" },
          },
          series: [
            { ...initOptions.series[0], mapData: mapData, data: newData },
          ],
        }));
      }

      if (!mapLoaded) setMapLoaded(true);
    }
  }, [mapData, mapLoaded, countries, language, darkMode]);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      chartRef.current.chart.series[0].update({
        mapData,
      });
    }
  }, [options, mapData]);

  if (!mapLoaded) return null;

  return (
    <Container className={classes.root}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"mapChart"}
        ref={chartRef}
      />
    </Container>
  );
};

export default React.memo(MapChart);
