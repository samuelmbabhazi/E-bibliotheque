import React from "react";
import { RiDashboardLine, RiSettings4Fill } from "react-icons/ri";
import { MdOutlineCategory } from "react-icons/md";
import { BiRightArrow } from "react-icons/bi";

export default function Sidebar() {
  return (
    <aside
      class="w-64 h-[100vh] pl-6 bg-white backdrop-filter backdrop-blur-lg bg-opacity-60"
      aria-label="Sidebar"
    >
      <div className="" id="logo">
        <a href="/" class="">
          <img src="logo.png " class="w-[170px]" alt="Mokanda Logo" />
        </a>
      </div>
      <div className="" id="liste">
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="flex text-[20px] items-center p-2 text-base font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <RiDashboardLine />
              <span class="ml-3">Dashboard</span>
            </a>
          </li>
          <hr />
          <li>
            <a
              href="#"
              class="flex text-[20px] items-center p-2 text-base font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <MdOutlineCategory />
              <span class="ml-3">Category</span>
            </a>
            <ul className="ml-6 flex flex-col gap-3">
              <li>
                <a href="" className="flex  items-center hover:ml-3">
                  <BiRightArrow />
                  <span className="ml-3">Littéraire</span>
                </a>
              </li>
              <li>
                <a href="" className="flex  items-center hover:ml-3">
                  <BiRightArrow />
                  <span className="ml-3"> Narratif</span>
                </a>
              </li>

              <li>
                <a href="" className="flex  items-center hover:ml-3">
                  <BiRightArrow />
                  <span className="ml-3"> Argumentatif</span>
                </a>
              </li>

              <li>
                <a href="" className="flex  items-center hover:ml-3">
                  <BiRightArrow />
                  <span className="ml-3">Poétique</span>
                </a>
              </li>

              <li>
                <a href="" className="flex  items-center hover:ml-3">
                  <BiRightArrow /> <span className="ml-3">Théâtral</span>
                </a>
              </li>

              <li>
                <a href="" className="flex  items-center hover:ml-3">
                  {" "}
                  <BiRightArrow />
                  <span className="ml-3"> Epistolaire</span>
                </a>
              </li>

              <li>
                <a href="" className="flex  items-center hover:ml-3">
                  <BiRightArrow />
                  <span className="ml-3">Documentaire</span>
                </a>
              </li>
            </ul>
          </li>
          <hr />
          <li>
            <a
              href="#"
              class="flex text-[20px] items-center p-2 text-base font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <RiSettings4Fill />
              <span class="ml-3">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
