import React from 'react'
import styles from './country.module.scss'
import Image from 'next/image'
import Germany from '../../../assets/icons/flag/Germany.png'

const Country = ({country}) => {
  return (
    <div className={`${styles.country} ${styles.countryDark}`}>
        <Image
        src={country?.flag}
        alt={country?.name}
        width={10}
        height={10}
        />
        <div className={styles.countryDescription}>
            <h1>{country?.name}</h1>
            <span className={styles.countryDescriptionTitle}>
                <span>
                    <h5>Population:</h5>
                    <h6>{country?.population.toLocaleString('en-US')}</h6>
                </span>
                <span>
                    <h5>Region:</h5>
                    <h6>{country?.region}</h6>
                </span>
                <span>
                    <h5>Capital:</h5>
                    <h6>{country?.capital}</h6>
                </span>
            </span>
        </div>
    </div>
  )
}

export default Country