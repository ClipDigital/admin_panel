import { useState } from 'react';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => Promise<boolean>;
}

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }: DeleteConfirmationModalProps) => {
  const [isDeleting, setDeleting] = useState(false);

  const handleDelete = async (): Promise<void> => {
    setDeleting(true);
    let result = await onDelete();
    if (result) {
      setTimeout(() => {
        setDeleting(false);
        onClose();
      }, 1000)
    }
    else {
      setDeleting(false);
      onClose();
    }

  };

  return (
    <div
      className={`fixed inset-0 p-4 flex flex-wrap justify-center text-center items-center w-full h-full z-[1000] ${isOpen ? '' : 'hidden'
        } before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]`}
    >
      <div className="w-full max-w-md bg-white shadow-lg rounded-md p-6 relative">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 float-right cursor-pointer	"
          onClick={onClose}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

        <div className="my-8 w">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 mx-auto text">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
          <h4 className="text-xl font-semibold mt-6">Are you sure you want to delete it?</h4>
          <p className="text-sm text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas
          </p>
        </div>

        <div className="flex flex-col space-y-2 ">
          <button
            style={{ background: "#FF6C71" }}
            type="button"
            className={`px-6 py-2.5 rounded-md text-white text-sm font-semibold border-none outline-none text-red-600	 ${isDeleting
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-red-500 hover:bg-red-600 active:bg-red-500'
              }`}
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
          <button
            style={{ background: "#dadada" }}
            type="button"
            className="px-6 py-2.5  rounded-md text-black text-sm font-semibold border-none outline-none bg-gray-200 hover:bg-gray-300 active:bg-gray-200 "
            onClick={onClose}
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
