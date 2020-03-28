import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography, Grid, Button } from "@material-ui/core";
import Info from "../components/ICU/Info";
import ModalConfirm from "../components/ICU/ModalConfirm";
import DenseTable from "../components/Table/DenseTable";
const styles = theme => ({
  mainContainer: {
    margin: theme.spacing(10),
    flexGrow: 1
    // border: '1px solid black',
  }
});

class ICU extends Component {
  state = {
    openModal:false
  };


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

            <DenseTable />


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
