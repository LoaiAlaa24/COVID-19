import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography, Grid, Paper, Button } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
  mainContainer: {
    margin: "auto",
    textAlign: "right"
  }
});
class Quantity extends Component {
  state = {
    checkedA: false
  };

  handleChangeSwitch = name => event => {
    this.setState({
      checkedA: event.target.checked
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper>
        <Grid container spacing={2} xs={12} className={classes.mainContainer}>
          <Grid item xs={2}>
            <Switch
              checked={this.state.checkedA}
              onChange={this.handleChangeSwitch()}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </Grid>

          <Grid item xs={9}>
            <Typography style={{ color: "#E20100" }} variant="h5" align="right">
              {" "}
          27th March 2020 8:00 PM  -   ٢٧ مارس ٢٠٢٠ ٨:٠٠ مساءا
            </Typography>
          </Grid>

          {this.state.checkedA && (
            <Grid
              container
              spacing={2}
              xs={12}
              className={classes.mainContainer}
            >
              <Grid item xs={6}>
                <Typography
                  style={{ color: "#E20100", marginLeft: "2%" }}
                  variant="h5"
                  align="left"
                >
                  {" "}
                  ٣٥٠
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  style={{ color: "#6B6667" }}
                  variant="h5"
                  align="right"
                >
                  {" "}

                  Number of patients -
                  عدد المرضى في الوحدة
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  style={{ color: "#E20100", marginLeft: "2%" }}
                  variant="h5"
                  align="left"
                >
                  {" "}
                  ٣٥٠
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  style={{ color: "#6B6667" }}
                  variant="h5"
                  align="right"
                >
                  {" "}
                  Number of busy rooms -
                  عدد الغرف المشغولة
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  style={{ color: "#E20100", marginLeft: "2%" }}
                  variant="h5"
                  align="left"
                >
                  {" "}
                  ٣٥٠
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  style={{ color: "#6B6667" }}
                  variant="h5"
                  align="right"
                >
                  {" "}
                  Number of avaliable rooms - 
                  عدد الغرف المتاحة
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  style={{ color: "#E20100", marginLeft: "2%" }}
                  variant="h5"
                  align="left"
                >
                  {" "}
                  ٣٥٠
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography
                  style={{ color: "#6B6667" }}
                  variant="h5"
                  align="right"
                >
                  {" "}
                  Number of ventilators -
                  عدد اجهزة التنفس الصناعي المتاحة
                </Typography>
              </Grid>
              <Grid item xs={12} align="center">
                <Grid item xs={4}>
                  <Button
                    style={{ backgroundColor: "#E20100" }}
                    variant="contained"
                    color="secondary"
                    fullWidth
                    size="large"
                  >
                    <Typography variant="h5" align="right">
                      {" "}
                      Update - 
                      تعديل
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
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
)(withStyles(styles)(withRouter(Quantity)));
