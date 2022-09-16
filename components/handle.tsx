import { ReactNode } from "react";

interface HandleProps {
  right?: boolean;
  left?: boolean;
  onClick: () => void;
  children?: ReactNode;
}

export default function Handle({  children, onClick, right, left }: HandleProps) {

  const marginX = right ? 'mr-1': left ? 'ml-1': ''

  return (
    // flex property makes the elements inside the container grow and shrink
    // according to the size of the cotainer, setting each of then to 0
    // prevent this behavior
    <button onClick={onClick} className={`group w-[5.02%] bg-gray-200 my-1 ${marginX} z-10 grow-0 shrink-0 hover:bg-gray-300 transition duration-300 rounded`}>
      {children}
    </button>
  );
}
