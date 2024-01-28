const PaginationNav = ({ pagesCount, currentPage = 1, onChanged }) => {
  return (
    <nav class="flex items-center -space-x-px mt-4">
      <button
        type="button"
        class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
      >
        <svg
          class="flex-shrink-0 w-3.5 h-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        <span
          class="hidden sm:block"
          onClick={() => onChanged(Math.max(currentPage - 1, 1))}
        >
          Previous
        </span>
      </button>
      {Array.from({ length: pagesCount }, (_, i) => i + 1).map((page) => (
        <button
          onClick={() => onChanged(page)}
          type="button"
          class={`min-h-[38px] min-w-[38px] flex justify-center items-center ${
            page === currentPage ? "bg-gray-300" : "bg-white"
          } text-gray-800 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none`}
          aria-current="page"
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
      >
        <span
          class="hidden sm:block"
          onClick={() => onChanged(Math.min(currentPage + 1, pagesCount))}
        >
          Next
        </span>
        <svg
          class="flex-shrink-0 w-3.5 h-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </nav>
  );
};

export default PaginationNav;
