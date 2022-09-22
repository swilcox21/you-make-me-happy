import "../App.css";
// import "../images/sghtoons/christine.png";
import { useEffect, useState } from "react";

function SuperHornyGirl() {
  const [background, setBackground] = useState(0);
  const [scroll, setScroll] = useState(window.pageYOffset);
  // const [touchStart, setTouchStart] = useState(0);
  // const [touchEnd, setTouchEnd] = useState(0);
  const [capFixed, setCapFixed] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      window.scrollY < 200 && setBackground(0);
      (window.scrollY <= 1200) & (window.scrollY >= 200) && setBackground(1);
      window.scrollY >= 1200 && setBackground(2);
      // window.scrollY < 1000 && setCapFixed(0);
      // window.scrollY >= 1000 && setCapFixed(1);
      // window.scrollY >= 1600 && setCapFixed(2);
      setScroll(window.scrollY);
      console.log(window.scrollY);
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
            ? "super-horny-girl-bgImage2"
            : background === 2
            ? "super-horny-girl-bgImage3"
            : "super-horny-girl-bgImage1"
        }
      ></div>
      <div
        onScroll={() => console.log(window.scrollY)}
        className="super-horny-girl-container"
      >
        {/* COVER PAGE */}
        <h1 className="sghHeader">
          The Adventures of Super Horny Girl and Bonor Boy
        </h1>
        <div className="familyFlexbox">
          <img
            className="coverSghpic"
            src="https://github.com/swilcox21/thought.org.vercel.dev/blob/main/public/zozo.png?raw=true"
            alt=""
          />
          <img
            className="coverHPPpic"
            src="https://github.com/swilcox21/thought.org.vercel.dev/blob/main/public/zozo.png?raw=true"
            alt=""
          />
          <img
            className="coverZozopic"
            src="https://github.com/swilcox21/thought.org.vercel.dev/blob/main/public/zozo.png?raw=true"
            alt=""
          />
          <img
            className="coverBonorBoypic"
            src="https://github.com/swilcox21/thought.org.vercel.dev/blob/main/public/zozo.png?raw=true"
            alt=""
          />
        </div>
        <div className="caption">
          this is my first caption for the super horny girl and bonor boy
          scrolly book series
        </div>
        <div className="caption">
          this is my second caption for the second scene
        </div>
        <div className="caption">
          this is my third caption i need to figure out what background will be
          used for act 3!
        </div>
      </div>
    </>
  );
}

export default SuperHornyGirl;
