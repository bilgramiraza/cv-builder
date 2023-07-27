function Header() {
  return (
    <div className="dark">
      <header className="bg-gray-300 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-center mx-auto max-w-screen-xl">
          <span className=" self-center text-3xl text-black font-bold whitespace-nowrap dark:text-white">
            CV Builder
          </span>
        </div>
      </header>
      <hr className="border-gray-900 sm:mx-auto dark:border-gray-500"/>
    </div>
  );
}

export default Header;
