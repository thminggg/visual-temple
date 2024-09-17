import Image from "next/image";

const Nav = () => {
  return (
    <div className=" bg-main p-2">
      <Image src="logo.svg" alt="logo" width={50} height={50} />
    </div>
  );
};

export default Nav;
