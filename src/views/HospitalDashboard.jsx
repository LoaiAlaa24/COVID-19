import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography, Grid, Button } from "@material-ui/core";
import CurrentPressure from "../components/HospitalDashboard/CurrentPressure";
import Requirements from "../components/HospitalDashboard/Requirements";
import PatientsGraph from "../components/ControlRoom/PatientsGraph";
import AvailableBedsGraph from "../components/ControlRoom/AvailableBedsGraph";
import StatusTable from "../components/HospitalDashboard/StatusTable";
import RequirementTable from "../components/HospitalDashboard/RequirementTable";
import PhoneIcon from "../assets/icons/Phone.png";
import Updates from "../components/HospitalDashboard/Updates";

const styles = theme => ({
  mainContainer: {
    margin: theme.spacing(5),
    flexGrow: 1
  },
  topMargin: {
    marginTop: "12px"
  }
});
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
const timeOption = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour:"numeric"
  };
class HospitalDashboard extends Component {
  state = {
    date: new Date(Date.now()).toLocaleDateString("ar-EG", options)
  };
  handleChangeSwitch = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };
  render() {
    const { classes } = this.props;
    console.log(this.state.date);
    return (
      <div className={classes.mainContainer}>
        <Grid
          container
          spacing={3}
          direction="row-reverse"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={8}>
            <Typography variant="h4" align="right">
              {" "}
              غرفه التحكم
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" align="right">
              {this.state.date}
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h4" align="right">
              {" "}
              حميات العجمى
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            direction="row-reverse"
            justify="flex-start"
            alignItems="flex-start"
            container
          >
            <Button
              style={{ backgroundColor: "#E20100" }}
              variant="contained"
              color="secondary"
              size="large"
            >
              <img src={PhoneIcon} style={{ width: 20 }} />
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" align="right">
              {"اخر تعديل: "+new Date(Date.now()).toLocaleDateString("ar-EG", timeOption)}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid item xs={12}>
              <CurrentPressure />
            </Grid>
            <Grid item xs={12} className={classes.topMargin}>
              <Requirements />
            </Grid>
            <Grid item xs={12} className={classes.topMargin}>
              <Updates />
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <PatientsGraph />
          </Grid>
          <Grid item xs={12} md={4}>
            <AvailableBedsGraph />
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Typography variant="h5" align="right">
                {" "}
                جدول الاعداد
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <StatusTable />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Typography variant="h5" align="right">
                {" "}
                جدول الطلبات
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <RequirementTable />
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
)(withStyles(styles)(withRouter(HospitalDashboard)));
