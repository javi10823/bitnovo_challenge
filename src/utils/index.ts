export const formatCurrency = (value: string, fiat: string) => {
  switch (fiat) {
    case 'EUR':
      return value + ' €';
    case 'USD':
      return '$ ' + value;
    case 'GBP':
      return '£ ' + value;
    default:
      return `${fiat} ${value}`;
  }
};
