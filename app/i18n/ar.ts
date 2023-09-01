import { Translations } from "./en"

const ar: Translations = {
  common: {
    ok: "نعم",
    cancel: "حذف",
    back: "خلف",
  },
  welcomeScreen: {
    postscript:
      "ربما لا يكون هذا هو الشكل الذي يبدو عليه تطبيقك مالم يمنحك المصمم هذه الشاشات وشحنها في هذه الحالة",
    readyForLaunch: "تطبيقك تقريبا جاهز للتشغيل",
    exciting: "اوه هذا مثير",
  },
  errorScreen: {
    title: "هناك خطأ ما",
    friendlySubtitle:
      "هذه هي الشاشة التي سيشاهدها المستخدمون في عملية الانتاج عند حدوث خطأ. سترغب في تخصيص هذه الرسالة ( الموجودة في 'ts.en/i18n/app') وربما التخطيط ايضاً ('app/screens/ErrorScreen'). إذا كنت تريد إزالة هذا بالكامل، تحقق من 'app/app.tsp' من اجل عنصر <ErrorBoundary>.",
    reset: "اعادة تعيين التطبيق",
  },
  emptyStateComponent: {
    generic: {
      heading: "فارغة جداً....حزين",
      content: "لا توجد بيانات حتى الآن. حاول النقر فوق الزر لتحديث التطبيق او اعادة تحميله.",
      button: "لنحاول هذا مرّة أخرى",
    },
  },
  loginScreen: {
    login: "تسجيل الدخول",
    forgotPassword: "نسيت كلمة المرور؟",
    createAccount: "إنشاء حساب",
    noAccount: "إذا لم يكن لديك حساب؟",
    signUp: "سجل",
    username: "اسم المستخدم",
    password: "كلمة المرور",
    welcome: "مرحبا بكم في سويفت ستاي",
    loginAsGuest: "تسجيل الدخول كضيف",
  },
  registerScreen: {
    callout: "أنت",
    register: "تسجيل",
    customer: "زبون",
    customerDesc: "من يبحث عن مكان للإقامة",
    host: "مضيف",
    hostDesc: "من يوفر مكان للإقامة",
    firstName: "الاسم الاول",
    lastName: "الكنية",
    username: "اسم المستخدم",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    phoneNumber: "رقم الهاتف",
    address: "عنوان",
    city: "مدينة",
    province: "مقاطعة",
    phone: "رقم الهاتف",
    hotel_name: "اسم الفندق",
    email: "البريد الإلكتروني",
    agreeTerm: "أوافق على الشروط والأحكام",
    term: "أوافق على الشروط والأحكام",
  }
}

export default ar
