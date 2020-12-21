import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { css } from '@emotion/css'


import Amplify from 'aws-amplify'
import config from '../aws-exports'

Amplify.configure({
  ...config,
  ssr: true
})

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

const linkStyle = css`
  margin-right: 20px;
  cursor: pointer;
`

const navStyle = css`
  display: flex;
`