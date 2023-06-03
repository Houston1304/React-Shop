import React, { useEffect, useState } from "react";

export const Slideshow = ({
  images = [
    "src/assets/podsumok-wartech-mp-103-pod-1-magazin-m-ak-serii-rezinka-multicam_b56698015ed3c04_800x600.webp.jpg",
    "src/assets/podsumok-wartech-up-109-utilitarnyy-sredniy-vertikalnyy-molniya-multicam-5.jpg",
    "src/assets/razgruzochnyy-zhilet-wartech-tv-110-dlya-broneplastin-lbs-russkaya-tsifra-4.jpg",
  ],
  interval = 5000,
}) => {
  const [thumbnails, setThumnails] = useState([]);
  const [previousSlideStyle, setPreviousSlideStyle] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlideStyle, setNextSlideStyle] = useState({});
  const [currentSlideStyle, setCurrentSlideStyle] = useState({});

  useEffect(() => {
    setThumnails(images);
    setCurrentSlideStyle({
      backgroundImage: "url('" + images[currentSlide] + "')",
    });

    if (currentSlide > 0) {
      setPreviousSlideStyle({
        backgroundImage: "url('" + images[currentSlide - 1] + "')",
      });
    } else {
      setPreviousSlideStyle({
        backgroundImage: "url('" + images[images.length - 1] + "')",
      });
    }

    if (currentSlide === images.length - 1) {
      setNextSlideStyle({
        backgroundImage: "url('" + images[0] + "')",
      });
    } else {
      setNextSlideStyle({
        backgroundImage: "url('" + images[currentSlide + 1] + "')",
      });
    }

    const loop = setInterval(() => {
      if (currentSlide === images.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, interval);
    return () => clearInterval(loop);
  }, [currentSlide, interval]);

  function previous() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(thumbnails.length - 1);
    }
  }

  function next() {
    if (currentSlide === thumbnails.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <div className="slideBox">
      <section className="slideshow">
        <div className="slideshow-controller">
          <span className="previousImage" onClick={previous}></span>
        </div>
        <div className="slide-holder">
          <section className="slide current-slide">
            <div style={currentSlideStyle} className="slide-thumbnail"></div>
          </section>
        </div>

        <div className="slideshow-controller">
          <span className="nextImage" onClick={next}></span>
        </div>
      </section>
    </div>
  );
};
