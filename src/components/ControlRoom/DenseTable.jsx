import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Router, Route, Switch,Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  headStyle:{
      backgroundColor:"#E20100"
  },
  textColor:{
      color:"white",
      fontSize:18,
      width:100
  },
  valueStyle:{
    fontSize:18,
      width:100
  }
});

function createData(name, area, district, noOfPatients, busyRooms,avalRooms,avalBeds,avalVen,id) {
  return { name, area, district, noOfPatients, busyRooms,avalRooms,avalBeds,avalVen,id };
}

const rows = [
  createData('حميات العجمي',"العجمي", "الاسكندرية", 400 , 60,30,40,10,1),
  createData('حميات العجمي',"العجمي", "الاسكندرية", 400 , 60,30,40,10,2),
  createData('حميات العجمي',"العجمي", "الاسكندرية", 400 , 60,30,40,10,3),
  createData('حميات العجمي',"العجمي", "الاسكندرية", 400 , 60,30,40,10,4),
  createData('حميات العجمي',"العجمي", "الاسكندرية", 400 , 60,30,40,10,5),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead className={classes.headStyle}>
          <TableRow>
          <TableCell  className={classes.textColor} align="right">
          Numbers of Ventilators 
             عدد اجهزة التنفس</TableCell>
          <TableCell className={classes.textColor} align="right"> 
  Avaliable Beds
  عدد السراير المتاحة</TableCell>
          <TableCell  className={classes.textColor} align="right">
          Avaliable Rooms
            عدد الغرف المتاحة</TableCell>

             <TableCell   className={classes.textColor} align="right">
             Busy Beds
               عدد الغرف المشغولة</TableCell>
            <TableCell  className={classes.textColor} align="right">
              Number of patients
              اعداد المرضى</TableCell>
            <TableCell className={classes.textColor} align="right">
              Governorate
              المحافظة</TableCell>
            <TableCell   className={classes.textColor} align="right">
              District
              المنطقة</TableCell>
            <TableCell   className={classes.textColor} align="right" >
              Hospital
               المستشفى</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell style={{width:100,fontSize:18}} align="right">{row.avalVen}</TableCell>
              <TableCell style={{width:100,fontSize:18}}  align="right">{row.avalBeds}</TableCell>
              <TableCell  style={{width:100,fontSize:18}}  align="right">{row.avalRooms}</TableCell>
              <TableCell  style={{width:100,fontSize:18}}  align="right">{row.busyRooms}</TableCell>
              <TableCell style={{width:100,fontSize:18}}  align="right">{row.noOfPatients}</TableCell>
              <TableCell  style={{width:100,fontSize:18}}  align="right">{row.district}</TableCell>
              <TableCell  style={{width:100,fontSize:18}}  align="right">{row.area}</TableCell>
              <TableCell style={{width:100,fontSize:18}}  align="right">
                
              <Link to="/hospitaldashboard"  style={{ textDecoration: 'none',color:"black" }}>  {row.name}</Link> 
            


                
                
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
