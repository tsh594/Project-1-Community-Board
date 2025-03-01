// App.jsx
import { useState, useEffect } from 'react';
import Card from './components/Card';
import './App.css';

// Category normalization function
const normalizeCategory = (category) => {
  return category
    .replace(/\b(Language|Languages|Programming Language)\b/gi, 'Languages')
    .replace(/\b(Markup|Styling)\b/gi, 'Frontend')
    .replace(/\b(Hosting|Cloud)\b/gi, 'Infrastructure')
    .replace(/\b(Learning Platform|Learning)\b/gi, 'Learning');
};

const resources = [  
  {
    id: 1,
    title: 'React Documentation',
    description: 'Official documentation for React library',
    link: 'https://react.dev',
    category: 'Frontend'
  },
  {
    id: 2,
    title: 'MDN Web Docs',
    description: 'Web development resources by Mozilla',
    link: 'https://developer.mozilla.org',
    category: 'Reference'
  },
  // freeCodeCamp
  {
    id: 3,
    title: 'freeCodeCamp',
    description: 'Open-source coding curriculum with interactive learning platform',
    link: 'https://www.freecodecamp.org',
    category: 'Learning Platform'
  },
  //Node.js Documentation
  {
    id: 4,
    title: 'Node.js Docs',
    description: 'Official documentation for Node.js runtime environment',
    link: 'https://nodejs.org/en/docs',
    category: 'Backend'
  },
  //GitHub Learning Lab
  {
    id: 5,
    title: 'GitHub Learning Lab',
    description: 'Interactive courses for mastering Git and GitHub',
    link: 'https://github.com/apps/github-learning-lab',
    category: 'Version Control'
  },
  //Stack Overflow
  {
    id: 6,
    title: 'Stack Overflow',
    description: 'Q&A platform for programming questions',
    link: 'https://stackoverflow.com',
    category: 'Community'
  },
  //CSS-Tricks
  {
    id: 7,
    title: 'CSS-Tricks',
    description: 'Daily articles about CSS and front-end development',
    link: 'https://css-tricks.com',
    category: 'Frontend'
  },
  //LeetCode
  {
    id: 8,
    title: 'LeetCode',
    description: 'Platform for coding interview preparation',
    link: 'https://leetcode.com',
    category: 'Algorithms'
  },
  //Python Official Docs
  {
    id: 9,
    title: 'Python Documentation',
    description: 'Official Python programming language documentation',
    link: 'https://docs.python.org',
    category: 'Language'
  },
  //Dev Community
  {
    id: 10,
    title: 'DEV Community',
    description: 'Open-source developer community platform',
    link: 'https://dev.to',
    category: 'Social'
  },
  //11. Docker Documentation
  {
    id: 11,
    title: 'Docker Docs',
    description: 'Official guides for containerization and Docker ecosystem',
    link: 'https://docs.docker.com',
    category: 'DevOps'
  },
  //12. WebAIM Accessibility Guide
  {
    id: 12,
    title: 'WebAIM Accessibility',
    description: 'Comprehensive web accessibility standards and techniques',
    link: 'https://webaim.org',
    category: 'Accessibility'
  },
  

  //Express.js Documentation
  {
    id: 13,
    title: 'Express.js Docs',
    description: 'Official documentation for Express.js web framework',
    link: 'https://expressjs.com',
    category: 'Backend'
  },
  //MongoDB Documentation
  {
    id: 14,
    title: 'MongoDB Docs',
    description: 'Official documentation for MongoDB database',
    link: 'https://docs.mongodb.com',
    category: 'Database'
  },
  //SQL Documentation
  {
    id: 15,
    title: 'SQL Documentation',
    description: 'Official documentation for SQL language',
    link: 'https://dev.mysql.com/doc',
    category: 'Database'
  },
  //Firebase Documentation
  {
    id: 16,
    title: 'Firebase Docs',
    description: 'Official documentation for Firebase platform',
    link: 'https://firebase.google.com/docs',
    category: 'Backend'
  },
  //Django Documentation
  {
    id: 17,
    title: 'Django Docs',
    description: 'Official documentation for Django web framework',
    link: 'https://docs.djangoproject.com',
    category: 'Backend'
  },
  //Flask Documentation
  {
    id: 18,
    title: 'Flask Docs',
    description: 'Official documentation for Flask web framework',
    link: 'https://flask.palletsprojects.com',
    category: 'Backend'
  },
  //Python Documentation
  {
    id: 19,
    title: 'Python Docs',
    description: 'Official documentation for Python programming language',
    link: 'https://docs.python.org/3',
    category: 'Programming Language'
  },
  //JavaScript Documentation
  {
    id: 20,
    title: 'JavaScript Docs',
    description: 'Official documentation for JavaScript programming language',
    link: 'https://devdocs.io/javascript',
    category: 'Programming Language'
  },
  //HTML Documentation
  {
    id: 21,
    title: 'HTML Docs',
    description: 'Official documentation for HTML markup language',
    link: 'https://devdocs.io/html',
    category: 'Markup Language'
  },
  //CSS Documentation
  {
    id: 22,
    title: 'CSS Docs',
    description: 'Official documentation for CSS styling language',
    link: 'https://devdocs.io/css',
    category: 'Styling Language'
  },
  //Bootstrap Documentation
  {
    id: 23,
    title: 'Bootstrap Docs',
    description: 'Official documentation for Bootstrap framework',
    link: 'https://getbootstrap.com/docs',
    category: 'Frontend'
  },
  //Tailwind CSS Documentation
  {
    id: 24,
    title: 'Tailwind CSS Docs',
    description: 'Official documentation for Tailwind CSS framework',
    link: 'https://tailwindcss.com/docs',
    category: 'Frontend'
  },
  //Sass Documentation
  {
    id: 25,
    title: 'Sass Docs',
    description: 'Official documentation for Sass styling language',
    link: 'https://sass-lang.com/documentation',
    category: 'Styling Language'
  },
  //Jest Documentation
  {
    id: 26,
    title: 'Jest Docs',
    description: 'Official documentation for Jest testing framework',
    link: 'https://jestjs.io/docs',
    category: 'Testing'
  },
  //Cypress Documentation
  {
    id: 27,
    title: 'Cypress Docs',
    description: 'Official documentation for Cypress testing framework',
    link: 'https://docs.cypress.io',
    category: 'Testing'
  },
  //Jasmine Documentation
  {
    id: 28,
    title: 'Jasmine Docs',
    description: 'Official documentation for Jasmine testing framework',
    link: 'https://jasmine.github.io/pages/docs_home.html',
    category: 'Testing'
  },
  //Mocha Documentation
  {
    id: 29,
    title: 'Mocha Docs',
    description: 'Official documentation for Mocha testing framework',
    link: 'https://mochajs.org',
    category: 'Testing'
  },
  //Chai Documentation
  {
    id: 30,
    title: 'Chai Docs',
    description: 'Official documentation for Chai assertion library',
    link: 'https://www.chaijs.com',
    category: 'Testing'
  },
  //Postman Documentation
  {
    id: 31,
    title: 'Postman Docs',
    description: 'Official documentation for Postman API client',
    link: 'https://learning.postman.com/docs',
    category: 'API'
  },
  //Swagger Documentation
  {
    id: 32,
    title: 'Swagger Docs',
    description: 'Official documentation for Swagger API framework',
    link: 'https://swagger.io/docs',
    category: 'API'
  },
  //GraphQL Documentation
  {
    id: 33,
    title: 'GraphQL Docs',
    description: 'Official documentation for GraphQL query language',
    link: 'https://graphql.org/learn',
    category: 'API'
  },
  //REST API Documentation
  {
    id: 34,
    title: 'REST API Docs',
    description: 'Official documentation for REST API architecture',
    link: 'https://restfulapi.net',
    category: 'API'
  },
  //Git Documentation
  {
    id: 35,
    title: 'Git Docs',
    description: 'Official documentation for Git version control system',
    link: 'https://git-scm.com/doc',
    category: 'Version Control'
  },
  //GitHub Documentation
  {
    id: 36,
    title: 'GitHub Docs',
    description: 'Official documentation for GitHub platform',
    link: 'https://docs.github.com',
    category: 'Version Control'
  },
  //GitLab Documentation
  {
    id: 37,
    title: 'GitLab Docs',
    description: 'Official documentation for GitLab platform',
    link: 'https://docs.gitlab.com',
    category: 'Version Control'
  },
  //Bitbucket Documentation
  {
    id: 38,
    title: 'Bitbucket Docs',
    description: 'Official documentation for Bitbucket platform',
    link: 'https://support.atlassian.com/bitbucket-cloud/docs',
    category: 'Version Control'
  },
  //VS Code Documentation
  {
    id: 39,
    title: 'VS Code Docs',
    description: 'Official documentation for Visual Studio Code editor',
    link: 'https://code.visualstudio.com/docs',
    category: 'Editor'
  },
  //Sublime Text Documentation
  {
    id: 40,
    title: 'Sublime Text Docs',
    description: 'Official documentation for Sublime Text editor',
    link: 'https://www.sublimetext.com/docs',
    category: 'Editor'
  },
  //Atom Documentation
  {
    id: 41,
    title: 'Atom Docs',
    description: 'Official documentation for Atom editor',
    link: 'https://flight-manual.atom.io',
    category: 'Editor'
  },
  //WebStorm Documentation
  {
    id: 42,
    title: 'WebStorm Docs',
    description: 'Official documentation for WebStorm IDE',
    link: 'https://www.jetbrains.com/webstorm/documentation',
    category: 'IDE'
  },
  //PyCharm Documentation
  {
    id: 43,
    title: 'PyCharm Docs',
    description: 'Official documentation for PyCharm IDE',
    link: 'https://www.jetbrains.com/pycharm/documentation',
    category: 'IDE'
  },
  //IntelliJ IDEA Documentation
  {
    id: 44,
    title: 'IntelliJ IDEA Docs',
    description: 'Official documentation for IntelliJ IDEA IDE',
    link: 'https://www.jetbrains.com/idea/documentation',
    category: 'IDE'
  },
  //Eclipse Documentation
  {
    id: 45,
    title: 'Eclipse Docs',
    description: 'Official documentation for Eclipse IDE',
    link: 'https://help.eclipse.org/2021-06/index.jsp',
    category: 'IDE'
  },
  //DevDocs Documentation
  {
    id: 46,
    title: 'DevDocs',
    description: 'Web development documentation aggregator',
    link: 'https://devdocs.io',
    category: 'Reference'
  },
  //MDN Web Docs
  {
    id: 48,
    title: 'MDN Web Docs',
    description: 'Web development resources by Mozilla',
    link: 'https://developer.mozilla.org',
    category: 'Reference'
  },
  //W3Schools Documentation
  {
    id: 49,
    title: 'W3Schools',
    description: 'Web development tutorials and references',
    link: 'https://www.w3schools.com',
    category: 'Reference'
  },
  //GeeksforGeeks Documentation
  {
    id: 50,
    title: 'GeeksforGeeks',
    description: 'Computer science portal for geeks',
    link: 'https://www.geeksforgeeks.org',
    category: 'Reference'
  },
  //HackerRank Documentation
  {
    id: 51,
    title: 'HackerRank',
    description: 'Programming practice and competition platform',
    link: 'https://www.hackerrank.com',
    category: 'Learning Platform'
  },
  //Codecademy Documentation
  {
    id: 52,
    title: 'Codecademy',
    description: 'Online interactive platform for coding practice',
    link: 'https://www.codecademy.com',
    category: 'Learning Platform'
  },
  //edX Documentation
  {
    id: 53,
    title: 'edX',
    description: 'Online learning platform with university-level courses',
    link: 'https://www.edx.org',
    category: 'Learning Platform'
  },
  //Coursera Documentation
  {
    id: 54,
    title: 'Coursera',
    description: 'Online courses from universities and colleges',
    link: 'https://www.coursera.org',
    category: 'Learning Platform'
  },
  //Udemy Documentation
  {
    id: 55,
    title: 'Udemy',
    description: 'Online learning and teaching marketplace',
    link: 'https://www.udemy.com',
    category: 'Learning Platform'
  },
  //Pluralsight Documentation
  {
    id: 56,
    title: 'Pluralsight',
    description: 'Technology skills platform for businesses and individuals',
    link: 'https://www.pluralsight.com',
    category: 'Learning Platform'
  },
  //LinkedIn Learning Documentation
  {
    id: 57,
    title: 'LinkedIn Learning',
    description: 'Online learning platform with video courses',
    link: 'https://www.linkedin.com/learning',
    category: 'Learning Platform'
  },
  //YouTube Documentation
  {
    id: 58,
    title: 'YouTube',
    description: 'Video-sharing platform with educational content',
    link: 'https://www.youtube.com',
    category: 'Learning Platform'
  },
  //Medium Documentation
  {
    id: 59,
    title: 'Medium',
    description: 'Online publishing platform with tech articles',
    link: 'https://medium.com',
    category: 'Learning Platform'
  },
  //Dev.to Documentation
  {
    id: 60,
    title: 'Dev.to',
    description: 'Community platform for software developers',
    link: 'https://dev.to',
    category: 'Learning Platform'
  },
  //Hashnode Documentation
  {
    id: 61,
    title: 'Hashnode',
    description: 'Blogging platform for developers and technologists',
    link: 'https://hashnode.com',
    category: 'Learning Platform'
  },
  //Hacker News Documentation
  {
    id: 62,
    title: 'Hacker News',
    description: 'Social news website for tech and startups',
    link: 'https://news.ycombinator.com',
    category: 'Learning Platform'
  },
  //Reddit Documentation
  {
    id: 63,
    title: 'Reddit',
    description: 'Online community platform with programming subreddits',
    link: 'https://www.reddit.com',
    category: 'Learning Platform'
  },
  //Stack Exchange Documentation
  {
    id: 64,
    title: 'Stack Exchange',
    description: 'Network of question and answer websites',
    link: 'https://stackexchange.com',
    category: 'Learning Platform'
  },
  //CodePen Documentation
  {
    id: 65,
    title: 'CodePen',
    description: 'Online code editor and front-end web development platform',
    link: 'https://codepen.io',
    category: 'Learning Platform'
  },
  //JSFiddle Documentation
  {
    id: 66,
    title: 'JSFiddle',
    description: 'Online IDE for web development',
    link: 'https://jsfiddle.net',
    category: 'Learning Platform'
  },
  //Repl.it Documentation
  {
    id: 67,
    title: 'Repl.it',
    description: 'Online IDE for programming languages',
    link: 'https://repl.it',
    category: 'Learning Platform'
  },
  //Glitch Documentation
  {
    id: 68,
    title: 'Glitch',
    description: 'Online community for creating web apps',
    link: 'https://glitch.com',
    category: 'Learning Platform'
  },
  //CodeSandbox Documentation
  {
    id: 69,
    title: 'CodeSandbox',
    description: 'Online code editor tailored for web application development',
    link: 'https://codesandbox.io',
    category: 'Learning Platform'
  },
  //StackBlitz Documentation
  {
    id: 70,
    title: 'StackBlitz',
    description: 'Online IDE for web development',
    link: 'https://stackblitz.com',
    category: 'Learning Platform'
  },
  //Heroku Documentation
  {
    id: 71,
    title: 'Heroku Docs',
    description: 'Official documentation for Heroku cloud platform',
    link: 'https://devcenter.heroku.com',
    category: 'Hosting'
  },
  //Netlify Documentation
  {
    id: 72,
    title: 'Netlify Docs',
    description: 'Official documentation for Netlify hosting platform',
    link: 'https://docs.netlify.com',
    category: 'Hosting'
  },
  //Vercel Documentation
  {
    id: 73,
    title: 'Vercel Docs',
    description: 'Official documentation for Vercel hosting platform',
    link: 'https://vercel.com/docs',
    category: 'Hosting'
  },
  //DigitalOcean Documentation
  {
    id: 74,
    title: 'DigitalOcean Docs',
    description: 'Official documentation for DigitalOcean cloud platform',
    link: 'https://www.digitalocean.com/docs',
    category: 'Hosting'
  },
  //AWS Documentation
  {
    id: 75,
    title: 'AWS Docs',
    description: 'Official documentation for Amazon Web Services cloud platform',
    link: 'https://docs.aws.amazon.com',
    category: 'Hosting'
  },
  //Google Cloud Documentation
  {
    id: 76,
    title: 'Google Cloud Docs',
    description: 'Official documentation for Google Cloud Platform',
    link: 'https://cloud.google.com/docs',
    category: 'Hosting'
  },
  //Microsoft Azure Documentation
  {
    id: 77,
    title: 'Azure Docs',
    description: 'Official documentation for Microsoft Azure cloud platform',
    link: 'https://docs.microsoft.com/en-us/azure',
    category: 'Hosting'
  },
  //Firebase Documentation
  {
    id: 78,
    title: 'Firebase Docs',
    description: 'Official documentation for Firebase platform',
    link: 'https://firebase.google.com/docs',
    category: 'Hosting'
  },
  //Cloudflare Documentation
  {
    id: 79,
    title: 'Cloudflare Docs',
    description: 'Official documentation for Cloudflare services',
    link: 'https://developers.cloudflare.com/docs',
    category: 'Hosting'
  },
  //NGINX Documentation
  {
    id: 80,
    title: 'NGINX Docs',
    description: 'Official documentation for NGINX web server',
    link: 'https://nginx.org/en/docs',
    category: 'Hosting'
  },
  //Kubernetes Documentation
  {
    id: 81,
    title: 'Kubernetes Docs',
    description: 'Official documentation for Kubernetes container orchestration',
    link: 'https://kubernetes.io/docs',
    category: 'DevOps'
  },
  //Jenkins Documentation
  {
    id: 82,
    title: 'Jenkins Docs',
    description: 'Official documentation for Jenkins automation server',
    link: 'https://www.jenkins.io/doc',
    category: 'DevOps'
  },
  //Travis CI Documentation
  {
    id: 83,
    title: 'Travis CI Docs',
    description: 'Official documentation for Travis CI continuous integration service',
    link: 'https://docs.travis-ci.com',
    category: 'DevOps'
  },
  //CircleCI Documentation
  {
    id: 84,
    title: 'CircleCI Docs',
    description: 'Official documentation for CircleCI continuous integration platform',
    link: 'https://circleci.com/docs',
    category: 'DevOps'
  },
  //GitLab CI/CD Documentation
  {
    id: 85,
    title: 'GitLab CI/CD Docs',
    description: 'Official documentation for GitLab CI/CD pipeline',
    link: 'https://docs.gitlab.com/ee/ci',
    category: 'DevOps'
  },
  //GitHub Actions Documentation
  {
    id: 86,
    title: 'GitHub Actions Docs',
    description: 'Official documentation for GitHub Actions workflow automation',
    link: 'https://docs.github.com/en/actions',
    category: 'DevOps'
  },
  //Ansible Documentation
  {
    id: 87,
    title: 'Ansible Docs',
    description: 'Official documentation for Ansible automation tool',
    link: 'https://docs.ansible.com',
    category: 'DevOps'
  },
  //Terraform Documentation
  {
    id: 88,
    title: 'Terraform Docs',
    description: 'Official documentation for Terraform infrastructure as code',
    link: 'https://learn.hashicorp.com/tutorials/terraform',
    category: 'DevOps'
  },
  //Puppet Documentation
  {
    id: 89,
    title: 'Puppet Docs',
    description: 'Official documentation for Puppet configuration management',
    link: 'https://puppet.com/docs',
    category: 'DevOps'
  },
  //Chef Documentation
  {
    id: 90,
    title: 'Chef Docs',
    description: 'Official documentation for Chef automation platform',
    link: 'https://docs.chef.io',
    category: 'DevOps'
  },
  //Prometheus Documentation
  {
    id: 91,
    title: 'Prometheus Docs',
    description: 'Official documentation for Prometheus monitoring system',
    link: 'https://prometheus.io/docs',
    category: 'DevOps'
  },
  //Grafana Documentation
  {
    id: 92,
    title: 'Grafana Docs',
    description: 'Official documentation for Grafana observability platform',
    link: 'https://grafana.com/docs',
    category: 'DevOps'
  },
  //ELK Stack Documentation
  {
    id: 93,
    title: 'ELK Stack Docs',
    description: 'Official documentation for ELK Stack log management',
    link: 'https://www.elastic.co/guide/index.html',
    category: 'DevOps'
  },
  //Splunk Documentation
  {
    id: 94,
    title: 'Splunk Docs',
    description: 'Official documentation for Splunk data platform',
    link: 'https://docs.splunk.com',
    category: 'DevOps'
  },
  //New Relic Documentation
  {
    id: 95,
    title: 'New Relic Docs',
    description: 'Official documentation for New Relic observability platform',
    link: 'https://docs.newrelic.com',
    category: 'DevOps'
  },
  //Datadog Documentation
  {
    id: 96,
    title: 'Datadog Docs',
    description: 'Official documentation for Datadog monitoring platform',
    link: 'https://docs.datadoghq.com',
    category: 'DevOps'
  },
  //Sentry Documentation
  {
    id: 97,
    title: 'Sentry Docs',
    description: 'Official documentation for Sentry error tracking',
    link: 'https://docs.sentry.io',
    category: 'DevOps'
  },
  //Raygun Documentation
  {
    id: 98,
    title: 'Raygun Docs',
    description: 'Official documentation for Raygun application monitoring',
    link: 'https://raygun.com/documentation',
    category: 'DevOps'
  },
  //Rollbar Documentation
  {
    id: 99,
    title: 'Rollbar Docs',
    description: 'Official documentation for Rollbar error tracking',
    link: 'https://docs.rollbar.com',
    category: 'DevOps'
  },
  //Bugsnag Documentation
  {
    id: 100,
    title: 'Bugsnag Docs',
    description: 'Official documentation for Bugsnag error monitoring',
    link: 'https://docs.bugsnag.com',
    category: 'DevOps'
  },
  //Airbrake Documentation
  {
    id: 101,
    title: 'Airbrake Docs',
    description: 'Official documentation for Airbrake error tracking',
    link: 'https://airbrake.io/docs',
    category: 'DevOps'
  },
  {
    id: 102,
    title: 'Webpack Docs',
    description: 'Official documentation for Webpack module bundler',
    link: 'https://webpack.js.org/concepts',
    category: 'Build Tools'
  },
  {
    id: 103,
    title: 'ESLint Docs',
    description: 'Official documentation for ESLint static code analysis',
    link: 'https://eslint.org/docs/user-guide',
    category: 'Tools'
  },
  {
    id: 104,
    title: 'TypeScript Docs',
    description: 'Official documentation for TypeScript',
    link: 'https://www.typescriptlang.org/docs',
    category: 'Languages'
  },
  {
    id: 105,
    title: 'Next.js Docs',
    description: 'Official documentation for Next.js framework',
    link: 'https://nextjs.org/docs',
    category: 'Frontend'
  },
  {
    id: 106,
    title: 'Redux Docs',
    description: 'Official documentation for Redux state management',
    link: 'https://redux.js.org',
    category: 'Frontend'
  }
].map(res => ({
  ...res,
  category: normalizeCategory(res.category)
}));

// ID validation function
const validateResources = (resources) => {
  const ids = new Set();
  resources.forEach(res => {
    if (ids.has(res.id)) console.error(`Duplicate ID: ${res.id} - ${res.title}`);
    ids.add(res.id);
  });
};
validateResources(resources);

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get normalized categories
  const categories = ['All', ...new Set(resources.map(r => r.category))];

  // Filter resources
  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

  // Reset scroll position
  useEffect(() => {
    const container = document.querySelector('.cards-container');
    if (container) container.scrollTop = 0;
  }, [selectedCategory]);

  return (
    <div className="app">
      <h1>👨💻 Software Engineering Hub</h1>
      
      <div className="filter-menu">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="cards-container">
        {filteredResources.map((resource) => (
          <Card key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}

export default App;