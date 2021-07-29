import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Highlight, Summary, MapChart } from "..";
import { getWorldMap } from "../../utils/api";

const Dashboard = () => {
  const { t } = useTranslation();
  const [mapData, setMapData] = useState({});

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
