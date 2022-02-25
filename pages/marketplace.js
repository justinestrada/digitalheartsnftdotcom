import { useState } from 'react';
import Header from '../components/Header';
import Script from 'next/script'
import { useMoralis } from 'react-moralis'

export default function Marketplace() {
  const [selectedCollectionSet, setCollectionSet] = useState('all');
  const { isAuthenticated, authenticate } = useMoralis();
  const sets = [
    'Festival Classics',
    'Fruit Loops',
    'Matrix the Movie',
    'Lion\'s Den',
    'When Pigs Fly',
    'Dagon Hearts',
    'Space Cowboy',
    'Mad Max',
    'Set 9',
    'Set 10'
  ]
  const items = [
    {
      "name": "Bettina Hat Purple",
      "external_url": "https://digitalheartsnft.com/",
      "description": "",
      "image": "http://mydigitalsauce.com/wp-content/uploads/2022/01/Bettina-Hat-Purple.jpg",
      "attributes": [
        {
          "trait_type": "Item Type",
          "value": "Hat"
        },
        {
          "trait_type": "Hat Type",
          "value": "Bettina"
        },
        {
          "trait_type": "Color",
          "value": "Purple"
        },
        {
          "trait_type": "Pattern",
          "value": "None"
        }
      ]
    },
    {
      "name": "Bettina Hat Zebra",
      "external_url": "https://digitalheartsnft.com/",
      "description": "",
      "image": "http://mydigitalsauce.com/wp-content/uploads/2022/01/Bettina-Hat-Zebra.jpg",
      "attributes": [
        {
          "trait_type": "Item Type",
          "value": "Hat"
        },
        {
          "trait_type": "Hat Type",
          "value": "Bettina"
        },
        {
          "trait_type": "Color",
          "value": "White"
        },
        {
          "trait_type": "Pattern",
          "value": "Zebra"
        }
      ]
    },
    {
      "name": "Carly Romper Fruits",
      "external_url": "https://digitalheartsnft.com/",
      "description": "",
      "image": "http://mydigitalsauce.com/wp-content/uploads/2022/01/Carly-Romper-Fruits.jpg",
      "attributes": [
         {
            "trait_type": "Item Type",
            "value": "Chest"
         },
         {
            "trait_type": "Chest Type",
            "value": "Romper"
         },
         {
            "trait_type": "Color",
            "value": "White"
         },
         {
            "trait_type": "Pattern",
            "value": "Fruits"
         }
      ]
    },
    {
      "name": "Daryn Boots Watermelon",
      "external_url": "https://digitalheartsnft.com/",
      "description": "",
      "image": "http://mydigitalsauce.com/wp-content/uploads/2022/01/Daryn-Boots-Watermelon.jpg",
      "attributes": [
         {
            "trait_type": "Item Type",
            "value": "Shoes"
         },
         {
            "trait_type": "Shoes Type",
            "value": "Boots"
         },
         {
            "trait_type": "Color",
            "value": "Red"
         },
         {
            "trait_type": "Pattern",
            "value": "Watermelon"
         }
      ]
    }
  ]
  const onSelectCollectionSet = (value) => {
    setCollectionSet(value)
    console.log(value)
  }
  return (
    <>
      <main id="marketplace" style={{backgroundImage: 'url(/bg-colorful.jpg)'}}>
        <Header />
        <section id="marketplace_inner-wrap" className="container card px-0">
          <div className="card-body">
            <div id="marketplace_stats" className="row mb-4">
              <div className="col-lg-3">
                <div className="marketplace_stat border-corners">
                  <div className="stat_label">Items in Collection</div>
                  <div className="stat_value">1000</div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="marketplace_stat border-corners">
                  <div className="stat_label">Owners</div>
                  <div className="stat_value">1000</div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="marketplace_stat border-corners">
                  <div className="stat_label">Floor Price</div>
                  <div className="stat_value">1 ETH</div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="marketplace_stat border-corners">
                  <div className="stat_label">Total Volume</div>
                  <div className="stat_value">100 ETH</div>
                </div>
              </div>
            </div>
            <div id="marketplace_filters" className="row mb-4">
              <div className="col">
                <div className="h4 text-white">Sets</div>
                <div className="filter_set-circles">
                  {/*
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
                  */}
                    { sets ? (
                      sets?.map((item, index) => {
                        const checked = selectedCollectionSet.toLowerCase() === item.toLowerCase()
                        const label_classes = 'filter_set-circle'
                        if (checked) {
                          label_classes += ' selected'
                        }
                        return (
                          <>
                            <label className={label_classes} for={'set-' + index} key={index}
                              onClick={() => onSelectCollectionSet(item)}>
                              <input type="radio" id={'set-' + index} name="set" value={item} checked={checked}/>
                              <span className="text-white text-shadow">{item}</span>
                            </label>
                          </>
                        )
                      })
                    ) : (
                      <div className="py-5 text-center">Loading...</div>
                    )}
                </div>
              </div>
            </div>
            <div id="marketplace_listing">
              <div className="row">
                {items.map(function(item, index) {
                  const is_owner = false
                  return (
                    <div className="col-md-4 col-lg-3 mb-4" key={index}>
                      <div className="card card-nft border-corners">
                        <div className="card-body">
                          <div>
                            <div className="text-white mb-2">{item.attributes[0].value}</div>
                            <img src={item.image} alt={item.name} className="mb-2"/>
                          </div>
                          <div>
                            <h3 className="text-white text-shadow mb-2">{item.name}</h3>
                            {isAuthenticated ? (
                              <>
                                {is_owner ? (
                                  <button type="button" className="btn btn-primary">SELL</button>
                                ) : (
                                  <button type="button" className="btn btn-primary">BUY</button>
                                )}
                              </>
                            ) : (
                              <>
                                <button onClick={authenticate} type="button" className="btn btn-primary">CONNECT</button>
                              </>
                            )}
                          </div>
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
