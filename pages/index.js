
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';
import { useState } from "react";
// import Image from 'next/image'
// import icon from './images/dh-icon.svg'
import Script from 'next/script'

const getEllipsisTxt = (str, n = 6) => {
  if (str) {
    return `${str.slice(0, n)}...${str.slice(str.length - n)}`
  }
  return ''
}

const onMobileMenuToggle = () => {
  console.log('on click')
  // const aria_expanded = $(this).attr('aria-expanded')
  // $(this).find('.hamburger-close-animated-icon').toggleClass('open')
  // if (aria_expanded === 'false') {
  //   $(this).find('.hamburger-close-animated-icon').addClass('open')
  // } else if (aria_expanded === 'true') {
  //   $(this).find('.hamburger-close-animated-icon').removeClass('open')
  // }
}

export default function Home() {
  const { isAuthenticated, logout, account } = useMoralis();
  const [selectedHeroTab, setSelectedHeroTab] = useState('collectibles');
  const [heroImg, setHeroImg] = useState('/hero-1.jpg');
  const onHeroTabClick = (tab) => {
    if (tab === 'collectibles') {
      setSelectedHeroTab('collectibles')
      setHeroImg('/hero-1.jpg')
    } else if (tab === 'metaverse') {
      setSelectedHeroTab('metaverse')
      setHeroImg('/hero-2.jpg')
    } else if (tab === 'interoperable') {
      setSelectedHeroTab('interoperable')
      setHeroImg('/hero-3.jpg')
    }
  }
  return (
    <>
      <main>
        <nav id="main-nav" className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              {/* <Image
                // loader={myLoader}
                src="/logo-white.png"
                alt="Logo"
                width={40}
                height={40}
              /> */}
              <img
                // loader={myLoader}
                src="/logo-white.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={onMobileMenuToggle}>
              <div id="main-nav-icon" className="hamburger-close-animated-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Menu Item</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Menu Item</a>
                </li>
              </ul>
              {isAuthenticated ? (
                <>
                  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#accountModal">
                    {getEllipsisTxt(account, 6)}
                  </button>                
                </>  
              ) : (
                <Login />
              )}
            </div>
          </div>
        </nav>
        <section id="hero" style={{backgroundImage: `url(${heroImg})`}}>
          {/* <div className="video-wrap">
            <div className="embed-responsive embed-responsive-16by9">
              <video className="embed-responsive-item" autoPlay loop muted playsinline>
                <source src="/dh-haunted-hearts.mp4" type="video/mp4" />
              </video>
            </div>
          </div> */}
          <div id="hero_inner-card" className="card">
            {/* <div className="multi-colored-shadow"></div> */}
            <div className="card-body text-white text-shadow text-center">
              <h1 className="text-uppercase">Digital Hearts</h1>
              <div className="card-subtitle m-0">A unique collection of high quality 5D NFT wearables <br/>to customize your Metaverse avatar.</div>
            </div>
          </div>
          <nav id="hero_desktop-nav">
            <div className="container">
              <div className="row">
                <div className="relative col-lg-4 px-0">
                  <div className={`icon-diamond_wrap ${selectedHeroTab === 'collectibles' ? 'selected' : ''}`}>
                    <div className="icon-diamond"></div>
                  </div>
                  <button type="button" className={(selectedHeroTab === 'collectibles' ? 'selected' : '')} onClick={() => onHeroTabClick('collectibles')}>
                    <div className="btn-text text-shadow">Collectibles</div>
                    <div className="btn-background"></div>
                  </button>
                </div>
                <div className="relative col-lg-4 px-0">
                  <div className={`icon-diamond_wrap ${selectedHeroTab === 'metaverse' ? 'selected' : ''}`}>
                    <div className="icon-diamond"></div>
                  </div>
                  <button type="button" className={(selectedHeroTab === 'metaverse' ? 'selected' : '')} onClick={() => onHeroTabClick('metaverse')}>
                    <div className="btn-text text-shadow">Metaverse</div>
                    <div className="btn-background"></div>
                  </button>
                </div>
                <div className="relative col-lg-4 px-0">
                  <div className={`icon-diamond_wrap ${selectedHeroTab === 'interoperable' ? 'selected' : ''}`}>
                    <div className="icon-diamond"></div>
                  </div>
                  <button type="button" className={(selectedHeroTab === 'interoperable' ? 'selected' : '')} onClick={() => onHeroTabClick('interoperable')}>
                    <div className="btn-text text-shadow">Interoperable</div>
                    <div className="btn-background"></div>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </section>
        <div className="modal fade" id="accountModal" tabIndex="-1" aria-labelledby="accountModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="accountModalLabel">Account</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <button onClick={logout} className="btn btn-secondary">Disconnect</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
    </>
  )
}
