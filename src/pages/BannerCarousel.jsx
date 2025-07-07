import Slider from "react-slick";

const bannerImages = [
    "/assets/slide_watch.webp",
    "/assets/slide_earbuds.webp",
    "/assets/slide_headphone.webp",
    "/assets/slide_discount.jpg",
    "/assets/slide_watch1.webp",
    "/assets/slide_watch2.jpg",
];

const BannerCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="banner-slider">
            <Slider {...settings}>
                {bannerImages.map((img, index) => (
                    <div key={index} className="slide">
                        <img src={img} alt={`banner-${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BannerCarousel;
