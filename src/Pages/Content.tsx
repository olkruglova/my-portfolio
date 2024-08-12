import Navbar from "../Components/Navbar";
import Toolbar from "../Components/Toolbar";

function Content() {
  return (
    <div className="flex flex-row px-24 py-20">
      <div className="flex-1">
        <Navbar />
      </div>
      <div>
        <Toolbar />
      </div>
    </div>
  );
}

export default Content;
