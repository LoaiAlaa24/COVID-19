import React, { PureComponent } from "react";
import ReactEcharts from "echarts-for-react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const styles = theme => ({
  chart: {
    width: "100%"
  },
  mainContainer: {
    margin: "auto"
  }
});
function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() , (now.getDate()+1)].join('/'),
            Math.round(value)
        ]
    };
}

// setInterval(function () {

//     for (var i = 0; i < 5; i++) {
//         data.shift();
//         data.push(randomData());
//     }

//     myChart.setOption({
//         series: [{
//             data: data
//         }]
//     });
// }, 1000);

var data = [];
var now = +new Date(2019, 1, 9);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data.push((randomData()));
}
class PatientChart extends PureComponent {
  getOption = () => {
    return {
      title: {
        text: ""
      },
      tooltip: {
        trigger: "axis",
        formatter: function(params) {
          params = params[0];
          var date = new Date(params.name);
          return (
            date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear() +
            " : " +
            params.value[1]
          );
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: "time",
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: "value",
        boundaryGap: [0, "100%"],
        splitLine: {
          show: false
        }
      },
      series: [
        {
          name: "أيام",
          type: "line",
          showSymbol: false,
          hoverAnimation: false,
          data: data
        }
      ]
    };
  };
  
  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12} className={classes.mainContainer}>
        <ReactEcharts option={this.getOption()} className={classes.chart} />
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withRouter(PatientChart)));
