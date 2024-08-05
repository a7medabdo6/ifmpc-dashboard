import Multiselect from "react-select";
export const SingleselectMonth = (props) => {
    const objectArray = [
      { value: "january", label: "January" },
      { value: "february", label: "February " },
      { value: "march", label: "March" },
      { value: "april", label: "April" },
      { value: "may", label: " May" },
      { value: "june", label: " June" },
      { value: "july", label: " July" },
      { value: "august", label: " August" },
      { value: "september", label: " Septmber" },
      { value: "2013", label: "October" },
      { value: "november", label: "November" },
      { value: "december", label: " December" },
    ];
    return (
      <div>
        <Multiselect
          options={objectArray}
          {...props}
          singleSelect
          displayValue="key"
        />
      </div>
    );
  };