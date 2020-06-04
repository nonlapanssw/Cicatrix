import React from 'react';
import '../App.css';
import ReactPlayer from 'react-player'
import LastPage from './LastPage';

export default class FifthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endVideo: false
    }
  }

  render() {
    return (
      <div>
        {!this.state.endVideo
        ?
          <div>
            {this.props.video === "LeastPain"
            ?
              <ReactPlayer 
                className="fullScreen"
                url={"https://www.youtube.com/watch?v=6PFgdAl3FD4"}
                playing
                onEnded={() => this.setState({endVideo: true})}
                
              />
            :this.props.video === "NormalPain"
            ?
              <ReactPlayer 
                className="fullScreen"
                url={"https://www.youtube.com/watch?v=Ytx8J29HNZA"}
                playing
                onEnded={() => this.setState({endVideo: true})}
              />
            :this.props.video === "MostPain"
            ?
              <ReactPlayer 
                className="fullScreen"
                url={"https://www.youtube.com/watch?v=7ZRsnvrbzd8"}
                playing
                onEnded={() => this.setState({endVideo: true})}
              />          
            :
              null
            }
          </div>
        :
            <LastPage />
        }
      </div>
    );
  }
}

