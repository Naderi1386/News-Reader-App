"use client";

interface ErrorType {
  message: string;
}

interface ErrorPropsType {
  error: ErrorType;
  reset: () => void;
}

const error = ({ error, reset }: ErrorPropsType) => {
  return (
    <main className="flex justify-center items-center flex-col gap-6 py-24 bg-custome-green text-white">
      <h1 className="text-3xl font-bold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        onClick={reset}
        className="inline-block  underline underline-offset-4  px-6 py-3 text-lg cursor-pointer"
      >
        Try again
      </button>
    </main>
  );
};

export default error;
