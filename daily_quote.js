async function daily_quote() {
  quoteUrl = 'https://api.quotable.io/random';
  res = await fetch(quoteUrl).then((data) => {
    return data.json();
  });
  quote = `title: ${res['author']}\n\n${res['content']}`;
  before = '```ad-quote';
  after = '```';
  return `${before}\n${quote}\n${after}`;
}

module.exports = daily_quote;
