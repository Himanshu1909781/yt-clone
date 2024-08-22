import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight, FaBars, FaTimes } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarItems = [
    { id: 1, name: "Home", icon: <GoHome /> },
    { id: 2, name: "Shorts", icon: <SiYoutubeshorts /> },
    { id: 3, name: "Subscriptions", icon: <MdOutlineSubscriptions /> },
  ];

  const sidebarItems2 = [
    { id: 1, name: "Your Channel", icon: <PiUserSquareThin /> },
    { id: 2, name: "History", icon: <MdHistory /> },
    { id: 3, name: "Playlists", icon: <MdOutlineSubscriptions /> },
    { id: 4, name: "Your Videos", icon: <BiVideo /> },
    { id: 5, name: "Watch later", icon: <MdOutlineWatchLater /> },
    { id: 6, name: "Liked videos", icon: <AiOutlineLike /> },
  ];

  const sidebarItems3 = [
    { id: 1, name: "Trending", icon: <SiTrendmicro /> },
    { id: 2, name: "Shopping", icon: <HiOutlineShoppingBag /> },
    { id: 3, name: "Music", icon: <SiYoutubemusic /> },
    { id: 4, name: "Films", icon: <PiFilmSlateLight /> },
    { id: 5, name: "Live", icon: <CgMediaLive /> },
    { id: 6, name: "Gaming", icon: <IoGameControllerOutline /> },
    { id: 7, name: "News", icon: <FaRegNewspaper /> },
    { id: 8, name: "Sport", icon: <TfiCup /> },
    { id: 9, name: "Courses", icon: <SiStylelint /> },
    { id: 10, name: "Fashion & beauty", icon: <PiLightbulbLight /> },
    { id: 11, name: "Podcasts", icon: <MdPodcasts /> },
  ];

  const sidebarItems4 = [
    { id: 1, name: "YouTube Premium", icon: <FaYoutube /> },
    { id: 2, name: "YouTube Studio", icon: <SiYoutubestudio /> },
    { id: 3, name: "YouTube Music", icon: <SiYoutubemusic /> },
    { id: 4, name: "YouTube Kids", icon: <SiYoutubekids /> },
  ];

  return (
    <>
      {/* Toggle Button for Smaller Screens */}
      <div className="lg:hidden p-4">
        <button
          onClick={toggleSidebar}
          className="text-2xl text-gray-700 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static top-0 left-0 z-50 lg:z-auto w-64 bg-white h-full lg:h-auto px-6 py-4 overflow-y-auto transition-transform duration-300 ease-in-out`}
      >
        <div className="space-y-3">
          {sidebarItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-2"
            >
              <div className="text-xl">{item.icon}</div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <br />
        <hr />
        <div className="mt-4 space-y-3">
          <div className="flex items-center space-x-2">
            <h1>You</h1>
            <FaChevronRight />
          </div>
          {sidebarItems2.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-2"
            >
              <div className="text-xl">{item.icon}</div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <br />
        <hr />
        <div className="mt-4 space-y-3">
          <h1 className="font-semibold">Explore</h1>
          {sidebarItems3.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-2"
            >
              <div className="text-xl">{item.icon}</div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <br />
        <hr />
        <div className="mt-4 space-y-3">
          <h1 className="font-semibold">More From YouTube</h1>
          {sidebarItems4.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-2"
            >
              <div className="text-xl text-red-500">{item.icon}</div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <hr />
        <div className="text-xs text-gray-600 font-semibold mt-4">
          <p>About Press Copyright</p>
          <p>Contact us Creators</p>
          <p>Advertise Developers</p>
          <p className="mt-3">Terms Privacy Policy & Safety</p>
          <p>How YouTube works</p>
          <p>Test new features</p>
        </div>

        <p className="text-xs text-gray-500 mt-3">© 2024 Learn Coding</p>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
        ></div>
      )}
    </>
  );
}

export default Sidebar;
