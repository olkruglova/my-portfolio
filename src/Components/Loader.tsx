import { ArrowPathIcon } from "@heroicons/react/24/solid";

function Loader() {
  return (
    <div className="absolute bg-transparent flex items-center justify-center h-[500px] w-full top-0 left-0">
      <ArrowPathIcon className="text-dark-blue dark:text-light-blue size-6 animate-spin" />
    </div>
  );
}

export default Loader;
