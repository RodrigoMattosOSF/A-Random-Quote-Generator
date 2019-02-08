
/**
 * Array of quote objects
 * 
 * quote    : string
 * source   : string
 * citation : string
 * year     : integer
 */
var quotes = [
    {
        'quote'    : 'Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.',
        'source'   : 'David Levithan',
        'citation' : 'Wide Awake', 
        'year'     : 'N/A'
    },
    {
        'quote'    : 'You can never visit the same place twice. Each time, it’s a different story. By the very act of coming back, you wipe out what came before.',
        'source'   : 'Maureen Johnson'
    },
    {
        'quote'    : 'A million dollars sounds like a lot, I know. Especially when you’re young. But you can’t let money erode your principles or you’ll wind up with nothing.',
        'source'   : 'Wendelin Van Draanen'
    },
    {
        'quote'    : 'There is no such thing as equality for some. Equality must be for all. That is what freedom is. That is what liberty is. No human being is born more or less important than any other. How can we allow ourselves to forget that? What simpler truth is there?',
        'source'   : 'David Levithan',
        'citation' : 'Wide Awake', 
        'year'     : 'N/A'
    },
    {
        'quote'    : 'It’s always easier to say good-bye when you know it’s just a prelude to hello.',
        'source'   : 'Maureen Johnson',
        'citation' : 'The Last Little Blue Envelope', 
        'year'     : 'N/A'
    }
]

/**
 * Return a random number from the math function source about the random method can be found at: https://www.w3schools.com/jsref/jsref_random.asp
 * 
 * returns quote object
 */
function getRandomQuote() {
    var rNumber = Math.floor((Math.random() * quotes.length));

    return quotes[rNumber];
}

/**
 * Retrieves a random quote from getRandomQuote and assigns its information as html to the container
 */
function printQuote() {
    var rQuote    = getRandomQuote();
    var container = document.createElement('span');    
    var quoteBox  = document.getElementById('quote-box');
    
    if (typeof rQuote.quote !== 'undefined') {
        var quote = document.createElement('p');
        quote.setAttribute('class', 'quote');
        quote.innerHTML = rQuote.quote;
        container.appendChild(quote);
    }

    if (typeof rQuote.source !== 'undefined') {
        var source = document.createElement('p');
        source.setAttribute('class', 'source');
        source.innerHTML = rQuote.source;

        if (typeof rQuote.citation !== 'undefined') {
            var citation = document.createElement('span');
            citation.setAttribute('class', 'citation');
            citation.innerHTML = rQuote.citation;
            source.appendChild(citation);
        }

        if (typeof rQuote.year !== 'undefined') {
            var year = document.createElement('span');
            year.setAttribute('class', 'year');
            year.innerHTML = rQuote.year;
            source.appendChild(year);
        }

        container.appendChild(source);
    }

    quoteBox.innerHTML = container.innerHTML;
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
