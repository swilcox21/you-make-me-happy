import "../App.css";
import { useEffect, useState } from "react";

function SuperHornyGirl() {
  const [background, setBackground] = useState(1);
  const [scroll, setScroll] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = (event) => {
      window.scrollY >= 500 ? setBackground(2) : setBackground(1);
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
