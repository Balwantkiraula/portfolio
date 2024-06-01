// components/Skills.js
const Skills = () => {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Frontend</h3>
            <ul className="list-disc list-inside">
              <li>HTML</li>
              <li>CSS / Sass</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>next.js</li>
              {/* Add more frontend skills here */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Other</h3>
            <ul className="list-disc list-inside">
              <li>Java</li>
              <li>Data structure</li>
              <li>RESTful APIs</li>
              <li>SQL</li>
              {/* Add more backend skills here */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skills;
  