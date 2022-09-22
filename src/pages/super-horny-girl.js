import "../App.css";
// import "../images/sghtoons/christine.png";
import { useEffect, useState } from "react";

function SuperHornyGirl() {
  const [background, setBackground] = useState(0);
  const [scroll, setScroll] = useState(window.pageYOffset);
  // const [touchStart, setTouchStart] = useState(0);
  // const [touchEnd, setTouchEnd] = useState(0);
  // const [capFixed, setCapFixed] = useState(0);
  const [ball, setBall] = useState(0);
  const [act1, setAct1] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      window.scrollY < 1000 && setBackground(0);
      (window.scrollY <= 2000) & (window.scrollY >= 1000) && setBackground(1);
      window.scrollY >= 2000 && setBackground(2);
      window.scrollY >= 3000 && setBackground(3);
      window.scrollY < 50 && setBall(0);
      window.scrollY >= 50 && setBall(1);
      window.scrollY >= 250 && setBall(2);
      window.scrollY >= 500 && setBall(3);
      window.scrollY >= 700 && setBall(4);
      window.scrollY >= 1000 && setBall(5);
      window.scrollY < 1000 && setAct1(0);
      window.scrollY >= 1100 && setAct1(1);
      window.scrollY >= 1250 && setAct1(2);
      window.scrollY >= 1500 && setAct1(3);
      window.scrollY >= 1700 && setAct1(4);
      window.scrollY >= 2000 && setAct1(5);
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
            : background === 3
            ? "super-horny-girl-bgImage4"
            : "super-horny-girl-bgImage1"
        }
      ></div>
      <div
        onScroll={() => console.log(window.scrollY)}
        className="super-horny-girl-container"
      >
        {/* COVER PAGE */}
        <h1 className="sghHeader">The Adventures of SGH and Bonor Boy</h1>
        <div className={background === 0 ? "familyFlexbox" : "hide"}>
          <img
            className="coverSghpic"
            src="https://raw.githubusercontent.com/swilcox21/you-make-me-happy/master/src/images/sghtoons/christine.png?token=GHSAT0AAAAAABWXVHZUXSUYRZ5OPWL6EMQWYZLYCUA"
            alt=""
          />
          <div className={ball === 4 ? "ggMav" : "hide"}>Nice catch MAV!!</div>
          <img
            className={
              ball === 3
                ? "coverHPPpic-catch"
                : ball === 4
                ? "coverHPPpic-catch"
                : "coverHPPpic"
            }
            src="https://raw.githubusercontent.com/swilcox21/you-make-me-happy/master/src/images/sghtoons/mavman.png?token=GHSAT0AAAAAABWXVHZVSLJT6F2SW7QG7FDKYZLYCAQ"
            alt=""
          />
          <img
            className="coverZozopic"
            src="https://github.com/swilcox21/thought.org.vercel.dev/blob/main/public/zozo.png?raw=true"
            alt=""
          />
          <div
            className={
              ball === 1 || ball === 3 || ball === 4 ? "zozoBark" : "hide"
            }
          >
            WOOF! WOOF!
          </div>
          <img
            className="coverBonorBoypic"
            src="https://raw.githubusercontent.com/swilcox21/you-make-me-happy/master/src/images/sghtoons/sam.png?token=GHSAT0AAAAAABWXVHZUVGUAQTAEOZF5FSZ6YZLYBTA"
            alt=""
          />
          <img
            className={
              ball === 1
                ? "coverBall-2"
                : ball === 2
                ? "coverBall-3"
                : ball === 3
                ? "coverBall-4"
                : ball === 4
                ? "coverBall-4"
                : ball === 5
                ? "hide"
                : "coverBall"
            }
            src="https://raw.githubusercontent.com/swilcox21/you-make-me-happy/master/src/images/tennisball.png?token=GHSAT0AAAAAABWXVHZUIEYBBD3VSNYAYZ7KYZLZESQ"
            alt=""
          />
        </div>

        {/* ACT 1 */}

        <div className={background === 1 ? "act1CharBox" : "hide"}>
          <img
            className={
              act1 === 0
                ? "act1Zozopic"
                : act1 === 1
                ? "act1Zozopic-1"
                : act1 === 2
                ? "act1Zozopic-2"
                : act1 === 3
                ? "act1Zozopic-3"
                : act1 === 4
                ? "act1Zozopic-4"
                : act1 === 5
                ? "act1Zozopic-5"
                : "act1Zozopic"
            }
            src="https://github.com/swilcox21/thought.org.vercel.dev/blob/main/public/zozo.png?raw=true"
            alt=""
          />
          <img
            className={
              act1 === 0
                ? "act1BonorBoypic"
                : act1 === 1
                ? "act1BonorBoypic-1"
                : act1 === 2
                ? "act1BonorBoypic-2"
                : act1 === 3
                ? "act1BonorBoypic-3"
                : act1 === 4
                ? "act1BonorBoypic-4"
                : act1 === 5
                ? "act1BonorBoypic-5"
                : "act1BonorBoypic"
            }
            src="https://raw.githubusercontent.com/swilcox21/you-make-me-happy/master/src/images/sghtoons/sam.png?token=GHSAT0AAAAAABWXVHZUVGUAQTAEOZF5FSZ6YZLYBTA"
            alt=""
          />
          <div className="act1ZoeyNo">ZOEY NO!!</div>
          <img
            className={
              act1 === 0
                ? "act1Chickenpic"
                : act1 === 1
                ? "act1Chickenpic-1"
                : act1 === 2
                ? "act1Chickenpic-2"
                : act1 === 3
                ? "act1Chickenpic-3"
                : act1 === 4
                ? "act1Chickenpic-4"
                : act1 === 5
                ? "act1Chickenpic-5"
                : "act1Chickenpic"
            }
            src="https://github.com/swilcox21/you-make-me-happy/blob/master/src/images/sghtoons/chicken.png?raw=true"
            alt=""
          />
        </div>
        <div className="caption1">
          After playing ball with Mr. Mav We then find our heros if a bit of a
          pickle...
        </div>

        <div className="caption">
          this is my second caption for the bar scene where super horny girl and
          boner boy have a very special date
        </div>
        <div className="caption">
          this is my third caption for the sexy bedroom scene where super horny
          girl makes boner boy "do stuff 0.0" while HPP is fooled by his
          cryptonite (the ball)
        </div>
      </div>
    </>
  );
}

export default SuperHornyGirl;
