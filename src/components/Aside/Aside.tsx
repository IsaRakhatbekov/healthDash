import { useState } from "react";
import FilterInput from "../FilterInput/FilterInput";
import HealthSections from "../HealthSections/HealthSections";
import styles from "./Aside.module.scss";
import Test from "../Test/Test";

const filters = [
  { id: "1", naming: "text1" },
  { id: "2", naming: "text2" },
  { id: "3", naming: "text3" },
  { id: "4", naming: "text4" },
];

const Aside = () => {
  const [selectedInputs, setSelectedInputs] = useState<string[]>([]); // ✅ теперь массив

  const handleToggleInput = (id: string) => {
    setSelectedInputs((prev) =>
      prev.includes(id)
        ? prev.filter((inputId) => inputId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className={styles.aside}>
      <Test />
      {filters.map((filter) => (
        <FilterInput
          key={filter.id}
          id={filter.id}
          naming={filter.naming}
          onChange={() => handleToggleInput(filter.id)} // ✅ правильно
          isInputSelected={selectedInputs.includes(filter.id)} // ✅ работает с массивом
        />
      ))}
      <HealthSections />
    </div>
  );
};

export default Aside;
