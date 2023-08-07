import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CardState {
  name: string | null;
  cardNum: string | null;
  mm: string | null;
  yy: string | null;
  cvc: string | null;
  nameCh: (e: any) => void;
  cardNumCh: (e: any) => void;
  mmCh: (e: any) => void;
  yyCh: (e: any) => void;
  cvcCh: (e: any) => void;
  reset: (e: any) => void;

  check: (e: any) => void;

  scene: number;
}

const useCardState = create<CardState>()(
  devtools((set, get) => ({
    name: null,
    cardNum: null,
    mm: null,
    yy: null,
    cvc: null,
    scene: 1,
    nameCh: (e) => {
      set(() => ({ name: e.target.value }));
    },
    reset: (e) => {
      const pressedKey = e.keyCode;
      if (pressedKey === 8) {
        set(() => ({ cardNum: "" }));
      }
    },
    cardNumCh: (e) => {
      const cardNum = get().cardNum;

      set(() => ({ cardNum: e.target.value }));
      if (
        cardNum?.length === 4 ||
        cardNum?.length === 9 ||
        cardNum?.length === 14
      ) {
        set(() => ({ cardNum: cardNum + " " }));
      }
    },
    mmCh: (e) => {
      set(() => ({ mm: e.target.value }));
    },
    yyCh: (e) => {
      set(() => ({ yy: e.target.value }));
    },
    cvcCh: (e) => {
      set(() => ({ cvc: e.target.value }));
    },

    check: (e) => {
      e.preventDefault();

      const name = get().name;
      const mm = get().mm;
      const yy = get().yy;
      const cvc = get().cvc;
      let cardNum = get().cardNum;
      cardNum = cardNum ? cardNum.toString() : "";

      if (!name) {
        document
          .getElementById("name")
          ?.children[2].classList.remove("opacity-0");
      } else {
        document.getElementById("name")?.children[2].classList.add("opacity-0");
      }

      if (!/[0-9\s]{13,19}/.test(cardNum)) {
        document
          .getElementById("cardNum")
          ?.children[2].classList.remove("opacity-0");
      } else {
        document
          .getElementById("cardNum")
          ?.children[2].classList.add("opacity-0");
      }

      if (!mm || mm.length <= 1 || mm.length > 2 || !/^\d{2}$/.test(mm)) {
        document
          .getElementById("mm/yy")
          ?.children[1].children[1].classList.remove("opacity-0");
      } else {
        document
          .getElementById("mm/yy")
          ?.children[1].children[1].classList.add("opacity-0");
      }

      if (!yy || yy.length <= 1 || yy.length > 2 || !/^\d{2}$/.test(yy)) {
        document
          .getElementById("mm/yy")
          ?.children[1].children[3].classList.remove("opacity-0");
      } else {
        document
          .getElementById("mm/yy")
          ?.children[1].children[3].classList.add("opacity-0");
      }

      if (!cvc || cvc.length <= 2 || cvc.length > 3 || !/^\d{3}$/.test(cvc)) {
        document
          .getElementById("cvc")
          ?.children[2].classList.remove("opacity-0");
      } else {
        document.getElementById("cvc")?.children[2].classList.add("opacity-0");
      }

      if (document.querySelectorAll("span.opacity-0").length === 5) {
        set(() => ({ scene: 2 }));
      }
    },
  }))
);

export default useCardState;
