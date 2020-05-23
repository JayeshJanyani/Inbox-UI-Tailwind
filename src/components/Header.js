import React from "react";

function Header() {
  return (
    <header className="flex">
      <div className="w-64 flex-shrink-0 bg-gray-800 px-4 py-3 w-64">
        <button className="flex items-center ">
          <img
            className="w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=634&q=80"
          />
          <span className="font-medium text-sm text-white ml-4">
            Jayesh Janyani
          </span>
          <svg
            viewBox="0 0 24 24"
            className="ml-10 h-6 w-6 stroke-current text-white"
            fill="none"
          >
            <g>
              <path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path>
            </g>
          </svg>
        </button>
      </div>
      <div className="flex-1 bg-gray-700 flex items-center justify-between">
        <div className=" ml-4 leading-tight">
          <nav className="">
            <a
              href="#"
              className="bg-gray-800 text-sm text-white font-medium inline-block px-3 py-1 rounded-lg ml-2 hover:bg-gray-600"
            >
              Mailbox
            </a>
            <a
              href="#"
              className=" text-sm text-white font-medium inline-block px-3 py-1 rounded-lg ml-2 hover:bg-gray-600"
            >
              Customers
            </a>
            <a
              href="#"
              className=" text-sm text-white font-medium inline-block px-3 py-1 rounded-lg ml-2 hover:bg-gray-600"
            >
              Reporting
            </a>
            <a
              href="#"
              className=" text-sm text-white font-medium inline-block px-3 py-1 rounded-lg ml-2 hover:bg-gray-600 "
            >
              Manage
            </a>
          </nav>
        </div>

        <div className="flex">
          <div className="relative ">
            <span className="absolute pl-5 text-gray-500 ">
              <svg class=" mt-2 h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.293 16.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414z"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800 ml-2 pl-10 py-2 outline-none w-56 rounded-lg focus:bg-gray-200"
            />
          </div>
          <button className="mx-3 text-gray-500 hover:text-gray-300">
            <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M8 0a2 2 0 00-2 2v.341C3.67 3.165 2 5.388 2 8v5H1a1 1 0 100 2h14a1 1 0 100-2h-1V8a6.002 6.002 0 00-4-5.659V2a2 2 0 00-2-2zM8 18a2 2 0 01-2-2h4a2 2 0 01-2 2z"></path>
            </svg>
          </button>
          <button className="mx-3 text-gray-500 hover:text-gray-300">
            <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.086-8.724c-.084.56.392 1.022.958 1.022h.47a.525.525 0 00.524-.492c.057-.526.283-.986.676-1.379l.63-.62c.492-.495.836-.944 1.033-1.347.197-.409.295-.842.295-1.299 0-1.005-.303-1.782-.909-2.33C13.985 6.277 13.133 6 12.035 6c-1.088 0-1.947.29-2.58.871a2.84 2.84 0 00-.793 1.28c-.184.604.36 1.131.99 1.131.534 0 .933-.435 1.304-.84.052-.057.103-.114.154-.168.234-.247.542-.37.925-.37.808 0 1.212.454 1.212 1.362 0 .301-.078.589-.233.863-.155.269-.469.621-.94 1.056-.466.43-.787.869-.964 1.315-.087.221-.152.48-.196.776zm.057 2.611c-.233.231-.35.527-.35.887 0 .355.114.648.342.88.233.23.539.346.917.346s.68-.116.909-.347c.233-.231.35-.524.35-.879 0-.36-.12-.656-.358-.887-.233-.237-.534-.355-.901-.355-.368 0-.671.118-.91.355z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
