import React, { useDebugValue } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const FlightCard = ( {flightId, flightName, username, altitude} ) => {

    const [flightData, setFlightData] = useState(null);

    const baseURL = `https://api.infiniteflight.com/public/v2/sessions/df2a8d19-3a54-4ce5-ae65-0b722186e44c/flights/${flightId}/flightplan`;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(baseURL);
            setFlightData(response.data);
          } catch (error) {
            console.error('Error fetching flight data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div className='bg-black px-3 py-3 text-white rounded-lg flex flex-col items-center font-display'>
        <h1 className='text-white'>{flightName}</h1>
        <h1 className=' text-stone-400'>{Math.ceil(altitude)} ft</h1>
        <h1 className='text-stone-400 text-xs'>{username}</h1>
    </div>

  )
}

export default FlightCard