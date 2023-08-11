import PropTypes from 'prop-types';

function Footer({darkMode}) {
  return (
    <footer className={`${darkMode ? 'dark' : ''} lg:min-h-[5vh]`}>
      <hr className="border-b-2 border-black dark:border-white"/>
      <div className="flex justify-center bg-gray-300 border-gray-200 py-2.5 dark:bg-gray-800">
        <span className="text-gray-900 text-center text-xl dark:text-gray-400">© 2023 <a href="https://github.com/bilgramiraza" target="_blank" rel="noreferrer" className="hover:underline">Built by S.M.Raza Hassan</a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;

Footer.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
