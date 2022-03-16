async function daily_word() {
  res = await fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": "001c055128msh47f462aa4fee791p1d3f72jsn72d2dde78993"
    }
  })
  word = `${res}`;
  before = '```ad-tldr';
  after = '```';
  return `${before}\n${word}\n${after}`;
}

module.exports = daily_word;
