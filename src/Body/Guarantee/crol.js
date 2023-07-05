import React, { useEffect, useRef } from 'react';

const InfiniteSlider = ({ images }) => {
    const sliderContainerRef = useRef(null);
    const scrollStep = 1; // Шаг прокрутки в пикселях

    useEffect(() => {
        const sliderContainer = sliderContainerRef.current;
        let scrollAmount = 0;
        let animationFrameId;

        const animateScroll = () => {
            sliderContainer.scrollLeft += scrollStep;
            scrollAmount += scrollStep;

            if (scrollAmount >= sliderContainer.scrollWidth / 2) {
                // Если достигнута середина слайдера, вернуться в начало
                sliderContainer.scrollLeft = 0;
                scrollAmount = 0;
            }

            animationFrameId = requestAnimationFrame(animateScroll);
        };

        const startScrolling = () => {
            animationFrameId = requestAnimationFrame(animateScroll);
        };

        const stopScrolling = () => {
            cancelAnimationFrame(animationFrameId);
        };

        sliderContainer.addEventListener('mouseenter', stopScrolling);
        sliderContainer.addEventListener('mouseleave', startScrolling);

        startScrolling();

        return () => {
            stopScrolling();
            sliderContainer.removeEventListener('mouseenter', stopScrolling);
            sliderContainer.removeEventListener('mouseleave', startScrolling);
        };
    }, []);

    return (
        <div
            ref={sliderContainerRef}
            style={{
                width: '100%',
                height: 'auto',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                position: 'relative',
            }}
        >
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image} alt="img"
                    style={{
                        display: 'inline-block',
                        height: "auto",
                        width: '20vw',
                        marginLeft: "5vw"
                    }}
                />
            ))}
        </div>
    );
};

export default InfiniteSlider;
