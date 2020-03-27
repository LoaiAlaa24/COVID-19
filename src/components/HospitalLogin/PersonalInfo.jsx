import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography, Grid, Paper, TextField, Button } from "@material-ui/core";

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
          className={classes.mainContainer}
        >
          <Grid item xs={12}>
            <Typography style={{color:"#6B6667"}} variant="h3" align="right">
              تسجيل دخول
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Typography style={{color:"#6B6667"}}  variant="h5" align="right">
                البريد الإلكتروني
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-password-input"
                autoComplete="current-password"
                variant="outlined"
                type="string"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Typography style={{color:"#6B6667"}}  variant="h5" align="right">
              كلمة السر
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-password-input"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                fullWidth

              />
            </Grid>
          </Grid>
          <Grid item xs={12} align="center">
            <Grid item xs={4} align="center">
              <Button style={{backgroundColor:"#E20100"}} variant="contained" color="secondary" fullWidth size="large">
              <Typography variant="h5" align="right"> دخول</Typography>
              </Button>
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
