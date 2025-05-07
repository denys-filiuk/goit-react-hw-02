export default function Feedback({ clicks, totalFeedback, positiveFeedback }) {
  return (
    <ul>
      <li>Good: {clicks.good}</li>
      <li>Neutral: {clicks.neutral}</li>
      <li>Bad: {clicks.bad}</li>
      {totalFeedback > 0 && <li>Total: {totalFeedback}</li>}
      {totalFeedback > 0 && <li>Positive: {positiveFeedback}%</li>}
    </ul>
  );
}
