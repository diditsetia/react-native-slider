import React from 'react';
import {
  StyleSheet,
  Text,
  View

} from 'react-native';

import ImageSlider from 'react-native-image-slider';

export default class ContohSlider extends React.Component {

  constructor(props) {
     super(props);

      this.state = {
        position: 1,
        interval: null
    };
  }

  componentWillMount () {
     this.setState ({interval: setInterval (() => {
       this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});

     },2000)})
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render () {
    return (
        <View style={styles.container}>
          <ImageSlider
            images = {[

              `http://placeimg.com/640/480/nature`,
              `http://placeimg.com/640/480/any`,
              'http://placeimg.com/640/480/animals'

            ]}
            position = {this.state.position}
            onPositionChanged={position => this.setState ({position})} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
