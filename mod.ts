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

const launches = newMap<number, Launch>();
