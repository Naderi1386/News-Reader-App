import { getFavoritesNewsLength } from "../_lib/services";

const FavoritesLength = async () => {
  const length = await getFavoritesNewsLength();
  if (!length) return null;
  return (
    <div className="fixed left-0 right-0 bottom-0 bg-custome-green text-center py-5 text-white">
      {length > 1 ? (
        <h3 className="text-lg sm:text-xl">
          There are <span className="font-bold">{length}</span> favorites news
          ♥️
        </h3>
      ) : (
        <h3 className="text-lg sm:text-xl">
          There is <span className="font-bold">{length}</span> favorite ♥️
        </h3>
      )}
    </div>
  );
};

export default FavoritesLength;
