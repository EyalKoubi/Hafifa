interface QuestionProps {
  question: string;
  setQuestion: (value: React.SetStateAction<string>) => void;
}

const QuestionInput = (props: QuestionProps) => {
  return (
    <div className="input-group">
      <label htmlFor="question">Question:</label>
      <input
        type="text"
        id="question"
        value={props.question}
        onChange={(event) => props.setQuestion(event.target.value)}
      />
    </div>
  );
};

export default QuestionInput;
