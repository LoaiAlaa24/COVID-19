import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography, Grid, Paper, TextField, Button } from "@material-ui/core";
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
  mainContainer: {
    margin: "auto",
    textAlign: "right"
  }
});
class Quantity extends Component {

  state = {
    checkedA: false
  }

  handleChangeSwitch = name => event => {
    this.setState({ 
       checkedA: event.target.checked });
  };


  render() {
    const { classes } = this.props;
    return (
      <Paper>
              <Grid
                container
                spacing={2}
                xs={12}
                className={classes.mainContainer}>

<Grid item xs={2} >


<Switch
        checked={this.state.checkedA}
        onChange={this.handleChangeSwitch()}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />

</Grid>

<Grid item xs={9} >
<Typography style={{color:"#E20100"}}  variant="h5" align="right">
{" "}
٢٧ مارس ٢٠٢٠ ٨:٠٠ مساءا
</Typography>


</Grid>



{this.state.checkedA &&

              <Grid
                container
                spacing={2}
                xs={12}
                className={classes.mainContainer}>
                <Grid item xs={6} >


            <Typography style={{color:"#E20100",marginLeft:"2%"}}  variant="h5" align="left">
                {" "}
                  ٣٥٠
            </Typography>


</Grid>

<Grid item xs={6} >
<Typography style={{color:"#6B6667"}}  variant="h5" align="right">
{" "}
      عدد المرضى في الوحدة  
</Typography>


</Grid>



<Grid item xs={6} >


<Typography style={{color:"#E20100",marginLeft:"2%"}}  variant="h5" align="left">
{" "}
٣٥٠
</Typography>


</Grid>

<Grid item xs={6} >
<Typography style={{color:"#6B6667"}}  variant="h5" align="right">
{" "}
عدد الغرف المشغولة 
</Typography>


</Grid>



<Grid item xs={6} >


<Typography style={{color:"#E20100",marginLeft:"2%"}}  variant="h5" align="left">
{" "}
٣٥٠
</Typography>


</Grid>

<Grid item xs={6} >
<Typography style={{color:"#6B6667"}}  variant="h5" align="right">
{" "}
عدد الغرف المتاحة 
</Typography>


</Grid>

<Grid item xs={6} >


<Typography style={{color:"#E20100",marginLeft:"2%"}}  variant="h5" align="left">
{" "}
        ٣٥٠
</Typography>


</Grid>

<Grid item xs={6} >
<Typography style={{color:"#6B6667"}}  variant="h5" align="right">
{" "}
عدد اجهزة التنفس الصناعي المتاحة
</Typography>

<Grid item xs={12} align="right">
            <Grid item xs={4} align="center">
              <Button style={{backgroundColor:"#E20100"}} variant="contained" color="secondary" fullWidth size="large">
              <Typography variant="h5" align="right"> تعديل</Typography>
              </Button>
              </Grid>
            </Grid>
</Grid>
</Grid>
  }


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

