export const returnRandomItemInArray: (obj: string[]) => string = (
  obj: string[]
) => {
  const index = Math.round((obj.length - 1) * Math.random());
  return obj[index];
};

export const returnGridSize = (
  scoreboardArray: number[],
  filterCriteria: number
) => {
  return (
    scoreboardArray.reduce(
      (total: number, i: number) => (i === filterCriteria ? total + 1 : total),
      0
    ) * 3
  );
};
