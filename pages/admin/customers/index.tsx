import AdminLayout from "@/components/layout/AdminLayout";
import React, { ReactElement } from "react";

const CustomerPage = () => {
  return (
    <>
      <div className="relative pt-10 overflow-x-auto">
        <h1 className="px-6 py-3 mb-2 text-3xl text-left">User Details</h1>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase rounded-lg bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-primary">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                1
              </th>
              <td className="px-6 py-4">John</td>
              <td className="px-6 py-4">johndoe@mail.com</td>
              <td className="px-6 py-4">Admin</td>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                2
              </th>
              <td className="px-6 py-4">Alice</td>
              <td className="px-6 py-4">alice@gmail.com</td>
              <td className="px-6 py-4">User</td>
            </tr>
            <tr className="bg-primary ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                3
              </th>
              <td className="px-6 py-4">Becky</td>
              <td className="px-6 py-4">becky@mail.com</td>
              <td className="px-6 py-4">User</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomerPage;

CustomerPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayout>
      <>{page}</>
    </AdminLayout>
  );
};
