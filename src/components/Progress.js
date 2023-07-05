function Progress({ index, numQuestion, points, maxPossiblepoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index}</strong>/{numQuestion}
      </p>
      <p>
        <strong>
          {points}/{maxPossiblepoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
