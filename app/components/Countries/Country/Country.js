import React from 'react'
import styles from './country.module.scss'
import Image from 'next/image'
import Germany from '../../../assets/icons/flag/Germany.png'

const Country = () => {
  return (
    <div className={`${styles.country} ${styles.countryDark}`}>
        <Image
        src={Germany}
        alt='Germany'
        />
        <div className={styles.countryDescription}>
            <h1>Germany</h1>
            <span className={styles.countryDescriptionTitle}>
                <span>
                    <h5>Population:</h5>
                    <h6>81,770,900</h6>
                </span>
                <span>
                    <h5>Region:</h5>
                    <h6>Europe</h6>
                </span>
                <span>
                    <h5>Capital:</h5>
                    <h6>Berlin</h6>
                </span>
            </span>
        </div>
    </div>
  )
}

export default Country