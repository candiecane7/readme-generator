const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `
  };
  if (license === "Boost") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
    `
  }
  if (license === "IBM") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
    `
  }
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `
  }
  if (license === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
    `
  }
  if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
    `
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return `[${license}](http://www.apache.org/licenses/LICENSE-2.0)`;
  };
  if (license === "Boost") {
    return `[${license}](https://www.boost.org/LICENSE_1_0.txt)`;
  };
  if (license === "IBM") {
    return `[${license}](https://opensource.org/licenses/IPL-1.0)`;
  };
  if (license === "MIT") {
    return `[${license}](https://opensource.org/licenses/MIT)`;
  }
  if (license === "ISC") {
    return `[${license}](https://opensource.org/licenses/ISC)`;
  };
  if (license === "Mozilla") {
    return `[${license}](https://opensource.org/licenses/MPL-2.0)`;
  };
  if (!license) {
    return "";
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
  ## License
  For more information on the ${license} license, please visit ${renderLicenseLink(license)}.`
  } else {
    return "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)

## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributions
${data.contributing}
## Tests
${data.tests}
## Questions
For more information or to reach out, please [email me](mailto:${data.email}) or check out my [Github](https://github.com/${data.githubUsername})

${renderLicenseSection(data.license)}
`;
}

module.exports =
  generateMarkdown;
