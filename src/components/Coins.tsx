import { useState } from "react"

type SelectedIndexes = {
  [key: number]: boolean;
}
const Coins = () => {
  const [selectedIndexes, setSelectedIndexes] = useState<SelectedIndexes>({});

  const [isClicking, setIsClicking] = useState(false);

  const handleClick = (index: number): void => {
    if (isClicking) return;
    setIsClicking(true);

    setSelectedIndexes((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));

    setTimeout(() => {
      setIsClicking(false);
    }, 300);
  };

  return (
    <div className="mt-5 flex justify-center items-center space-x-2 p-3 bg-ruin rounded-lg">
      {[...Array(14)].map((_, index) => (
        <div onClick={() => handleClick(index)} onTouchEnd={() => handleClick(index)} key={index}
          className={`w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center shadow-md hover:cursor-pointer ${selectedIndexes[index] ? 'shadow-[inset_1px_1px_1px_1px_rgba(0,_0,_0,_0.3)]' : ''
            }`}
        >

        </div>
      ))}
    </div>
  )
}

export default Coins