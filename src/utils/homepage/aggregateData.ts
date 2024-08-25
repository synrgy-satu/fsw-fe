interface dailyTransaction {
  referenceNumber: string;
  jenisTransaksi: string;
  createdDate: Date;
  balance: number;
  amount: number;
  note: string;
}

interface periodiclyTransaction {
  period: string;
  Debit?: number;
  Kredit?: number;
}

interface dateOption {
  day: string;
  month: string;
}

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const handleMissingMonth = (
  data: periodiclyTransaction[],
  monthLength: number
) => {
  const iteration = monthLength - data?.length;

  const month = data[0]?.period?.split(" ")[0];
  let year = +data[0]?.period?.split(" ")[1];

  const currentMonthIndex = monthNames.findIndex((e) => e === month);

  if (iteration > 0) {
    let index = currentMonthIndex - 1;
    for (let i = 0; i < iteration; i++) {
      const newData = {
        period: `${monthNames[index]} ${year}`,
        Kredit: 0,
        Debit: 0,
      };
      data = [newData, ...data];
      if (index === 0) {
        index = 11;
        year--;
      } else index = index - 1;
    }
  }

  return data;
};

function handlemissingDates(transactions: periodiclyTransaction[]): periodiclyTransaction[] {
  const parseDate = (str: string): Date => new Date(Date.parse(str + " 2023")); // Assuming year 2023 for parsing

  const formatDate = (date: Date): string => {
      const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
      return date.toLocaleDateString('en-GB', options);
  };

  transactions.sort((a, b) => parseDate(a.period).getTime() - parseDate(b.period).getTime());

  const filledTransactions: periodiclyTransaction[] = [];
  let currentDate = parseDate(transactions[0].period);
  const endDate = parseDate(transactions[transactions.length - 1].period);

  let i = 0;
  while (currentDate <= endDate) {
      const formattedDate = formatDate(currentDate);

      if (transactions[i] && transactions[i].period === formattedDate) {
          filledTransactions.push(transactions[i]);
          i++;
      } else {
          filledTransactions.push({
              period: formattedDate,
              Debit: 0,
              Kredit: 0,
          });
      }

      currentDate.setDate(currentDate.getDate() + 1);
  }

  return filledTransactions;
}


export const filterFewMonths = (
  data: periodiclyTransaction[],
  period: number
) => {
  return handleMissingMonth(data?.slice(-period), period);
};

const filterLastMonth = (data: dailyTransaction[]) => {
  const monthAgo = new Date();
  monthAgo.setMonth(monthAgo.getMonth() - 1);

  return data.filter((transaction) => {
    return transaction.createdDate >= monthAgo;
  });
};

const handleMissingData = (data: periodiclyTransaction[]) => {
  return data.map((entry) => ({
    ...entry,
    Kredit: entry.Kredit ?? 0,
    Debit: entry.Debit ?? 0,
  }));
};

class GraphData {
  private static getAggregateTransactionPeriodly = (
    data: dailyTransaction[],
    periodType?: string
  ) => {
    const newData = data?.reduce(
      (
        previousValue: periodiclyTransaction[],
        currentValue: dailyTransaction
      ) => {
        const date = currentValue.createdDate;

        let period: string;
        if (periodType === "month" || periodType === "monthly") {
          period = `${monthNames[date?.getMonth()]} ${String(
            date?.getFullYear()
          )?.slice(-2)}`;
        } else {
          period = `${date?.getDate()} ${monthNames[date?.getMonth()]}`;
        }

        const type = currentValue.jenisTransaksi;

        if (!previousValue.find((value) => value["period"] === period)) {
          previousValue.push({ period });
          const index = previousValue.findIndex(
            (value) => value["period"] === period
          );

          previousValue[index][type] = currentValue.amount;
        } else {
          const index = previousValue.findIndex(
            (value) => value["period"] === period
          );
          if (!previousValue[index][type]) {
            previousValue[index][type] = currentValue.amount;
          } else {
            previousValue[index][type] += currentValue.amount;
          }
        }

        return previousValue;
      },
      []
    );
    return handleMissingData(newData);
    // return newData;
  };

  public static getPeriodiclyTransaction = (
    index: number,
    transactionData: dailyTransaction[]
  ) => {
    switch (index) {
      case 0:
        return filterFewMonths(
          GraphData.getAggregateTransactionPeriodly(transactionData, "month"),
          12
        );

      case 1:
        return filterFewMonths(
          GraphData.getAggregateTransactionPeriodly(transactionData, "month"),
          6
        );

      case 2:
        return filterFewMonths(
          GraphData.getAggregateTransactionPeriodly(transactionData, "month"),
          3
        );

      case 3:
        const dailyTransactions = filterLastMonth(transactionData);
        const processedData = handleMissingData(
          GraphData.getAggregateTransactionPeriodly(dailyTransactions)
        );
        return handlemissingDates(processedData);

      default:
        return GraphData.getAggregateTransactionPeriodly(transactionData);
    }
  };
}

export default GraphData;
