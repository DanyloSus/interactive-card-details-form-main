import useCardState from "../store";

const Cards = () => {
  const { name, cardNum, mm, yy, cvc } = useCardState((s) => s);

  return (
    <div
      id="cards"
      className="absolute w-[542px] flex flex-col gap-9 top-cardPos left-[0px] xl:left-[8.7805%] h-[528px] lg:w-[342px] lg:left-4 lg:top-8 lg:h-[258px] overflow-x-hidden"
    >
      <div className="lg:bottom-0 z-10 card-left">
        <img src="./bg-card-front.png" alt="bg card front" id="card" />
        <img
          src="./card-logo.svg"
          alt="card-logo.svg"
          className="relative h-12 w-[84px] -top-[218px] left-8 z-20 lg:w-[54px] lg:h-[30px] lg:-top-[138px] lg:left-5"
        />
        <h1 className="relative -top-[146px] text-white left-8 text-3xl tracking-widest lg:text-lg  lg:left-5 lg:-top-[106px]">
          {cardNum ? cardNum : "0000 0000 0000 0000"}
        </h1>
        <p className="relative -top-[124px] text-white left-8 tracking-widest uppercase lg:left-5 lg:-top-[80px] lg:text-[8px]">
          {name ? name : "Jane Appleseed"}
        </p>
        <p className="relative -top-[144px] text-white left-[364px] tracking-widest lg:left-[240px] lg:-top-[100px] lg:text-[8px]">
          {mm ? mm : "09"}/{yy ? yy : "01"}
        </p>
      </div>
      <div className="bottom-0 right-0 lg:top-0 card-right">
        <img
          src="./bg-card-back.png"
          alt="bg card back"
          id="card"
          className=""
        />
        <p className="relative -top-[134px] text-white left-[358px] tracking-widest lg:-top-[90px] lg:left-[220px]">
          {cvc ? cvc : "000"}
        </p>
      </div>
    </div>
  );
};

export default Cards;
