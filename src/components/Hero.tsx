const words = [
  "creative",
  "logical",
  "some",
  "some",
  "person",
  "piilsa",
  "pizza",
];

const Hero = () => {
  return (
    <div className="bg-neutral-800 flex w-screen justify-center items-center  ">
      <div className="  text-center">
        <p className=" font-body text-3xl sm:text-7xl font-black text-gray-100 ">
          creative
        </p>
        <p className=" font-body text-3xl sm:text-7xl font-thin text-gray-100">
          logical
        </p>
      </div>
      <div className=" bg-neutral-800 text-center">
        <p className=" font-body text-3xl sm:text-7xl font-thin text-gray-100">
          logical
        </p>
        <p className=" font-body text-3xl sm:text-7xl font-black text-gray-100 ">
          creative
        </p>
      </div>
      <h2 className="font-body text-white font-semibold text-5xl tracking-widest ">
        DANIEL
      </h2>
    </div>
  );
};

export default Hero;
