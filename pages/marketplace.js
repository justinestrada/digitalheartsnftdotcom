
import Header from '../components/Header';
import Script from 'next/script'

const marketplace = () => {
  const sets = [
    'Festival Classics',
    'Fruit Loops',
    'Matrix the Movie',
    'Lion\'s Den (Mikey Lion Inspired)',
    'When Pigs Fly (Porky Inspired)',
    'Dagon Hearts (Asian Inspired Collection)',
    'Space Cowboy',
    'Mad Max',
    'Set 9',
    'Set 10'
  ]
  return (
    <>
      <main id="marketplace" style={{backgroundImage: 'url(/bg-colorful.jpg)'}}>
        <Header />
        <section id="marketplace_inner-wrap" className="container card">
          <div className="card-body">
            <div id="marketplace_stats" className="row mb-4">
              <div className="col-lg-3">
                <div className="marketplace_stat">
                  <div className="stat_label">Items in Collection</div>
                  <div className="stat_value">1000</div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="marketplace_stat">
                  <div className="stat_label">Owners</div>
                  <div className="stat_value">1000</div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="marketplace_stat">
                  <div className="stat_label">Floor Price</div>
                  <div className="stat_value">1 ETH</div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="marketplace_stat">
                  <div className="stat_label">Total Volume</div>
                  <div className="stat_value">1000 ETH</div>
                </div>
              </div>
            </div>
            <div id="marketplace_listing">
              <h3 className="text-white">Sets</h3>
              <div className="accordion" id="accordionSets">
                { sets ? (
                  sets?.map((item, index) => {
                    return (
                      <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                            {item}
                          </button>
                        </h2>
                        <div id={`collapse${index}`} className="accordion-collapse collapse show" aria-labelledby={`heading${index}`} data-bs-parent="#accordionSets">
                          <div className="accordion-body">
                            <p>Lorem ipsum</p>
                          </div>
                        </div>
                      </div>                    
                    )
                  })
                ) : (
                  <div className="py-5 text-center">Loading...</div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
    </>
  )
}

export default marketplace;
