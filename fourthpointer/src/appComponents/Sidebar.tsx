import { BarChart2, Layers } from "lucide-react";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="min-h-screen w-[15%] bg-gray-100">
      <div className="h-28 flex justify-center items-center ">
        <h1 className="text-2xl font-bold">FUTECH</h1>
      </div>

      <div className="h-40 w-full flex flex-col gap-y-10 justify-center items-center ">
        <nav className="space-y-2">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-red-400 rounded-lg"
          >
            <BarChart2 className="h-5 w-5 text-red-400" />
            <h1 className="text-black font-bold">Overview</h1>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <Layers className="h-5 w-5" />
            <h1 className="text-black font-bold">Admin</h1>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
