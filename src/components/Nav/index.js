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
      <nav>
        {/* navigation that should include: HOME, ABOUT, PREVIOUS YEARS, ORGANIZERS */}
      </nav>
    </div>
  );
}

export default Nav;