import React from "react";

const PermissionDenied = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold text-red-600">
          Permission Denied
        </h1>
        <p className="text-xl text-gray-600 ">
          You don&apos;t have permission to view this page.
        </p>
      </div>
    </div>
  );
};

export default PermissionDenied;
