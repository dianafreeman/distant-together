
import flat_colors from './flat_colors';
// import brand from './brand';
    /*
    |-----------------------------------------------------------------------------
    | Colors                                  https://tailwindcss.com/docs/colors
    |-----------------------------------------------------------------------------
    |
    | The color palette defined above is also assigned to the "colors" key of
    | your Tailwind config. This makes it easy to access them in your CSS
    | using Tailwind's config helper. For example:
    |
    | .error { color: config('colors.red') }
    |
    */

export default {
  ...flat_colors,
  transparent: 'transparent',
  black: '#22292f',
  'grey-darkest': '#7F8C8D',
  'grey-darker': '#95A5A6',
  'grey-dark': '#8795a1',
  grey: '#BDC3C7',
  'grey-light': '#dae1e7',
  'grey-lighter': '#f1f5f8',
  'grey-lightest': '#ECF0F1',
  white: '#ffffff',
};
