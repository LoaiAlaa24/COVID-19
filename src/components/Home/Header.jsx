import React, { Component } from "react";
import { Grid, Typography, Paper, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DateRangeIcon from "@material-ui/icons/DateRange";
const styles = theme => ({
  logoContainer: {
    padding: theme.spacing(2),
    flexGrow: 1
  },
  textPosition: {
    paddingLeft: "2%",
    marginTop: "auto",
    marginBottom: "auto"
  },
  imagePosition: {
    paddingLeft: "2%",
    textAlign: "center"
  },
  text: {
    fontWeight: "900"
  }
});
class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.logoContainer }>
        <Paper>
          <Hidden smDown>
            <Grid container justify="flex-start">
              <div className={classes.imagePosition}>
                <DateRangeIcon color="primary" style={{ fontSize: 50 }} />
              </div>

              <Grid item md={6} className={classes.textPosition}>
                <Typography variant="h5" className={classes.text}>
                  Header
                </Typography>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid container>
              <Grid item xs={12} container justify="center">
                <DateRangeIcon color="primary" style={{ fontSize: 50 }} />
              </Grid>

              <Grid item xs={12} container justify="center">
                <Typography variant="h6" className={classes.text}>
                  Header
                </Typography>
              </Grid>
            </Grid>
          </Hidden>
        </Paper>
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
)(withStyles(styles)(withRouter(Header)));
