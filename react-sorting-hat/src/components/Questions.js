import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'

const answers1 = ['Bravery', 'Hardwork', 'Intelligence', 'Ambition']

const answers2 = ['Miss you, but smile', 'Ask for more stories about your adventures', 'Think with admiration of you achievements', 'I don\'t care what people think of me after I\'m dead; it\'s what they think of me while I\'m alive that counts']

const answers3 = ['Glory', 'Wisdom', 'Love', 'Power']

const answers4 = ['The Wise', 'The Good', 'The Bold', 'The Great']

const answers5 = ['The silver leafed tree bearing golden apples', 'The fat red toadstools that appear to be talking to each other', 'The bubbling pool, in the depths of which something luminous is swirling', 'The statue of an old wizard with a strangely twinkling eye']

const answers6 = ['Violin', 'Drums', 'Piano', 'Trumpet']

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gryffindoor: 0,
      hufflepuff: 0,
      ravenclaw: 0,
      slytherin: 0
    }
  }

  question1 = arr => {
    for (let i = 0; i < arr.length; i++){
      if(arr[0]){
        this.setState({
          gryffindoor: this.state.gryffindoor + 1
        })
      } else if (arr[1]){
        this.setState({
          hufflepuff: this.state.hufflepuff + 1
        })
      } else if (arr[2]){
        this.setState({
          ravenclaw: this.state.ravenclaw + 1
        })
      } else if (arr[3]){
        this.setState({
          slytherin: this.state.slytherin + 1
        })
      }
    }
  }
  render() {
    return (
      <div>
        <h1>Question 1: What do you value the most? </h1>
        <h1>Question 2: After you have died, what would you most like people to do when they hear your name?</h1>
        <h1>Question 3: Given the choice, would you rather invent a potion that would guarantee you:</h1>
        <h1>Question 4: How would you like to be known to history? </h1>
        <h1>Question 5: You enter an enchanted garden. What would you be most curious to examine first?</h1>
        <h1>Question 6: What kind of instrument most pleases your ear?</h1>
      </div>
    );
  }
}

export default Questions;