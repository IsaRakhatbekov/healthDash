import { mockAppointments } from "../../shared/mocks/mocks";
import AppointmentsRow from "../AppointmentsRow/AppointmentsRow";
import styles from "./AppointmentsTable.module.scss";

const AppointmentsTable = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Profile Info</th>
          <th>Date &amp; Time</th>
          <th>Consultation Format</th>
          <th>Length</th>
          <th>Total Fee</th>
          <th>Payment Receipt</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {mockAppointments?.map((apt) => (
          <AppointmentsRow key={apt.id} {...apt} />
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentsTable;
