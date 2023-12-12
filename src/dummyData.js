import {
  SVGTotaemployee,
  SVGOntime,
  SVGAbsent,
  SVGLateArrival,
  SVGEarlyDepartures,
  SVGTimeoff,
} from "./svg";

export const summaryData = [
  {
    number: 452,
    title: "Total Employees",
    description: "2 new employees added!",
    Icon: SVGTotaemployee,
    change: "increase",
  },
  {
    number: 360,
    title: "On Time",
    description: "-10% Less than yesterday",
    Icon: SVGOntime,
    change: "increase",
  },
  {
    number: 30,
    title: "Absent",
    description: "+3% Increase than yesterday",
    Icon: SVGAbsent,
    change: "decrease",
  },
  {
    number: 62,
    title: "Late Arrival",
    description: "+3% Increase than yesterday",
    Icon: SVGLateArrival,
    change: "decrease",
  },
  {
    number: 6,
    title: "Early Departures",
    description: "-10% Less than yesterday",
    Icon: SVGEarlyDepartures,
    change: "increase",
  },
  {
    number: 42,
    title: "Time-off",
    description: "2% Increase than yesterday",
    Icon: SVGTimeoff,
    change: "increase",
  },
];
