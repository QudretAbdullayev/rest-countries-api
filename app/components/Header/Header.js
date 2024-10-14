import React from 'react'
import styles from './header.module.scss'
import Image from 'next/image'
import moon from '../../assets/icons/svg/Moon.svg'
import moonDark from '../../assets/icons/svg/Moon-dark.svg'

const Header = () => {
  return (
    <header className={`${styles.header} ${styles.headerDark}`}>
        <div className={styles.container}>
            <h1>Where in the world?</h1>
            <span>
                <Image
                src={moonDark}
                alt='moon'
                />
                <p>Dark Mode</p>
            </span>
        </div>
    </header>
  )
}

export default Header