import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-row gap-2 justify-center p-4 lg:px-24 z-50 border-t-4">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        Built by <a href="https://www.linkedin.com/in/sukrit37/" style={{textDecoration: 'underline'}}>Sukrit</a>. The source code is available on <a href="" style={{textDecoration: 'underline'}}>Github</a>.
        </p>
      
    </div>
  );
};

export default Footer;
