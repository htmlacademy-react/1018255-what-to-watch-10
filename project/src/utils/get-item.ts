// Получение случайного целого числа в заданном интервале. Максимум и минимум включаются
const getRandomInt = (lower: number, upper: number): number => {
  const min = Math.ceil(lower);
  const max = Math.floor(upper);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getUniqItem = (array: string[]): string => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const current = array.splice(randomIndex, 1)[0];

  return current;
};

export const getAnyItem = (array: string[]): string => {
  const index = getRandomInt(0, array.length - 1);

  return array[index];
};
