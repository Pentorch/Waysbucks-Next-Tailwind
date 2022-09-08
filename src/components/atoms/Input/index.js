import { Subtract } from '../Icons';

const Input = ({
  size,
  type,
  touched,
  error,
  icon,
  focus,
  containerClassName,
  label,
  labelClassName,
  inputClassName,
  register,
  showMessageError = true,
  ...props
}) => {
  const sizeClassName = {
    small: `w-full px-4 py-2 text-sm leading-4`,
    medium: `w-full px-4 py-2 text-base leading-4`,
    large: `w-full px-4 py-2 text-lg leading-4`,
  };

  // tailwind styling
  const dafaultStyling =
    'w-full outline-color1 text-gray-700 bg-color7 border-2 border-color1 rounded-lg focus:border-color1';

  return (
    <div className={containerClassName}>
      <div className={`relative`}>
        {/* --- label --- */}
        {label && <label className={labelClassName}>{label}</label>}

        {/* -- icon --- */}
        {icon && <div className="absolute inset-y-0 left-0 flex items-center">{icon}</div>}

        {/* --- input --- */}
        <input
          type={type}
          className={`${inputClassName} ${dafaultStyling} ${sizeClassName[size]} ${
            icon ? 'pl-11' : 'pl-4'
          } ${touched && error && '!border-color1'} focus:${focus || 'border-color1'}`}
          {...register}
          {...props}
        />
      </div>

      {/* --- showed when input already touched before and error has a string --- */}
      {!showMessageError ? (
        ''
      ) : touched && error ? (
        <div className="flex items-center gap-[5.67px]">
          <Subtract />

          <span className="text-redImperial text-[14px] leading-[20px] font-[400]">{error}</span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

Input.defaultProps = {
  size: 'large',
  type: 'text',
  touched: false,
  error: '',
  icon: false,
  containerClassName: '',
};

export default Input;
