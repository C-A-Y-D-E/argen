import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import Link from "next/link";
const HamburgerMenu = () => {
  return (
    <Menu
      as="div"
      className="relative p-2 font-logo lg:px-4 md:mx-2  rounded duration-300"
    >
      <div>
        <Menu.Button className="flex gap-2 items-center justify-center w-full    rounded-md bg-opacity-20  focus:outline-none ">
          <FiMenu className="text-3xl" />
        </Menu.Button>
      </div>
      <Transition>
        <Menu.Items className="absolute z-40 right-0  bg-accent shadow w-64 my-2 flex flex-col justify-center pl-4 mr-auto">
          <div className="px-1 py-1 mt-4">
            <Menu.Item>
              {({ active }) => (
                <Link href="/#home">
                  <a
                    className={`${
                      active ? " text-white bg-extra-purple" : "text-white"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-extra-purple`}
                  >
                    Home
                  </a>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link href="/#token">
                  <a
                    className={`${
                      active ? "text-white bg-extra-purple" : "text-white"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-extra-purple`}
                  >
                    Tokenomics
                  </a>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link href="/#faq">
                  <a
                    className={` group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-extra-purple`}
                  >
                    FAQ
                  </a>
                </Link>
              )}
            </Menu.Item>
            {/* <Menu.Item>
              {({ active }) => (
                <Link href="/#roadmap">
                  <a
                    className={` group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-extra-purple`}
                  >
                    Roadmap
                  </a>
                </Link>
              )}
            </Menu.Item> */}

            {/* <div className="py-2 my-4  text-sm  px-4 xs:px-6 bg-gray-600 rounded-full text-white relative cursor-not-allowed select-none">
              <span>
                <strong>Coming</strong>{" "}
                <span className="relative">
                  Connect to a wallet{" "}
                  <span
                    className=" absolute left-0 right-0 bg-red-600 top-1/2"
                    style={{ height: 2 }}
                  ></span>
                </span>
              </span>
            </div> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default HamburgerMenu;
