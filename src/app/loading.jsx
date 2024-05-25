import Image from "next/image";

function Loading() {
  return (
    <div className="flex justify-center">
      <Image
        className="h-52"
        src="spinner.svg"
        alt="loading..."
        width={52}
        height={52}
      />
    </div>
  );
}

export default Loading;
