import { useState } from "react";
import "../../../CSS/AdminScreens/RemoveQuiz.css";
import AdminMenu from "../AdminMenuScreen/AdminMenu";
import { useEffect } from "react";
import axios from "axios";
import SpecificQuesion from "./SpecificQuestion";
import BackRemove from "./BackRemove";

const RemoveQuiz = () => {
  const [removeQuiz, setRemoveQuiz] = useState(false);
  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/quizs/getQuestions")
      .then((response: any) => {
        setQuizList(response.data);
      })
      .catch((error) => console.error(error));
  }, [quizList]);

  return (
    <>
      {!removeQuiz && (
        <div className="remove-quiz-screen">
          <h2>Remove Quiz</h2>
          <ul className="quiz-list">
            {quizList.map((quiz: any) => (
              <SpecificQuesion quiz={quiz} setQuizList={setQuizList} />
            ))}
          </ul>
          <BackRemove setRemoveQuiz={setRemoveQuiz} />
        </div>
      )}
      {removeQuiz && <AdminMenu></AdminMenu>}
    </>
  );
};

export default RemoveQuiz;
