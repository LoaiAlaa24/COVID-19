import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography, Grid ,Button} from "@material-ui/core";
import PersonalInfo from "../components/HospitalLogin/PersonalInfo";
import HospitalInfo from "../components/HospitalLogin/HospitalInfo";
const styles = theme => ({
  mainContainer: {
    margin: theme.spacing(10),
    flexGrow: 1,
    // border: '1px solid black',
  }
  
});
class HospitalLogin extends Component {
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
              {/* <Typography variant="h4" align="right">
                {" "}
             تسجيل دخول
              </Typography> */}
            </Grid>
            <Grid item xs={12}>
              <PersonalInfo />
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
)(withStyles(styles)(withRouter(HospitalLogin)));
