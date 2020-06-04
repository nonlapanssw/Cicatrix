import React from 'react';
import '../App.css';
import ReactPlayer from 'react-player'
import Modal from 'react-responsive-modal'
import LeastPain from '../img-source/1.Least.png'
import NormalPain from '../img-source/2.Normal.png'
import MostPain from '../img-source/3.Most.png'
import FifthPage from './FifthPage';

export default class FourthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      painVideo: '',
      timer: true
    }
  }

  handleProgress = state => {
    let duration = state.playedSeconds.toString()
    let timeToShow = duration.substring(0, 1)
      if(timeToShow === "1"){
        this.setState({timer: false})
      }
  }

  render() {
    return (
      <div>
        {this.state.painVideo === ''
        ?
          <Modal open={true} onClose={() => this.setState({visible: false})}>
            <ReactPlayer 
              className = "fullScreen"
              url={"https://www.youtube.com/watch?v=TYQ2j3noprs"}
              playing
              width="100%"
              onProgress={this.handleProgress}
            />
            <div className="ButtonChoosePain" hidden={this.state.timer}>
              <img src={LeastPain} alt="LeastPain" id="LeastPain" onClick={() => this.setState({painVideo: 'LeastPain'})} />
              <img src={NormalPain} alt="NormalPain" id="NormalPain" onClick={() => this.setState({painVideo: 'NormalPain'})} />
              <img src={MostPain} alt="MostPain" id="MostPain" onClick={() => this.setState({painVideo: 'MostPain'})}  />
            </div>
          </Modal>
        :
          <FifthPage video={this.state.painVideo} />
        }
        
      </div>
    );
  }
}

