const Button = (props) => {
  const { content, className } = props;
  return (
    <button className={`rounded-[69px] relative overflow-hidden after:absolute after:top-0 hover:after:right-0 after:bottom-0 after:left-0 after:right-[100%] after:duration-300 after:bg-blue after:z-[-1] z-[1] bg-turquoise py-3.5 px-[30px] text-white after:h-full font-poppins text-base font-semibold !leading-150 ${className}`}> {content}</button>
  );
};

export default Button;
