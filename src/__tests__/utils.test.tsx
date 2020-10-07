import { asCurrency } from '../utils';

it('formats numbers with dollar sign and two decimal place precision', () => {
  const result = asCurrency(2);
  expect(result).toEqual('$2.00');
});
