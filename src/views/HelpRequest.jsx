import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography, Grid ,Button,Container} from "@material-ui/core";
import Info from "../components/HelpRequest/Info";
import ModalConfirm from "../components/HelpRequest/ModalConfirm";


const styles = theme => ({
  mainContainer: {
    margin: theme.spacing(5),
    flexGrow: 1,
    justifyContent:"center",
    alignItems:"center"
    // border: '1px solid black',
  },

  
});

class HelpRequest extends Component {
<<<<<<< HEAD
  state = {};
=======
  state = {
    openModal:false
  };

>>>>>>> 452618d01dbb7652f0af387cbe5429c48df4e0d8

  handleChangeSwitch = name => event => {
    this.setState({ 
      openModal: true});
  };


  closeModal= name => event =>{
        this.setState({ 
          openModal:false
        });


  }

  render() {
    const { classes } = this.props;
    return (
        <div className={classes.mainContainer}>
      
        <Grid container xs={12} md={6} justify="center">
       
             <Grid item xs={12} md={6}>
           
                 <ModalConfirm  openModal={this.state.openModal} closeModal={this.closeModal()} />

            </Grid>

           </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography style={{color:"#6B6667"}}  variant="h4" align="right">
                {" "}
                        المستشفى الجوي
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Info  handleChangeSwitch={this.handleChangeSwitch()} />
            </Grid>

            <Grid item xs={12} align="center">
            <Grid item xs={4} align="center">
              <Button style={{backgroundColor:"#009CE2"}} variant="contained" color="secondary" fullWidth size="large">
              <Typography variant="h5" align="center"> ادخال اعداد جديدة</Typography>
              </Button>
              </Grid>
            </Grid>

            <Grid item xs={12} align="center">
            <Grid item xs={4} align="center">
              <Button style={{backgroundColor:"#009CE2"}} variant="contained" color="secondary" fullWidth size="large">
              <Typography variant="h5" align="center">مراجعة اعداد سابقة</Typography>
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
)(withStyles(styles)(withRouter(HelpRequest)));
