import FooterList from "./FooterList";

const FooterLists = () => {
  return (
    <div className="pr-34">
      <FooterList
        items={[
          { text: "business", href: "/news?category=business" },
          { text: "entertainment", href: "/news?category=entertainment" },
          { text: "general", href: "/news?category=general" },
          { text: "health", href: "/news?category=health" },
          { text: "science", href: "/news?category=science" },
          { text: "sports", href: "/news?category=sports" },
          { text: "technology", href: "/news?category=technology" },
        ]}
      />
    </div>
  );
};

export default FooterLists;
