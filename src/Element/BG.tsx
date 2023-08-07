const BG = () => {
  return (
    <div>
      <img
        src="./bg-main-desktop.png"
        alt="bg main desktop"
        className="h-screen object-cover lg:hidden"
      />
      <img
        src="./bg-main-mobile.png"
        alt="bg main mobile"
        className="lg:block hidden w-screen object-cover overflow-x-hidden"
      />
    </div>
  );
};

export default BG;
