import { getDateYear, getYearsRange } from '@/core/utils/date.util';

export const years = getYearsRange(1990, getDateYear(new Date()) + 10);
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
