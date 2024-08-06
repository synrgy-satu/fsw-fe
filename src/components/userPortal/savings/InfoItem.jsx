const InfoItem = ({ label, value, isStatus, isSaving, savingType }) => {
  let value2;
  if (isStatus) {
    value2 = (
      <p className={`font-bold ${value ? "text-green-300" : "text-red-400"}`}>
        {value ? "Aktif" : "Tidak Aktif"}
      </p>
    );
  } else if (isSaving) {
    value2 = (
      <img
        src={`/images/${savingType}.png`}
        alt="Savings Icon"
        style={{ height: "14px" }}
      />
    );
  } else {
    value2 = <p>{value}</p>;
  }

  return (
    <div className="grid grid-cols-2 items-center">
      <p className="font-bold">{label}</p>
      {value2}
    </div>
  );
};

export default InfoItem;