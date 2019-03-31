import React from "react";

import "./styles.css";

class App extends React.Component {
  state = {
    currentQuote: undefined,
    }

  fetcher = async (e) => {

    const api_call = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    const data = await api_call.json();
    let rand = 0;
    rand = Math.floor(Math.random() * data.quotes.length);

    console.log(rand)
    console.log(data)

    this.setState({
      currentQuote: data.quotes[rand].quote,
      currentAuthor: data.quotes[rand].author,
    })
  }

render() {
  return (
    <div className="App">
      <div className="quote__box">
          <button onClick={this.fetcher} className="new__quote__button">New Quote</button>
          {this.state.currentQuote && <h1 className="current__quote">"{this.state.currentQuote}"</h1>}
          <h1 className="current__author">{this.state.currentAuthor}</h1>
      </div>
    </div>
    );
  }
}

export default App;