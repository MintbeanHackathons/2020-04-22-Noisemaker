import React from 'react';
import { Typography, Container, makeStyles, Paper, Grid, Button } from '@material-ui/core';
import { Synth } from "tone";

const useStyles = makeStyles((theme)=>({
  root: {
    width: '100%',
    maxWidth: 500,
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth={classes.root}>
      {/* <h1>@IsmaelTechNow Noise Toy </h1> */}
      <Typography variant="h1" gutterBottom>
      @IsmaelTechNow Noise Toy
      </Typography>
      <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
        Q
      </Button></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
        W
      </Button></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
        E
      </Button></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
        U
      </Button></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
        I
      </Button></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
        O
      </Button></Paper>
        </Grid>
        
      </Grid>
      </div>
      </Container>
    </div>
  );
}

export default App;
