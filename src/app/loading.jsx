import Image from "next/image";

function Loading() {
  return (
    <div className="flex justify-center">
      <Image className="h-52" src="spinner.svg" alt="loading..." />
    </div>
  );
}

export default Loading;
