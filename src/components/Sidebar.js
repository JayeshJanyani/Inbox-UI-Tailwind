import React from "react";
import SidebarItem from "./SidebarItem";



function Sidebar() {
  const fontAwesome={
    'inbox':'fa-inbox',
    'draft':'fa-edit',
    'flag':'fa-flag',
    'assigned':'fa-user-circle',
    'closed':'fa-check-circle',
    'junk':'fa-trash'
  }
  return (
    <div className="w-64 h-full bg-gray-200 p-6 overflow-y-auto">
      <div>
        <h2 className="text-sm float-left font-medium text-gray-700 w-full">
          MAILBOX
        </h2>
        <nav>
          <br />
          <ul>
            <SidebarItem itemName='Inbox' icon={fontAwesome['inbox']} tag='6' selected='true'/>
            <SidebarItem itemName='Flagged' icon={fontAwesome['flag']}/>
            <SidebarItem itemName='Draft' icon={fontAwesome['draft']}/> 
            <SidebarItem itemName='Assigned' icon={fontAwesome['assigned']} tag='3'/> 
            <SidebarItem itemName='Closed' icon={fontAwesome['closed']} tag='2'/> 
            <SidebarItem itemName='Junk' icon={fontAwesome['junk']}/> 
          </ul>
        </nav>
      </div>

    </div>
  );
}

export default Sidebar;
