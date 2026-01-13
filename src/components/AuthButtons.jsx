function AuthButtons({ loginLabel, loginLink, signUpLabel, signUpLink }) {
  return (
    <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
      <a
        href={loginLink}
        className="hover:text-veryDarkViolet transition-colors"
      >
        {loginLabel}
      </a>
      <a
        href={signUpLink}
        className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2"
      >
        {signUpLabel}
      </a>
    </div>
  );
}
export default AuthButtons;
