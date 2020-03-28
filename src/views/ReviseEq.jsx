import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";
import Quantity from "../components/ReviseEq/Quantity";

const styles = theme => ({
  mainContainer: {
    margin: theme.spacing(5),
    width: "80%",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
    // border: '1px solid black',
  },
  container: {
    margin: theme.spacing(5),
    width: "100%",
    flexGrow: 1
  }
});

class ReviseEq extends Component {
  state = {};

  handleChangeSwitch = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainContainer}>
        <Grid container xs={12} justify="center" className={classes.container}>
          <Grid container spacing={2} xs={12} className={classes.mainContainer}>
            <Grid item xs={12}>
              <Typography
                style={{ color: "#6B6667" }}
                variant="h3"
                align="right"
              >
                المستشفى الجوي
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                style={{ color: "#6B6667" }}
                variant="h4"
                align="right"
              >
                مراجعة اعداد سابقة
              </Typography>
            </Grid>
            <Grid item xs={12} >
              <Quantity openModal={false} />
            </Grid>

            <Grid item xs={12}>
              <Quantity openModal={false} />
            </Grid>
            <Grid item xs={12}>
              <Quantity openModal={false} />
            </Grid>
          </Grid>
        </Grid>
      </div>
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
)(withStyles(styles)(withRouter(ReviseEq)));
