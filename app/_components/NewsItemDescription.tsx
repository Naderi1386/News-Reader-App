interface NewsItemDescriptionPropsType {
  description: string;
}
const NewsItemDescription = ({ description }: NewsItemDescriptionPropsType) => {
  return <p className="font-semibold text-stone-500 text-[14.5px] w-[65%] text-justify">{description}</p>;
};

export default NewsItemDescription;
