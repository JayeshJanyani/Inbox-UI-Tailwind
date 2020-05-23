import React from "react";

function ThreadMessage(props) {
    const {text}=props
  return (
    <div className="flex flex-col border rounded-md bg-white px-4 pt-6 pb-8 shadow-md mt-2 ">
      <div className="flex justify-between text-md items-center">
        <span className="text-gray-800 font-medium font-semibold ">Jayesh Janyani</span>
        <div className="text-sm text-gray-500 flex items-center">
          <span>Yesterday at 7:24 AM</span>
          <img
            className="ml-4 h-8 w-8 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=634&q=80"
          ></img>
        </div>
      </div>
      <div className="text-sm mt-4 w-full">
        <span className="float-left text-left text-gray-700">
          {text}
        </span>
      </div>
    </div>
  );
}

export default ThreadMessage;
