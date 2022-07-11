export const scoreCheck = (score) => {
  const value = score - Math.floor(score);

  if (value == 0) {
    return score;
  }

  if (value >= 0.5)
    return Math.round(score);
  else
    return  Math.floor(score) + 0.5;
};