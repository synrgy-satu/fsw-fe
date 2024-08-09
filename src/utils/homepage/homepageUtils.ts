export const percentageFormatter = (num, comma = 0) => {
  return new Intl.NumberFormat("default", {
    style: "percent",
    minimumFractionDigits: comma,
    maximumFractionDigits: comma,
  }).format(num / 100);
}

export const valueFormatter = function (number, convert = 1, locale = "id") {
  return new Intl.NumberFormat(locale, {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  // }).format(number / convert);
  }).format(+number / convert).toString();
};

export const aggregateData = (data, key) =>
  data.reduce((acc, curr) => acc + curr[key], 0);
