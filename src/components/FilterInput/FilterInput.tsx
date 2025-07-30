import type { FC } from "react";
import styles from "./FilterInput.module.scss";

type filtersProps = {
  id: string;
  naming: string;
  onClick: () => void;
  isInputSelected: boolean;
};

const FilterInput: FC<filtersProps> = ({
  id,
  naming,
  isInputSelected,
  onClick,
}) => {
  return (
    <label
      className={`${styles.label} ${isInputSelected ? styles.active : ""}`}
      htmlFor={id}
      onClick={onClick}
      id={id}
    >
      <input className={styles.input} type={"checkbox"} id={id} />
      <span>{naming}</span>
    </label>
  );
};

export default FilterInput;
