import React from 'react';
import './App.css';
import SecondPage from './component/SecondPage';
import ReactPlayer from 'react-player'
import ButtonClick from './img-source/button_click.png'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPage: false,
      timer: true,
    }
  }

  setNextPage = () =>{
    this.setState({nextPage: true})
  }

  handleProgress = state => {
    let duration = state.playedSeconds.toString()
    if(duration.indexOf('.') === 2){
      let timeToShow = duration.substring(0, 2)
      if(timeToShow === "34"){
        this.setState({timer: false})
      }
    }
  }

  render() {
    return (
      <div className="App">
          {!this.state.nextPage 
          ?
            <div>
              <ReactPlayer 
                className = "fullScreen"
                id="FirstVideo"
                url={"https://youtu.be/E5AZ0ueFRK4"}
                playing
                onProgress={this.handleProgress}
              />
              <div className="ButtonClick" hidden={this.state.timer}>
                <img src={ButtonClick} alt="ButtonClick" onClick={() => this.setNextPage()} />
              </div>
            </div>
          :
            <SecondPage />   
          }
      </div>
    );
  }
}

