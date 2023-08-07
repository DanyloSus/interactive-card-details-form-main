const Thanks = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center mr-10">
      <div className="flex flex-col gap-3 items-center min-w-[380px] ml-10">
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
