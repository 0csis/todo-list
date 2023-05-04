const orderToDos = (toDos) => {
  for (let i = 0; i < toDos.length - 1; i++) {
    const iYear = Object.values(toDos[i])[2].substr(6, 10);
    const iDay = Object.values(toDos[i])[2].substr(3, 5);
    const iMonth = Object.values(toDos[i])[2].substr(0, 2);
    for (let j = i + 1; j < toDos.length; j++) {
      const jYear = Object.values(toDos[j])[2].substr(6, 10);
      const jDay = Object.values(toDos[j])[2].substr(3, 5);
      const jMonth = Object.values(toDos[j])[2].substr(0, 2);
      if (iYear > jYear) {
        const temp = toDos[i];
        toDos[i] = toDos[j];
        toDos[j] = temp;
        i = -1;
        break;
      } else if (iYear == jYear && iMonth > jMonth) {
        const temp = toDos[i];
        toDos[i] = toDos[j];
        toDos[j] = temp;
        i = -1;
        break;
      } else if (iYear == jYear && iMonth == jMonth && iDay > jDay) {
        const temp = toDos[i];
        toDos[i] = toDos[j];
        toDos[j] = temp;
        i = -1;
        break;
      }
    }
  }
};

export { orderToDos };
