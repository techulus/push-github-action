const request = require("request");

const API_URL = "https://push.techulus.com/api/v1/notify-async";
const VALID_SOUNDS = [
  "arcade",
  "correct",
  "fail",
  "harp",
  "reveal",
  "bubble",
  "doorbell",
  "flute",
  "money",
  "scifi",
  "clear",
  "elevator",
  "guitar",
  "pop",
];

const message = {
  body: process.env.MESSAGE || "No message specified",
  title:
    process.env.TITLE ||
    `GitHub Notification from ${process.env.GITHUB_REPOSITORY}`,
};

if (process.env.LINK) {
  message.link = process.env.LINK;
}

if (process.env.IMAGE) {
  message.image = process.env.IMAGE;
}

if (process.env.TIME_SENSITIVE) {
  message.timeSensitive = String(process.env.TIME_SENSITIVE) === "true";
}

if (process.env.SOUND) {
  message.sound = process.env.sound || "default";
  if (!VALID_SOUNDS.includes(message.sound)) {
    return console.error("Invalid sound specified");
  }
}

if (!process.env.API_KEY) {
  return console.error("API KEY is missing");
}

console.log("Sending message", JSON.stringify(message));

request(
  {
    url: API_URL,
    method: "POST",
    headers: {
      "x-api-key": process.env.API_KEY,
    },
    body: message,
    json: true,
  },
  (err, response) => {
    if (err) {
      return console.error(err.toString());
    }
    console.log("Notification sent!", response.body);
  }
);
