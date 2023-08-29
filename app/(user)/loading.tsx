import Image from "next/image";

const loading = () => {
  return (
    <div className="fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center bg-white">
      <Image src="/loading-logo.png" alt="loading" height={300} width={300} />
    </div>
  );
};
export default loading;
