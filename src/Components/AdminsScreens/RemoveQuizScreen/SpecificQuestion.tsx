import axios from "axios";
interface SpecificQuesionProps {
  quiz: any;
  setQuizList: (value: React.SetStateAction<never[]>) => void;
}

const SpecificQuesion = (props: SpecificQuesionProps) => {
  const handleRealRemoveQuiz = (id: number) => {
    axios
      .delete(`http://localhost:8000/quizs/delete/${id}`)
      .then((response) => {
        const data = response.data;
        if (data.success) {
          const element = document.getElementById("all");
          if (element) {
            element.remove();
          }
          axios
            .get("http://localhost:8000/quizs/getQuestions")
            .then((response: any) => {
              props.setQuizList(response.data);
            });
        }
      });
  };

  return (
    <li className="quiz-item">
      <div className="quiz-question">{props.quiz.question}</div>
      <button
        className="remove-button"
        onClick={() => handleRealRemoveQuiz(props.quiz._id)}
      >
        X
      </button>
    </li>
  );
};

export default SpecificQuesion;
