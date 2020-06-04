import React from 'react';
import '../App.css';
import ReactPlayer from 'react-player'
import FourthPage from './FourthPage';

export default class ThirdPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endVideo: false,
    }
  }

  render() {
    return (
      <div>
        {!this.state.endVideo
        ?
          <div>
            {this.props.video === "couple"
            ?
              <ReactPlayer 
                className="fullScreen"
                url={"https://www.youtube.com/watch?v=Qvf3KV8ghDI"}
                playing
                onEnded={() => this.setState({endVideo: true})}
                
              />
            :this.props.video === "pet"
            ?
              <ReactPlayer 
                className="fullScreen"
                url={"https://www.youtube.com/watch?v=OlokBRYCdKU"}
                playing
                onEnded={() => this.setState({endVideo: true})}
              />
            :this.props.video === "family"
            ?
              <ReactPlayer 
                className="fullScreen"
                url={"https://www.youtube.com/watch?v=zObQx2stYdo"}
                playing
                onEnded={() => this.setState({endVideo: true})}
              />          
            :this.props.video === "friend"
            ?
              <ReactPlayer 
                className="fullScreen"
                url={"https://www.youtube.com/watch?v=8TQQSAw0JTs"}
                playing
                onEnded={() => this.setState({endVideo: true})}
              /> 
            :
              null
            }
          </div>
        :
            <FourthPage />
        }
      </div>
    );
  }
}