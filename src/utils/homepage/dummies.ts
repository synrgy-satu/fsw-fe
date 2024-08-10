import { aggregateData } from "./homepageUtils";

export const DUMMY_DATA = [
  { month: "Jan", debit: 5000000, deposit: 7000000, invest: 3000000 },
  { month: "Feb", debit: 4000000, deposit: 8000000, invest: 3500000 },
  { month: "Mar", debit: 6000000, deposit: 7500000, invest: 4000000 },
  { month: "Apr", debit: 7000000, deposit: 9000000, invest: 4500000 },
  { month: "May", debit: 6500000, deposit: 8500000, invest: 5000000 },
  { month: "Jun", debit: 6000000, deposit: 9500000, invest: 5500000 },
  { month: "Jul", debit: 7000000, deposit: 10000000, invest: 6000000 },
  { month: "Aug", debit: 7500000, deposit: 10500000, invest: 6500000 },
  { month: "Sep", debit: 8000000, deposit: 11000000, invest: 7000000 },
  { month: "Oct", debit: 8500000, deposit: 11500000, invest: 7500000 },
  { month: "Nov", debit: 9000000, deposit: 12000000, invest: 8000000 },
  { month: "Dec", debit: 9500000, deposit: 12500000, invest: 8500000 },
];

export const dummyAccounts = [
  {
    accountType: "saver",
    userName: "Karina Atifah Hana",
    balance: 4410020,
    cardType: "Debit",
    cardNumber: "1021-1232-1231-1213",
    accountNumber: "2321341341",
    expirationDate: "10/25",
    status: true,
  },
  {
    accountType: "prioritas",
    userName: "Karina Atifah Hana",
    balance: 1200000000,
    cardType: "Credit",
    cardNumber: "4521-1232-5678-9012",
    accountNumber: "1122334455",
    expirationDate: "12/26",
    status: true,
  },
  {
    accountType: "edu",
    userName: "Karina Atifah Hana",
    balance: 7550000,
    cardType: "Debit",
    cardNumber: "6789-1234-5678-4321",
    accountNumber: "9988776655",
    expirationDate: "08/24",
    status: true,
  },
];

export const donut = [
  {
    name: "Debit",
    value: aggregateData(DUMMY_DATA, "debit"),
  },
  {
    name: "Deposito",
    value: aggregateData(DUMMY_DATA, "deposit"),
  },
  {
    name: "Investasi",
    value: aggregateData(DUMMY_DATA, "invest"),
  },
];

export const CURRENCIES = [
  {
    name: "IDR",
    convert: 1,
    symbol: "IDR",
    locale: "id",
  },
  {
    name: "USD",
    convert: 16240,
    symbol: "$",
    locale: "us",
  },
];
