import React from 'react'
import styles from './countryDetail.module.scss'
import Image from 'next/image'
import germany from '../../assets/icons/flag/Germany.png'

const CountryDetail = () => {
  return (
    <section className={`${styles.countryDetail} ${styles.countryDetailDark}`}>
        <div className={styles.container}>
            <Image
            src={germany}
            alt='germany'
            />
            <div className={styles.countryDescription}>
                <h1>Belgium</h1>
                <div className={styles.countryFirstDetail}>
                    <span>
                        <h5>Native Name:</h5>
                        <h6>België</h6>
                    </span>
                    <span>
                        <h5>Population:</h5>
                        <h6>11,319,511</h6>
                    </span>
                    <span>
                        <h5>Region:</h5>
                        <h6>Europe</h6>
                    </span>
                    <span>
                        <h5>Sub Region:</h5>
                        <h6>Western Europe</h6>
                    </span>
                    <span>
                        <h5>Capital:</h5>
                        <h6>Brussels</h6>
                    </span>
                </div>
                <div className={styles.countrySecondDetail}>
                    <span>
                        <h5>Top Level Domain:</h5>
                        <h6>.be</h6>
                    </span>
                    <span>
                        <h5>Currencies:</h5>
                        <h6>Euro</h6>
                    </span>
                    <span>
                        <h5>Languages:</h5>
                        <h6>Dutch, French, German</h6>
                    </span>
                </div>
                <div className={styles.borderCountries}>
                    <h3>Border Countries:</h3>
                    <span>
                        <h4>France</h4>
                        <h4>Germany</h4>
                        <h4>Netherlands</h4>
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CountryDetail