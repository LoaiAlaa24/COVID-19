import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography, Grid ,Button} from "@material-ui/core";
import PersonalInfo from "../components/HospitalRegisteration/PersonalInfo";
import HospitalInfo from "../components/HospitalRegisteration/HospitalInfo";
const styles = theme => ({
  mainContainer: {
    margin: theme.spacing(5),
    flexGrow: 1
  }
});
class HospitalRegisteration extends Component {
  state = {};
  handleChangeSwitch = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" align="right">
              {" "}
              إنشاء حساب
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <PersonalInfo />
          </Grid>
          <Grid item xs={12}>
            <HospitalInfo />
          </Grid>
          <Grid item xs={12} align="center">
          <Grid item xs={4} align="center">
            <Button variant="contained" color="secondary" fullWidth size="large">
            <Typography variant="h5" align="right"> إنشاء</Typography>
            </Button>
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
)(withStyles(styles)(withRouter(HospitalRegisteration)));
