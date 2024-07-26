'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import YouTube from 'react-youtube';
import './embla.css';

const EmblaCarousel = ({ slides, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div
                            className={`embla__slide ${slide.type === 'youtube' ? 'embla__slide--video' : ''}`}
                            key={index}
                        >
                            <div className="embla__slide__inner">
                                {slide.type === 'image' && (
                                    <img src={slide.src} alt={`Slide ${index + 1}`} className="embla__slide__img" />
                                )}
                                {slide.type === 'video' && (
                                    <video controls className="embla__slide__video">
                                        <source src={slide.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                                {slide.type === 'text' && (
                                    <div className="embla__slide__text">{slide.content}</div>
                                )}
                                {slide.type === 'youtube' && (
                                    <YouTube
                                        videoId={slide.videoId}
                                        opts={{
                                            width: "100%",
                                            height: "100%",
                                            playerVars: {
                                                autoplay: 0,
                                                modestbranding: 1,
                                                rel: 0,
                                            },
                                        }}
                                        className="embla__slide__youtube"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmblaCarousel;