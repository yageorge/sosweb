import React from "react";

export default function test() {
  const [openTab, setOpenTab] = React.useState(1);
  return (

    <div className="flex flex-wrap">
      <div className="w-full">
        <div className="grid grid-cols-3 gap-4">
          <div >11</div>
          <div >2</div>
          <div>3</div>
          <div className="col-span-2">4</div>
          <div >5</div>
          <div >6</div>
          <div>7</div>
        </div>
      </div>
    </div>

  );
}


