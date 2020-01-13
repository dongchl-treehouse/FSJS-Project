/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
  Create the array of quote objects named `quotes`.
  Add at least five quote objects to the `quotes` array.
  Each quote object has a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
***/


let quotes=[

{
    quote: "learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
    source:"Albert EInstein",
    tags: "(life)",
},

{
    quote:"Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step. ",
    source:"Lao Tzu",
},

{
    quote:"However difficult life may seem, there is always something you can do and succeed at. ",
    source:"Stephen Hawking",
},

{
    quote:"The world is your oyster. It's up to you to find the pearls.",
    source:"Chris Gardner",
    citation:"The Pursuit of Happiness",
    year: 2006,
},
{
    quote:"Mama always said life was like a box of chocolates. You never know what you're gonna get.",
    source:"Forrest Gump ",
    citation:"Forrest Gump ",
    year: 1994,
}
];

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
   
    //generate a random number between 0 and the last index in the array parameter
    // use the random number and box notation to grab a random item from the quotes array
    //return the random item

   let Random_number= Math.floor(Math.random() * (quotes.length));

   Random_item=quotes[Random_number];

// create a function to get body random color

function RandomColorRGB() {
    let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	return `rgb(${red}, ${green}, ${blue})`;
};
   document.body.style.backgroundColor = RandomColorRGB(); // randomly change background color 

   return  Random_item;
}    

//console.log(getRandomQuote()); 

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the index.html file, AND the random quote vairable to build the HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
 function printQuote(){
    let Random_quote = getRandomQuote();
    let LabelHtml = '';

    LabelHtml = '<p class="quote"> ' + Random_quote.quote  + '</p>'
    LabelHtml += '<p class="source"> ' + Random_quote.source;
    
    if (Random_quote.hasOwnProperty('citation')){
        LabelHtml +=  '<span class="citation">' + Random_quote.citation + '</span>' ;
    }

    if (Random_quote.hasOwnProperty('year')){
        LabelHtml +=  '<span class="year">' + Random_quote.year + '</span>' ;
    }

    if (Random_quote.hasOwnProperty('tags')){
        LabelHtml +=  '<span class="tags">' + Random_quote.tags + '</span>' ;
    }

    LabelHtml += '</p>';
    
    // here print html string to check if it is correct.
    //console.log(LabelHtml);
  
    // use  .innerHTML method to pass a randomly retrieved quote as the value being added into  HTML 'quote-box' element
    var element = document.getElementById('quote-box');// 
    element.innerHTML = LabelHtml;
            
};
 
setInterval(printQuote, 3000); //Auto-refresh the quote every 3 seconds
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
