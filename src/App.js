import React from 'react';
import Header from './component/header/Header.js'
import Form from './component/form/Form.js'
import Footer from './component/footer/Footer.js'
import './app.scss'; //??//


class App extends React.Component{ 
  render() {
    return (
      <div>
        <Header/>
        <Form/>
        <Footer/>
      </div>
    )
  }
}

export default App;