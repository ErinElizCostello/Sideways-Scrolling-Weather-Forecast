import React from 'react';
import moment from 'moment'
import GridListTile from '@material-ui/core/GridListTile';


function Forecast(props) {

  return (
    <div>
      <GridListTile >
        <div style={{ width: '170px', display: 'flex', flexDirection: 'row' }}>
          <div >
            <img src={require(`./icons/${props.e.icon}.png`)} style={{ height: '70px', width: '70px' }} alt={"icon"} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', lineHeight: '80%' }}>
            <p>{moment(props.e.date).format("MMM Do")}<br /><br />
              {props.e.lowTemp}°-{props.e.highTemp}°</p>
          </div>
        </div>
      </GridListTile>
    </div>
  );
}

export default Forecast;