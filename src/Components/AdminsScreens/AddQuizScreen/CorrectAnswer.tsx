interface CorrectAnswerProps {
  correctAnswer: number;
  setCorrectAnswer: (value: React.SetStateAction<number>) => void;
}

const CorresctAnswer = (props: CorrectAnswerProps) => {
  const handleCorrectAnswerChange = (event: any) => {
    props.setCorrectAnswer(Number(event.target.value));
  };

  return (
    <div className="input-group">
      <label htmlFor="correctAnswer">Correct Answer:</label>
      <select
        id="correctAnswer"
        value={props.correctAnswer}
        onChange={handleCorrectAnswerChange}
      >
        <option value={1}>Option 1</option>
        <option value={2}>Option 2</option>
        <option value={3}>Option 3</option>
        <option value={4}>Option 4</option>
      </select>
    </div>
  );
};

export default CorresctAnswer;
