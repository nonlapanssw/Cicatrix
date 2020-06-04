import React from 'react';
import '../App.css';
import ReactPlayer from 'react-player'
import Modal from 'react-responsive-modal'
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
          <Modal open={true} onClose={() => this.setState({visible: false})}>
            <ReactPlayer
              className = "fullScreen"
              id="LastVideo"
              url={"https://www.youtube.com/watch?v=9sXiyF3ckeo"}
              playing
              width="100%"
              onProgress={this.handleProgress}
            />
            <div className="ButtonPlayAgain" hidden={this.state.timer}>
              <img src={ButtonYes} alt="ButtonYes" onClick={() => this.setState({watchAgain: true, ended: true})} />
              <img src={ButtonNo} alt="ButtonNo" onClick={() => this.setState({ended: true})} />
            </div>
          </Modal>
        :this.state.watchAgain && this.state.ended
        ?
          <SecondPage />
        :
          <Modal open={true} onClose={() => this.setState({visible: false})}>
            <ReactPlayer
              className = "fullScreen"
              id="LastVideo"
              url={"https://www.youtube.com/watch?v=JuSXeV30jdY"}
              playing
              width="100%"
          />
          </Modal>
        }
        
      </div>
    );
  }
}

