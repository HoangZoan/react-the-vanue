import { Slide } from "react-awesome-reveal";

const TimeUntil = () => {
  const renderItem = (value, tag) => {
    return (
      <div className="countdown_item">
        <div className="countdown_time">{value}</div>
        <div className="countdown_tag">{tag}</div>
      </div>
    );
  };

  return (
    <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event starts in</div>
        <div className="countdown_bottom">
          {renderItem(27, "Days")}
          {renderItem(4, "Hrs")}
          {renderItem(10, "Min")}
          {renderItem(10, "Sec")}
        </div>
      </div>
    </Slide>
  );
};

export default TimeUntil;
