

const MainButton = ({ text, isValidForm, isMatchingPassword }) => {
  return (
    <button
      className={`p-5 w-full text-white rounded-full  ${
        isValidForm && isMatchingPassword
          ? "bg-[#81BB33] cursor-pointer"
          : "bg-[#81BB33]/50"
      }`}
    >
      {text}
    </button>
  );
};

export default MainButton