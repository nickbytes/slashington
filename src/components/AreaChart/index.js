import { VictoryArea, VictoryBar, VictoryGroup } from "victory";
import React, { Component } from "react";

class AreaChart extends Component {
  // made this component months ago and I already think it's horrible
  // and i could do much better, wow.
  // every day is winding road
  constructor(props) {
    super(props);

    this.state = {
      randomNumbers: [1, 2, 3, 4, 5]
    };
  }
  scramble = () => {
    var arr = [];
    while (arr.length < 5) {
      var randomnumber = Math.ceil(Math.random() * 8);
      if (arr.indexOf(randomnumber) > -1) continue;
      arr[arr.length] = randomnumber;
    }
    this.setState({
      randomNumbers: arr
    });
  };
  componentDidMount() {
    this.counter = setInterval(this.scramble, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.counter);
  }
  render() {
    return (
      <div
        style={{
          width: "350px",
          position: "absolute",
          bottom: "20px",
          right: "20px",
          backgroundColor: "rgba(33, 37, 43, 0.7)",
          display: "flex",
          border: "1px solid gba(0, 0, 0, 1)"
        }}
      >
        <div>
          <VictoryBar
            style={{ data: { fill: "#c43a31" } }}
            data={[
              { x: 1, y: this.state.randomNumbers[0] },
              { x: 2, y: this.state.randomNumbers[4] },
              { x: 3, y: this.state.randomNumbers[3] },
              { x: 4, y: this.state.randomNumbers[2] },
              { x: 5, y: this.state.randomNumbers[1] }
            ]}
          />
        </div>
        <div>
          <VictoryGroup
            style={{
              data: { strokeWidth: 1, fillOpacity: 0.4 }
            }}
          >
            <VictoryArea
              style={{
                data: { fill: "cyan", stroke: "cyan" }
              }}
              data={[
                { x: 1, y: this.state.randomNumbers[1] },
                { x: 2, y: this.state.randomNumbers[2] },
                { x: 3, y: this.state.randomNumbers[3] },
                { x: 4, y: this.state.randomNumbers[4] },
                { x: 5, y: this.state.randomNumbers[0] }
              ]}
            />
            <VictoryArea
              style={{
                data: { fill: "magenta", stroke: "magenta" }
              }}
              data={[
                { x: 1, y: this.state.randomNumbers[0] },
                { x: 2, y: this.state.randomNumbers[1] },
                { x: 3, y: this.state.randomNumbers[3] },
                { x: 4, y: this.state.randomNumbers[2] },
                { x: 5, y: this.state.randomNumbers[4] }
              ]}
            />
          </VictoryGroup>
        </div>
      </div>
    );
  }
}

export default AreaChart;
