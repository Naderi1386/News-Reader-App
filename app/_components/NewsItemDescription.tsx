interface NewsItemDescriptionPropsType {
  description: string;
}
const NewsItemDescription = ({ description }: NewsItemDescriptionPropsType) => {
  return <p className="font-semibold text-stone-500 text-[14.5px]">{description}</p>;
};

export default NewsItemDescription;
