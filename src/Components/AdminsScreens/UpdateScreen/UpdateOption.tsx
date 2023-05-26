interface UpdateOptionProps {
  option: string;
  index: number;
  oldOptions: string[];
  options: string[];
  setOptions: (value: React.SetStateAction<string[]>) => void;
  setOldOptions: (value: React.SetStateAction<string[]>) => void;
}

const UpdateOption = (props: UpdateOptionProps) => {
  return (
    <div key={props.index}>
      <label htmlFor={`option${props.index + 1}`}>
        Option {props.index + 1}:
      </label>
      <input
        type="text"
        id={`option${props.index + 1}`}
        value={
          props.options[props.index] === ""
            ? props.option
            : props.options[props.index]
        }
        onChange={(event) => {
          const updatedOptions = props.oldOptions;
          updatedOptions[props.index] = event.target.value;
          props.setOptions(updatedOptions);
          props.setOldOptions(updatedOptions);
        }}
      />
    </div>
  );
};

export default UpdateOption;
