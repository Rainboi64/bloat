import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

const cards = [
  <div className="bg-[#00acba] w-full h-full rounded-[10px] flex justify-evenly items-center flex-col p-4">
    <img
      alt="rozana logo"
      width={150}
      height={150}
      className="max-h-[150px]"
      src="https://www.rozana.fm/assets/website/logos/logo-white-0d8ef6802d894fd0cf65a55d7ecee2f4d368ab6f2896e78c3221b026f7c96fd5.png"
    />
    <p className="droid-arabic-kufi text-white">
      بيحلم يمان بتطوير المناهج حتى تتحول من طريقة العرض المباشر للمعلومة، إلى
      التعلم الفعّال وإدخال التكنولوجيا للمناهج التعليمية، يمان قرر يدرس
      معلوماتية ليقدر يحقق حلمه، سمعوا قصته ضمن فقرة "كيبورد صغير" لليوم، إضافة
      لنصائح للأطفال عن الألعاب والتكنولوجيا.
    </p>
  </div>,
  <div className="bg-[#d71d24] w-full h-full rounded-[10px] flex justify-evenly items-center flex-col p-4">
    <img
      alt="rozana logo"
      width={150}
      height={150}
      className="max-h-[150px]"
      src="https://s2.gazetevatan.com/images/vatan/vatan-logo-home3x.svg?v=3"
    />
    <p className="text-white">
      'Yaman' will be a scientist. prof. Dr. Mehmet Toner came to Turkey from
      the USA for the summit last year and this year. Meeting with young people,
      Toner was particularly impressed by 12-year-old Syrian Yaman Alhalabi this
      year.
    </p>
  </div>,
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      api.start((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="deck" key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
            }}
          >
            {cards[i]}
          </animated.div>
        </animated.div>
      ))}
    </>
  );
}

export default function App() {
  return (
    <div
      className="flex justify-center items-center margin-auto"
      id="featuredOn"
    >
      <h1>more soon?!</h1>
      <Deck />
    </div>
  );
}
