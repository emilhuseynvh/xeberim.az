import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetAllNewsQuery } from '../redux/oxuaz.api';
import { useNavigate } from 'react-router-dom';

function SimpleSlider() {

    const {data: allNews,  } = useGetAllNewsQuery()

    const navigate = useNavigate()
    

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='w-full lg:w-2/3'>
            <div className="slider-container">
            <Slider {...settings}>
                {allNews?.map((item, i) => i < 9 && (
                    <div onClick={() => navigate(`item/?${item.title}`, { state : {someData: item}})} className='w-full h-full relative cursor-pointer' key={i}><img className='w-full' src={item.img} />
                        <div className='absolute bottom-7 left-7'>
                            <p className='mb-2 py-1 text-white bg-red_ w-32 text-center text-sm font-medium rounded-sm'>{item.updatedAt.slice(0, 10)} - {item.updatedAt.slice(14, 19)}</p>
                            <h3 className='text-white font-bold text-3xl'>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        </div>
    );
}

export default SimpleSlider;