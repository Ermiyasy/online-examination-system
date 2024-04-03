import React from "react"
import './Accept.css'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'; 
 function Accept(){
   return(
    <>
    
    <Grid container rowSpacing={5} columnSpacing={{ xs: 4, sm: 2, md: 3, marginY:50 }} sx={{marginTop:5}}>
          <Grid item xs={6}>
          <Paper className="Accept" elevation={5} sx={{padding:15,marginY:10}}>
            <h1>The Accept Form will be here!</h1>
          </Paper>
          </Grid>
          <Grid item xs={6}>
          <Paper className="Accept" elevation={5} sx={{padding:15,marginY:10}}>
            <h1>The Accept Form will be here!</h1>
          </Paper>
          </Grid>
    </Grid>
   
    </>
   );
 }
 export default Accept