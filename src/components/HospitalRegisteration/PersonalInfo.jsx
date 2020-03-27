import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography, Grid, Paper, TextField } from "@material-ui/core";

const styles = theme => ({
  mainContainer: {
    margin: "auto",
    textAlign: "right"
  }
});
class PersonlInfo extends Component {
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
          <Grid item xs={12}>
            <Typography variant="h5" align="right">
              معلومات شخصيه
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid item xs={12}>
              <Typography variant="h6" align="right">
                البريد الإلكترون
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-password-input"
                value=""
                autoComplete="current-password"
                variant="outlined"
                type="string"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid item xs={12} >
              <Typography variant="h6" align="right">
              كلمة السر
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-password-input"
                value=""
                autoComplete="current-password"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid item xs={12}>
              <Typography variant="h6" align="right">
                أعاده كلمة السر
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-password-input"
                value=""
                type="password"
                autoComplete="current-password"
                variant="outlined"
                fullWidth
              />
            </Grid>
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
)(withStyles(styles)(withRouter(PersonlInfo)));
