import { useState } from "react"
import MonsterSvg from "../assets/MonsterSvg";

interface Punctuation {
  round1a?: number,
  round1b?: number,
  round1coin?: number,
  round1monster?: number,
  round2b?: number,
  round2c?: number,
  round2coin?: number,
  round2monster?: number,
  round3c?: number,
  round3d?: number,
  round3coin?: number,
  round3monster?: number,
  round4d?: number,
  round4a?: number,
  round4coin?: number,
  round4monster?: number
}

const Punctuation = () => {
  const [punctuation, setPunctuation] = useState<Punctuation>({});
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPunctuation(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <div className="flex gap-x-5 py-2">
      {/* ROUND 1 */}
      <div className="grid grid-cols-2">
        <div className="p-2 gap-x-2 flex">
          <div className="font-klee text-center min-w-8 font-semibold text-green-600">a</div>
          <input
            className="max-w-10 bg-transparent border border-black rounded-md text-center"
            name="round1a"
            type="number"
            pattern="[0-9]*"
            value={punctuation.round1a}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2 gap-x-2 flex">
          <div className="font-klee text-center min-w-8 font-semibold text-blue-600">b</div>
          <input
            className="max-w-10 bg-transparent border border-black rounded-md text-center"
            name="round1b"
            type="number"
            pattern="[0-9]*"
            value={punctuation.round1b}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2 gap-x-2 flex">
          <div className="min-w-8">
            <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center shadow-md"></div>
          </div>
          <input
            className="max-w-10 bg-transparent border border-black rounded-md text-center"
            name="round1coin"
            type="number"
            pattern="[0-9]*"
            value={punctuation.round1coin}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2 gap-x-2 flex">
          <div className="min-w-8">
            <MonsterSvg />
          </div>
          <input
            className="max-w-10 bg-transparent border border-black rounded-md text-center"
            name="round1monster"
            type="number"
            pattern="[0-9]*"
            value={punctuation.round1monster}
            onChange={(e) => handleInput(e)}
          />
        </div>
      </div>

      <div className="border-l border-black"></div>

      {/* ROUND 2 */}
      <div className="grid grid-cols-2">
        <div className="p-2 gap-x-2 flex">
          <div className="font-klee text-center min-w-8 font-semibold text-blue-600">b</div>
          <input
            className="max-w-10 bg-transparent border border-black rounded-md text-center"
            name="round2b"
            type="number"
            pattern="[0-9]*"
            value={punctuation.round2b}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2 gap-x-2 flex">
          <div className="font-klee text-center min-w-8 font-semibold text-red-600">c</div>
          <input
            className="max-w-10 bg-transparent border border-black rounded-md text-center"
            name="round2c"
            type="number"
            pattern="[0-9]*"
            value={punctuation.round2c}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2 gap-x-2 flex">
          <div className="min-w-8">
            <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center shadow-md"></div>
          </div>
          <input
            className="max-w-10 bg-transparent border border-black rounded-md text-center"
            name="round2coin"
            type="number"
            pattern="[0-9]*"
            value={punctuation.round2coin}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2 gap-x-2 flex">
          <div className="min-w-8">
            <MonsterSvg />
          </div>
          <input
            className="max-w-10 bg-transparent border border-black rounded-md text-center"
            name="round2monster"
            type="number"
            pattern="[0-9]*"
            value={punctuation.round2monster}
            onChange={(e) => handleInput(e)}
          />
        </div>
      </div>

      <div className="border-l border-black"></div>

      {/* ROUND 3 */}

      <div className="grid grid-cols-2">
        <div className="p-2 gap-x-2 flex">
          <div className="font-klee text-center min-w-8 font-semibold text-red-600">c</div>
          <input
            className="max-w-10 bg-transparent border border-black rounded-md text-center"
            name="round3c"
            type="number"
            pattern="[0-9]*"
            value={punctuation.round3c}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2 gap-x-2 flex">
          <div className="font-klee text-center min-w-8 font-semibold text-gray-600">d</div>
          <input
            className="max-w-10 bg-transparent border border-black rounded-md text-center"
            name="round3d"
            type="number"
            pattern="[0-9]*"
            value={punctuation.round3d}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2 gap-x-2 flex">
          <div className="min-w-8">
            <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center shadow-md"></div>
          </div>
          <input
            className="max-w-10 bg-transparent border border-black rounded-md text-center"
            name="round3coin"
            type="number"
            pattern="[0-9]*"
            value={punctuation.round3coin}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2 gap-x-2 flex">
          <div className="min-w-8">
            <MonsterSvg />
          </div>
          <input
            className="max-w-10 bg-transparent border border-black rounded-md text-center"
            name="round3monster"
            type="number"
            pattern="[0-9]*"
            value={punctuation.round3monster}
            onChange={(e) => handleInput(e)}
          />
        </div>
      </div>

      <div className="border-l border-black"></div>

      {/* ROUND 4 */}

      <div className="grid grid-cols-2">
        <div className="p-2 gap-x-2 flex">
          <div className="font-klee text-center min-w-8 font-semibold text-gray-600">d</div>
          <input
            className="max-w-10 bg-transparent border border-black rounded-md text-center"
            name="round4d"
            type="number"
            pattern="[0-9]*"
            value={punctuation.round4d}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2 gap-x-2 flex">
          <div className="font-klee text-center min-w-8 font-semibold text-green-600">a</div>
          <input
            className="max-w-10 bg-transparent border border-black rounded-md text-center"
            name="round4a"
            type="number"
            pattern="[0-9]*"
            value={punctuation.round4a}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2 gap-x-2 flex">
          <div className="min-w-8">
            <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center shadow-md"></div>
          </div>
          <input
            className="max-w-10 bg-transparent border border-black rounded-md text-center"
            name="round4coin"
            type="number"
            pattern="[0-9]*"
            value={punctuation.round4coin}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2 gap-x-2 flex">
          <div className="min-w-8">
            <MonsterSvg />
          </div>
          <input
            className="max-w-10 bg-transparent border border-black rounded-md text-center"
            name="round4monster"
            type="number"
            pattern="[0-9]*"
            value={punctuation.round4monster}
            onChange={(e) => handleInput(e)}
          />
        </div>
      </div>
    </div>
  )
}

export default Punctuation