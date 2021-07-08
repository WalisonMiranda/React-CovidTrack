import React, { useEffect, useState } from "react";
import { format } from "date-fns";

import { pt } from "date-fns/locale";

import styles from "./styles.module.scss";

export default function Home() {
  const [globalStats, setGlobalStats] = useState([]);
  const [isLoading, setIsLoadng] = useState(true);

  const {
    last_update,
    confirmed,
    active,
    recovered,
    deaths,
    confirmed_diff,
    active_diff,
    recovered_diff,
    deaths_diff,
  } = globalStats;

  const formatter = new Intl.NumberFormat("pt-BR");

  useEffect(() => {
    fetch("https://covid-19-statistics.p.rapidapi.com/reports/total", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1401ff5fdbmshc117eee9d064966p13b0b2jsncc5c497562de",
        "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => setGlobalStats(data.data))

      .catch((error) => {
        console.log(error);
      });

      return () => {
        setGlobalStats([]);
      }
    }, []);

    setInterval(() => {
      setIsLoadng(false);
    }, 800);

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <div className={styles.loading}>
          <h2>Carregando ...</h2>
        </div>
      ) : (
        <div className={styles.panel}>
          <h1>Global</h1>
          {last_update ?
            <p>
              Última atualização: 
               {format(new Date(last_update), " dd/MMMM/yyyy", {
                locale: pt,
              })}
            </p>
          :
            ""
          }
          <div>
            <div className={styles.card}>
              <p>Total de Casos</p>
              <div>
                <span style={{ color: "darkred" }}>
                  +{formatter.format(confirmed_diff)}
                </span>
                <p>{formatter.format(confirmed)}</p>
              </div>
            </div>

            <div className={styles.card}>
              <p>Casos Ativos</p>
              <div>
                <span style={{ color: "darkred" }}>
                  +{formatter.format(active_diff)}
                </span>
                <p>{formatter.format(active)}</p>
              </div>
            </div>

            <div className={styles.card}>
              <p>Total de Recuperados</p>
              <div>
                <span style={{ color: "var(--green-500)" }}>
                  +{formatter.format(recovered_diff)}
                </span>
                <p>{formatter.format(recovered)}</p>
              </div>
            </div>

            <div className={styles.card}>
              <p>Total de Mortes</p>
              <div>
                <span style={{ color: "darkred" }}>
                  +{formatter.format(deaths_diff)}
                </span>
                <p>{formatter.format(deaths)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
