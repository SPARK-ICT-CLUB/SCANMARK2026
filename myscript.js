const quotes = [
    "You do not have to have everything figured out to keep moving forward.",
    "Keep going. Small steps still move you forward.",
    "Your pace is still progress.",
    "Give yourself permission to begin again.",
    "There is something good waiting for you beyond this moment.",
    "You are allowed to be a work in progress.",
    "A little progress today is still worth celebrating.",
    "Take the next step. You do not need to see the whole path.",

    "Kaya mo 'yan. Isang hakbang lang bawat araw.",
    "Hindi mo kailangang maging perpekto para magsimula.",
    "Darating din ang araw na masasabi mong, sulit pala ang lahat.",
    "Pahinga kung kailangan, pero huwag susuko.",
    "Maliit man ang progreso, progreso pa rin.",
    "May mga bagay na hindi mo kailangang madaliin.",
    "Maniwala ka sa sarili mo, kahit kaunti lang muna.",
    "Hindi ka nahuhuli. May sarili kang timeline.",
    "Okay lang magsimula ulit.",
    "Hindi lahat ng araw kailangan productive. Minsan, kailangan mo lang huminga.",
    "May magandang bagay na naghihintay sa dulo ng iyong pagsisikap.",
    "Unti-unti lang. Hindi naman karera ang buhay.",
    "Kung pagod ka, pahinga. Huwag sumuko.",
    "One day at a time. Kaya natin 'to.",
    "Hindi man ngayon, pero darating din ang tamang panahon.",
    "You are doing better than you think."
];

let currentQuote = 0;

const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("newQuote");
const copyQuoteButton = document.getElementById("copyQuote");


// GET A RANDOM QUOTE
newQuoteButton.addEventListener("click", function () {

    let randomQuote;

    do {
        randomQuote = Math.floor(Math.random() * quotes.length);
    } while (randomQuote === currentQuote && quotes.length > 1);

    currentQuote = randomQuote;

    quoteElement.textContent = quotes[currentQuote];

});


// COPY QUOTE
copyQuoteButton.addEventListener("click", async function () {

    const quote = quotes[currentQuote];

    try {

        await navigator.clipboard.writeText(quote);

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
