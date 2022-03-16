async function daily_weather(place, format) {
  res = await fetch(`https://wttr.in/~${place}?format=${format}`)
  body = await res.text();
  return body;
}

module.exports = daily_weather;
