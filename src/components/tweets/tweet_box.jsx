import {React, Component} from 'react';

class TweetBox extends Component {
  render() {
    return (
        <div>
            <h3>{this.props.text}</h3>
        </div>
    );
  }
}

export default TweetBox;