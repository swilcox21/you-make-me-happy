import "../App.css";
import { useEffect, useState } from "react";

function SuperHornyGirl() {
  const [background, setBackground] = useState(1);
  const [scroll, setScroll] = useState(window.pageYOffset);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      window.scrollY >= 500 ? setBackground(2) : setBackground(1);
      setScroll(window.scrollY);
    };
    function handleTouchStart(e) {
      setTouchStart(e.targetTouches[0].clientX);
    }
    function handleTouchMove(e) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
    function handleTouchEnd() {
      if (touchStart - touchEnd > 75) {
        // do your stuff here for left swipe
        setBackground(1);
      }
      if (touchStart - touchEnd < -75) {
        // do your stuff here for right swipe
        setBackground(2);
        console.log("left");
      }
    }
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);
  return (
    <>
      <div
        className={
          background === 1
            ? "super-horny-girl-bgImage1"
            : "super-horny-girl-bgImage2"
        }
      ></div>
      <div
        onScroll={() => console.log(window.scrollY)}
        className="super-horny-girl-container"
      >
        <h1>The Adventures of Super Horny Girl and Bonor Boy</h1>
        <div className="caption">
          this is my first caption for the super horny girl and bonor boy
          scrolly book series
        </div>
        <div className="caption">
          this is my first caption for the super horny girl and bonor boy
          scrolly book series
        </div>
        <div className="caption">
          this is my first caption for the super horny girl and bonor boy
          scrolly book series
        </div>
      </div>
    </>
  );
}

export default SuperHornyGirl;
