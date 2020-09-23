import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


const API = 'http://localhost:6001/bots';

class BotsPage extends Component {
  state = {
    bots: [],
    myBots: [],
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json()) 
      .then(bots => this.setState({ bots: bots})
      )
  }

  onSelectBot = (bot) => {
    this.setState({
      myBots: [...this.state.myBots, bot]
    })
  }

  removeBot = (bot) => {
    this.setState(prevState => {
      return {
        myBots: prevState.myBots.filter(i => i !== bot)
      }
    })
  }

  deleteBotForever = (bot) => {
    const id = bot.id;
    this.setState({
      bots: this.state.bots.filter(bot => {
        return bot.id !== id
      })
    })
    fetch(API + `/${id}`), {
      method: 'DELETE'
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy 
          myBots={this.state.myBots} 
          removeBot={this.removeBot} 
          deleteBotForever={this.deleteBotForever} 
        />
        <BotCollection 
          bots={this.state.bots} 
          onSelectBot={this.onSelectBot} 
          deleteBotForever={this.deleteBotForever} 
        />
      </div>
    )
  
  }
}

export default BotsPage;
