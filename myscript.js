const quotes = [
    {
        text: "You do not have to have everything figured out to keep moving forward.",
        author: "— ScanMark"
    },

    {
        text: "Keep going. Small steps still move you forward.",
        author: "— ScanMark"
    },

    {
        text: "Your pace is still progress.",
        author: "— ScanMark"
    },

    {
        text: "Give yourself permission to begin again.",
        author: "— ScanMark"
    },

    {
        text: "There is something good waiting for you beyond this moment.",
        author: "— ScanMark"
    },

    {
        text: "You are allowed to be a work in progress.",
        author: "— ScanMark"
    },

    {
        text: "A little progress today is still worth celebrating.",
        author: "— ScanMark"
    },

    {
        text: "Take the next step. You do not need to see the whole path.",
        author: "— ScanMark"
    }
];


let currentQuote = 0;


const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

const newQuoteButton = document.getElementById("newQuote");
const copyQuoteButton = document.getElementById("copyQuote");


// CHANGE QUOTE
newQuoteButton.addEventListener("click", function () {

    currentQuote++;

    if (currentQuote >= quotes.length) {
        currentQuote = 0;
    }

    quoteElement.textContent = quotes[currentQuote].text;
    authorElement.textContent = quotes[currentQuote].author;

});


// COPY QUOTE
copyQuoteButton.addEventListener("click", async function () {

    const textToCopy =
        quotes[currentQuote].text +
        " " +
        quotes[currentQuote].author;

    try {

        await navigator.clipboard.writeText(textToCopy);

        copyQuoteButton.textContent = "✓ Copied!";

        setTimeout(function () {
            copyQuoteButton.textContent = "Copy quote";
        }, 1500);

    } catch (error) {

        copyQuoteButton.textContent = "Copy failed";

        setTimeout(function () {
            copyQuoteButton.textContent = "Copy quote";
        }, 1500);

    }

});
