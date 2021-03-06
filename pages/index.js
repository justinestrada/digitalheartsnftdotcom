
import Header from '../components/Header';
import { useMoralis } from 'react-moralis';
import { useState } from "react";
// import Image from 'next/image'
// import { IconInstagram } from '../components/images/icon-instagram.svg'
// import { IconArrow } from '../components/images/icon-arrow.svg'
import Script from 'next/script'
import Link from 'next/Link'

const IconInstagram = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.25066 12C9.25066 10.4813 10.4815 9.24978 12.0003 9.24978C13.5191 9.24978 14.7507 10.4813 14.7507 12C14.7507 13.5187 13.5191 14.7502 12.0003 14.7502C10.4815 14.7502 9.25066 13.5187 9.25066 12ZM7.76389 12C7.76389 14.3397 9.66054 16.2363 12.0003 16.2363C14.3401 16.2363 16.2368 14.3397 16.2368 12C16.2368 9.6603 14.3401 7.76372 12.0003 7.76372C9.66054 7.76372 7.76389 9.6603 7.76389 12ZM15.4144 7.59575C15.4144 7.79156 15.4724 7.98299 15.5811 8.14584C15.6898 8.30868 15.8444 8.43564 16.0253 8.51064C16.2061 8.58564 16.4052 8.60533 16.5972 8.5672C16.7893 8.52908 16.9658 8.43486 17.1043 8.29647C17.2428 8.15807 17.3371 7.9817 17.3754 7.78968C17.4137 7.59765 17.3942 7.39859 17.3193 7.21766C17.2445 7.03673 17.1176 6.88206 16.9549 6.77322C16.7921 6.66437 16.6007 6.60623 16.4049 6.60615C16.1424 6.60627 15.8903 6.71056 15.7047 6.89611C15.5191 7.08166 15.4147 7.3333 15.4144 7.59575ZM8.6672 18.7153C7.86282 18.6787 7.42562 18.5447 7.13508 18.4315C6.74989 18.2815 6.47505 18.103 6.18609 17.8144C5.89713 17.5258 5.71826 17.2513 5.56897 16.8661C5.45571 16.5757 5.32172 16.1384 5.28516 15.3341C5.24516 14.4644 5.23717 14.2032 5.23717 12.0001C5.23717 9.79692 5.24582 9.53642 5.28516 8.66608C5.32179 7.86173 5.45676 7.42528 5.56897 7.13402C5.71892 6.74884 5.89753 6.47402 6.18609 6.18507C6.47466 5.89612 6.74923 5.71726 7.13508 5.56797C7.42549 5.45471 7.86282 5.32073 8.6672 5.28417C9.53685 5.24417 9.79809 5.23619 12.0003 5.23619C14.2026 5.23619 14.4641 5.24483 15.3345 5.28417C16.1388 5.3208 16.5753 5.45577 16.8666 5.56797C17.2518 5.71726 17.5266 5.89652 17.8156 6.18507C18.1045 6.47362 18.2827 6.74884 18.4327 7.13402C18.5459 7.42442 18.6799 7.86173 18.7165 8.66608C18.7565 9.53642 18.7645 9.79692 18.7645 12.0001C18.7645 14.2032 18.7565 14.4637 18.7165 15.3341C18.6799 16.1384 18.5452 16.5756 18.4327 16.8661C18.2827 17.2513 18.1041 17.5261 17.8156 17.8144C17.527 18.1027 17.2518 18.2815 16.8666 18.4315C16.5762 18.5448 16.1388 18.6787 15.3345 18.7153C14.4648 18.7553 14.2036 18.7633 12.0003 18.7633C9.7971 18.7633 9.53658 18.7553 8.6672 18.7153ZM8.59888 3.79996C7.72059 3.83996 7.12042 3.97922 6.5963 4.18316C6.05349 4.39376 5.59398 4.67631 5.1348 5.13475C4.67562 5.59318 4.39379 6.0534 4.18318 6.59618C3.97923 7.12062 3.83996 7.72043 3.79996 8.59869C3.75931 9.47834 3.75 9.75956 3.75 12C3.75 14.2404 3.75931 14.5217 3.79996 15.4013C3.83996 16.2796 3.97923 16.8794 4.18318 17.4038C4.39379 17.9463 4.67569 18.407 5.1348 18.8653C5.59392 19.3235 6.05349 19.6056 6.5963 19.8168C7.12142 20.0208 7.72059 20.16 8.59888 20.2C9.47903 20.24 9.75981 20.25 12.0003 20.25C14.2409 20.25 14.5221 20.2407 15.4018 20.2C16.2801 20.16 16.8799 20.0208 17.4044 19.8168C17.9468 19.6056 18.4067 19.3237 18.8659 18.8653C19.325 18.4068 19.6063 17.9463 19.8175 17.4038C20.0214 16.8794 20.1614 16.2796 20.2007 15.4013C20.2407 14.521 20.25 14.2404 20.25 12C20.25 9.75956 20.2407 9.47834 20.2007 8.59869C20.1607 7.72036 20.0214 7.12029 19.8175 6.59618C19.6063 6.05373 19.3243 5.59391 18.8659 5.13475C18.4074 4.67558 17.9468 4.39376 17.405 4.18316C16.8799 3.97922 16.2801 3.8393 15.4024 3.79996C14.5228 3.75997 14.2415 3.75 12.001 3.75C9.76047 3.75 9.47903 3.75931 8.59888 3.79996Z" fill="#B7BDEE"/>
      <path d="M9.25066 12C9.25066 10.4813 10.4815 9.24978 12.0003 9.24978C13.5191 9.24978 14.7507 10.4813 14.7507 12C14.7507 13.5187 13.5191 14.7502 12.0003 14.7502C10.4815 14.7502 9.25066 13.5187 9.25066 12ZM7.76389 12C7.76389 14.3397 9.66054 16.2363 12.0003 16.2363C14.3401 16.2363 16.2368 14.3397 16.2368 12C16.2368 9.6603 14.3401 7.76372 12.0003 7.76372C9.66054 7.76372 7.76389 9.6603 7.76389 12ZM15.4144 7.59575C15.4144 7.79156 15.4724 7.98299 15.5811 8.14584C15.6898 8.30868 15.8444 8.43564 16.0253 8.51064C16.2061 8.58564 16.4052 8.60533 16.5972 8.5672C16.7893 8.52908 16.9658 8.43486 17.1043 8.29647C17.2428 8.15807 17.3371 7.9817 17.3754 7.78968C17.4137 7.59765 17.3942 7.39859 17.3193 7.21766C17.2445 7.03673 17.1176 6.88206 16.9549 6.77322C16.7921 6.66437 16.6007 6.60623 16.4049 6.60615C16.1424 6.60627 15.8903 6.71056 15.7047 6.89611C15.5191 7.08166 15.4147 7.3333 15.4144 7.59575ZM8.6672 18.7153C7.86282 18.6787 7.42562 18.5447 7.13508 18.4315C6.74989 18.2815 6.47505 18.103 6.18609 17.8144C5.89713 17.5258 5.71826 17.2513 5.56897 16.8661C5.45571 16.5757 5.32172 16.1384 5.28516 15.3341C5.24516 14.4644 5.23717 14.2032 5.23717 12.0001C5.23717 9.79692 5.24582 9.53642 5.28516 8.66608C5.32179 7.86173 5.45676 7.42528 5.56897 7.13402C5.71892 6.74884 5.89753 6.47402 6.18609 6.18507C6.47466 5.89612 6.74923 5.71726 7.13508 5.56797C7.42549 5.45471 7.86282 5.32073 8.6672 5.28417C9.53685 5.24417 9.79809 5.23619 12.0003 5.23619C14.2026 5.23619 14.4641 5.24483 15.3345 5.28417C16.1388 5.3208 16.5753 5.45577 16.8666 5.56797C17.2518 5.71726 17.5266 5.89652 17.8156 6.18507C18.1045 6.47362 18.2827 6.74884 18.4327 7.13402C18.5459 7.42442 18.6799 7.86173 18.7165 8.66608C18.7565 9.53642 18.7645 9.79692 18.7645 12.0001C18.7645 14.2032 18.7565 14.4637 18.7165 15.3341C18.6799 16.1384 18.5452 16.5756 18.4327 16.8661C18.2827 17.2513 18.1041 17.5261 17.8156 17.8144C17.527 18.1027 17.2518 18.2815 16.8666 18.4315C16.5762 18.5448 16.1388 18.6787 15.3345 18.7153C14.4648 18.7553 14.2036 18.7633 12.0003 18.7633C9.7971 18.7633 9.53658 18.7553 8.6672 18.7153ZM8.59888 3.79996C7.72059 3.83996 7.12042 3.97922 6.5963 4.18316C6.05349 4.39376 5.59398 4.67631 5.1348 5.13475C4.67562 5.59318 4.39379 6.0534 4.18318 6.59618C3.97923 7.12062 3.83996 7.72043 3.79996 8.59869C3.75931 9.47834 3.75 9.75956 3.75 12C3.75 14.2404 3.75931 14.5217 3.79996 15.4013C3.83996 16.2796 3.97923 16.8794 4.18318 17.4038C4.39379 17.9463 4.67569 18.407 5.1348 18.8653C5.59392 19.3235 6.05349 19.6056 6.5963 19.8168C7.12142 20.0208 7.72059 20.16 8.59888 20.2C9.47903 20.24 9.75981 20.25 12.0003 20.25C14.2409 20.25 14.5221 20.2407 15.4018 20.2C16.2801 20.16 16.8799 20.0208 17.4044 19.8168C17.9468 19.6056 18.4067 19.3237 18.8659 18.8653C19.325 18.4068 19.6063 17.9463 19.8175 17.4038C20.0214 16.8794 20.1614 16.2796 20.2007 15.4013C20.2407 14.521 20.25 14.2404 20.25 12C20.25 9.75956 20.2407 9.47834 20.2007 8.59869C20.1607 7.72036 20.0214 7.12029 19.8175 6.59618C19.6063 6.05373 19.3243 5.59391 18.8659 5.13475C18.4074 4.67558 17.9468 4.39376 17.405 4.18316C16.8799 3.97922 16.2801 3.8393 15.4024 3.79996C14.5228 3.75997 14.2415 3.75 12.001 3.75C9.76047 3.75 9.47903 3.75931 8.59888 3.79996Z" fill="#B7BDEE"/>
    </svg>    
  )  
}

