// async function downloadLaunchData() {
//   const response = await fetch("https://api.spacexdata.com/v3/launches", {
//     method: "GET",
//   });

//   const launchData = await response.json();
//   console.log(launchData);
// }

// await downloadLaunchData();

// const res = await fetch("https://reqres.in/api/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify({
//     name: "Elon Musk",
//     job: "billionaire",
//   }),
// });

// const body = await res.json();
// console.log(body);

import * as log from "https://deno.land/std/log/mod.ts";

interface Launch {
  flightNumber: number;
  mission: string;
}

const launches = new Map<number, Launch>();

async function downloadLaunchData() {
  log.info("Downloading...");
  const res = await fetch("https://api.spacexdata.com/v3/launches", {
    method: "GET",
  });

  //check
  if (!res.ok) {
    log.warning("Problem in downing");
    throw new Error("failed");
  }

  const launchData = await res.json();
  for (const launch of launchData) {
    const flightData = {
      flightNumber: launch["flight_number"],
      mission: launch["mission_name"],
    };

    launches.set(flightData.flightNumber, flightData);
    log.info(JSON.stringify(flightData));
  }
}

await downloadLaunchData();
