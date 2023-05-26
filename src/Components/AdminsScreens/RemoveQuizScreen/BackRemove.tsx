interface BackRemoveProps {
  setRemoveQuiz: (value: React.SetStateAction<boolean>) => void;
}

const BackRemove = (props: BackRemoveProps) => {
  const handleRemoveBack = () => {
    props.setRemoveQuiz(true);
  };

  return (
    <button className="back-button" onClick={handleRemoveBack}>
      Back
    </button>
  );
};

export default BackRemove;
