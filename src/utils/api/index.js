import axiosConfig from "./axiosConfig";

export const api = {
  getCountries() {
    const url = "/v3/covid-19/countries";
    return axiosConfig.get(url);
  },
};

export const getWorldMap = () =>
  import(`@highcharts/map-collection/custom/world.geo.json`);
