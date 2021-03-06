import React from 'react';
import '../App.css';
import ReactPlayer from 'react-player'
import ButtonYes from '../img-source/yes.png'
import ButtonNo from '../img-source/no.png'
import SecondPage from './SecondPage';

export default class LastPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: true,
      watchAgain: false,
      ended: false
    }
  }

  handleProgress = state => {
    let duration = state.playedSeconds.toString()
    if(duration.indexOf('.') === 2){
      let timeToShow = duration.substring(0, 2)
      if(timeToShow === "23"){
        this.setState({timer: false})
      }
    }
  }
  
  render() {
    return (
      <div>
        {!this.state.ended
        ?
          <div>
            <ReactPlayer
              className = "fullScreen"
              id="LastVideo"
              url={"https://www.youtube.com/watch?v=Sqk_iwkMHac"}
              playing
              onProgress={this.handleProgress}
            />
            <div className="ButtonPlayAgain" hidden={this.state.timer}>
              <img src={ButtonYes} alt="ButtonYes" onClick={() => this.setState({watchAgain: true, ended: true})} />
              <img src={ButtonNo} alt="ButtonNo" onClick={() => this.setState({ended: true})} />
            </div>
          </div>
        :this.state.watchAgain && this.state.ended
        ?
          <SecondPage />
        :
          <ReactPlayer
            className = "fullScreen"
            id="LastVideo"
            url={"https://www.youtube.com/watch?v=JuSXeV30jdY"}
            playing
          />
        }
        
      </div>
    );
  }
}

