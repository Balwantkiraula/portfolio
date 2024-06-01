// components/Resume.js
const Resume = () => {
    return (
        <div>
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <p className="text-gray-700 mb-4">You can view my resume by clicking the link below:</p>
        <a
          href="https://drive.google.com/file/d/1WUAKZ2jz06tuH2VhtZTl0m0qCHXg6i8b/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 inline-block"
        >
          View Resume (PDF)
        </a>
      </div>
    );
  }
  
  export default Resume;
  