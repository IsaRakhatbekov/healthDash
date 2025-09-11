import type { FC } from "react";
import styles from "./DoctorCard.module.scss";
import type { Doctor } from "../../shared/types/doctor";
import DoctorCalendar from "../DoctorCalendar/DoctorCalendar";

const DoctorCard: FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className={styles.doctorCardWrapper}>
      <div className={styles.doctorCard}>
        <div className={styles.top}>
          <div className={styles.avatarWrapper}>
            <img
              src={
                doctor.profileImage ??
                "https://placehold.co/120x120?text=No+Photo"
              }
              alt={doctor.fullName}
            />
          </div>
          <div className={styles.topDesk}>
            <h4 className={styles.docName}>{doctor.fullName}</h4>
            <h5 className={styles.docSpec}>{doctor.specialization}</h5>
          </div>
        </div>
        <div className={styles.clinicWrapper}>
          <span className={styles.clinicNaming}>
            {doctor.clinic.name}
            {doctor.clinic.address}
            {doctor.clinic.city}
            {doctor.clinic.zip}
          </span>
          <span className={styles.clinicAddress}>
            123 Sunset Blvd, Beverly Hills, CA
          </span>
        </div>
        <div className={styles.bioWrapper}>
          <p className={styles.bioText}>{doctor.bio}</p>
        </div>
        <ul className={styles.tagsList}>
          {doctor.tags.map((el: string, index: number) => (
            <li key={index} className={styles.tags}>
              {el}
            </li>
          ))}
        </ul>
        <ul className={styles.nextAvailableList}>
          {doctor.nextAvailable?.inPerson && (
            <li className={styles.nextAvailable}>
              In person:{" "}
              {new Date(doctor.nextAvailable.inPerson).toLocaleString()}
            </li>
          )}
          {doctor.nextAvailable?.video && (
            <li className={styles.nextAvailable}>
              Video: {new Date(doctor.nextAvailable.video).toLocaleString()}
            </li>
          )}
        </ul>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>
            {doctor.price.amount} {doctor.price.currency}
          </span>
          <span className={styles.rating}>
            ⭐ {doctor.rating.score} ({doctor.rating.reviewsCount} reviews)
          </span>
        </div>
        <button className={styles.cardBtn}>View Profile</button>
      </div>
      <div className={styles.doctorScheduleWrapper}>
        <DoctorCalendar />
      </div>
    </div>
  );
};

export default DoctorCard;
