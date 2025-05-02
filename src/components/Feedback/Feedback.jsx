export default function Feedback({ clicks }) {
  return (
    <ul>
      <li>Good: {clicks.good}</li>
      <li>Neutral: {clicks.neutral}</li>
      <li>Bad: {clicks.bad}</li>
    </ul>
  );
}
