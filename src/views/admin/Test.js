import React from "react";

export default function test() {
  return (

    <div className="flex flex-wrap">
      <div className="w-full">
        <ul className="grid grid-cols-3 gap-4">
          <li className="bg-green-500">11</li>
          <li >2</li>
          <li>3</li>
          <li className="col-span-2">4</li>
          <li >5</li>
          <li >6</li>
          <li>7</li>
        </ul>
      </div>
    </div>

  );
}


