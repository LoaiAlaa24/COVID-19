import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography, Grid, Paper, Button } from "@material-ui/core";
import { Modal } from "@material-ui/core";

const styles = theme => ({
  mainContainer: {
    flexGrow: 1,
    minWidth: 300,
    margin: "auto"
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
  },
  modalContainer: {
    margin: "auto",
    flexGrow: 1,
    height: "90%",
    width: "50%"

    // border: '1px solid black',
  },
  paper: {
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
});
class ModalConfirm extends Component {
  state = {};
  handleChangeSwitch = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };
  render() {
    const { classes } = this.props;
    return (
        <Modal
          disablePortal
          disableEnforceFocus
          disableAutoFocus
          open={this.props.openModal}
          aria-labelledby="server-modal-title"
          aria-describedby="server-modal-description"
          className={classes.modalContainer}
        >
          <Paper className={classes.paper}>
            <Grid container item xs={12} justify="center">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Button
                    onClick={this.props.closeModal}
                    style={{
                      marginTop: 0,
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                      float: "right"
                    }}
                  >
                    <img
                      src="https://d30y9cdsu7xlg0.cloudfront.net/png/53504-200.png"
                      style={{ width: 20 }}
                    />
                  </Button>

                  <Typography
                    style={{ color: "#6B6667" }}
                    variant="h4"
                    align="center"
                  >
                    {" "}
                    تاكيد
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography
                    style={{ color: "#E20100", marginLeft: "2%" }}
                    variant="h4"
                    align="left"
                  >
                    {" "}
                    ٣٥٠
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography
                    style={{ color: "#6B6667" }}
                    variant="h4"
                    align="right"
                  >
                    {" "}
                    نوع ( اقنعة / ادوية )
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography
                    style={{ color: "#E20100", marginLeft: "2%" }}
                    variant="h4"
                    align="left"
                  >
                    {" "}
                    ٣٥٠
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography
                    style={{ color: "#6B6667" }}
                    variant="h4"
                    align="right"
                  >
                    {" "}
                    عدد مطلوب
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography
                    style={{ color: "#E20100", marginLeft: "2%" }}
                    variant="h4"
                    align="left"
                  >
                    {" "}
                    ٣٥٠
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography
                    style={{ color: "#6B6667" }}
                    variant="h4"
                    align="right"
                  >
                    {" "}
                    عدد متاح حاليا
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography
                    style={{ color: "#E20100", marginLeft: "2%" }}
                    variant="h4"
                    align="left"
                  >
                    {" "}
                    ٣٥٠
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography
                    style={{ color: "#6B6667" }}
                    variant="h4"
                    align="right"
                  >
                    {" "}
                    ضرورة
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    style={{ color: "#E20100" }}
                    variant="h4"
                    align="right"
                  >
                    {" "}
                    تاريخ: ٢٧ مارس ٢٠٢٠
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    style={{ color: "#E20100" }}
                    variant="h4"
                    align="right"
                  >
                    {" "}
                    الساعة ٨:٠٠ مساءا
                  </Typography>

                  <Grid item xs={12} align="center">
                    <Grid item xs={4} align="center">
                      <Button
                        style={{ backgroundColor: "#E20100" }}
                        variant="contained"
                        color="secondary"
                        fullWidth
                        size="large"
                      >
                        <Typography variant="h5" align="right">
                          {" "}
                          تاكيد
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Modal>
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
)(withStyles(styles)(withRouter(ModalConfirm)));