const IconArrow = () => {
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg">
      <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
    </svg>    
  )
}

export default function Home() {
  const { logout } = useMoralis();
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
  const bootstrapCloseModal = (modalId) => {
    const modal = document.getElementById(modalId)
    modal.classList.remove('show')
    modal.setAttribute('aria-hidden', 'true')
    modal.setAttribute('style', 'display: none')
    const modalBackdrops = document.getElementsByClassName('modal-backdrop')
    document.body.removeChild(modalBackdrops[0])
  }  
  return (
    <>
      <main>
        <Header />
        <section id="hero" style={{backgroundImage: `url(${heroImg})`}}>
          {/* <div className="video-wrap">
            <div className="embed-responsive embed-responsive-16by9">
              <video className="embed-responsive-item" autoPlay loop muted playsinline>
                <source src="/dh-haunted-hearts.mp4" type="video/mp4" />
              </video>
            </div>
          </div> */}
          <div id="hero_overlay-container" className="w-100">
            {/* <div className="multi-colored-shadow"></div> */}
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div id="hero_inner-left-card" className="card border-corners border-corners_white m-3">
                    <div className="card-body">
                      <div className="text-white text-shadow">
                        <h1 className="text-uppercase mb-3">Digital Hearts NFT</h1>
                        <div className="card-subtitle mb-3">A unique collection of high quality 5D NFT wearables <br/>to customize your Metaverse avatar.</div>
                        {/*
                        // Link is throwing a build error??
                        <Link href="/marketplace" className="text-white text-uppercase">
                          Buy A Collectible 
                          <div style={{ marginLeft: '8px' }}>
                            <IconArrow />
                          </div>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                  <div className="card" style={{width: 'fit-content', marginLeft: '16px'}}>
                    <div className="card-body" style={{padding: '0.5rem'}}>
                      <div className="text-white text-shadow">
                        <a href="https://www.instagram.com/digitalheartsnft/" target="_blank" rel="noreferrer">
                          <IconInstagram />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="hero_overlay-container_right" className="col-lg-3 offset-lg-4">
                  <a 
                    href="#"
                    className="btn btn-primary text-shadow border-corners border-corners_white"
                    style={{padding: '1rem 1.5rem', fontSize: '18px', textTransform: 'uppercase'}}>
                    Enter Marketplace
                  </a>
                </div>
              </div>
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
                <button onClick={() => {
                  logout()
                  bootstrapCloseModal('accountModal')
                }} className="btn btn-secondary">Disconnect</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
    </>
  )
}
