'use client'

import Slider from 'react-slick'
import SlideShow from './SlideShow'

export default function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    speed: 5000,
    autoplaySpeed: 1000,
  }

  const slideData = [
    {
      id: 0,
      img: '/slide/1.jpeg',
      title: 'Cool Fashion',
      description:
        'Fashion is defined in a number of different ways, and its application can be sometimes unclear.',
      button: 'LEARN MORE ABOUT US',
    },
    {
      id: 1,
      img: '/slide/2.jpeg',
      title: 'New Design',
      description:
        'Fashion is defined in a number of different ways, and its application can be sometimes unclear.',
      button: 'EXPLORE PRODUCTS',
    },
    {
      id: 2,
      img: '/slide/3.jpeg',
      title: 'Talk to Us',
      description:
        'Fashion is defined in a number of different ways, and its application can be sometimes unclear.',
      button: 'WORK WITH US',
    },
  ]

  return (
    <div>
      <Slider {...settings}>
        {slideData.map((item) => (
          <SlideShow
            key={item.id}
            image={item.img}
            title={item.title}
            description={item.description}
            button={item.button}
          />
        ))}
      </Slider>
    </div>
  )
}
