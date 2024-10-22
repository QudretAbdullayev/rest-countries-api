'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import styles from './countries.module.scss'
import Country from './Country/Country'

const Countries = () => {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [allCountries, setAllCountries] = useState([])

  const getCountries = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('countries')
        .select('*')
        .range(0, 7)

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setAllCountries(data)
        console.log('Fetched countries:', data)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [supabase])

  useEffect(() => {
    getCountries()
  }, [getCountries])

  return (
    <section className={`${styles.countries} ${styles.countriesDark}`}>
      <div className={styles.container}>
        {loading ? (
          <p>Loading countries...</p>
        ) : (
          allCountries.map((country) => (
            <Country key={country?.alpha3code} country={country} />
          ))
        )}
      </div>
    </section>
  )
}

export default Countries
