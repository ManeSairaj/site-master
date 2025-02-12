import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src="/assets/loading.gif"
        alt="Loading..."
        className="w-20 h-20"
        width={80}
        height={80}
      />
    </div>
  );
}

export default Loading;
