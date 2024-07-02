import { useEffect, useRef, useState } from "react";

export interface InputAutocompleteProps
  extends Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >, "onChange"> {
  labelRegular?: string;
  labelText: string;
  labelProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
  suggestions: Array<string>;
  onChange: (text: string) => void
}

const InputAutocomplete = ({
  labelText,
  className,
  labelProps,
  labelRegular = "",
  suggestions,
  onChange,
  ...rest
}: InputAutocompleteProps) => {

    const componentInput = useRef<any>(null);
    const [filteredSuggestions, setFilteredSuggestions] = useState<Array<String>>(suggestions);
    const [userInput, setUserInput] = useState<string>("");
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
          if (componentInput.current && !componentInput.current.contains(event.target)) {
            setShowSuggestions(false);
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [componentInput]);

    function onChangeSuggestions(e: React.ChangeEvent<HTMLInputElement>) {
        const userInput = e.currentTarget.value;

        var filteredSuggestions = suggestions;

        if (userInput.length > 0)
            filteredSuggestions = suggestions.filter(
                suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
            );

        setFilteredSuggestions(filteredSuggestions);
        setShowSuggestions(true);
        setUserInput(userInput);
        onChange && onChange(e.currentTarget.value);
    }

    function onClick(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        onChange && onChange(e.currentTarget.innerText);
        setFilteredSuggestions([]);
        setShowSuggestions(false);
        setUserInput(e.currentTarget.innerText);
    };

    function returnSuggestionsListComponent() {
        if (showSuggestions) {
            return (
                <ul className={`
                    display: flex
                    flex-col
                    gap-[6px]
                `}>
                    {filteredSuggestions.map((suggestion, index) => {
                    return (
                        <li 
                        key={`suggest ${index}`}
                        className={`
                            hover:font-bold
                            cursor-pointer
                        `} onClick={onClick}>
                        {suggestion}
                        </li>
                    );
                    })}
                </ul>
            );
            
        }
    }

    return (
        <div
            ref={componentInput}
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
                value={userInput}
                onChange={(e) => {
                    onChangeSuggestions(e);
                }}
                onFocus={() => setShowSuggestions(true)}
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
            {returnSuggestionsListComponent()}
        </div>
    );
};

export default InputAutocomplete;
