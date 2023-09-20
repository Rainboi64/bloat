/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function WelcomeSegment() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div className="w-screen h-screen" style={{ background: "#253237" }}>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <img src={url("earth")} style={{ width: "60%" }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            display: "flex",
          }}
        >
          <img
            src={"https://hypatia.tech/imgs/Frame_1.png"}
            style={{
              width: "20%",
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "10%",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
          className="w-screen"
        >
          <img
            src={"https://flaccidpancake.dev/assets/no-text.png"}
            style={{
              width: "30%",
              marginTop: "auto",
              marginBottom: "auto",
              marginRight: "10%",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="flex flex-col">
            <h1 className="text-2xl text-opacity-80 text-cyan-400">
              {"visitor->Welcome();"}
            </h1>
            <h2 id="typewritter" className="text-lg text-cyan-700">
              Compiled with zero errors....
            </h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 30,
          }}
        >
          <img src={url("bash")} style={{ width: "30%" }} />
          <div className="w-[30%] bg-black rounded-xl text-cyan-300 p-4">
            <h3>a little bit about Yaman!</h3>
            <p>
              I am Fascinated by the Magic of the Universe! Math, Computers,
              Space, and People.
            </p>
            <p>
              I am actively looking for projects to colaborate on. Intrested in
              Linux, Rust, C#, C/C++, TypeScript, Nim, and computer graphics.
            </p>
            <p>I enjoy going to the gym/combat sports, I also like fashion!</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1>I've been at</h1>
          <img
            src={
              "https://www.geniustags.com/wp-content/uploads/2019/11/logo-2.png"
            }
            style={{ width: "40%" }}
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
