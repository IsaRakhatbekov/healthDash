import { useEffect } from "react";
import { fetchSlots } from "../shared/api/calendar";

export default function CalendarProbe() {
  useEffect(() => {
    const now = new Date();
    const from = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        0,
        0,
        0
      )
    );
    const to = new Date(from);
    to.setUTCDate(from.getUTCDate() + 7);

    fetchSlots({
      doctorId: "doc_1",
      from: from.toISOString(),
      to: to.toISOString(),
    })
      .then((data) => console.log("SLOTS:", data))
      .catch((err) => console.error(err));
  }, []);

  return <div>Probing slots… (check console)</div>;
}
