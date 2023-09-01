const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },
  welcomeScreen: {
    postscript:
      "psst  — This probably isn't what your app looks like. (Unless your designer handed you these screens, and in that case, ship it!)",
    readyForLaunch: "Your app, almost ready for launch!",
    exciting: "(ohh, this is exciting!)",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
  loginScreen: {
    login: "Login",
    forgotPassword: "Forgot Password?",
    createAccount: "Create Account",
    noAccount: "If you don't have an account? ",
    signUp: "Sign Up",
    username: "Username",
    password: "Password",
    email: "Email",
    welcome: "Welcome to Swift Stay",
    loginAsGuest: "Login as Guest",
  },
  registerScreen: {
    callout: "You are",
    register: "Register",
    customer: "Customer",
    customerDesc: "Who finds a place to stay",
    host: "Host",
    hostDesc: "Who provides a place to stay",
    firstName: "First Name",
    lastName: "Last Name",
    phoneNumber: "Phone Number",
    address: "Address",
    city: "City",
    province: "Province",
    phone: "Phone",
    hotel_name: "Hotel Name",
    email: "Email",
  }
}

export default en
export type Translations = typeof en
