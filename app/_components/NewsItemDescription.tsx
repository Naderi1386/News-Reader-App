interface NewsItemDescriptionPropsType {
  description: string;
}
const NewsItemDescription = ({ description }: NewsItemDescriptionPropsType) => {
  return <p>{description}</p>;
};

export default NewsItemDescription;
