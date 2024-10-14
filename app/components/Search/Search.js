import React from 'react'
import styles from './search.module.scss'
import Image from 'next/image'
import search from '../../assets/icons/svg/search.svg'
import searchWhite from '../../assets/icons/svg/search-white.svg'
const Search = () => {
  return (
    <section className={`${styles.search} ${styles.searchDark}`}>
        <div className={styles.container}>
            <div className={styles.searchBox}>
                <input name='search' type="text" placeholder='Search for a country…'/>
                <Image
                src={searchWhite}
                alt='search'
                />
            </div>
        </div>
    </section>
  )
}

export default Search