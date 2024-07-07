import React from "react";

const Nav = () => {
  return (
    <div className="my-4">
      <ul className="flex border bg-blue-200 w-fit mx-auto rounded-full px-8 py-3 align-middle items-center gap-24 ">
        <div class="relative inline-block">
          <span class="text-blue-600">Refer</span>
          <span class="absolute left-1/2 transform -translate-x-1/2 -bottom-4 text-blue-600">
            •
          </span>
        </div>
        <li>Benefits</li>
        <li>FAQs</li>
        <li>Support</li>
      </ul>
    </div>
  );
};

export default Nav;
