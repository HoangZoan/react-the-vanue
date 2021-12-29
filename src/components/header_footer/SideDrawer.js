import { Drawer, List, ListItem } from "@mui/material";

const SiderDrawer = (props) => {
  const links = [
    { where: "featured", value: "Top top" },
    { where: "venueinfo", value: "Venue Info" },
    { where: "highlights", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" },
  ];

  const renderListItem = () => {
    return links.map((link) => (
      <ListItem key={link.where} button onClick={() => alert(link.where)}>
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
