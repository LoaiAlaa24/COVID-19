import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography, Grid, Button } from "@material-ui/core";
import Info from "../components/ICU/Info";
import ModalConfirm from "../components/ICU/ModalConfirm";
import ICU from "./ICU";
import { Router, Route, Switch,Link } from "react-router-dom";

const styles = theme => ({
  mainContainer: {
    margin: theme.spacing(5),
    flexGrow: 1
    // border: '1px solid black',
  }
});

class Navigation extends Component {
  state = {
    openModal: false
  };

  handleChangeSwitch = name => event => {
    this.setState({
      openModal: true
    });
  };

  closeModal = name => event => {
    this.setState({
      openModal: false
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainContainer}>
        
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography style={{ color: "#6B6667" }} variant="h4" align="right">
              {" "}
            Airforces Hospital - المستشفى الجوي
            </Typography>
          </Grid>


          <Grid item xs={12} align="center">
            <Grid item xs={4} align="center">
              <Button
                style={{ backgroundColor: "#009CE2" }}
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
              >
                <Typography variant="h5" align="center">
                  {" "}
                  <Link to="/helpRequest"  style={{ textDecoration: 'none',color:"white" }}>  
                  
                    Request Help -
                      طلب مساعدات</Link> 
            

                </Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={12} align="center">
            <Grid item xs={4} align="center">
              <Button
                style={{ backgroundColor: "#009CE2" }}
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
              >
                <Typography variant="h5" align="center">
                  {" "}
                  <Link to="/ICU"  style={{ textDecoration: 'none',color:"white" }}>   
               
                  Intensive Care Unit - 
                     وحدة العناية المركزة </Link> 
            
        
                </Typography>
              </Button>
            </Grid>
          </Grid>


          <Grid item xs={12} align="center">
            <Grid item xs={4} align="center">
              <Button
                style={{ backgroundColor: "#009CE2" }}
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
              >
                <Typography variant="h5" align="center">
                <Link to="/reviseeq"  style={{ textDecoration: 'none',color:"white" }}>  
                Review Past Statues -
                 مراجعة اعداد سابقة</Link> 
            
  
                </Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={12} align="center">
            <Grid item xs={4} align="center">
              <Button
                style={{ backgroundColor: "#009CE2" }}
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
              >
                <Typography variant="h5" align="center">
                <Link to="/hospitaldashboard"  style={{ textDecoration: 'none',color:"white" }}>      
                Control Room - 
                       وحدة التحكم</Link> 
    
                </Typography>
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
)(withStyles(styles)(withRouter(Navigation)));
