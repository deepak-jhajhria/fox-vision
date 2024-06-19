const Button = (props) => {
  const { content, className } = props;
  return (
    <button className={`rounded-[69px] bg-turquoise py-3.5 px-[30px] text-white font-poppins text-base font-semibold !leading-150 ${className}`}> {content}</button>
  );
};

export default Button;
