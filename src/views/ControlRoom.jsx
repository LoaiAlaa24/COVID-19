import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography, Grid} from "@material-ui/core";
import PressuredHospital from "../components/ControlRoom/PressuredHospital";
import MostRequirementHospital from "../components/ControlRoom/MostRequirementHospital";
import PatientsGraph from "../components/ControlRoom/PatientsGraph";
import AvailableBedsGraph from "../components/ControlRoom/AvailableBedsGraph";
import DenseTable from "../components/ControlRoom/DenseTable";
import RequirementTable from "../components/ControlRoom/RequirementTable";

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
class ControlRoom extends Component {
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
              Control Room - 
              غرفه التحكم
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid item xs={12}>
              <Typography variant="h5" align="right">
                {this.state.date}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid item xs={12}>
              <PressuredHospital />
            </Grid>
            <Grid item xs={12} className={classes.topMargin}>
              <MostRequirementHospital />
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
                Numbers Table -
                جدول الاعداد
              </Typography>
            </Grid>

            <Grid item xs={12} className={classes.topMargin}>
              <DenseTable />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Typography variant="h5" align="right">
                {" "}
                Requests Table -
                جدول الطلبات
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.topMargin}>
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
)(withStyles(styles)(withRouter(ControlRoom)));
