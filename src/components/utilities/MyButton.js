import { Button } from "@mui/material";

import TicketIcon from "../../resources/images/icons/ticket.png";

const MyButton = (props) => {
  const { text, link, size, style, ticketIcon } = props;

  return (
    <Button
      style={{ backgroundColor: "#8e8e8e", color: "#fff", ...style }}
      variant="contained"
      size={size || "large"}
      href={link}
    >
      {ticketIcon ? (
        <img className="iconImage" src={TicketIcon} alt="Ticket icon" />
      ) : null}
      {text}
    </Button>
  );
};

export default MyButton;
