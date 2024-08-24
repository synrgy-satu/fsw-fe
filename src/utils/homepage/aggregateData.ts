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

class DummyData {
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
          DummyData.getAggregateTransactionPeriodly(transactionData, "month"),
          12
        );

      case 1:
        return filterFewMonths(
          DummyData.getAggregateTransactionPeriodly(transactionData, "month"),
          6
        );

      case 2:
        return filterFewMonths(
          DummyData.getAggregateTransactionPeriodly(transactionData, "month"),
          3
        );

      case 3:
        const dailyTransactions = filterLastMonth(transactionData);
        const processedData = handleMissingData(
          DummyData.getAggregateTransactionPeriodly(dailyTransactions)
        );
        return processedData;

      default:
        return DummyData.getAggregateTransactionPeriodly(transactionData);
    }
  };
}

export default DummyData;
