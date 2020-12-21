import React from 'react'
import Header from '../../components/header';
import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function AnalyzeInput() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <div className={styles.container}>
          <Image
            src="/chart.png"
            alt="Super cool chart"
            layout="fill"
          />
        </div>
      </main>
    </div>
  )
  }