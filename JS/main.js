var Quotes = [
  {
    Quote: "The best way to predict the future is to create it.",
    Author: "― John Johnson",
  },
  {
    Quote: "A room without books is like a body without a soul.",
    Author: "― Marcus Tullius Cicero",
  },
  {
    Quote: "You only live once, but if you do it right, once is enough.",
    Author: "― Mae West",
  },
];

function GenerateQuote() {
  var RandomNumber;
  RandomNumber = Math.floor(Math.random() * Quotes.length);
  document.getElementById("Quote").innerHTML = Quotes[RandomNumber].Quote;
  document.getElementById("Author").innerHTML = Quotes[RandomNumber].Author;
}
