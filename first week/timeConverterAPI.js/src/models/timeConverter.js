const timeFormatConverter = (timeString) => {
  const timeArray = timeString.split("");

  const hours = timeArray.slice(0, 2).join("");
  const minutes = timeArray.slice(3, 5).join("");
  const seconds = timeArray.slice(6, 8).join("");
  const dayPeriod = timeArray.slice(-2).join("").toUpperCase();

  const militaryHours = dayPeriod === "PM" ? parseInt(hours) + 12 : hours;
  const treatedMilitaryHours = militaryHours === 24 ? "00" : militaryHours;

  return `${treatedMilitaryHours}:${minutes}:${seconds}`;
};

module.exports = {
  timeFormatConverter,
};
