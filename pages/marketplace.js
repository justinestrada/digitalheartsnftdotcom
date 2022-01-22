
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
  const items = [
    {
      "name": "Holographic Thicc Arcanine",
      "external_url": "https://thicccollectibles.com/",
      "description": "A Thicc Collectible that has been long admired for its thiccness. It busts down gracefully, as if on wings.",
      "image": "https://thiccpkmn.io/wp-content/themes/thicc-api/assets/images/pokedex/059-holo.jpg",
      "attributes": [
        {
          "trait_type": "Rarity",
          "value": "Uncommon"
        },
        {
          "trait_type": "Type1",
          "value": "Fire"
        }
      ]
    },
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
                  <div className="stat_value">100 ETH</div>
                </div>
              </div>
            </div>
            <div id="marketplace_filters" className="row mb-4">
              <div className="col-lg-4">
                <div className="form-group">
                  <label className="text-white">Sets</label>
                  <select className="form-control">
                    { sets ? (
                      sets?.map((item, index) => {
                        return (
                          <option key={index}>{item}</option>
                        )
                      })
                    ) : (
                      <div className="py-5 text-center">Loading...</div>
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div id="marketplace_listing">
              <div className="row">
                {items.map(function(item, index) {
                  const is_owner = false
                  return (
                    <div className="col-lg-4 col-xs-3" key={index}>
                      <div className="card card-nft">
                        <div className="card-body">
                          <div className="text-white mb-2">{item.attributes[0].value}</div>
                          <img src={item.image} alt={item.name} className="mb-2"/>
                          <h3 className="text-white text-shadow mb-2">{item.name}</h3>
                          {is_owner ? (
                            <button type="button" className="btn btn-primary">SELL</button>
                          ) : (
                            <button type="button" className="btn btn-primary">BUY</button>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}                
              </div>
              {/*
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
              */}
            </div>
          </div>
        </section>
      </main>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
    </>
  )
}

export default marketplace;
