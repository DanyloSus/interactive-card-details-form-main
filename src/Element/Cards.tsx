import useCardState from "../store";

const Cards = () => {
  const { name, cardNum, mm, yy, cvc } = useCardState((s) => s);

  return (
    <div
      id="cards"
      className="absolute w-[542px] flex flex-col gap-9 top-cardPos left-[0px] xl:left-[8.7805%] h-[528px]"
    >
      <div>
        <img src="./bg-card-front.png" alt="bg card front" id="card" />
        <img
          src="./card-logo.svg"
          alt="card-logo.svg"
          className="relative h-12 w-[84px] -top-[218px] left-8 z-20"
        />
        <h1 className="relative -top-[146px] text-white left-8 text-3xl tracking-widest">
          {cardNum ? cardNum : "0000 0000 0000 0000"}
        </h1>
        <p className="relative -top-[124px] text-white left-8 tracking-widest uppercase ">
          {name ? name : "Jane Appleseed"}
        </p>
        <p className="relative -top-[144px] text-white left-[364px] tracking-widest">
          {mm ? mm : "09"}/{yy ? yy : "01"}
        </p>
      </div>
      <div className="bottom-0 right-0">
        <img src="./bg-card-back.png" alt="bg card back" id="card" />
        <p className="relative -top-[134px] text-white left-[358px] tracking-widest">
          {cvc ? cvc : "000"}
        </p>
      </div>
    </div>
  );
};

export default Cards;
