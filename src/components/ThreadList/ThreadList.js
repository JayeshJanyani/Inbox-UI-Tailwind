import React from "react";
import ThreadItem from "./ThreadItem";

function ThreadList() {
  return (
    <div className="flex flex-col w-full max-w-xs">
      <div className="bg-gray-300 py-2 flex px-2 justify-between border-b border-gray-400 shadow-lg">
        <span className="text-sm text-gray-600">
          Sorted by Date
          <span class="h-6 w-6 stroke-current text-gray-600">
            <i class="fa fa-chevron-down ml-2"></i>
          </span>
        </span>
        <span class=" h-6 w-6 stroke-current text-gray-600">
          <i class="fa fa-sort-amount-asc mr-4"></i>
        </span>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ThreadItem />
        <ThreadItem />
        <ThreadItem />
        <ThreadItem />
        <ThreadItem />
        <ThreadItem />
        <ThreadItem />
        <ThreadItem />
        <ThreadItem />
        <ThreadItem />
        <ThreadItem />
        <ThreadItem />
      </div>
    </div>
  );
}

export default ThreadList;
