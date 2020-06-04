import React from 'react';
import '../App.css'
import ReactPlayer from 'react-player'
import LabelCouple from  '../img-source/couples-01.png'
import LabelFamily from  '../img-source/family-01.png'
import LabelFriend from  '../img-source/friend-01.png'
import LabelPet from  '../img-source/pet-01.png'
import ThirdPage from './ThirdPage';

export default class SecondPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextVideo: '',
      nextPage: false,
    }
  }
  
  nextVideo = (idVideo) =>{
    this.setState({
      nextVideo: idVideo,
      nextPage: true
    })
  }

  handleProgress = state => {
    let duration = state.playedSeconds.toString()
    if(duration.indexOf('.') === 2){
      let timeToShow = duration.substring(0, 2),
      couple = document.getElementById('label_couple'),
      pet = document.getElementById('label_pet'),
      family = document.getElementById('label_family'),
      friend = document.getElementById('label_friend');

      if(timeToShow === "29"){
        setInterval(() => {
          pet.style.opacity = 1
        }, 1000);
        setInterval(() => {
          couple.style.opacity = 1
        }, 1500);
        setInterval(() => {
          friend.style.opacity = 1
        }, 2000);
        setInterval(() => {
          family.style.opacity = 1
        }, 2500);
      }
    }
  }

  render() {
    return (
      <div>
        {!this.state.nextPage
        ?
        <span>
          <ReactPlayer 
            className="fullScreen"
            url={"https://www.youtube.com/watch?v=UO-Tns0lpOM"}
            playing
            onProgress={this.handleProgress}
            
          />
          <div className="LabelButtonHeart" id="LabelButtonHeart">
            <img src={LabelCouple} id="label_couple" alt="label_couple" onClick={() => this.nextVideo('couple')}/>
            <img src={LabelPet} id="label_pet" alt="label_pet" onClick={() => this.nextVideo('pet')}/>
            <img src={LabelFriend} id="label_friend" alt="label_friend" onClick={() => this.nextVideo('friend')}/>
            <img src={LabelFamily} id="label_family" alt="label_family" onClick={() => this.nextVideo('family')}/>
          </div>
        </span>
        :
          <ThirdPage video={this.state.nextVideo} />
        }
      </div>
    );
  }
}

