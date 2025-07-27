const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; TechBites {new Date().getFullYear()} - by Gabriel Jackson
        </p>
      </div>
    </footer>
  );
};

export default Footer;