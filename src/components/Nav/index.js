import React, { useEffect} from 'react';

function Nav(props) {
  const {
    sections = [],
    setCurrentSection,
    currentSection,
  } = props;

  useEffect(() => {
    document.title = (currentSection.name);
  }, [currentSection]);


  return (
    <div>
      <nav className="navigation">
        <ul className="navbar">
          {sections.map((section) => (
            <li className={`mainEl ${
              currentSection.name === section.name && 'navActive font-weight-bold'
              }`} key={section.name}>
              <span onClick={() => {setCurrentSection(section)}} > {(section.name)}</span>
            </li>
          ))}
          </ul>
        {/* navigation that should include: HOME, ABOUT, PREVIOUS YEARS, ORGANIZERS */}
      </nav>
    </div>
  );
}

export default Nav;