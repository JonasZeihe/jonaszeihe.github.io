const loadProjects = (context) => {
  return context
    .keys()
    .filter((file) => file !== './index.js' && file !== './projectLoader.js') // Exclude irrelevant files
    .map((file) => ({
      name: file.replace('./', '').replace('.js', ''), // Extract project name
      component: context(file).default, // Dynamically load component
    }));
};

export default loadProjects;
