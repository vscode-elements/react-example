import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(0);
  const d = new Date(time);
  const h = String(d.getHours()).padStart(2, "0");
  const m = String(d.getMinutes()).padStart(2, "0");
  const s = String(d.getSeconds()).padStart(2, "0");

  useEffect(() => {
    const tick = () => {
      setTime(new Date().valueOf());
    };

    setInterval(tick, 1000);
  }, []);

  return <div>{`${h}:${m}:${s}`}</div>;
}

export default Clock;
