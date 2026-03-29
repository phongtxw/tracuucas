

function Footer({darkMode}) {
  return (
    <footer className={`mt-auto pt-8 pb-4 text-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-700'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="text-center text-sm">
            <p className="mb-2">
              Email:{" "}
              <a
                href="mailto:phongtx.it@gmail.com"
                className="text-blue-400 hover:underline"
              >
                phongtx.it@gmail.com
              </a>
            </p>
            <p className="mb-2">
              Phone:{" "}
              <a
                href="tel:+84982105525"
                className="text-blue-400 hover:underline"
              >
                0982105525
              </a>
            </p>
            <p className="mb-2">
              &copy; {new Date().getFullYear()} Peter World. All rights
              reserved.
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm mb-2">
              Đồng hành cùng thành công!
            </p>
            <p className="text-sm mb-2">
              Mình sẽ ghi nhận mọi đóng góp của mọi người tại địa chỉ email!
            </p>
            <p className="text-sm mb-2">
              Designed with passion and dedication. Explore, learn, and grow
              with me!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
