function Button({
  content,
  bgColor = "bg-[#00df9a]",
  textColor = "text-black",
  mx = "",
}) {
  console.log(textColor);
  return (
    <button
      className={`${bgColor} ${textColor} ${mx} w-[200px] rounded-md mx-auto font-medium my-6 py-3 hover:scale-105 duration-300`}
    >
      {content}
    </button>
  );
}

export default Button;
