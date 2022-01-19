
import { useMoralis } from 'react-moralis';
// import { useState } from "react";
import Login from './Login';
// import Link from 'next/Link'

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

function Header () {
  const { isAuthenticated, account } = useMoralis();
  return (
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: 'end' }}>
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
              <button type="button" className="btn btn-primary text-shadow" data-bs-toggle="modal" data-bs-target="#accountModal">
                {getEllipsisTxt(account, 6)}
              </button>                
            </>  
          ) : (
            <Login />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header