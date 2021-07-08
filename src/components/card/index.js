import React from "react";

import styles from "./styles.module.scss";

const formatter = new Intl.NumberFormat("pt-BR");

export default function Card({country}) {
  const {
    region,
    confirmed,
    confirmed_diff,
    active,
    active_diff,
    recovered,
    recovered_diff,
    deaths,
    deaths_diff,
  } = country;

  return (
    <div className={styles.provincesCard}>
      <h2>{region.province}</h2>
      <div className={styles.provinceStatus}>
        <div>
          <p>Total de Casos</p>
          <div>
            <span style={{ color: "red" }}>
              +{formatter.format(confirmed_diff)}
            </span>
            <p>{formatter.format(confirmed)}</p>
          </div>
        </div>
        <div>
          <p>Casos Ativos</p>
          <div>
            <span style={{ color: "red" }}>
              +{formatter.format(active_diff)}
            </span>
            <p>{formatter.format(active)}</p>
          </div>
        </div>
        <div>
          <p>Total de Mortes</p>
          <div>
            <span style={{ color: "red" }}>
              +{formatter.format(deaths_diff)}
            </span>
            <p>{formatter.format(deaths)}</p>
          </div>
        </div>
        <div>
          <p>Total de Recuperados</p>
          <div>
            <span style={{ color: "var(--green-500)" }}>
              +{formatter.format(recovered_diff)}
            </span>
            <p>{formatter.format(recovered)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
