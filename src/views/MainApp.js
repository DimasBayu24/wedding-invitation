import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Page4 from './page4'
import Page5 from './page5'
import Page6 from './page6'
import song from '../assets/song.mp3'
import Player from '../components/play'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SimpleSlider = () => {
    let audio = new Audio("./song.mp3")
    const start = () => {
        audio.play()
    }
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        vertical: true,
        slidesToScroll: 1,
        swipeToSlide: true,
        verticalSwiping: true,

    };
    useEffect(() => {
        start()
    }, [])
    return (
        <>
            <div style={{ position: 'absolute', bottom: 10, left: 10, zIndex: 1 }} >
                <Player url={song} />
            </div>
            <Slider {...settings}>
                <Page1 />
                <Page2 />
                <Page3 />
                <Page4 />
                <Page5 />
                <Page6 />
            </Slider>
        </>
    );
}

export default SimpleSlider;