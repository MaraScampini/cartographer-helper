import { useEffect, useState } from "react"

type SelectedIndexes = {
  [key: number]: boolean;
}
const Coins = () => {
  const [selectedIndexes, setSelectedIndexes] = useState<SelectedIndexes>(() => {
    const storedItems = sessionStorage.getItem('selectedItems');
    return storedItems ? JSON.parse(storedItems) : {};
  });
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

  useEffect(() => {
    sessionStorage.setItem('selectedItems', JSON.stringify(selectedIndexes));
  }, [selectedIndexes])

  return (
    <div className="mt-5 flex justify-center items-center space-x-2 p-3 bg-ruin rounded-lg">
      {[...Array(14)].map((_, index) => (
        <div onClick={() => handleClick(index)} onTouchStart={() => handleClick(index)} key={index}
          className={`w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center shadow-md hover:cursor-pointer ${selectedIndexes[index] ? 'shadow-selected-coin' : ''
            }`}
        >
        </div>
      ))}
    </div>
  )
}

export default Coins