import { useState, useEffect } from "react";
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {

  const [isError, setIsError] = useState(false);
  const [isFetching, SetIsFetching] = useState(false);
  const [places, setPlaces] = useState([])

  

  useEffect(() => {

    async function fetchPlaces() {
      
      try{

        SetIsFetching(true);
        
        let response = await fetch("http://localhost:3000/places");
        let responseData = await response.json();

      if (!response.ok){
        throw new Error("An error occurs. Could not fetch places!");
      }

      

      setPlaces(responseData.places);
        
      }catch(error){

        setIsError(true);
        
      }

      SetIsFetching(false);
    }

    fetchPlaces();

  }, []);

  // GEOLOCATION
  useEffect(() => {

    async function someFunction(){
    
      navigator.geolocation.getCurrentPosition((loc) => {
        console.log(`loc.coords.latitude: ${loc.coords.latitude}`);
        console.log(`loc.coords.longitude: ${loc.coords.longitude}`);
      });    
      
    }

    console.log("pre someFunction");
    someFunction();
    console.log("post someFunction");

  }, []);


  return (
    <Places
      title="Available Places"
      places={places}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
