import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Layout = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className='header-container'>
                <div className='header-div'>
                    <div className='header-logo'>
                        <span>
                            Grigom Pictures
                        </span>
                    </div>
                    <div className='header-nav'>
                        <nav className={`nav-items`}>
                            <Link to="/">HOME</Link>
                            <Link to="/videos">VIDEOS</Link>
                            <Link to="/company">COMPANY</Link>
                            <Link to="/contact">CONTACT</Link>
                        </nav>
                        <div className={`header-nav-toggle`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className='bar'></div>
                        </div>
                    </div>
                    <div className='header-info'>
                        <div>dark</div>
                        <div>vimeo</div>
                        <div>youtube</div>
                    </div>
                </div>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;