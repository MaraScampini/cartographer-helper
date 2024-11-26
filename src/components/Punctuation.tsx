import { useState } from "react"

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
    <div className="flex gap-x-5">
      <div className="grid grid-cols-2">
        <div className="p-2">
          <input
            className="max-w-10 bg-transparent"
            name="round1a"
            type="number"
            value={punctuation.round1a}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2">
          <input
            className="max-w-10 bg-transparent"
            name="round1b"
            type="number"
            value={punctuation.round1b}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2">
          <input
            className="max-w-10 bg-transparent"
            name="round1coin"
            type="number"
            value={punctuation.round1coin}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="p-2">
          <input
            className="max-w-10 bg-transparent"
            name="round1monster"
            type="number"
            value={punctuation.round1monster}
            onChange={(e) => handleInput(e)}
          />
        </div>
      </div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
    </div>
  )
}

export default Punctuation