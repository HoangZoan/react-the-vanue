import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade triggerOnce>
        <div className="font_righteous footer_logo_vanue">The Venue</div>
        <div className="footer_copyright">The Venue 2021 all reserved</div>
      </Fade>
    </footer>
  );
};

export default Footer;
