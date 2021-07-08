import React, { useEffect, useState } from 'react';

import Card from "../../components/card";

import styles from "./styles.module.scss";

// let currentDate = new Date().toISOString().slice(0, 10);

export default function CountryList() {
    const [countryList, setCountryList] = useState([]);
    const [country, setCountry] = useState([]);
    const [countryName, setCountryName] = useState('China');
    const [isLoading, setIsLoadng] = useState(true);
    
    useEffect(() => {
        fetch("https://covid-19-statistics.p.rapidapi.com/regions", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "1401ff5fdbmshc117eee9d064966p13b0b2jsncc5c497562de",
                "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(data => setCountryList(data.data))
        .catch(error => {
            console.error(error);
        });

        setIsLoadng(true);
        
    }, [])
    
    useEffect(() => {
        fetch(`https://covid-19-statistics.p.rapidapi.com/reports?date=2021-07-05&region_name=${countryName}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "1401ff5fdbmshc117eee9d064966p13b0b2jsncc5c497562de",
                "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(data => setCountry(data.data))
        .catch(error => {
            console.error(error);
        });

        return () => {
            setCountry([]);
        }
        
    }, [countryName]);

    
    setInterval(() => {
        setIsLoadng(false);
    }, 700);

    const handleCountryChange = (e) => {
        setCountryName(e.target.value);
    }

    
    return (
        <div className={styles.wrapper}>
            {isLoading ? 
            <div className={styles.loading}>
                <h2>Carregando ...</h2>
            </div>
            :
            <>
            <h1>Países</h1>
            <div className={styles.selectInput}>
                <select onChange={handleCountryChange}>
                    {countryList.map((item, index) => {
                        return (
                            <option defaultValue="" key={index} value={item.name}>{item.name}</option>
                        )
                    })}
                </select>
            </div>
            <div className={styles.countryContainer}>
                <h2>{countryName}</h2>
                {country[0] ? <p>Data: {country[0].date}</p> : ''}
                <div className={styles.CountryPanel}>
                    {country.map((province, index) => {
                        return (
                            <Card 
                                key={index}
                                country={province}
                            />
                        )
                    })}
                </div>
            </div>
            </>
            }
        </div>
    )
}
