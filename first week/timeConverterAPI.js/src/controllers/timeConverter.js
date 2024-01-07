const { modelTimeConverter } = require("../models/timeConverter")
 
const timeConverter = (request, response) => {
  const { time } = request.body;

  if (!time) {
    return response.status(400).json({ Error: "No time to converter!" });
  }

  const convertedTime = modelTimeConverter(time);

  return response.status(200).json({ convertedTime: `${convertedTime}`})
};

module.exports = {
  timeConverter,
}