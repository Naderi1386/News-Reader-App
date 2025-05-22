interface NewsItemDetailsModal {
  title: string;
}

const NewsItemDetailsModal = ({ title }: NewsItemDetailsModal) => {
  return (
    <>
      <span
        className="text-black text-justify sm:text-left font-bold text-sm md:text-lg hover:underline block w-[75%]"
        onClick={() => document.getElementById("my_modal_2")?.showModal()}
      >
        {title}
      </span>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default NewsItemDetailsModal;
