import type { FC } from "react";
import styles from "./AppointmentsRow.module.scss";

type RowProps = {
  id: string;
  doctor: string;
  specialty: string;
  date: string;
  format: string;
  length: string;
  fee: string;
  receipt: string;
  actions: string[];
};
const AppointmentsRow: FC<RowProps> = ({
  doctor,
  specialty,
  date,
  format,
  length,
  fee,
  receipt,
  actions,
}) => {
  return (
    <tr>
      <td>
        <div className={styles.profile}>
          <div className={styles.avatar}></div>
          <div>
            <strong>{doctor}</strong>
            <p>{specialty}</p>
          </div>
        </div>
      </td>
      <td>{date}</td>
      <td>{format}</td>
      <td>{length}</td>
      <td>{fee}</td>
      <td>
        <button className={styles.receiptBtn}>{receipt}</button>
      </td>
      <td>
        {actions.map((action) => (
          <button
            key={action}
            className={
              action === "Join"
                ? styles.joinBtn
                : action === "Reschedule"
                ? styles.rescheduleBtn
                : styles.cancelBtn
            }
          >
            {action}
          </button>
        ))}
      </td>
    </tr>
  );
};

export default AppointmentsRow;
