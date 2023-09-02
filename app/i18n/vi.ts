const vi = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },
  welcomeScreen: {
    postscript:
      "psst  — Đây có lẽ không phải là giao diện của bạn. (Trừ khi nhà thiết kế của bạn đã giao cho bạn những màn hình này, và trong trường hợp đó, hãy ship nó đi!)",
    readyForLaunch: "Ứng dụng của bạn, gần như đã sẵn sàng!",
    exciting: "(Ồ, thật là thú vị!)",
  },
  errorScreen: {
    title: "Có lỗi xảy ra!",
    friendlySubtitle:
      "Đây là màn hình mà người dùng của bạn sẽ thấy khi có lỗi xảy ra. Bạn sẽ muốn tùy chỉnh thông báo này (nằm trong `app/i18n/vi.ts`) và có thể là cả bố cục (`app/screens/ErrorScreen`). Nếu bạn muốn xóa hoàn toàn nó, hãy kiểm tra `app/app.tsx` cho thành phần <ErrorBoundary>.",
    reset: "RESET APP",
  },
  emptyStateComponent: {
    generic: {
      heading: "Thật trống trải... :(",
      content: "Chưa có dữ liệu. Hãy thử nhấp vào nút để refresh hoặc reload ứng dụng.",
      button: "Hãy thử lại",
    },
  },
  loginScreen: {
    login: "Đăng nhập",
    forgotPassword: "Quên mật khẩu?",
    createAccount: "Tạo tài khoản",
    noAccount: "Nếu bạn chưa có tài khoản? ",
    signUp: "Đăng ký",
    username: "Username",
    password: "Password",
    welcome: "Chào mừng bạn đến với Swift Stay",
    loginAsGuest: "Đăng nhập với tư cách khách",
  },
  registerScreen: {
    callout: "Bạn là",
    register: "Đăng ký",
    customer: "Khách hàng",
    customerDesc: "Người đang tìm kiếm một nơi ở",
    host: "Chủ nhà",
    hostDesc: "Người sẵn sàng cung cấp nơi ở",
    username: "Username",
    password: "Password",
    confirmPassword: "Nhập lại Password",
    firstName: "Tên",
    lastName: "Họ",
    phoneNumber: "Số điện thoại",
    address: "Địa chỉ",
    city: "Thành phố",
    province: "Tỉnh",
    phone: "Số điện thoại",
    hotel_name: "Tên khách sạn",
    email: "Email",
    agreeTerm: "Tôi đồng ý với ",
    term: "Điều khoản dịch vụ và Chính sách bảo mật",
    hotelName: "Tên khách sạn",
    hotelDescription: "Mô tả khách sạn",
    hotelImage: "Ảnh khách sạn",
  },
}
export default vi
export type TranslationKeys = typeof vi
