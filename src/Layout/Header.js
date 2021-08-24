import React from 'react';

function Header() {
    return (
        <div>
            <header id="header" classname="fixed-top header-transparent">
          <div classname="container d-flex align-items-center justify-content-between">
            <h1 classname="logo"><a href="index.html">Baker</a></h1>
            <nav id="navbar" classname="navbar">
              <ul>
                <li><a classname="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a classname="nav-link scrollto" href="#about">About</a></li>
                <li><a classname="nav-link scrollto" href="#services">Services</a></li>
                <li><a classname="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                <li><a classname="nav-link scrollto" href="#team">Team</a></li>
                <li><a classname="nav-link scrollto" href="#pricing">Pricing</a></li>
                <li classname="dropdown"><a href="#"><span>Drop Down</span> <i classname="bi bi-chevron-down" /></a>
                  <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li classname="dropdown"><a href="#"><span>Deep Drop Down</span> <i classname="bi bi-chevron-right" /></a>
                      <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Drop Down 2</a></li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                  </ul>
                </li>
                <li><a classname="nav-link scrollto" href="#contact">Contact</a></li>
              </ul>
              <i classname="bi bi-list mobile-nav-toggle" />
            </nav>
          </div>
        </header>
        </div>
    );
}
export default Header;