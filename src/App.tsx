import classNames from "classnames";
import { useState } from "react";
import { useSpring } from "react-spring";
import styled from "styled-components";
import "./styles.css";

const Page = styled.div<PageProps>`
  position: absolute;
  width: 100vw;
  height: 30vh;

  transition: transform 450ms ease-in-out, filter 250ms ease-in-out;

  > div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${(props) =>
      props.angle < 0
        ? "clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);"
        : "clip-path: polygon(0% 0, 50% 0, 50% 100%, 0% 100%);"}
  }
`;

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 600px;
  background: #ccc;

  @keyframes heart-beat {
    10% {
      transform: scale(1);
    }
    15% {
      transform: scale(1.05);
    }
    20% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    color: white;
  }

  svg {
    fill: red;
  }

  & ${Page}:first-child {
    transform: rotateY(85deg);
  }

  & ${Page}:last-child {
    transform: rotateY(-85deg);
  }

  &.hovered {
    animation: heart-beat 2.4s infinite;
  }

  &.hovered ${Page}:first-child {
    transform: rotateY(20deg);
    filter: drop-shadow(0 5px 8px #00000022);
  }

  &.hovered ${Page}:last-child {
    transform: rotateY(-20deg);
    filter: drop-shadow(0 5px 8px #00000022);
  }
`;

interface PageProps {
  angle: number;
}

export default function App() {
  const [hovered, setHovered] = useState(false);
  return (
    <Body
      className={classNames({
        hovered,
        App: true
      })}
    >
      <Page angle={10} onMouseDown={() => setHovered((state) => !state)}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 342 315"
            fill="white"
            style={{
              position: "absolute",
              left: 1,
              top: 0,
              height: "100%",
              width: "100%",
              zIndex: -1
            }}
          >
            <defs>
              <path id="a" d="M0 0h200a100 100 90 010 200L0 0z" />
            </defs>
            <use transform="rotate(225 150 121)" xlinkHref="#a" />
          </svg>
          <h1>V + N</h1>
          <h2>=</h2>
          <img
            src="https://i.ibb.co/3fyZjpq/kisspng-infinity-symbol-heart-tattoo-clip-art-infinity-arrow-tattoo-transparent-amp-png-clipar-5cc26.png"
            height={32}
            style={{ filter: "invert()" }}
          />
        </div>
      </Page>
      <Page angle={-10} onMouseDown={() => setHovered((state) => !state)}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 342 315"
            fill="white"
            style={{
              position: "absolute",
              transform: "rotateY(180deg)",
              left: "-1px",
              top: 0,
              height: "100%",
              width: "100%",
              zIndex: -1
            }}
          >
            <defs>
              <path id="a" d="M0 0h200a100 100 90 010 200L0 0z" />
            </defs>
            <use transform="rotate(225 150 121)" xlinkHref="#a" />
          </svg>
          <h1>V + N</h1>
          <h2>=</h2>
          <img
            src="https://i.ibb.co/3fyZjpq/kisspng-infinity-symbol-heart-tattoo-clip-art-infinity-arrow-tattoo-transparent-amp-png-clipar-5cc26.png"
            height={32}
            style={{ filter: "invert()" }}
          />
        </div>
      </Page>
    </Body>
  );
}
