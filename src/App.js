import React from 'react'
import CivList from './components/CivList'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import FetchPlayerId from './components/FetchPlayerId'

class App extends React.Component {
  render(){
    return (
      <div>
      <Header />
      <SearchBar placeholder = "Enter your id here" handleChange = {(e) => console.log(e.target.value)} />
      {/* <CivList /> */}
      <FetchPlayerId />
      <Footer />
    </div>
    )
  }
}

export default App;
