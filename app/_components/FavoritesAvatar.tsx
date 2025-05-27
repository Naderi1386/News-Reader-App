import Image from "next/image";

interface FavoritesAvatarPropsType {
  url: string;
}

const FavoritesAvatar = ({ url }: FavoritesAvatarPropsType) => {
  return (
    <div className="avatar">
      <div className="mask mask-squircle w-24">
        <Image alt="Avatar-User" src={url} />
      </div>
    </div>
  );
};

export default FavoritesAvatar;
