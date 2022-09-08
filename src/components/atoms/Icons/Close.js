const Close = ({ size = 14, fill = 'black' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.46 7L14 12.54V14H12.54L7 8.46L1.46 14H0V12.54L5.54 7L0 1.46V0H1.46L7 5.54L12.54 0H14V1.46L8.46 7Z"
        fill={fill}
      />
    </svg>
  );
};

export default Close;
