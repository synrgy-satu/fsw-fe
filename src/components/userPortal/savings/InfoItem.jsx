// eslint-disable-next-line react/prop-types
const InfoItem = ({ label, value, isStatus, isSaving, savingType }) => {
  let value2;
  if (isStatus) {
    value2 = (
      <p className={`font-bold ${value ? "text-green-500" : "text-red-500"}`}>
        {value ? "Aktif" : "Tidak Aktif"}
      </p>
    );
  } else if (isSaving) {
    value2 = (
      <img
        src={`/images/${savingType}.png`}
        alt= {`Savings Icon ${savingType}`} 
        style={{ height: "14px" }}
      />
    );
  } else {
    value2 = <p>{value}</p>;
  }

  return (
    <div className="grid grid-cols-2 items-center">
      <p className="font-bold">{label}</p>
      <div className="-ms-3">
      {value2}
      </div>
    </div>
  );
};

export default InfoItem;