import Image from "next/image";

interface FavoritesAvatarPropsType {
  url: string;
}

const FavoritesAvatar = ({ url }: FavoritesAvatarPropsType) => {
  return (
    <div className="avatar">
      <div className="mask mask-squircle size-16 relative">
        <Image fill className="object-cover" alt="Avatar-User" src={url} />
      </div>
    </div>
  );
};

export default FavoritesAvatar;
