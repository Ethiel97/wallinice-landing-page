import Image from 'next/image';

import GooglePlayLogo from '../assets/zeus-assets/buttons/google-play.svg'
import AppStoreLogo from '../assets/zeus-assets/buttons/app-store.svg'
import Screenshot1 from '../assets/images/screenshot-1.png'
import Screenshot2 from '../assets/images/screenshot-2.png'
import SurprisedMan from '../assets/images/surprised-man.webp'
import YellowDotRight from '../assets/zeus-assets/icons/dots/yellow-dot-right.svg'
import BlueDotLeftBars from "../assets/zeus-assets/icons/dots/blue-dot-left-bars.svg"
import YellowDotRightShield from "../assets/zeus-assets/icons/dots/yellow-dot-right-shield.svg"


export default function Home() {

    const appStoreLink = "https://apps.apple.com/app/dailyq-daily-quotes/id1612794994";
    const playStoreLink = "https://play.google.com/store/apps/details?id=com.deventhusiast.wallinice";
    return (
        <>
            <section className="relative py-20">
                <Image className="hidden lg:block absolute top-0 left-0 mt-24" layout='raw' src={BlueDotLeftBars}
                       alt=""/>
                <div className="relative container px-4 mx-auto">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full md:w-3/5 px-4 mb-16 md:mb-0">
                            <h2 className="mb-10 text-3xl md:text-4xl font-semibold font-heading">Get your Best Image browsing
                                app for free</h2>
                            <div className="max-w-xl">
                                <p className="mb-10 text-xl text-gray-500">Wallinice is a mobile app that provides with
                                    you the best, exclusive high quality images for your designs, flyers,
                                    wallpapers, for free.</p>
                            </div>
                            <div className="flex justify-start items-center">
                                <a className="mr-4" href={appStoreLink} target="_blank">
                                    <Image layout='raw' src={AppStoreLogo} alt=""/>
                                </a>
                                <a href={playStoreLink} target="_blank">
                                    <Image layout='raw' src={GooglePlayLogo} alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-2/5 px-4 translateY">
                            <Image layout='raw' className="h-96 object-contain lg:h-auto mx-auto" src={Screenshot1}
                                   alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section id='about' className="relative pb-20 lg:py-20">
                <Image layout='raw' className="lg:absolute lg:top-0 lg:left-0 h-full
                     w-full lg:w-5/12 mb-12 lg:mb-0 object-cover" src={SurprisedMan} alt=""/>
                <div className="container px-4 mx-auto">
                    <div className="w-full lg:w-7/12 lg:ml-auto">
                        <Image layout='raw' className="hidden lg:block lg:absolute ml-auto top-0 right-0 lg:mt-64"
                               src={YellowDotRightShield} alt=""/>
                        <div className="max-w-md lg:mx-auto">
                            <h2 className="mb-10 lg:mb-16 text-3xl md:text-4xl font-semibold font-heading">Top-notch Features</h2>
                            <div className="flex items-start mb-10">
                                <div className="mt-2 mr-4">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                                              fill="#45C1FF"/>
                                    </svg>
                                </div>
                                <div className="max-w-sm">
                                    <h3 className="mb-6 text-2xl font-semibold font-heading">Exclusive images</h3>
                                    <p className="text-xl text-gray-500">Browse, share, thousands of high quality in a
                                        simple and intuitive user interface</p>
                                </div>
                            </div>
                            <div className="flex items-start mb-10">
                                <div className="mt-2 mr-4">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                                              fill="#45C1FF"/>
                                    </svg>
                                </div>
                                <div className="max-w-sm">
                                    <h3 className="mb-6 text-2xl font-semibold font-heading">Search engine</h3>
                                    <p className="text-xl text-gray-500">Search among our numerous images and save your
                                        favorite ones </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="mt-2 mr-4">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                                              fill="#45C1FF"/>
                                    </svg>
                                </div>
                                <div className="max-w-sm">
                                    <h3 className="mb-6 text-2xl font-semibold font-heading">Free images for you</h3>
                                    <p className="text-xl text-gray-500">Download for free beautiful pics, apply as
                                        wallpapers,... </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-20">
                <div className="relative container px-4 mx-auto">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full md:w-2/5 px-4 mb-16 md:mb-0 translateY">
                            <Image layout='raw' className="h-96 lg:h-350 mx-auto object-contain" src={Screenshot2}
                                   alt=""/>
                        </div>
                        <div className="w-full md:w-3/5 px-4">
                            <div className="max-w-max ml-auto">
                                <h2 className="mb-10 text-3xl md:text-4xl font-semibold font-heading">Wallinice</h2>
                                <div className="max-w-xl mb-5 md:mb-10">
                                    <p className="text-xl text-gray-500">Awesome high quality images directly in your
                                        phone for free</p>
                                </div>
                                <div className="flex justify-start items-center">
                                    <a className="mr-4" href={appStoreLink} target="_blank">
                                        <Image layout='raw' src={AppStoreLogo} alt=""/>
                                    </a>
                                    <a href={playStoreLink} target="_blank">
                                        <Image layout='raw' src={GooglePlayLogo} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Image className="hidden md:block absolute bottom-0 right-0"
                       layout='raw' src={YellowDotRight} alt=""/>
            </section>
        </>
    );
}