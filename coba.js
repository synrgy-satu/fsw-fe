const accounts = [
  {
    accountType: "saver",
    accountNumber: "12991213147",
    userName: "Karina Atifah Hana",
  },
  {
    accountType: "prioritas",
    accountNumber: "12991213146",
    userName: "Karina Atifah Hana",
  },
  {
    accountType: "bisnis",
    accountNumber: "12991213145",
    userName: "Karina Atifah Hana",
  },
];

console.log(accounts.find(x => x.accountType == "saver"))