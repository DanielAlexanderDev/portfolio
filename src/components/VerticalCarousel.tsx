const VerticalCarousel = () => {
  return (
    <div className="md:min-w-[350px] animate-fade-in md:w-1/3 md:h-[500px] max-h-[500px] h-auto min-w-[350px] w-2/3 md:relative border-2  md:flex md:items-center rounded-md md:justify-center py-2 md:px-4 mb-5 md:mb-0">
      <div className="md:min-w-[350px]  md:h-full h-full  md:max-h-96 md:overflow-y-hidden scrollbar-hide scroll-smooth  md:grid flex  overflow-x-hidden md:px-3  ">
        <div className="w-full"></div>
        <img
          className={`md:animate-vertical-scroll animate-horizontal-scroll`}
          src={"/mern-app.png"}
          alt="asdq"
        />
        <img
          className={` md:pt-5 md:animate-vertical-scroll animate-horizontal-scroll`}
          src={"/weather.png"}
          alt="sdq"
        />
        <img
          className={` md:pt-5 md:animate-vertical-scroll animate-horizontal-scroll`}
          src={"/ecommerce.png"}
          alt="dqds"
        />
        <img
          className={` md:pt-5 md:animate-vertical-scroll animate-horizontal-scroll`}
          src={"/tic-tac-toe.png"}
          alt="dqd"
        />
      </div>
    </div>
  );
};
export default VerticalCarousel;
