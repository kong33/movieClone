import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
export const Weather = () => {


    const API_KEY = "2d112686925f65414ede9a86ce8f2b29";

    const [cityName, setCityName] = useState('');
    const [isOk, setIsOk] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [temp, setTemp] = useState(0);
    
    const handleInputChange = (e) => {
        setCityName(e.target.value); // 입력값이 변경될 때마다 cityName을 업데이트
    };
    const searchWeather = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
        try {
            const response = await axios.get(url);
            console.log(response.data);
            setIsOk(true);
            setWeatherData(response.data);
            setTemp(Math.round(((response.data.main.temp - 273.15) * 10)) / 10);

        }
        catch (error) {
            console.error("에러", error);
            setIsOk(false);
            setWeatherData(null);
            setTemp(0);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchWeather();
        }
    };


    return (
        <div>
            <input placeholder='도시를 입력하세요' 
                style={{ position: 'relative', top: '150px', left: '46%',
                            borderColor: 'black',
                            borderRadius: '10px',
                            height: '40px'}}
                value={cityName}
                onChange={handleInputChange}
                onKeyUp={handleKeyPress} />
            <div style={{ display: (isOk ? 'flex' : 'none'), 
                            position: 'relative', left: '46%', top: '200px',
                            border : '2px solid black',
                            width: '10%',
                            flexDirection: 'column',
                            borderRadius: '20px'
                            }}>
                <p style={{padding: '4px'}}>{cityName}</p>
                {weatherData && (
                    <>
                        <h1 style ={{ paddingLeft: '10px' , paddingBottom: '0' , fontSize: '50px'}}>{temp}℃</h1>
                        <p style={{paddingLeft:'80px'}}>{weatherData.weather[0]?.main}</p>
                    </>
                )}

            </div>
        </div>
    )
}
Weather.propTypes = {
    city_name: PropTypes.string.isRequired, // 문자열 형태의 필수 prop
};
