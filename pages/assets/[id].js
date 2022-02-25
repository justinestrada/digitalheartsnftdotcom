import Header from '../../components/Header';
import { useMoralis } from 'react-moralis'
// import React from 'react'

export const Details = () => {
  const { isAuthenticated, authenticate } = useMoralis();
  return (
    <>
      <main id="marketplace" style={{backgroundImage: 'url(/bg-colorful.jpg)'}}>
        <Header />
        <section id="asset_details-wrap" className="container card px-0">
          <div className="card-body">
            <div className="row mb-4">
              <div className="col-lg">
                <h1 className="text-white">Details</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Details;