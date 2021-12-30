import { Drawer, List, ListItem } from "@mui/material";
import { scroller } from "react-scroll";

const SiderDrawer = (props) => {
  const links = [
    { where: "featured", value: "Top top" },
    { where: "venueinfo", value: "Venue Info" },
    { where: "highlights", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" },
  ];

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 500,
      smooth: true,
      offset: -100,
    });
    props.onClose();
  };

  const renderListItem = () => {
    return links.map((link) => (
      <ListItem
        key={link.where}
        button
        onClick={() => scrollToElement(link.where)}
      >
        {link.value}
      </ListItem>
    ));
  };

  return (
    <Drawer anchor="right" {...props}>
      <List component="nav">{renderListItem()}</List>
    </Drawer>
  );
};

export default SiderDrawer;
