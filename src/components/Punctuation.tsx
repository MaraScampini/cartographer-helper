import { useEffect, useState } from "react"
import MonsterSvg from "../assets/MonsterSvg";

type RoundKey = 'round1' | 'round2' | 'round3' | 'round4';

interface Round {
  quest1?: number,
  quest2?: number,
  coin?: number,
  monster?: number,
}

interface Punctuation {
  round1: Round,
  round2: Round,
  round3: Round,
  round4: Round
}

interface Totals {
  round1?: number,
  round2?: number,
  round3?: number,
  round4?: number
}

const Punctuation = () => {
  const [punctuation, setPunctuation] = useState<Punctuation>({
    round1: {},
    round2: {},
    round3: {},
    round4: {}
  });
  const [totals, setTotals] = useState<Totals>({});
  const rounds: RoundKey[] = ["round1", "round2", "round3", "round4"];
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, round: RoundKey) => {
    const { name, value } = e.target;
    setPunctuation(prevState => ({
      ...prevState,
      [round]: {
        ...prevState[round],
        [name]: parseInt(value)
      }
    }))
  }

  const calculateTotal = (round: Round): number => {
    return (
      (isNaN(Number(round.quest1)) ? 0 : Number(round.quest1)) +
      (isNaN(Number(round.quest2)) ? 0 : Number(round.quest2)) +
      (isNaN(Number(round.coin)) ? 0 : Number(round.coin)) -
      (isNaN(Number(round.monster)) ? 0 : Number(round.monster))
    );
  };

  useEffect(() => {
    const newTotals: Totals = {};
  
    rounds.forEach((round) => {
      const currentRound = punctuation[round];
      if (Object.keys(currentRound).length === 4) {
        newTotals[round] = calculateTotal(currentRound);
      }
    });
  
    setTotals(newTotals);
  }, [punctuation]);

  const renderPunctuation = (round: RoundKey, index: number) =>
  (<div className="flex flex-col gap-y-2" key={index}>
    <div className="grid grid-cols-2">
      <div className="p-2 gap-x-2 flex">
        <div className="font-klee text-center min-w-8 font-semibold">{round === "round1" ? "a" : round === "round2" ? "b" : round === "round3" ? "c" : round === "round4" ? "d" : ""}</div>
        <input
          className="max-w-10 bg-transparent border border-black rounded-md text-center"
          name="quest1"
          type="number"
          pattern="[0-9]*"
          value={punctuation[round].quest1}
          onChange={(e) => handleInput(e, round)}
        />
      </div>
      <div className="p-2 gap-x-2 flex">
        <div className="font-klee text-center min-w-8 font-semibold">{round === "round1" ? "b" : round === "round2" ? "c" : round === "round3" ? "d" : round === "round4" ? "a" : ""}</div>
        <input
          className="max-w-10 bg-transparent border border-black rounded-md text-center"
          name="quest2"
          type="number"
          pattern="[0-9]*"
          value={punctuation[round].quest2}
          onChange={(e) => handleInput(e, round)}
        />
      </div>
      <div className="p-2 gap-x-2 flex">
        <div className="min-w-8">
          <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center shadow-md"></div>
        </div>
        <input
          className="max-w-10 bg-transparent border border-black rounded-md text-center"
          name="coin"
          type="number"
          pattern="[0-9]*"
          value={punctuation[round].coin}
          onChange={(e) => handleInput(e, round)}
        />
      </div>
      <div className="p-2 gap-x-2 flex">
        <div className="min-w-8">
          <MonsterSvg />
        </div>
        <input
          className="max-w-10 bg-transparent border border-black rounded-md text-center"
          name="monster"
          type="number"
          pattern="[0-9]*"
          value={punctuation[round].monster}
          onChange={(e) => handleInput(e, round)}
        />
      </div>
    </div>
    <div className="font-klee text-center">{round === "round1" ? "summer" : round === "round2" ? "spring" : round === "round3" ? "fall" : round === "round4" ? "winter" : ""} total : {totals[round]}</div>
  </div>
  )


  return (
    <div className="flex gap-x-3 py-2">
      {rounds.map((item, index) => renderPunctuation(item, index))}
    </div>
  )
}

export default Punctuation