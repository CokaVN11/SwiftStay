// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF", // white
  neutral200: "#F4F2F1", // lightest grey
  neutral300: "#D7CEC9", // light grey
  neutral400: "#B6ACA6", // grey
  neutral500: "#978F8A", // dark grey
  neutral600: "#564E4A", // dark grey
  neutral700: "#3C3836", // dark grey
  neutral800: "#191015", // black
  neutral900: "#000000", // black

  primary100: "#F4E0D9", // lightest orange
  primary200: "#FCDBC5", // light orange
  primary300: "#FF6400", // orange
  primary400: "#E65A00", // dark orange
  primary500: "#C34C00", // darker orange
  primary600: "#A63E00", // darkest orange

  secondary100: "#DCDDE9", // lightest blue
  secondary200: "#BCC0D6", // light blue
  secondary300: "#9196B9", // blue
  secondary400: "#626894", // dark blue
  secondary500: "#41476E", // darker blue

  accent100: "#FFEED4", // lightest yellow
  accent200: "#FFE1B2", // light yellow
  accent300: "#FDD495", // yellow
  accent400: "#FBC878", // dark yellow
  accent500: "#FFBB50", // darker yellow

  angry100: "#F2D6CD", // lightest red
  angry500: "#C03403", // red

  overlay20: "rgba(25, 16, 21, 0.2)", // black
  overlay50: "rgba(25, 16, 21, 0.5)", // black
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral500,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral300,
  /**
   * The header color.
   */
  header: palette.primary300,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,

  /**
   * The color of success messages.
   */
  success: palette.accent500,
  /**
   * Success Background.
   *
   */
  successBackground: palette.accent100,

  /**
   * The color of warning messages.
   *
   **/
  warning: palette.accent500,
  /**
   * Warning Background.
   *
   */
  warningBackground: palette.accent100,
  /**
   * The color of info messages.
   */
  info: palette.secondary500,
  /**
   * Info Background.
   *
   */
  infoBackground: palette.secondary100,

  /**
   * The color of disabled text.
   */
  disabled: palette.neutral400,
  /**
   * The background color of disabled buttons.
   */
  disabledBackground: palette.neutral100,


}
