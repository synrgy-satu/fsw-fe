export const aggregateData = (data, key) =>
  data.reduce((acc, curr) => acc + curr[key], 0);