import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

import search from '../../asserts/icons/search.svg'
import userAlt from '../../asserts/icons/user-alt.svg'
import bookmark from '../../asserts/icons/Bookmark.svg'
import shoppingBag from '../../asserts/icons/shopping-bag.svg'

import './index.css'

const Navbar = () => {
    const { pathname } = useLocation()

    const path = pathname.split("/")[1]

    return (
        <header className='Navbar-header-container p-3'>
            <div className='d-flex align-items-center flex-wrap'>
                <Link to="/">
                    <h1 className='website-logo ms-sm-3'>TANN TRIMM</h1>
                </Link>

                <div className='ms-auto btn-group flex-wrap'>
                    <Link to="">
                        <button type='button' className='btn'>
                            <img className='nav-icon' alt="nav-icon-search" src={search} />
                        </button>
                    </Link>
                    <Link to="">
                        <button type='button' className='btn'>
                            <img className='nav-icon' alt="nav-icon-search" src={userAlt} />
                        </button>
                    </Link>
                    <Link to="">
                        <button type='button' className='btn'>
                            <img className='nav-icon' alt="nav-icon-search" src={bookmark} />
                        </button>
                    </Link>
                    <Link to="">
                        <button type='button' className='btn'>
                            <img className='nav-icon' alt="nav-icon-search" src={shoppingBag} />
                        </button>
                    </Link>
                </div>
            </div>

            <nav className='nav-items m-auto d-flex flex-wrap mt-4 mb-sm-4'>
                <Link to="/bags" className={`nav-item p-1 me-2 ms-3 mb-3 mb-sm-0 ${path === "bags" ? "active-path" : ""} `}>Bags</Link>
                <Link to="/travel" className={`nav-item p-1 me-2 ms-3 mb-3 mb-sm-0 ${path === "travel" ? "active-path" : ""} `}>Travel</Link>
                <Link to="/accesories" className={`nav-item p-1 me-2 ms-3 mb-3 mb-sm-0 ${path === "accesories" ? "active-path" : ""} `}>Accesories</Link>
                <Link to="/gifting" className={`nav-item p-1 me-2 ms-3 mb-3 mb-sm-0 ${path === "gifting" ? "active-path" : ""} `}>Gifiting</Link>
                <Link to="/jwelery" className={`nav-item p-1 me-2 ms-3 mb-3 mb-sm-0 ${path === "jwelery" ? "active-path" : ""} `}>Jewelery</Link>
            </nav>
        </header>
    )
}

export default Navbar