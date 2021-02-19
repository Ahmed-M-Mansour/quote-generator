
// Mnublating the DOM 
const quoteContainer = document.getElementById('quote-container'); 
const quoteText   = document.getElementById('quote'); 
const authorText  = document.getElementById('author'); 
const twitterBtn  = document.getElementById('twitter'); 
const newquoteBtn = document.getElementById('new-quote'); 

// Thewat to fetch the data localy from an array 
// show New quote 
function newQuote(){
    const quote = localQuotes[Math.floor(Math.random() *localQuotes.length )] ; 
    if(quote === '') localQuotes[5] ; 
    console.log(quote) ; 
    // if The Author is null 
    if(!quote.author) authorText.textContent = 'Unknown Author ' ; 
    // set the Author 
    else authorText.textContent = quote.author ;
    // check the length of the quote to determinrstyling 
    if((quote.text).length > 50) 
    quoteText.classList.add('long-quote');
    else quoteText.classList.remove('long-quote');
    //set the Quote 
    quoteText.textContent = quote.text ; 
    
}
// Tweet Quote 
function tweetQuote()
{
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} 
    - ${authorText.textContent}` ; 
    window.open(twitterUrl, '_blank')
}


// let apiQuotes = [] ; 

// The wat to fetch the data directly from the API 
// get  Quote from an API 
// async function getQuote()
// {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try{
//         const response = await fetch( apiUrl ) ; 
//         apiQuotes =await response.json(); 
//         newQuote() ; 
//     } 
//     catch(erorr){
//         console.log('no quote recived ' + erorr)

//     }
// } 

// getQuote(); 

newQuote() ; 
// handle the new quote btn when its clicked 
newquoteBtn.addEventListener('click' ,newQuote ) ; 

// handle the Twitter Btn when its clicked 
twitterBtn.addEventListener('click' , tweetQuote)