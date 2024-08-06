import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

// Define font style
Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf",
      fontWeight: 400,
    },
    // {
    //   src: "https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkaVcUwaERZjA.ttf",
    //   fontWeight: 400,
    //   fontStyle: "italic",
    // },
    // {
    //   src: "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1y4nY1M2xLER.ttf",
    //   fontStyle: "normal",
    //   fontWeight: 700,
    // },
  ],
});

// Font.register({
//   family: 'Inter',
//   fonts: [
//     {
//       src: 'http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZhrib2Bg-4.ttf',
//       fontWeight: 800,
//     },
//   ],
// });

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Open Sans",
    backgroundColor: "#333999",
  },
  card: {
    borderWidth: 1,
    borderColor: "#333999",
    borderRadius: 20,
    marginBottom: 20,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Tidak didukung di @react-pdf/renderer
  },
  header: {
    backgroundColor: "#171B5E",
    color: "white",
    padding: 30,
    textAlign: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  body: {
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  section: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    padding: 20,
    borderRadius: 10,
    marginTop: 16,
    marginHorizontal: 25,
    marginBottom: 20,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  title: {
    // fontFamily: "Inter",
    fontSize: 24,
    // fontWeight: 700,
    marginBottom: 6,
  },
  text: {
    fontSize: 10,
    marginBottom: 4,
  },
  textBold: {
    fontSize: 10,
    // fontStyle: 700,
    marginBottom: 4,
  },
  textItalic: {
    fontSize: 10,
    // fontStyle: "italic",
    marginBottom: 4,
  },
  textRight: {
    textAlign: "right",
    fontSize: 10,
    marginBottom: 4,
  },
  table: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    marginTop: 16,
    marginHorizontal: 25,
    marginBottom: 20,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#333999",
    borderBottomStyle: "solid",
    backgroundColor: "#333999",
    color: "white",
    marginTop: -10,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 20,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    borderBottomStyle: "solid",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  tableCell: {
    flex: 1,
    fontSize: 10,
  },
  footer: {
    marginRight: 15,
    textAlign: "center",
    color: "white",
    fontSize: 12,
  },
  image: {
    width: "100px",
    height: "auto",
    margin: 6,
  },
  imageContact: {
    width: "70px",
    height: "auto",
    marginLeft: 15
  },
});

// Create Document Component
const MutationDocument = ({ formData, mutationData }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.container}>
            <View>
              <Text style={styles.title}>MUTASI REKENING</Text>
              <View style={styles.container}>
                <View style={styles.textRight}>
                  <Text style={styles.text}>Nama</Text>
                  <Text style={styles.text}>Nomor Rekening</Text>
                  <Text style={styles.text}>Periode</Text>
                  <Text style={styles.text}>Jenis Transaksi</Text>
                </View>
                <View>
                  <Text style={styles.textBold}>: {formData.name}</Text>
                  <Text style={styles.textBold}>
                    : {formData.accountNumber}
                  </Text>
                  <Text style={styles.textBold}>: {formData.period}</Text>
                  <Text style={styles.textBold}>
                    : {formData.transactionType}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Image style={styles.image} src="/images/taglinefooter.png" />
              <Text style={styles.textRight}>Jl. Binar Academy, No.1</Text>
              <Text style={styles.textRight}>satubantuan@co.id</Text>
              <Text style={styles.textRight}>Periode: {formData.period}</Text>
              <Text style={styles.textRight}>www.semuapakaisatu.com</Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.section}>
            <Text style={styles.text}>CATATAN:</Text>
            <Text style={styles.text}>
              Apabila nasabah tidak melakukan sanggahan atas Laporan Mutasi
              Rekening ini sampai dengan akhir bulan berikutnya, nasabah
              dianggap telah menyetujui segala data yang tercantum pada Laporan
              Mutasi Rekening ini.
            </Text>
          </View>
          <View style={styles.table}>
            {/* Table Header */}
            <View style={styles.tableHeader}>
              <Text style={[styles.tableCell, { flex: 1.5 }]}>TANGGAL</Text>
              <Text style={[styles.tableCell, { flex: 3 }]}>TRANSAKSI</Text>
              <Text style={[styles.tableCell, { flex: 2 }]}>KELUAR (IDR)</Text>
              <Text style={[styles.tableCell, { flex: 2 }]}>MASUK (IDR)</Text>
            </View>
            {/* Table Rows */}
            {mutationData.map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={[styles.tableCell, { flex: 1.5 }]}>
                  {item.date}
                </Text>
                <Text style={[styles.tableCell, { flex: 2.5 }]}>
                  {item.description}
                </Text>
                <Text style={[styles.tableCell, { flex: 2 }]}>
                  {item.debit}
                </Text>
                <Text style={[styles.tableCell, { flex: 2 }]}>
                  {item.credit}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.container}>
        <Image style={styles.imageContact} src="/images/contact.png" />
        <Text style={styles.footer}>Halaman 1/1</Text>
      </View>
    </Page>
  </Document>
);

export default MutationDocument;
