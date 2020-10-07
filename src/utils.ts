export const asCurrency: (number: number) => string = number =>
  `$${number.toFixed(2)}`;
