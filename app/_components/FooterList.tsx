type FooterItemType = { text: string; href: string };
interface FooterListPropsType {
  items: FooterItemType[];
}
const FooterList = ({ items }: FooterListPropsType) => {
  return <ul>FooterList</ul>;
};

export default FooterList;
