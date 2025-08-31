import React from "react";
import { IoSearch, IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { MdCircleNotifications } from "react-icons/md";
import {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,  
    Popover,
    PopoverButton,
    PopoverPanel,
  } from "@headlessui/react";
  

const Header = () => {
  return (
    <div className="bg-gray-200 h-16 px-6 flex justify-between items-center">
      {/* Search Bar */}
      <div className="flex items-center gap-1 border border-gray-300 px-4 bg-gray-50 rounded hover:border-amber-400 focus:border-amber-400">
        <IoSearch fontSize={18} />
        <input
          type="text"
          placeholder="Search ..."
          className="py-4 px-2 text-sm focus:outline-none h-10 w-56"
        />
      </div>

      {/* Right Section Menus */}
      <div className="flex items-center gap-4">
        {/* Popover panel message section */}
        <Popover className="relative">
          {({ open }) => (
            <>
              <PopoverButton
                className={`flex items-center gap-2 ${
                  open ? "text-amber-600" : "text-gray-500"
                } hover:text-amber-600`}
              >
                <IoChatbubbleEllipsesSharp fontSize={32} />
              </PopoverButton>

              <PopoverPanel className="absolute right-0 mt-2 w-65 bg-white border border-gray-200 shadow-lg rounded p-4 z-10">
                <strong className="text-gray-900 font-bold">Message</strong>
                <div className="text-sm mt-1 py-1">
                  If you run this version, the runtime error you were getting
                  will disappear because React can now find the correct Headless
                  UI components.
                </div>
              </PopoverPanel>
            </>
          )}
        </Popover>

        {/* Popover panel Notification  section */}
        <Popover className="relative">
          {({ open }) => (
            <>
              <PopoverButton
                className={`flex items-center gap-2 ${
                  open ? "text-amber-600" : "text-gray-500"
                } hover:text-amber-600`}
              >
                <MdCircleNotifications fontSize={32} />
              </PopoverButton>

              <PopoverPanel className="absolute right-0 mt-2 w-65 bg-white border border-gray-200 shadow-lg rounded p-4 z-10">
                <strong className="text-gray-900 font-bold">
                  Notification
                </strong>
                <div className="text-sm mt-1 py-1">
                  The PopoverPanel has no width set by default, but you can add
                  one using CSS.
                </div>
              </PopoverPanel>
            </>
          )}
        </Popover>

        {/* profile menu list */}

        <Menu as="div" className="relative inline-block text-left">
  <MenuButton className="rounded-full focus:ring-2 focus:ring-amber-600 hover:ring-2 hover:ring-amber-700 data-[active]:bg-blue-200">
    <span className="sr-only">Open user menu</span>
    <div
      className={`w-10  h-10   text-white text-lg font-semibold rounded-full ${open ? "active:ring-2 active:ring-amber-600" : " "}`}
      style={{
        backgroundImage: "url('/profile.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span className="sr-only">Rohit Maurya</span>
    </div>
  </MenuButton>

  <MenuItems
    className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg  ring-opacity-5 focus:outline-none"
  >
    <MenuItem>
      {({ active }) => (
        <button
        onClick={()=> navigate("/profile")}
          className={`${
            active ? "bg-amber-100 text-amber-900" : "text-gray-700 cursor-pointer"
          } block w-full px-4 py-2 text-left text-sm`}
        >
          Your Profile
        </button>
      )}
    </MenuItem>
    <MenuItem>
      {({ active }) => (
        <button
        onClick={()=> navigate("/setting")}
          className={`${
            active ? "bg-amber-100 text-amber-900" : "text-gray-700"
          } block w-full px-4 py-2 text-left text-sm`}
        >
          Setting
        </button>
      )}
    </MenuItem>
    <MenuItem>
      {({ active }) => (
        <button
        onClick={()=> navigate("/profile")}
          className={`${
            active ? "bg-amber-100 text-amber-900" : "text-gray-700"
          } block w-full px-4 py-2 text-left text-sm`}
        >
          Logout
        </button>
      )}
    </MenuItem>
  </MenuItems>
</Menu>

      </div>
    </div>
  );
};

export default Header;
