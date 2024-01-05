/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/button-has-type */
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const index = () => (
    <>
        <Navbar />
        <div className="flex flex-col gap-2 mt-3">
            <div className="custom-card ">
                <img
                    className="w-[400px] h-[35vh]"
                    src="https://plus.unsplash.com/premium_photo-1673349178635-39b654f84401"
                    alt="Album"
                />
                <div className="custom-card-body">
                    <div className="body-title">
                        <div>
                            {' '}
                            <h2 className="custom-card-title">Photography</h2>
                            <p className="desc">
                                Book a black camera for quick and convenient rides across the city.
                            </p>
                        </div>
                        <div />
                    </div>

                    <button className="btn px-4 bg-blue-400 rounded mt-20">View</button>
                </div>
            </div>
            <div className="custom-card ">
                <img
                    className="w-[400px] h-[35vh]"
                    src="https://plus.unsplash.com/premium_photo-1673349178635-39b654f84401"
                    alt="Album"
                />
                <div className="custom-card-body">
                    <div className="body-title">
                        <div>
                            {' '}
                            <h2 className="custom-card-title">Photography</h2>
                            <p className="desc">
                                Book a black camera for quick and convenient rides across the city.
                            </p>
                        </div>
                        <div />
                    </div>

                    <button className="btn px-4 bg-blue-400 rounded mt-20">View</button>
                </div>
            </div>
            <div className="custom-card ">
                <img
                    className="w-[400px] h-[35vh]"
                    src="https://plus.unsplash.com/premium_photo-1673349178635-39b654f84401"
                    alt="Album"
                />
                <div className="custom-card-body">
                    <div className="body-title">
                        <div>
                            {' '}
                            <h2 className="custom-card-title">Photography</h2>
                            <p className="desc">
                                Book a black camera for quick and convenient rides across the city.
                            </p>
                        </div>
                    </div>

                    <button className="btn px-4 bg-blue-400 rounded mt-20">View</button>
                </div>
            </div>
        </div>
        <Footer />
    </>
);

export default index;
