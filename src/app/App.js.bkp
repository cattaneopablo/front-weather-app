import React, { useEffect, useState } from "react";

import {WeatherForm} from "./components/weatherForm";
import {WeatherInfo} from "./components/WeatherInfo";

export const App = () => {
    const [weather, setWeather] = useState()
    const [selectedRadio, setSelectedRadio] = useState("current")
    const [selectedCity, setSelectedCity]=useState()
    const [cities, setCities]=useState([])

    useEffect(()=>{
        getCities()
    }, [])

    useEffect(()=>{
        if(selectedCity){
            getWeather()
        }
    }, [selectedCity])
    

    const getCities = async () => {
        const location = await fetch('http://localhost:3000/v1/location')
        const {city} = await location.json()
        const citiesList = [city, 'New York', 'Toronto', 'London', 'Tokio']
        setCities(citiesList)
        setSelectedCity(city)
    }

    const getWeather = async (event) => {
        const newRadioValue = event?.target?.id ?? selectedRadio
        let data

        setSelectedRadio(newRadioValue)

        switch (newRadioValue) {
            case "current":
                const current = await fetch(`http://localhost:3000/v1/current/${selectedCity}`)
                data = await current.json()                
                break;
            case "forecast":
                const forecast = await fetch(`http://localhost:3000/v1/forecast/${selectedCity}`)
                data = await forecast.json()            
                break;
        }

        setWeather(data)
    }

    const updateSelectedCity = (event) => {
        setSelectedCity(event.target.value)
    }

    
    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <WeatherForm getWeather={getWeather} cities={cities} updateSelectedCity={updateSelectedCity} selectedRadio={selectedRadio}/>
                    <WeatherInfo weathers={weather}/>
                </div>
            </div>
        </div>
    )
}