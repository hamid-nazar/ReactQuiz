function NextButton({ distpatch, answer, index, numQuestions }) {
  if (answer === null) {
    return null;
  }
  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => distpatch({ type: "NextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => distpatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
}

export default NextButton;
