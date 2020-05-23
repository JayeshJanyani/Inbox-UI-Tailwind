import React from "react";

function ThreadItem() {
  return (
    <div className="border w-full border-gray-200 px-6 py-4 hover:bg-gray-400">
      <span className="flex justify-between text-md ">
        <span className="text-gray-800 font-medium ">Jayesh Janyani</span>
        <span className="text-gray-500">2 days ago</span>
      </span>
      <p className="text-sm text-left mt-2 ">This is subject of the mail</p>
      <p className="text-sm text-gray-600 mt-1 text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus
        element...
      </p>
    </div>
  );
}

export default ThreadItem;
