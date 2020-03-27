import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography, Grid ,Button} from "@material-ui/core";
import Info from "../components/ICU/Info";
import HospitalInfo from "../components/HelpRequest/HospitalInfo";

const styles = theme => ({
  mainContainer: {
    margin: theme.spacing(10),
    flexGrow: 1,
    // border: '1px solid black',
  }
});

class ICU extends Component {
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
              <Typography style={{color:"#6B6667"}}  variant="h4" align="right">
                {" "}
           المستشفى الجوي
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Info />
            </Grid>

            <Grid item xs={12} align="center">
            <Grid item xs={4} align="center">
              <Button style={{backgroundColor:"#009CE2"}} variant="contained" color="secondary" fullWidth size="large">
              <Typography variant="h5" align="right"> طلب مساعدات</Typography>
              </Button>
              </Grid>
            </Grid>

            <Grid item xs={12} align="center">
            <Grid item xs={4} align="center">
              <Button style={{backgroundColor:"#009CE2"}} variant="contained" color="secondary" fullWidth size="large">
              <Typography variant="h5" align="right">مراجعة اعداد سابقة</Typography>
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
)(withStyles(styles)(withRouter(ICU)));
