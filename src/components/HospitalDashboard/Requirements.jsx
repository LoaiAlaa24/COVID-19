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

const timeOption = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour:"numeric"
  };
class Requirements extends Component {
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
                {" Last request - اخر طلب ( "+ new Date(Date.now()).toLocaleDateString("ar-EG", timeOption)+" )"}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="subtitle1" align="right">
            نوع( أقنعه / أدويه)            
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1" align="right">
            زيسروسين ٥٠٠ ل.ح
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="subtitle1" align="right">
            عدد مطلوب             
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1" align="right">
            ٣٠٠
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="subtitle1" align="right">
            عدد متاح حاليا       
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1" align="right">
            ٣٠
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="subtitle1" align="right">
            ضرورة            
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1" align="right">
            مهم(٣-١ يوم)
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
)(withStyles(styles)(withRouter(Requirements)));
