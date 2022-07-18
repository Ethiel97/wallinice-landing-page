import Logo from './Logo'
import {useRef} from "react";

const Navbar = () => {
    const navBurger = useRef();
    const navMenu = useRef()
    const navClose = useRef()
    const navBackdrop = useRef()

    const handleNavBurger = () => {
        navMenu.current.classList.toggle('hidden')
        // navBackdrop.current.classList.toggle('hidden')
    }

    const handleNavClose = () => {
        navMenu.current.classList.toggle('hidden')
        // navBackdrop.current.classList.toggle('hidden')
    }

    const handleNavBackdrop = () => {
        navMenu.current.classList.toggle('hidden')
        // navBackdrop.current.classList.toggle('hidden')
    }

    return (
        <section className="py-8">
            <div className="container px-4 mx-auto">
                <nav>
                    <div className="flex justify-between items-center">
                        <Logo/>
                        <div className="lg:hidden">
                            <button ref={navBurger} onClick={handleNavBurger}
                                    className="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded">
                                <svg className="block h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                                </svg>
                            </button>
                        </div>

                        <div className="hidden lg:block">
                            <a className="myButton" href="mailto:ethiel97@gmail.com">Contact Us</a>
                        </div>
                    </div>
                </nav>
            </div>
            <div ref={navMenu} className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
                <div ref={navBackdrop} onClick={handleNavBackdrop}
                     className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"/>
                <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
                    <div className="flex items-center justify-between mb-8">
                        <Logo/>
                        <button onClick={handleNavClose} ref={navClose} className="navbar-close">
                            <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>

                    </div>
                    <div>
                        <ul>
                            <li className="mb-1"><a
                                className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                                href="#about">About</a></li>
                            <li className="mb-1">
                                <a className="myButton" href="mailto:ethiel97@gmail.com">Contact Us</a>
                            </li>
                        </ul>

                    </div>
                    <div className="mt-auto">
                        <p className="mt-6 mb-4 text-sm text-center text-gray-500">
                            <span>© {new Date().getFullYear()} All rights reserved.</span>
                        </p>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Navbar
