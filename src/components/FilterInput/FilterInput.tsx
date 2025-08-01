import { useState, type FC } from "react";
import styles from "./FilterInput.module.scss";

type filtersProps = {
  id: string;
  naming: string;
  onChange: () => void;
  isInputSelected: boolean;
};

const FilterInput: FC<filtersProps> = ({
  id,
  naming,
  isInputSelected,
  onChange,
}) => {
  const [test, setTest] = useState(false);

  return (
    <>
      <label
        className={`${styles.label} ${isInputSelected ? styles.active : ""}`}
        htmlFor={id}
      >
        <input
          id={id}
          type="checkbox"
          checked={isInputSelected}
          onChange={onChange}
          className={styles.input}
        />
        <span>{naming}</span>
      </label>
    </>
  );
};

export default FilterInput;
