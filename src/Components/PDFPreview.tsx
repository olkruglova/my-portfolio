import { LockClosedIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function PDFPreview() {
  const [isClosed, setIsClosed] = useState(false);

  return isClosed ? null : (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 z-50">
      <div className="absolute top-0 right-0 p-4 cursor-pointer">
        <LockClosedIcon className="text-dark-blue dark:text-light-blue size-6" onClick={() => setIsClosed(true)} />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <object
          width="100%"
          height="100%"
          data="./src/assets/docs/Olga_Kruhlova_CV.pdf"
          type="application/pdf"
        ></object>
      </div>
    </div>
  );
}

export default PDFPreview;
