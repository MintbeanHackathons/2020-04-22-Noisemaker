import React from 'react';
import { Typography, Container, makeStyles, Paper, Grid } from '@material-ui/core';

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
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
      </div>
      </Container>
    </div>
  );
}

export default App;
