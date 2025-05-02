export default function Options({ updateFeedback }) {
  return (
    <>
      <button onClick={() => updateFeedback("good")}>good</button>
      <button onClick={() => updateFeedback("neutral")}>neutral</button>
      <button onClick={() => updateFeedback("bad")}>bad</button>
    </>
  );
}
