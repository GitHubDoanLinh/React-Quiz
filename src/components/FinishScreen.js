function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const percentTage = (points / maxPossiblePoints) * 100;
  let emoji;
  if(percentTage === 100) emoji = "🥇"
  if(percentTage >= 80 && percentTage < 100) emoji = "🎉"
  if(percentTage >= 50 && percentTage < 80) emoji = "👍"
  if(percentTage >= 0 && percentTage < 50) emoji = "🤨";

  return (
    <>
    <p className="result">
      you scored <strong>{points}</strong> out of {maxPossiblePoints} (
      {Math.ceil(percentTage)}%)
    </p>
    <p className="highscore">highscore: {highscore} points</p>
    </>
  );
}
export default FinishScreen;
