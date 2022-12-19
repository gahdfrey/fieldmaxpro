import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose,  AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaInstagramSquare,FaYoutube} from "react-icons/fa";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { useRouter } from "next/router";
import NavLogo from "../public/assets/logo.png";
import Modal from "../components/Modal";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ffffff");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [position, setPosition] = useState("fixed");
  

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const [showModal, setShowModal] = useState(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <div
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? "fixed w-full h-[4rem]  shadow-xl z-[100] ease-in-out duration-300"
            : "fixed w-full h-[4rem] z-[100]"
        }
      >
        <div className="flex justify-between items-center  px-2  max-w-[1170px] m-auto h-full">
        <div className="relative w-[10rem] lg:w-[16rem]">
                  <Image src={NavLogo} alt="/"  layout="responsive"
                className="object-contain" />
                  {/* width={300} height={40} */}
                </div>
          {/* <div>
            <Image
              src={NavLogo}
              alt="/"
              width="250"
              height="35"
              className="cursor-pointer"
            />
          </div> */}
          <div className="flex items-center justify-between">
             <ul className="hidden xl:flex font-lato text-[16px]">
              <li className="p-2">
             <Link href="/">
              <a className={currentRoute === "/" ? "active" : "non-active"}>Home</a>              
            </Link>
            </li>
            <li className="p-2">
            <Link href="/overview">
                <a className={currentRoute === "/overview" ? "active" : "non-active"}> Overview</a>
            </Link>
            </li>
            <li className="p-2">
            <Link href="/solutions">
                <a className={currentRoute === "/solutions" ? "active" : "non-active"}>Solutions</a>
            </Link>
            </li>
            <li className="p-2">
            <Link href="/pricing">
                <a className={currentRoute === "/pricing" ? "active" : "non-active"}>Pricing</a>
            </Link>
            </li>
            <li className="p-2">
            <Link href="/career">
                <a className={currentRoute === "/career" ? "active" : "non-active"}>Careers</a>
            </Link>
            </li>
            <li className="p-2">
            <Link href="blog">
            <a className={currentRoute === "/blog" ? "active" : "non-active"}>Blog</a>
                {/* <a className={currentRoute === "https://www.fieldmaxpro.com/blog" ? "active" : "non-active"}>Blog</a> */}
            </Link>
            </li>
            <li className="p-2">
            <Link href="/contact">
                <a className={currentRoute === "/contact" ? "active" : "non-active"}>Contact</a>
            </Link>
            </li>
            <li className="p-2">
            <Link href="https://help.fieldmaxpro.com/documentation/introduction">
            <a className="hover:text-[#E03E27]" href="https://help.fieldmaxpro.com/documentation/introduction">Help Desk</a>
                {/* <a className={currentRoute === "/helpdesk" ? "active" : "non-active"}> Help Desk</a> */}
            </Link>
            </li>
            
              
            </ul> 
            <div>
              {/* <button
                className="ml-10 hidden sm:inline-block text-white cursor-pointer bg-[#ff6047] rounded-md text-center "
                onClick={() => setShowModal(true)}
              >
                  <li className="list-none text-[16px] px-9 leading-[54px] font-[500]">
                    Try for free!
                  </li>
              </button> */}
            </div>

            {/* Hamburger Icon */}
            <div onClick={handleNav} className="block xl:hidden">
              <AiOutlineMenu size={25} />
            </div>
            
          </div>
          <button
                className="ml-10 hidden xl:inline-block text-white cursor-pointer bg-[#ff6047] rounded-md text-center "
                onClick={() => setShowModal(true)}
              >
                  <li className="list-none text-[16px] px-9 leading-[54px] font-[500]">
                    Try for free!
                  </li>
              </button>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div
          className={
            nav
              ? "xl:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
                : "fixed left-[-150%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex items-center justify-between w-full">
              <div className="relative w-[10rem] mr-8">
                  <Image src={NavLogo} alt="/"  layout="responsive"
                className="object-contain" />
                </div>
                {/* <Link href="/">
                  <Image src={NavLogo} width="200" height="30" alt="/" />
                </Link> */}
                <div
                  onClick={handleNav}
                  className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="my-4 border-b border-gray-300">
                <p className="w-[85%] md:w-[90%] py-4">
                Field Force Management Automation -
        Reimagined.
                </p>
              </div>
            </div>
            <div className="flex flex-col py-2">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-2 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/overview">
                  <li onClick={() => setNav(false)} className="py-2 text-sm">
                    Overview
                  </li>
                </Link>
                <Link href="/solutions">
                  <li onClick={() => setNav(false)} className="py-2 text-sm">
                    Solutions
                  </li>
                </Link>
                <Link href="/pricing">
                  <li onClick={() => setNav(false)} className="py-2 text-sm">
                    Pricing
                  </li>
                </Link>
                <Link href="/career">
                  <li onClick={() => setNav(false)} className="py-2 text-sm">
                    Career
                  </li>
                </Link>
                <Link href="/blog">
                  <li onClick={() => setNav(false)} className="py-2 text-sm">
                    Blog
                  </li>
                </Link>
                <Link href="/contact">
                  <li onClick={() => setNav(false)} className="py-2 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
              <div>
                <Link href="/#contact">
                  <li className="text-sm inline-block uppercase text-white cursor-pointer list-none bg-[#E03E27] p-[15px] rounded-md"
                     onClick={() => setShowModal(true)}>
                    
                    Try for free!
                  </li>
                </Link>
              </div>
              <div className="pt-10">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let&#39;s Connect
                </p>
                <div className="flex items-center justify-between text-[#666666] w-full sm:w-[80%]">
                  <a
                   href="https://www.youtube.com/channel/UCiUwB1lHj9awlb0dq4O_Jhg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                    <FaYoutube /> 
                    </div>
                  </a>
                  <a
                    href="https://bit.ly/32hCWTR"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                    <AiFillFacebook />
                    </div>
                  </a>

                  <a
                      href="https://bit.ly/3gfUAjm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                    <FaLinkedinIn /> 
                    </div>
                  </a>

                  <a
                     href="https://instagram.com/fieldmaxpro.ng?igshid=YWJhMjlhZTc="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                    <FaInstagramSquare /> 
                    </div>
                  </a>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      <style jsx>{`
                  /* Specific styles for non-active links */
                  .non-active {
                    color: black;
                  }
                  .non-active:hover{
                    color: #E03E27;
                  }
                  
                  /* Specific styles for active links */
                  .active {
                    color: #E03E27;
                  }
            `}</style>
    </>
  );
};

