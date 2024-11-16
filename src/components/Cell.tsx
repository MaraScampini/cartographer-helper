interface CellProps {
    available: boolean,
    backgroundColor: string,
    x: number,
    y: number
}

const Cell = (props: CellProps) => {
  return (
    <div className={`bg-${props.backgroundColor} w-20 h-20 flex justify-center`}>{props.x} / {props.y}</div>
  )
}

export default Cell