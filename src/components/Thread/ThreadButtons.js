import React from 'react'

function ThreadButtons() {
    return (
        <div className="flex bg-gray-200 border border-gray-400 justify-between px-4 items-center">
        <div className="mx-2 my-2 flex">
          <span className="mr-2 rounded-full px-1 py-1 hover:bg-gray-400">
            <i
              class="fa fa-reply h-5 w-5 text-xl text-gray-600"
              aria-hidden="true"
            ></i>
          </span>
          <span className="mr-2 rounded-full px-1 py-1 hover:bg-gray-400 ">
            <i
              class="fa fa-tag h-5 w-5 text-xl text-gray-600"
              aria-hidden="true"
            ></i>
          </span>
          <span className="mr-2 rounded-full px-1 py-1 hover:bg-gray-400">
            <i
              class="fa fa-user-circle h-5 w-5 text-xl text-gray-600"
              aria-hidden="true"
            ></i>
          </span>
          <span className="mr-2 rounded-full px-1 py-1 hover:bg-gray-400">
            <i
              class="fa fa-ellipsis-h h-5 w-5 text-xl text-gray-600"
              aria-hidden="true"
            ></i>
          </span>
        </div>
        <div className="flex">
          <span className="mr-2">
            <i
              class="fa fa-chevron-up h-5 w-5 text-2xl text-gray-600"
              aria-hidden="true"
            ></i>
          </span>
          <span className="mr-2 ">
            <i
              class="fa fa-chevron-down h-5 w-5 text-2xl text-gray-600"
              aria-hidden="true"
            ></i>
          </span>
        </div>
      </div>
    )
}

export default ThreadButtons
