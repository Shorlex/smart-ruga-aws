import Image from "next/image";

const SocialLogin = () => {
  return (
    <button className="p-5 w-full text-[#81bb33] rounded-full border border-[#81BB33] cursor-pointer flex justify-center gap-5">
      <Image
        src={"/images/google-icon.png"}
        width={25}
        height={50}
        alt="google-icon"
      />{" "}
      <span>Sign up with Google</span>
    </button>
  );
};

export default SocialLogin;
