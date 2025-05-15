import Link from "next/link";

const NotFound = () => {
  return (
    <main className="text-center bg-custome-green space-y-6 py-24 text-white">
      <h1 className="text-3xl  font-bold">This page could not be found :(</h1>
      <Link
        href="/"
        className="inline-block font-semibold underline underline-offset-4  px-6 py-3 text-lg"
      >
        Go back home
      </Link>
    </main>
  );
};

export default NotFound;
