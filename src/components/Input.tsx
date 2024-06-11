export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  labelRegular?: string;
  labelText: string;
  labelProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
}

const Input = ({
  labelText,
  className,
  labelProps,
  labelRegular = "",
  ...rest
}: InputProps) => {
  return (
    <div
      className="
            flex
            w-full
            flex-col
            gap-[9px]
        "
    >
      <div>
        <label
          className="
                    text-[18px]
                "
          {...labelProps}
        >
          {labelRegular}
        </label>
        <label
          className="
                    text-[18px]
                    font-bold
                "
          {...labelProps}
        >
          {labelText}
        </label>
      </div>
      <input
        className={` 
                rounded-[9px]
                bg-[#f5f5f5]
                px-[14px]
                pb-[14px]
                pt-[14px]
                text-[16px]
                placeholder-gray-600 
                shadow-sm
                outline-verde	
                ${className}
            `}
        {...rest}
      />
    </div>
  );
};

export default Input;
