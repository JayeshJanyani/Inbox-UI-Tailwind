import React from 'react'

function SidebarItem(props) {
    const {itemName, tag, icon ,selected}=props
    const classes= selected && 'bg-gray-400'
    return (
        <li className="mt-3">
        <div className={`hover:bg-gray-400 flex justify-between rounded-md py-1 px-2 text-sm font-medium ${classes}`}>
          <span >
            <span className="mr-2">
              <i className={`fa ${icon} h-5 w-5 fill-current text-gray-700`}></i>
            </span>
            {itemName}
          </span>
          {tag && <span className="rounded-full px-3 bg-gray-500">{tag}</span>}
        </div>
      </li>
    )
}

export default SidebarItem
