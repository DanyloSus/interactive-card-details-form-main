import useCardState from "../store";

const Main = () => {
  const {
    name,
    cardNum,
    mm,
    yy,
    cvc,
    mmCh,
    yyCh,
    cvcCh,
    nameCh,
    cardNumCh,
    reset,
    check,
  } = useCardState((s) => s);

  return (
    <form
      className="flex h-screen w-full items-center justify-center ml-14 lg:justify-start lg:items-start lg:mt-[94px] lg:px-6 lg:pb-11 lg:h-full lg:w-screen lg:m-0 main-left"
      onSubmit={check}
    >
      <div className="flex flex-col gap-[30px] ml-14 lg:ml-0 lg:gap-[26px]">
        <div id="name">
          <p>CARDHOLDER NAME</p>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            value={name ? name : ""}
            onChange={nameCh}
          />
          <span className="absolute left-0 -bottom-7 text-red opacity-0">
            Error
          </span>
        </div>
        <div id="cardNum">
          <p>CARD NUMBER</p>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardNum ? cardNum : ""}
            onKeyDown={reset}
            onChange={cardNumCh}
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength={19}
          />
          <span className="absolute left-0 -bottom-7 text-red opacity-0">
            Error
          </span>
        </div>
        <div className="flex justify-between">
          <div id="mm/yy">
            <p className=" overflow-visible">EXP. DATE (MM/YY)</p>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="MM"
                value={mm ? mm : ""}
                onChange={mmCh}
                maxLength={2}
                className="mr-2"
              />
              <span className="absolute left-0 -bottom-7 text-red opacity-0">
                Error
              </span>

              <input
                type="text"
                placeholder="YY"
                value={yy ? yy : ""}
                maxLength={2}
                onChange={yyCh}
              />
              <span className="absolute left-[88px] -bottom-7 text-red opacity-0">
                Error
              </span>
            </div>
          </div>
          <div id="cvc" className="lg:ml-3">
            <p>CVC</p>
            <input
              type="text"
              placeholder="e.g. 123"
              className="normal"
              value={cvc ? cvc : ""}
              maxLength={3}
              onChange={cvcCh}
            />
            <span className="absolute left-0 -bottom-7 text-red opacity-0">
              Error
            </span>
          </div>
        </div>
        <input
          type="submit"
          value="Confirm"
          className="bg-very-dark-violet text-white cursor-pointer w-full pb-3 text-xl mt-5 lg:mt-1"
        />
      </div>
    </form>
  );
};

export default Main;
