import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import YouTube from 'react-youtube';
import './embla2.css';

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
                            <div
                                className="embla__slide__inner"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                }}
                            >
                                {slide.type === 'text' && (
                                    <div className="embla__slide__text">
                                        <h4>{slide.content.h4}</h4>
                                        <h2>{slide.content.h2}</h2>
                                        <p>{slide.content.p}</p>
                                    </div>
                                )}
                                {/* Handle other types like image, video, youtube if needed */}
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
        </section >
    );
};

export default EmblaCarousel;