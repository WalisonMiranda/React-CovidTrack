import React from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import styles from "./styles.module.scss";

export default function Navbar() {
    return (
        <Router>
            <div className={styles.container}>
                <ul>
                    <li activeClassName={styles.active} >
                        <NavLink to="/" 
                                 className={styles.link}
                                 exact activeClassName={styles.active}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/country-list"
                                 className={styles.link}
                                 activeClassName={styles.active}
                        >
                            Detalhes
                        </NavLink>
                    </li>
                </ul>
            </div>
        </Router>
    )
}
