import React from 'react'
import styles from './countries.module.scss'
import Country from './Country/Country'

const Countries = () => {
  return (
    <section className={`${styles.countries} ${styles.countriesDark}`}>
        <div className={styles.container}>
          <Country/>
          <Country/>
          <Country/>
          <Country/>
        </div>
    </section>
  )
}

export default Countries