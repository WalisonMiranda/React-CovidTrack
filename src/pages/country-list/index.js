import React, { useEffect, useState } from "react";
import { format } from "date-fns";

import Card from "../../components/card";

import styles from "./styles.module.scss";
import { pt } from "date-fns/locale";

// let currentDate = format(addDays(new Date(), -1), 'yyy-MM-dd');

export default function CountryList() {
  const [countryList, setCountryList] = useState([]);
  const [country, setCountry] = useState([]);
  const [countryName, setCountryName] = useState("China");
  const [isLoading, setIsLoadng] = useState(true);

  useEffect(() => {
    fetch("https://covid-19-statistics.p.rapidapi.com/regions", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1401ff5fdbmshc117eee9d064966p13b0b2jsncc5c497562de",
        "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => setCountryList(data.data))
      .catch((error) => {
        console.error(error);
      });

    setIsLoadng(true);
  }, []);

  useEffect(() => {
    fetch(
      `https://covid-19-statistics.p.rapidapi.com/reports?region_name=${countryName}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "1401ff5fdbmshc117eee9d064966p13b0b2jsncc5c497562de",
          "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setCountry(data.data))
      .catch((error) => {
        console.error(error);
      });

    return () => {
      setCountry([]);
    };
  }, [countryName]);

  setInterval(() => {
    setIsLoadng(false);
  }, 700);

  const handleCountryChange = (e) => {
    setCountryName(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <div className={styles.loading}>
          <h2>Carregando ...</h2>
        </div>
      ) : (
        <>
          <h1>Países</h1>
          <div className={styles.selectInput}>
            <select onChange={handleCountryChange}>
              {countryList.map((item, index) => {
                return (
                  <option defaultValue="" key={index} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={styles.countryContainer}>
            <h2>{countryName}</h2>
            {country[0] ? (
              <p>
                Última atualização:{" "}
                {format(new Date(country[0].last_update), "dd/MMMM/yyyy", {
                  locale: pt,
                })}
              </p>
            ) : (
              ""
            )}
            <div className={styles.CountryPanel}>
              {country.map((province, index) => {
                return <Card key={index} country={province} />;
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
