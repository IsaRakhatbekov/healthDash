import { useState } from "react";
import FilterInput from "../FilterInput/FilterInput";
import HealthSections from "../HealthSections/HealthSections";
import styles from "./Aside.module.scss";

const filters = [
  { id: "1", naming: "text1" },
  { id: "2", naming: "text2" },
  { id: "3", naming: "text3" },
  { id: "4", naming: "text4" },
];

const Aside = ({}) => {
  const [selectedInput, setSelectedInput] = useState("");
  const [isInputSelected, setIsInputSelected] = useState(Boolean);

  const handleSelecInputId = (id: string) => {
    setSelectedInput(id);
    console.log(selectedInput);
  };

  return (
    <div className={styles.aside}>
      {filters.map((filter) => (
        <FilterInput
          key={filter.id}
          id={filter.id}
          naming={filter.naming}
          onClick={() => handleSelecInputId(filter.id)}
          isInputSelected={selectedInput === filter.id}
        />
      ))}
      <HealthSections />
    </div>
  );
};

export default Aside;
2;
