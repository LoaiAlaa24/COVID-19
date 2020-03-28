import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography, Grid, Paper } from "@material-ui/core";
import PatientChart from "./PatientChart";

const styles = theme => ({
  mainContainer: {
    margin: "auto",
    textAlign: "right"
  },
  headerBackground: {
    background: "rgb(226, 0, 0)"
  },
  textColor: {
    color: "#fff"
  }
});
class MostRequirementHospital extends Component {
  state = {};
  handleChangeSwitch = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };
  render() {
    const { classes } = this.props;
    return (
      <Paper>
        <Grid
          container
          item
          spacing={2}
          xs={12}
          direction="row-reverse"
          justify="flex-start"
          alignItems="center"
          className={classes.mainContainer}
        >
          <Grid item xs={12} className={classes.headerBackground}>
            <Typography
              variant="h6"
              align="right"
              className={classes.textColor}
            >
             اجمالى عدد المرضى
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <PatientChart/>
          </Grid>
        </Grid>
      </Paper>
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
)(withStyles(styles)(withRouter(MostRequirementHospital)));
