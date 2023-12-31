import './App.css';
import React, { Component } from 'react';
import { ReactDOM } from 'react';
import quotes from './quotes.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: quotes.quotes,
      RandomQuote: Math.floor(Math.random() * quotes.quotes.length),
      RandomColor: colors[Math.floor(Math.random() * colors.length)]
    }

  }
  handleClick() {
    this.setState({
      RandomQuote: Math.floor(Math.random() * quotes.quotes.length),
      RandomColor: colors[Math.floor(Math.random() * colors.length)]
    })
  }
  render() {
    let quote = this.state.quotes[this.state.RandomQuote]
    let TwitterintentLink = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote.quote + '" ' + quote.author)
    let TumblrintentLink = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + encodeURIComponent(quote.author) + '&content=' + encodeURIComponent(quote.quote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
    return (
      <div className="App text-center items-center flex justify-center h-screen" style={{ backgroundColor: this.state.RandomColor }}>
        <div className='bg-white p-12 h-min rounded-sm' id='quote-box'>
          <div className='w-[30vw] relative mb-16' style={{ color: this.state.RandomColor }}>

            <p className='font-medium text-3xl mb-8' id='text'> <FontAwesomeIcon icon={faQuoteLeft} className='mr-2' />{quote.quote}</p>
            <small className='absolute right-0 text-md text-md font-medium' id='author'>- {quote.author}</small>
          </div>
          <div className='flex gap-2 mt-8 [&>*]:text-white'>
            <a className='h-10 w-10 rounded-md flex items-center justify-center' id='tweet-quote' href={TwitterintentLink} style={{ backgroundColor: this.state.RandomColor }}><FontAwesomeIcon icon={faTwitter} /></a>
            <a className='h-10 w-10 rounded-md flex items-center justify-center' href={TumblrintentLink} style={{ backgroundColor: this.state.RandomColor }}><FontAwesomeIcon icon={faTumblr} /></a>
            <button style={{ backgroundColor: this.state.RandomColor }} className='ml-auto px-4 rounded-md' onClick={this.handleClick.bind(this)} id='new-quote'>New quote</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