export default Navbar;





{/* <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="home">
                <Link
                  href="/"
                  className="ml-10 text-sm uppercase hover:border-b"
                ></Link>
              </Tab>
              <Tab label="overview">
                <Link
                  href="/overview"
                  className="ml-10 text-sm uppercase hover:border-b"
                ></Link>
              </Tab>

              <Tab label="solution">
                <Link
                  href="/solutions"
                  className="ml-10 text-sm uppercase hover:border-b">
                </Link>
              </Tab>
            </Tabs> */}




            // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === "/property" ||
  //     router.asPath === "/crypto" ||
  //     router.asPath === "/netflix" ||
  //     router.asPath === "/twitch"
  //   ) {
  //     setNavBg("transparent");
  //     setLinkColor("#ecf0f3");
  //   } else {
  //     setNavBg("#ecf0f3");
  //     setLinkColor("#1f2937");
  //   }
  // }, [router]);



  {/* <Link href="/overview">
                <li className="p-2 hover:border-b">
                  Overview
                </li>
              </Link>
              <Link href="/solutions">
                <li className="p-2 hover:border-b">
                  Solutions
                </li>
              </Link>
              <Link href="/pricing">
                <li className="p-2 hover:border-b">
                  Pricing
                </li>
              </Link>
              <Link href="/career">
                <li className="p-2 hover:border-b">
                  Careers
                </li>
              </Link>
              <Link href="/career">
                <li className="p-2 hover:border-b">
                  Blog
                </li>
              </Link>
              <Link href="/contact">
                <li className="p-2 hover:border-b">
                  Contact
                </li>
              </Link>
              <Link href="/contact">
                <li className="p-2 hover:border-b">
                  Help Desk
                </li>
              </Link> */}
