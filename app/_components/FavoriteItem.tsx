import { FavoriteType } from "../_lib/services";

interface FavoriteItemPropsType {
  favorite: FavoriteType;
}

const FavoriteItem = ({ favorite }: FavoriteItemPropsType) => {
  return <li>FavoriteItem</li>;
};

export default FavoriteItem;
