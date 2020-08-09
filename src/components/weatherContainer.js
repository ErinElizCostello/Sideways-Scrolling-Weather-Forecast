import React from 'react';
import { useSelector } from 'react-redux'
import Forecast from './forecast';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


const WeatherContainer = () => {
  const classes = useStyles();
  const weather = useSelector(state => state.weatherReducer.data );

  return (
    <>
      <GridList
        className={classes.gridList}
        cols={1.5}>
        {weather && weather.map((e) => <Forecast e={e} />)}
      </GridList>
    </>
  );
}

export default WeatherContainer;