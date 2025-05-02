export default function Feedback({ clicks, totalFeedback }) {
  return (
    <ul>
      <li>Good: {clicks.good}</li>
      <li>Neutral: {clicks.neutral}</li>
      <li>Bad: {clicks.bad}</li>
      {totalFeedback > 0 && <li>Total: {totalFeedback}</li>}
      {totalFeedback > 0 && (
        <li>Positive: {Math.round((clicks.good / totalFeedback) * 100)}%</li>
      )}
    </ul>
  );
}
