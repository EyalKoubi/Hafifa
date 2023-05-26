interface UpdateQuestionProps {
  oldQuestion: string;
  setQuestion: (value: React.SetStateAction<string>) => void;
  setOldQuestion: (value: React.SetStateAction<string>) => void;
}

const UpdateQuestion = (props: UpdateQuestionProps) => {
  return (
    <div className="Question">
      <label htmlFor="question">Question:</label>
      <input
        type="text"
        id="oldQuestion"
        name="oldQuestion"
        value={props.oldQuestion}
        onChange={(event) => {
          props.setQuestion(event.target.value);
          props.setOldQuestion(event.target.value);
        }}
      />
    </div>
  );
};

export default UpdateQuestion;
