import React ,{ useEffect, useState } from 'react';
import './App.scss';

let quoteDBUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {
  const [quotesArray , setQuotesArray] = useState({})

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
  }

  useEffect(() => {
    fetchQuotes(quoteDBUrl)
  },[quoteDBUrl])

  const [ randomNumber , setRandomNumber] = useState(0)
  
  const [ quote, setQuote ] = useState("")

  const [ author, setAuthor ] = useState("")

  const getRandomQuote = () => {
    let RNG = Math.floor((quotesArray.length)*Math.random())
    setRandomNumber(RNG)
    setQuote(quotesArray[randomNumber].quote)
    setAuthor(quotesArray[randomNumber].author)
  }

    return (
    <div className="App">
      <header className="App-header">
        <section id="quote-box">
          <div className="quote-author-box">
          <p id="text">
            <img id="quote-logo" alt="quote-left" src="quote-left.png"></img>
            {quote}"
          </p>
          <p id="author">
            - {author}
          </p>
          </div>
          <div className='button-box'>
            <button id="new-quote" onClick={()=> getRandomQuote()}>New Quote</button>
            <a href={"https://twitter.com/intent/tweet?text=" + quote + " -" + author} target="_blank" id="tweet-quote">
              <img id="logo-img"src="logo-twitter.ico" alt="twitter-logo"></img>
            </a>
          </div>
          <footer>
            <p>By TerTeixs</p>
          </footer>
        </section>
      </header>
    </div>
  );
}

export default App;
