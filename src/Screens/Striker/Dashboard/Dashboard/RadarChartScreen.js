import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor
} from 'react-native';
import update from 'immutability-helper';

import {RadarChart} from 'react-native-charts-wrapper';


class RadarChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      data: {},
      legend: {
        enabled: false,
        textSize: 39,
        form: 'CIRCLE',
        wordWrapEnabled: true
      }
    };
  }

  componentDidMount() {
    this.setState(
      update(this.state, {
        data: {
          $set: {
            dataSets: [{
                //values: [ 100, 110, 105,  115,  110],
              values: this.props.data,
              label: 'DS 1',
              config: {
                color: processColor(this.props.color),
                drawFilled: true,
                fillColor: processColor(this.props.color),
                fillAlpha: 190,
                lineWidth: 2
              }
            },  ],
          }
        },
        xAxis: {
          $set: {
            valueFormatter: ['P', 'N', 'G', 'M', 'A']
          }
        }
      })
    );
  }

  handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      this.setState({...this.state, selectedEntry: null})
    } else {
      this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
    }

    console.log(event.nativeEvent)
  }

  render() {
    return (
     


        <View style={styles.container}>
          <RadarChart
            style={styles.chart}
            data={this.state.data}
            xAxis={this.state.xAxis}
            yAxis={{drawLabels:false}}
            
            
            legend={this.state.legend}




 
          />
        </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
  justifyContent:'center',
  alignItems:'center',
    // marginTop:10,
    // width:120,
    // height:100
    flex:1
  },
  chart: {
    width:100,
    height:110,

  }
});

export default RadarChartScreen;