interface OptionProps {
  option: string;
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<string[]>>;
  index: any;
}

const Option = (props: OptionProps) => {
  const handleOptionChange = (index: any, value: any) => {
    const updatedOptions = [...props.options];
    updatedOptions[index] = value;
    props.setOptions(updatedOptions);
  };

  return (
    <div className="input-group" key={props.index}>
      <label htmlFor={`option${props.index + 1}`}>{`Option ${
        props.index + 1
      }:`}</label>
      <input
        type="text"
        id={`option${props.index + 1}`}
        value={props.option}
        onChange={(event) =>
          handleOptionChange(props.index, event.target.value)
        }
      />
    </div>
  );
};

export default Option;
