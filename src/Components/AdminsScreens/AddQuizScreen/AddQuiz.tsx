import { useState } from "react";
import "../../../CSS/AdminScreens/AddQuiz.css";
import AdminMenu from "../AdminMenuScreen/AdminMenu";
import axios from "axios";
import QuestionInput from "./QuestionInput";
import CorresctAnswer from "./CorrectAnswer";
import Option from "./Option";

const AddQuiz = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(1);
  const [back, setBack] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleBackAdd = () => {
    setBack(true);
  };

  const haveConflict = (options: any): boolean => {
    if (options[0] === options[1]) {
      setErrorMessage("Option 1 and Option 2 are the same.");
      return true;
    }
    if (options[0] === options[2]) {
      setErrorMessage("Option 1 and Option 3 are the same.");
      return true;
    }
    if (options[0] === options[3]) {
      setErrorMessage("Option 1 and Option 4 are the same.");
      return true;
    }
    if (options[1] === options[2]) {
      setErrorMessage("Option 2 and Option 3 are the same.");
      return true;
    }
    if (options[1] === options[3]) {
      setErrorMessage("Option 2 and Option 4 are the same.");
      return true;
    }
    if (options[2] === options[3]) {
      setErrorMessage("Option 3 and Option 4 are the same.");
      return true;
    }
    return false;
  };

  const prolematicInput = (): boolean => {
    if (
      question === "" ||
      options[0] === "" ||
      options[1] === "" ||
      options[2] === "" ||
      options[3] === ""
    ) {
      if (question === "")
        setErrorMessage("Please write question in the question field.");
      else if (options[0] === "")
        setErrorMessage("Please write the first option on Option1 field.");
      else if (options[1] === "")
        setErrorMessage("Please write the second option on Option2 field.");
      else if (options[2] === "")
        setErrorMessage("Please write the third option on Option3 field.");
      else setErrorMessage("Please write the fourth option on Option4 field.");
      setSuccess(false);
      setError(true);
      setCorrectAnswer(1);
      return false;
    }
    if (haveConflict(options)) {
      setSuccess(false);
      setError(true);
      return false;
    }
    return true;
  };

  const logToAppropriateType = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/quizs/isFound?question=${question}`
      );
      const data = response.data;
      if (data === true) {
        setError(true);
        setErrorMessage("The question is already exists.");
        setSuccess(false);
      } else {
        setError(false);
        setSuccess(true);
        try {
          const data = {
            question: question,
            options: options,
            correct: correctAnswer,
          };

          const response = await axios.post(
            "http://localhost:8000/quizs/create",
            data
          );
          console.log("Data posted successfully:", response.data);
          setQuestion("");
          setOptions(["", "", "", ""]);
          setCorrectAnswer(1);
        } catch (error) {
          console.error("Error posting data:", error);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmitAdd = async (event: any) => {
    event.preventDefault();
    const isValid = prolematicInput();
    if (isValid) logToAppropriateType();
  };

  return (
    <>
      {!back && (
        <div className="add-quiz-screen">
          <h1>Add Quiz</h1>
          <QuestionInput question={question} setQuestion={setQuestion} />
          <div className="options">
            <h3>Options:</h3>
            {options.map((option, index) => (
              <Option
                options={options}
                setOptions={setOptions}
                option={option}
                index={index}
              />
            ))}
          </div>
          <CorresctAnswer
            correctAnswer={correctAnswer}
            setCorrectAnswer={setCorrectAnswer}
          />
          <div className="button-group">
            <button onClick={handleSubmitAdd}>Submit</button>
            <button onClick={handleBackAdd}>Back</button>
          </div>
          {error && <div className="error">{errorMessage}</div>}
          {success && (
            <div className="success">The quiz added successfully!</div>
          )}
        </div>
      )}
      {back && <AdminMenu />}
    </>
  );
};

export default AddQuiz;
