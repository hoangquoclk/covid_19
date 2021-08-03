export const filterData = (worldStatus, filter) => {
  let newStatus = [];
  let days = [];
  let cases = [];
  let deaths = [];
  let recovered = [];
  if (filter === "week") {
    for (let i = 0; i < 7; i++) {
      days[6 - i] = Object.keys(worldStatus.cases)[
        Object.keys(worldStatus.cases).length - 1 - i
      ];
      cases[6 - i] = Object.values(worldStatus.cases)[
        Object.keys(worldStatus.cases).length - 1 - i
      ];
      deaths[6 - i] = Object.values(worldStatus.deaths)[
        Object.keys(worldStatus.deaths).length - 1 - i
      ];
      recovered[6 - i] = Object.values(worldStatus.recovered)[
        Object.keys(worldStatus.recovered).length - 1 - i
      ];
    }
  } else if (filter === "month") {
    for (let i = 0; i < 30; i++) {
      days[29 - i] = Object.keys(worldStatus.cases)[
        Object.keys(worldStatus.cases).length - 1 - i
      ];
      cases[29 - i] = Object.values(worldStatus.cases)[
        Object.keys(worldStatus.cases).length - 1 - i
      ];
      deaths[29 - i] = Object.values(worldStatus.deaths)[
        Object.keys(worldStatus.deaths).length - 1 - i
      ];
      recovered[29 - i] = Object.values(worldStatus.recovered)[
        Object.keys(worldStatus.recovered).length - 1 - i
      ];
    }
  } else if (filter === "year") {
    for (let i = 0; i < 365; i++) {
      days[364 - i] = Object.keys(worldStatus.cases)[
        Object.keys(worldStatus.cases).length - 1 - i
      ];
      cases[364 - i] = Object.values(worldStatus.cases)[
        Object.keys(worldStatus.cases).length - 1 - i
      ];
      deaths[364 - i] = Object.values(worldStatus.deaths)[
        Object.keys(worldStatus.deaths).length - 1 - i
      ];
      recovered[364 - i] = Object.values(worldStatus.recovered)[
        Object.keys(worldStatus.recovered).length - 1 - i
      ];
    }
  }
  newStatus = [days, cases, recovered, deaths];
  return newStatus;
};

export const filterDataByDateRange = (worldStatus, startDate, endDate) => {
  let newStatus = [];
  let days = [];
  let cases = [];
  let deaths = [];
  let recovered = [];
  let initialDays = Object.keys(worldStatus.cases);
  let indexStart = initialDays.findIndex((p) => p === startDate);
  let indexEnd = initialDays.findIndex((p) => p === endDate);
  let j = 0;
  for (let i = indexStart; i <= indexEnd; i++) {
    days[j] = Object.keys(worldStatus.cases)[i];
    cases[j] = Object.values(worldStatus.cases)[i];
    deaths[j] = Object.values(worldStatus.deaths)[i];
    recovered[j] = Object.values(worldStatus.recovered)[i];
    j = j + 1;
  }
  newStatus = [days, cases, recovered, deaths];

  return newStatus;
};
