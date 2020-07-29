import React from 'react';
import { Link } from 'gatsby'


import Layout from "../component/Layout"

const index = () => {
  return (
    <Layout>
      <main>
        <h1>Home</h1>
        <h2>I'm Matthijs, a front-end developer living in beautiful Rotterdam.</h2>
        <p>
          Need a developer? <Link to="/contact">Contact me</Link>
        </p>
      </main> 
    </Layout>
  )
}

export default index;