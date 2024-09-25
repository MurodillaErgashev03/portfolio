export const phonePattern = /^\(\d{2}\)-\d{3}-\d{2}-\d{2}$/;
export const smsPattern = /^\d-\d-\d-\d$/;
export const innPattern = /^\d{3}-\d{3}-\d{3}$/;
export const sourceNumberPattern = /^\d{4}$/;

type ValueType = string | number | undefined;
export const amountFormatter = (value: ValueType) =>
  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
export const amountParser = (value: ValueType) =>
  `${value}`!.replace(/\$\s?|(,*)/g, '');

export const dateFormat = 'YYYY-MM-DD';
export const monthFormat = 'YYYY-MM';
export const yearFormat = 'YYYY';
export const windowSize =
  typeof window !== 'undefined' ? window.innerWidth : 1440;
