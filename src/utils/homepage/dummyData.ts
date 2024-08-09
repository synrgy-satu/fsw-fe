import { NEW_DUMMY } from "./dummy";

interface dailyTransaction {
  id_transaksi: number;
  tanggal_transaksi: string;
  tipe_transaksi: string;
  nominal: number;
  saldo_akhir: number;
}

interface periodiclyTransaction {
  period: string;
  debit?: number;
  kredit?: number;
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

export const filterFewMonths = (
  data: periodiclyTransaction[],
  period: number
) => {
  return data.slice(-period);
};

const filterLastMonth = (data: dailyTransaction[]) => {
  const monthAgo = new Date();
  monthAgo.setMonth(monthAgo.getMonth() - 1);

  return data.filter(transaction => {
    const transactionDate = new Date(transaction.tanggal_transaksi);
    return transactionDate >= monthAgo;
  });
};

const handleMissingData = (data: periodiclyTransaction[]) => {
  return data.map(entry => ({
    ...entry,
    kredit: entry.kredit ?? 0,
    debit: entry.debit ?? 0,
  }));
}

export class DummyData {
  private static dataDummy: dailyTransaction[] = NEW_DUMMY;

  private static getAggregateTransactionPeriodly = (
    data: dailyTransaction[],
    periodType?: string
  ) => {
    const newData = data.reduce(
      (previousValue: periodiclyTransaction[], currentValue: dailyTransaction) => {
        const date = new Date(currentValue.tanggal_transaksi);

        let period: string;
        if (periodType === "month" || periodType === "monthly") {
          period = `${monthNames[date.getMonth()]} ${String(
            date.getFullYear()
          ).slice(-2)}`;
        } else { 
          period = `${date.getDate()} ${monthNames[date.getMonth()]}`;
        }

        const type = currentValue.tipe_transaksi.toLowerCase();

        if (!previousValue.find((value) => value["period"] === period)) {
          previousValue.push({ period });
          const index = previousValue.findIndex(
            (value) => value["period"] === period
          );
          previousValue[index][type] = currentValue.nominal;
        } else {
          const index = previousValue.findIndex(
            (value) => value["period"] === period
          );
          if (!previousValue[index][type]) {
            previousValue[index][type] = currentValue.nominal;
          } else {
            previousValue[index][type] += currentValue.nominal;
          }
        }

        return previousValue;
      },
      []
    );
    return newData;
  };

  public static getPeriodiclyTransaction = (index: number) => {
    switch (index) {
      case 0:
        return DummyData.getAggregateTransactionPeriodly(DummyData.dataDummy, "month");

      case 1:
        return filterFewMonths(
          DummyData.getAggregateTransactionPeriodly(DummyData.dataDummy, "month"),
          6
        );

      case 2:
        return filterFewMonths(
          DummyData.getAggregateTransactionPeriodly(DummyData.dataDummy, "month"),
          3
        );

      case 3:
        const dailyTransactions = filterLastMonth(DummyData.dataDummy);
          const processedData = handleMissingData(DummyData.getAggregateTransactionPeriodly(dailyTransactions));
        return processedData;

      default:
        return DummyData.getAggregateTransactionPeriodly(DummyData.dataDummy);
    }
  };
}

export default DummyData;
