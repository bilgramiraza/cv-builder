import PropTypes from 'prop-types';

function Header({ darkMode, handleDarkMode }) {
  return (
    <header className={`${darkMode ? 'dark' : ''} `}>
      <div className="flex justify-between py-2.5 border-b-2 border-black bg-gray-300 dark:border-white dark:bg-gray-800">
        <span className="ms-3 text-3xl text-black font-bold dark:text-white sm:me-1">
          CV Builder
        </span>
        <div className="flex flex-row justify-between me-3 sm:me-1">
          <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" name="dark-mode" id="dark-toggle" className="hidden" checked={darkMode} onChange={handleDarkMode}/>
              <div className="block border-2 border-gray-900 w-14 h-8 rounded-full dark:border-white "></div>
              <div className={`absolute top-1 ${darkMode ? 'left-7 dark:bg-white' : 'left-1 bg-gray-800'} w-6 h-6 rounded-full transition-all ease-in duration-300`}></div>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  handleDarkMode: PropTypes.func.isRequired,
};
