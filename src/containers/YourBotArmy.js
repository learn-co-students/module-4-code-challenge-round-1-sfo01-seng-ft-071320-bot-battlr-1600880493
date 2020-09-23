import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.props.myBots.map(bot => {
              return <BotCard
                bot={bot}
                removeBot={this.props.removeBot}
                deleteBotForever={this.props.deleteBotForever}
              />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
