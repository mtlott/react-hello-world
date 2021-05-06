import React, { Fragment } from 'react'
// import styles from './styles.module.css'

import { css, keyframes } from '@emotion/css'

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

export const HelloWorld = () => {
  return (
    <Fragment>
      <section
        className={css`
          padding: 6em;
          background: papayawhip;
        `}
      >
        <h1
          className={css`
            font-size: 1.5em;
            text-align: center;
            color: palevioletred;
            animation: ${bounce} 1s ease infinite;
          `}
        >
          Hello World!
        </h1>
      </section>
    </Fragment>
  )
}

export default HelloWorld
