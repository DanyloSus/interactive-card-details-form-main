const Thanks = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center mr-10 lg:mt-[94px] lg:m-0 lg:px-6 lg:pb-11 overflow-x-hidden overflow-y-auto">
      <div className="flex flex-col gap-3 items-center min-w-[380px] lg:min-w-full lg:max-w-full ml-10 lg:m-0">
        <img src="./icon-complete.svg" alt="icon complete" />
        <h1 className="text-2xl tracking-widest">THANK YOU!</h1>
        <p className="text-dark-grayish-violet">
          We've added your card details
        </p>
        <button
          className="w-full bg-very-dark-violet rounded-lg text-white mt-5 py-3"
          onClick={() => window.location.reload()}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Thanks;
