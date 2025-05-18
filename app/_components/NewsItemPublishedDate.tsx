interface NewsItemPublishedDatePropsType {
  date: string;
}
const NewsItemPublishedDate = ({ date }: NewsItemPublishedDatePropsType) => {
  return <span>{date}</span>;
};

export default NewsItemPublishedDate;
