import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center ">
    <div className="contanier col-sm-8 py-2 px-5 shadow text-center bg-dark animated-div">
      <h2 className='mt-5 shining-text text-white'>Welcome to our home page</h2>
      <h3 className='mt-5 shining-text text-white'>CRUD Clientes</h3>
      <h3 className='mt-5 shining-text text-white'>React JS + Spring Boot + MySQL</h3>
      <h3 className='mt-5 mb-5 shining-text text-white'>By: Rick Saman</h3>
    </div>
    </div>
  )
}

export default Home
