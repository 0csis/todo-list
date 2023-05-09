const orderProjects = (projectsList) => {
  for (let i = 0; i < projectsList.length - 1; i++) {
    const iYear = Object.values(projectsList[i])[1].substr(0, 4);
    const iDay = Object.values(projectsList[i])[1].substr(8, 10);
    const iMonth = Object.values(projectsList[i])[1].substr(5, 7);
    for (let j = i + 1; j < projectsList.length; j++) {
      const jYear = Object.values(projectsList[j])[1].substr(0, 4);
      const jDay = Object.values(projectsList[j])[1].substr(8, 10);
      const jMonth = Object.values(projectsList[j])[1].substr(5, 7);
      if (iYear > jYear) {
        const temp = projectsList[i];
        projectsList[i] = projectsList[j];
        projectsList[j] = temp;
        i = -1;
        break;
      } else if (iYear == jYear && iMonth > jMonth) {
        const temp = projectsList[i];
        projectsList[i] = projectsList[j];
        projectsList[j] = temp;
        i = -1;
        break;
      } else if (iYear == jYear && iMonth == jMonth && iDay > jDay) {
        const temp = projectsList[i];
        projectsList[i] = projectsList[j];
        projectsList[j] = temp;
        i = -1;
        break;
      }
    }
  }
};

export { orderProjects };