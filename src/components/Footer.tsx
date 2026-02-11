const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-900 px-4 md:px-6 py-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-neutral-500">
        <div>© {year} Bojun Zhang. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="mailto:bojunzhangsus@gmail.com" className="hover:text-neutral-200 transition-colors">
            bojunzhangsus@gmail.com
          </a>
          <a href="https://instagram.com/bojundesign" className="hover:text-neutral-200 transition-colors" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://vimeo.com" className="hover:text-neutral-200 transition-colors" target="_blank" rel="noreferrer">
            Vimeo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
