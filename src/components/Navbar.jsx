import React, { useState, useEffect } from "react";
import Avatar from "react-avatar";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import logo from "../../public/logo.png";
import profile from "../../public/profile.jpg";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/UtilsContext";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();
  const [searchbar, setSearchbar] = useState(false);
  
  useEffect(() => {
    console.log({ isSidebar, mobileShow });
  }, [isSidebar, mobileShow]);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleSidebar = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    } else {
      setIsSidebar(!isSidebar);
    }
  };

  if (searchbar) {
    return (
      <div className="flex justify-between items-center fixed top-0 w-full bg-white px-6 py-2 z-50">
        <IoArrowBack
          size={20}
          className="cursor-pointer"
          onClick={() => setSearchbar(!searchbar)}
        />
        <div className="flex flex-grow items-center mx-4">
          <div className="w-full px-4 py-2 border-[1px] border-gray-400 rounded-l-full">
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-full"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>
          <button
            className="px-4 py-2 border-[1px] border-gray-400 bg-gray-100 rounded-r-full"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <CiSearch size={"24px"} />
          </button>
        </div>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center fixed top-0 w-full bg-white px-6 py-2 z-50 shadow-md">
      <div className="flex items-center space-x-4">
        <AiOutlineMenu className="text-xl cursor-pointer" onClick={handleSidebar} />
        <img src={logo} alt="Logo" className="w-24 md:w-28 cursor-pointer" />
      </div>

      <div className="hidden md:flex w-[40%] items-center">
        <div className="w-full px-4 py-2 border-[1px] border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border-[1px] border-gray-400 bg-gray-100 rounded-r-full"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>

      <div className="flex space-x-5 items-center">
        <IoIosSearch
          className="text-2xl md:hidden cursor-pointer"
          onClick={() => setSearchbar(!searchbar)}
        />
        <RiVideoAddLine className="text-2xl cursor-pointer" />
        <AiOutlineBell className="text-2xl cursor-pointer" />
        <Avatar src={profile} size="32" round={true} />
      </div>
    </div>
  );
}

export default Navbar;
