import TW_COLORS from 'tailwindcss/colors';

export const COLORS = {
  ...TW_COLORS,

  background: '#f9f9fb',

  dark: '#000A2B',

  foreground: '#000A2B',

  primary: {
    DEFAULT: '#000F45',
    50: '#F7F7FF',
    100: '#DEDEFF',
    200: '#ABAEFF',
    300: '#7881FF',
    400: '#4456FF',
    500: '#122EFF',
    600: '#0020DE',
    700: '#001DAB',
    800: '#001777',
    900: '#000F45',
    950: '#000A2B',
  },

  secondary: {
    DEFAULT: '#bd8c1f',
  },

  danger: {
    DEFAULT: TW_COLORS.red['500'],
    ...TW_COLORS.red,
  },

  success: {
    DEFAULT: TW_COLORS.emerald['600'],
    ...TW_COLORS.emerald,
  },

  muted: {
    DEFAULT: TW_COLORS.gray['500'],
    ...TW_COLORS.gray,
    background: '#f1f5f9',
  },
};

export const APP_NAME = 'Glotelho Pay ERP';

export const BASENAME = `/${import.meta.env.REACT_APP_BASENAME}`;

export const ASSETS_SRC_PATH = `/${import.meta.env.REACT_APP_BASENAME}/assets/images`;

export const PHONE_NUMBER_REGEX = /^(6|2)(2|3|[5-9])[0-9]{7}$/;

export const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

export const TIMEZONE = 'Africa/Douala';

export const PAGINATION_PAGE_SIZE = 10;

export const GLOBAL_DEFAULT_FILTERING = {
  limit: PAGINATION_PAGE_SIZE,
  page: 1,
};

export const PLACEHOLDERS = {
  email: 'ex: example@domain.com',
  phone_number: 'ex: 698752569',
  name: 'ex: Franck',
  surname: 'ex: Alfred',
  password: '********',
  code: '****',
  amount: 'ex: 5000',
};
