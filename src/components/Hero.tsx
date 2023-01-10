import avatar from "../assets/avatar1.png";

const Hero = () => {
  const newLocal = false;
  return (
    <div className="flex w-1/2 justify-center items-center mt-16 animate-fade-in">
      <div className="bg-[url('/bg_Dark3.png')] bg-cover  max-w-xs rounded-full border-[#FEFBE8] border-2">
        <img
          draggable={newLocal}
          className="object-cover filter grayscale brightness-125"
          src={avatar}
          alt="profile-image"
        />
      </div>
    </div>
  );
};

export default Hero;
