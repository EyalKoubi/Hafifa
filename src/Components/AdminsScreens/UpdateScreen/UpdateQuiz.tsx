import { useEffect, useState } from "react";
import "../../../CSS/AdminScreens/UpdateQuiz.css";
import MultipleChoice from "./MultipleChoice";
import AdminMenu from "../AdminMenuScreen/AdminMenu";
import axios from "axios";

const UpdateQuiz = () => {
  const [question, setQuestion] = useState("");
  const [updateError, setUpdateError] = useState(false);
  const [updateErrorMessage, setUpdateErrorMessage] = useState("");
  const [multiplyChoice, setMultiplyChoice] = useState(false);
  const [back, setBack] = useState(false);

  useEffect(() => {
    setBack(false);
  }, []);

  const handleUpdateBack = () => {
    setBack(true);
  };

  function isNotEmpty() {
    if (question === "") {
      setUpdateError(true);
      setUpdateErrorMessage("Question field cannot be empty");
      return false;
    }
    return true;
  }

  const searchAndUpdate = (event: any) => {
    event.preventDefault();
    const notEmpty = isNotEmpty();
    if (notEmpty) {
      setUpdateError(false);
      axios
        .get(`http://localhost:8000/quizs/isFound?question=${question}`)
        .then((response: any) => {
          const data = response.data;
          if (data !== true) {
            setUpdateError(true);
            setUpdateErrorMessage("There is no such quiz!");
          } else {
            setUpdateError(false);
            setMultiplyChoice(true);
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <>
      {!back && !multiplyChoice && (
        <div className="all">
          <form onSubmit={searchAndUpdate}>
            <label htmlFor="question">Question:</label>
            <input
              type="text"
              id="question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
            <div className="button-group">
              <button type="submit" className="update-button">
                Update
              </button>
              <button onClick={handleUpdateBack} className="back-button">
                Back
              </button>
            </div>
            {updateError && <div className="error">{updateErrorMessage}</div>}
          </form>
        </div>
      )}
      {!back && multiplyChoice && <MultipleChoice from={question} />}
      {back && <AdminMenu />}
    </>
  );
};

export default UpdateQuiz;
