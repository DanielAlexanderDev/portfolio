import avatar from "../assets/avatar1.png";

const Hero = () => {
  return (
    <div className="flex w-1/2 justify-center items-center my-4 mt-16">
      <div className="bg-[url('src/assets/bg.png')]  dark:bg-[url('src/assets/bg_Dark3.png')] bg-cover  max-w-xs rounded-full border-black   dark:border-[#FEFBE8] border-2">
        <img
          className="object-cover filter dark:grayscale brightness-125  "
          src={avatar}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
