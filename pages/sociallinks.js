// components/SocialLinks.js
const SocialLinks = () => {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 17.2c0 .27-.23.5-.5.5H7.5c-.27 0-.5-.23-.5-.5V12h2.47c-.07.32-.12.65-.12 1 0 3.31 2.69 6 6 6 .35 0 .68-.05 1-.12V19.2z"/>
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              <circle cx="16.5" cy="7.5" r="1.5"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/balwant-kiraula/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H5zm2 2h10v12H7V5zm3 5h1.5v.5H10V10zm0 1.75h1.5v.5H10V11.75zm0 .75h1.5v.5H10v-.5zm0 1.75h1.5v.5H10v-.5zm-1.25-2.5a.25.25 0 11-.002-.498A.25.25 0 018.75 12zm-1.5-1.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"/>
            </svg>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.96 4.724c-.885.37-1.835.62-2.825.733A4.916 4.916 0 0023.096 3c-1.038.615-2.185 1.064-3.407 1.303C18.455 3.25 17.365 3 16.204 3c-2.584 0-4.667 2.114-4.667 4.712 0 .37.04.735.12 1.09C8.928 8.722 5.07 6.15 2.052 3.17a4.68 4.68 0 00-.624 2.372c0 1.63.824 3.068 2.074 3.907-.765-.03-1.482-.23-2.107-.573v.06c0 2.274 1.57 4.163 3.647 4.594-.384.105-.786.162-1.198.162-.292 0-.584-.03-.864-.085.584 1.807 2.28 3.124 4.29 3.156-1.572 1.226-3.548 1.957-5.702 1.957-.37 0-.735-.02-1.096-.085 2.036 1.298 4.46 2.05 7.065 2.05 8.474 0 13.107-7 13.107-13.068 0-.198 0-.395-.014-.588.9-.648 1.674-1.465 2.29-2.394z"/>
            </svg>
          </a>
        </div>
      </div>
    );
  }
  
  export default SocialLinks;
  