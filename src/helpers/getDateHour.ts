import { format } from "date-fns";

export const getDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  const dayName = date.toLocaleDateString("en-EN", { weekday: "long" });
  const day = date.getDate();
  const monthName = date.toLocaleDateString("en-EN", { month: "long" });

  return (
    dayName[0].toUpperCase() + dayName.slice(1) + " " + day + ", " + monthName
  );
};

export const getHour = (timestamp: number, onlyHour: boolean = false) => {
  const date = format(
    new Date(timestamp * 1000),
    onlyHour ? "h aaaa" : "hh:mm aaaa"
  );

  return date;
};
