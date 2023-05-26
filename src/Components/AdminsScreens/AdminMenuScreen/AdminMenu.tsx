import "../../../CSS/AdminScreens/AdminMenu.css";
import { useState } from "react";
import AddQuiz from "../AddQuizScreen/AddQuiz";
import RemoveQuiz from "../RemoveQuizScreen/RemoveQuiz";
import UpdateQuiz from "../UpdateScreen/UpdateQuiz";
import App from "../../../App";

const AdminMenu = () => {
  const [back, setBack] = useState(false);
  const [addQuiz, setAddQuiz] = useState(false);
  const [removeQuiz, setRemoveQuiz] = useState(false);
  const [updateQuiz, setUpdateQuiz] = useState(false);
  const handleAddQuiz = () => {
    setAddQuiz(true);
  };

  const handleRemoveQuiz = () => {
    setRemoveQuiz(true);
  };

  const handleUpdateQuiz = () => {
    setUpdateQuiz(true);
  };

  const handleBack = () => {
    setBack(true);
  };

  return (
    <>
      {back && <App />}
      {!back && !addQuiz && !removeQuiz && !updateQuiz && (
        <div className="quiz-screen">
          <h1>Quiz Screen</h1>
          <div className="button-group">
            <button className="add-button" onClick={handleAddQuiz}>
              Add Quiz
            </button>
            <button className="remove-button" onClick={handleRemoveQuiz}>
              Remove Quiz
            </button>
            <button className="update-button" onClick={handleUpdateQuiz}>
              Update Quiz
            </button>
            <button className="back-button" onClick={handleBack}>
              LogOut
            </button>
          </div>
        </div>
      )}
      {!back && addQuiz && !removeQuiz && !updateQuiz && <AddQuiz />}
      {!back && !addQuiz && removeQuiz && !updateQuiz && <RemoveQuiz />}
      {!back && !addQuiz && !removeQuiz && updateQuiz && <UpdateQuiz />}
    </>
  );
};

export default AdminMenu;
