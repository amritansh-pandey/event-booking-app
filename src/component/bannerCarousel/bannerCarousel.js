import "./bannerCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const BannerCarousel = () => {
    return (
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} >
            <div>
                <img src="https://i.ibb.co/Dk4jdQV/bassb.png" alt="banner1" />
            </div>
            <div>
                <img src="https://i.ibb.co/HXxV9Fy/bieberb.png" alt="banner2" />
            </div>
            <div>
                <img src="https://i.ibb.co/VH44LbG/rude.png" alt="banner3" />
            </div>
            <div>
                <img src="https://i.ibb.co/G9QCKZM/ssf.png" alt="banner4" />
            </div>
        </Carousel>

    )
}
export default BannerCarousel;