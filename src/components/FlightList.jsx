import React, { useState, useEffect } from 'react'
import FlightCard from './FlightCard'
import axios from 'axios'

const FlightList = () => {
    
    const [flightsList, setFlightsList] = useState([]);
    const baseURL = `https://api.infiniteflight.com/public/v2/sessions/df2a8d19-3a54-4ce5-ae65-0b722186e44c/flights?apikey=vyqaqnsamc10elhbhcj1iy1bkc9enzpu`
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(baseURL);
            console.log("i fetched the dasta")
            setFlightsList(response.data.result)
            console.log("I set the data")
          } catch (error) {
            console.error('Error fetching flight data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div className='grid grid-cols-6 gap-3'>
        {flightsList.map((flight) => {
            return (
                <FlightCard flightId={flight.flightId} key={flight.flightId} username={flight.username} flightName={flight.callsign} altitude={flight.altitude}/>
            )
        })}
    </div>
  )
}

export default FlightList