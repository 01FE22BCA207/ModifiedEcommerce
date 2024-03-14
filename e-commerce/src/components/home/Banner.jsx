
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { styled } from '@mui/material';

import { bannerData } from '../../Constants/data'

const Image = styled('img')({
    width : '100%',
    height : 280
})

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () => {
    return(
        <Carousel responsive = {responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        swipeable={false}
        draggable={false}
        autoPlay={true}
        keyBoardControl={true}
        slidesToSlide={1}
        showDots={true}
        infinite={true}
        autoPlaySpeed={2000}
        
        >
            {
                bannerData.map(data => (
                    <Image src = {data.url} alt = "Banner" />
                
                    )
                )
            }

        </Carousel>
    )
}

export default Banner;

