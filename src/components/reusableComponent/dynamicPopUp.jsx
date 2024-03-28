import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
export function DynamicPopUp({ children, show, setShow }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-transparent w-[90vw] md:w-[95vw] h-[80vh] md:min-h-fit md:h-[90vh] min-h-[300px] relative">
        <div
          // key={key}
          className="rounded-xl bg-white z-50 shadow-sm p-9 hover:shadow-lg transition duration-300 w-[100%] h-[98%] flex flex-col md:overflow-y-auto overflow-y-auto"
        >
          {children}
        </div>
        <div
          className="absolute top-[-30px] md:right-[-20px] right-0 cursor-pointer"
          onClick={() => {
            setShow && setShow(false);
          }}
        >
          {/* <AiOutlineClose size="2rem" color="black" /> */}
        </div>
      </div>
    </div>
  );
}
