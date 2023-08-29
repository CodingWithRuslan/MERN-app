import React from "react";
import Music from './Music'

class ShowHideMusic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line
    return (
      <div>
        <div style={{textAlign: 'center',display: 'flex', flexDirection: 'row',justifyContent:'space-evenly'}}>
        <button className="button3" onClick={this.toggleDisplay}>Music</button>
        </div>
        {this.state.display && 
        <div>

        <div style={{textAlign: 'center',display: 'flex', flexDirection: 'row',justifyContent:'space-evenly'}}>
      
      <Music/>
      
      </div>

        </div>
        }
      </div>
    );
  }
}

export default ShowHideMusic;