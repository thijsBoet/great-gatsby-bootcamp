import React from "react"
import { Link } from "gatsby"

import Layout from "../component/Layout"

const contact = () => {
  return (
    <Layout>
      <main>
        <h1>Contact</h1>
        <p>
          <Link to="https://twitter.com/late_night_dude">Twitter</Link>
        </p>
        <p>
          <Link to="https://www.facebook.com/matthijs.boet">Facebook</Link>
        </p>
      </main>
    </Layout>
  )
}

export default contact