import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography, Grid, Paper } from "@material-ui/core";

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
              المستشفى بأكثر طلبات
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="subtitle1" align="right">
              حميات القاهرة
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1" align="right">
              ٣٠ طلب
            </Typography>
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
