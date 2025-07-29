import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-darkblue py-4">
        <div className="container">
          <a className="navbar-brand fs-2 text-white" href="#">
            START REACT
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-4">
                <a
                  className="btn btn-outline-light w-100 fs-4 mt-4 mt-lg-0"
                  aria-current="page"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item ms-4">
                <a className="btn btn-outline-light w-100 fs-4 mt-4 mt-lg-0" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item ms-4">
                <a className="btn btn-outline-light w-100 fs-4 mt-4 mt-lg-0" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}