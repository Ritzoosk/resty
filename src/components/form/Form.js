import { render } from 'node-sass';
import React from 'react';
import './form.scss'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: ''
    }
  }
}

handleChange = e => {
  let url = e.target.value;
  this.setState({url});
}

handleClick = e => {
  e.preventDefault();
  let method = e.target.value
  this.setState({ method })
}

render() {
  return (
    <div>
      <form>
        <div>
          <h2>URL:</h2>
          <input type="text" value={this.state.url} onChange={this.handleChange}/>

          <button onClick={this.handleClick}>Hit That Route!</button>

        </div>
        <div>
          <button onClick={this.handelClick} className="rest-action" value="GET">GET</button>
          <button onClick={this.handelClick} className="rest-action" value="POST">POST</button>
          <button onClick={this.handelClick} className="rest-action" value="PUT">PUT</button>
          <button onClick={this.handelClick} className="rest-action" value="DELETE">DELETE</button>
        </div>
      </form>
      <div className="output">
        <div className="output-text">{this.state.method} {this.state.url}</div>
      </div>
    </div>
  )
}

export default Form;