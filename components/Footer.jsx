import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-row gap-2 justify-center p-4 lg:px-24 z-50 border-t-4">
      <span className="leading-7 mt-6">
        Built by <a href="https://www.linkedin.com/in/sukrit37/" className="underline">Sukrit</a>. The source code is available on <a href="https://github.com/your-github-repository" className="underline">Github</a>.
      </span>
    </div>
  );
};

export default Footer;
