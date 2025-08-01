import React from 'react'
import { Helmet } from 'react-helmet-async'

function Helmets() {
    return (
        <Helmet>
              <title>Guilders Technology LTD - About</title>
              <meta
              property="og:title"
              content="Guilders Technology LTD - Web Development Agency"
            />
            <meta
              property="og:description"
              content="We would love to hear from you"
            />
            <meta
              name="description"
              content="We would love to hear from you"
            />
            </Helmet>
    )
}

export default Helmets
