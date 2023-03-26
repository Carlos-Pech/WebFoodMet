import React from "react";

function NavePage(props) {
  

  return (
   

<div className="flex flex-col items-center">  
  {/* <!-- Buttons --> */}
  <div className="inline-flex mt-2 xs:mt-0">
      <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => props.setPage(props.page - 1)}
          disabled={props.page <= 1}>
          Anterior
      </button>
      <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => props.setPage(props.page + 1)}>
          Siguiente
      </button>
  </div>
</div>

  );
}

export default NavePage;