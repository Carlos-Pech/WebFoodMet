import React from "react";

function NavePage(props) {
  

  return (
   

<div className="flex flex-col items-center">  
  {/* <!-- Buttons --> */}
  <div className="inline-flex mt-2 xs:mt-0">
      <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => props.setPage(props.page - 1)}
          disabled={props.page <= 1}>
          Anterior
      </button>
      <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => props.setPage(props.page + 1)}>
          Siguiente
      </button>
  </div>
</div>

  );
}

export default NavePage;



// <div className="flex flex-col items-center">
  // <!-- Help text -->
//   <span className="text-sm text-gray-700 dark:text-gray-400">
//       Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
//   </span>
//   <!-- Buttons -->
//   <div className="inline-flex mt-2 xs:mt-0">
//       <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => props.setPage(props.page - 1)}
          // disabled={props.page <= 1}>
//           Prev
//       </button>
//       <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => props.setPage(props.page + 1)}>
//           Next
//       </button>
//   </div>
// </div>

