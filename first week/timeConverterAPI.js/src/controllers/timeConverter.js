const { timeFormatConverter } = require("../models/timeConverter")
 
const timeConverter = (request, response) => {
  const { time } = request.body;

  if (!time) {
    return response.status(400).json({ Error: "No time to converter!" });
  }

  const convertedTime = timeFormatConverter(time);

  return response.status(200).json({ convertedTime: `${convertedTime}`})
};

module.exports = {
  timeConverter,
}