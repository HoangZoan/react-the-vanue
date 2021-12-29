import { Slide } from "react-awesome-reveal";
import { useCallback, useEffect, useState } from "react";

const TimeUntil = () => {
  const [time, setTime] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  const getTimeUntil = useCallback((deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());

    if (time < 0) {
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / (1000 * 60)) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      setTime({ days, hours, minutes, seconds });
    }
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      getTimeUntil("01 Jan 2022 00:00:00");
    }, 1000);

    return () => clearInterval(countdown);
  }, [getTimeUntil]);

  const renderItem = (value, tag) => {
    return (
      <div className="countdown_item">
        <div className="countdown_time">{value}</div>
        <div className="countdown_tag">{tag}</div>
      </div>
    );
  };

  return (
    <Slide left>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event starts in</div>
        <div className="countdown_bottom">
          {renderItem(time.days, "Days")}
          {renderItem(time.hours, "Hrs")}
          {renderItem(time.minutes, "Min")}
          {renderItem(time.seconds, "Sec")}
        </div>
      </div>
    </Slide>
  );
};

export default TimeUntil;
