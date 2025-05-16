import FooterLists from "./FooterLists";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="px-4 md:px-18 py-10 bg-custome-dark">
      <div className="flex gap-16 flex-wrap items-start justify-between">
        <Logo type="footer" />
        <FooterLists />
      </div>
    </footer>
  );
};

export default Footer;
