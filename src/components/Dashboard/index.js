import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Highlight, Summary, MapChart } from "..";
import { getWorldMap } from "../../utils/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { WorldActions } from "../../redux/rootAction";

const Dashboard = () => {
  const { t } = useTranslation();
  const [mapData, setMapData] = useState({});
  const dispatch = useDispatch();

  const getWorldStatus = async () => {
    await axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => {
        dispatch(WorldActions.setWorldStatus(response.data));
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    getWorldStatus();
  }, []);

  useEffect(() => {
    getWorldMap()
      .then((res) => setMapData(res))
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <MapChart mapData={mapData} />
      <Highlight
        url={"https://disease.sh/v3/covid-19/all"}
        title={t("Situation.Global")}
      />
      <Summary />
    </div>
  );
};

export default Dashboard;
