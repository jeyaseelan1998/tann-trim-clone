import { Link, useLocation } from 'react-router-dom'

import './index.css'

const Navbar = () => {
    const { pathname } = useLocation()

    const path = pathname.split("/")[2]

    return (
        <header className='Navbar-header-container p-3'>
            <div className='d-flex align-items-center flex-wrap'>
                <Link to="/">
                    <h1 className='website-logo ms-sm-3'>TANN TRIMM</h1>
                </Link>

                <div className='ms-auto btn-group flex-wrap'>
                    <button type='button' className='btn'>
                        <img
                            className='nav-icon'
                            alt="nav-icon-search"
                            src="https://res.cloudinary.com/dj5c1rxzz/image/upload/v1713192749/tann-trim/search.svg"
                        />
                    </button>
                    <Link to="/profile">
                        <button type='button' className='btn'>
                            <img
                                className='nav-icon'
                                alt="nav-icon-search"
                                src="https://res.cloudinary.com/dj5c1rxzz/image/upload/v1713192767/tann-trim/user-alt.svg"
                            />
                        </button>
                    </Link>
                    <Link to="/bookmarks">
                        <button type='button' className='btn'>
                            <img
                                className='nav-icon'
                                alt="nav-icon-search"
                                src="https://res.cloudinary.com/dj5c1rxzz/image/upload/v1713192786/tann-trim/bookmark.svg"
                            />
                        </button>
                    </Link>
                    <Link to="/cart">
                        <button type='button' className='btn'>
                            <img
                                className='nav-icon'
                                alt="nav-icon-search"
                                src="https://res.cloudinary.com/dj5c1rxzz/image/upload/v1713192804/tann-trim/shopping-bag.svg"
                            />
                        </button>
                    </Link>
                </div>
            </div>

            <nav className='nav-items m-auto d-flex flex-wrap mt-4 mb-sm-4'>
                <Link
                    to="/products/bags"
                    className={`nav-item p-1 me-2 ms-3 mb-3 mb-sm-0 ${path === "bags" ? "active-path" : ""} `}
                >
                    Bags
                </Link>
                <Link
                    to="/products/travel"
                    className={`nav-item p-1 me-2 ms-3 mb-3 mb-sm-0 ${path === "travel" ? "active-path" : ""} `}
                >
                    Travel
                </Link>
                <Link
                    to="/products/accesories"
                    className={`nav-item p-1 me-2 ms-3 mb-3 mb-sm-0 ${path === "accesories" ? "active-path" : ""} `}
                >
                    Accesories
                </Link>
                <Link
                    to="/products/gifting"
                    className={`nav-item p-1 me-2 ms-3 mb-3 mb-sm-0 ${path === "gifting" ? "active-path" : ""} `}
                >
                    Gifiting
                </Link>
                <Link
                    to="/products/jwelery"
                    className={`nav-item p-1 me-2 ms-3 mb-3 mb-sm-0 ${path === "jwelery" ? "active-path" : ""} `}
                >
                    Jewelery
                </Link>
            </nav>
        </header>
    )
}

export default Navbar