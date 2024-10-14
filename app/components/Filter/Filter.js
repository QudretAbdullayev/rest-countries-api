import React from 'react'
import styles from './filter.module.scss'
import Image from 'next/image'
import arrow from '../../assets/icons/svg/arrow.svg'
import arrowWhite from '../../assets/icons/svg/arrow-white.svg'

const Filter = () => {
  return (
    <section className={`${styles.filter} ${styles.filterDark}`}>
        <div className={styles.container}>
          <div className={styles.select}>
            <select name="region">
              <option value="Filter by Region" disabled selected hidden>Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
            <Image
            src={arrowWhite}
            alt='arrow'
            />
          </div>
        </div>
    </section>
  )
}

export default Filter