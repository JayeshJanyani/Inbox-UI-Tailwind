import React from "react";
import ThreadButtons from "./ThreadButtons";
import ThreadSubject from "./ThreadSubject";
import ThreadMessage from "./ThreadMessage";
import { messageBody } from "../../assets/text";

function ThreadBody() {
  return (
    <div className="flex flex-col w-full float-right ">
      <div className="border border-gray-400 shadow-lg">
        <ThreadButtons />
        <ThreadSubject />
      </div>
      <div className="bg-gray-400 flex-1 overflow-y-auto px-2 max-h-screen overflow-y-auto">
        {messageBody.map((message, index) => (
          <ThreadMessage text={message.text} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ThreadBody;
