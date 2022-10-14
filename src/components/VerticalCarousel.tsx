import { useState, useRef } from "react";
import p1 from "../assets/mern-app.png";
import p2 from "../assets/weather.png";

const VerticalCarousel = () => {
  const [img, setImg] = useState(0);
  const container = useRef<HTMLDivElement>(null!);

  return (
    <div className="md:min-w-[350px] md:w-1/3 md:h-[500px] h-auto min-w-[350px] w-2/3 md:relative border-2  md:flex md:items-center rounded-md md:justify-center py-2 md:px-4 mb-5 md:mb-0">
      <div
        ref={container}
        className="md:min-w-[350px] static md:h-full h-full  md:max-h-96 md:overflow-y-hidden scrollbar-hide scroll-smooth  md:grid flex  overflow-x-scroll md:px-3 "
      >
        <img
          className={`${img !== 0 ? "md:opacity-60" : "opacity-100"}`}
          src={p1}
          alt="asdq"
        />
        <img
          className={`${img !== 1 ? "md:opacity-60" : "opacity-100"} md:pt-5`}
          src={p2}
          alt="sdq"
        />
        <img
          className={`${img !== 2 ? "md:opacity-60" : "opacity-100"} md:pt-5`}
          src={p1}
          alt="dqds"
        />
        <img
          className={`${img !== 3 ? "md:opacity-60" : "opacity-100"} md:mb-12`}
          src={p2}
          alt="dqd"
        />
      </div>
      <a
        className="absolute left-[46%] bottom-0 hidden md:block "
        onClick={() => {
          if (img < 4) {
            const next = img + 1;
            console.log(container.current.children);
            container.current.children[next].scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
            setImg(next);
          }
        }}
        href={`#${img}`}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-black/60 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none rotate-90">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </a>

      <a
        className="absolute left-[46%] top-0 hidden md:block "
        onClick={() => {
          if (img > 0) {
            const next = img - 1;
            console.log(container.current.children);
            container.current.children[next].scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
            setImg(next);
          }
        }}
        href={`#${img}`}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-black/60 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none -rotate-90">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </a>
    </div>
  );
};
export default VerticalCarousel;
