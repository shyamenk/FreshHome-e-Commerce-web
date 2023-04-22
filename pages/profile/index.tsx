import React from 'react';
import { useState } from 'react';
import avatar from '@/public/avatar.png';
import Image from 'next/image';

const Dashboard = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingBillingAddress, setIsEditingBillingAddress] = useState(false);
  const [isEditingShippingAddress, setIsEditingShippingAddress] =
    useState(false);

  const handleProfileEdit = () => {
    setIsEditingProfile(true);
  };

  const handleProfileSave = () => {
    // TODO: Update user profile details in database
    setIsEditingProfile(false);
  };

  const handleBillingAddressEdit = () => {
    setIsEditingBillingAddress(true);
  };

  const handleBillingAddressSave = () => {
    // TODO: Update user billing address in database
    setIsEditingBillingAddress(false);
  };

  const handleShippingAddressEdit = () => {
    setIsEditingShippingAddress(true);
  };

  const handleShippingAddressSave = () => {
    // TODO: Update user shipping address in database
    setIsEditingShippingAddress(false);
  };

  return (
    <div className="h-screen bg-primary">
      <div className="container px-4 py-6 mx-auto">
        <h1 className="mb-4 text-2xl font-bold">Welcome, Shyam!</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-4 lg:w-1/4">
            <div className="p-4 bg-white rounded shadow">
              <h2 className="mb-4 text-lg font-bold">Profile Picture</h2>
              <div className="relative w-24 h-24 mb-4 overflow-hidden rounded-full">
                <Image src={avatar} alt="profilepic" height={100} width={100} />
              </div>
              <p className="text-gray-700">shyamenk@gmail.com</p>
              {isEditingProfile ? (
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Name"
                    defaultValue="shyam"
                    className="px-2 py-1 border border-gray-300 rounded"
                  />
                  <button
                    className="px-4 py-1 ml-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                    onClick={handleProfileSave}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <button
                  className="px-4 py-1 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
                  onClick={handleProfileEdit}
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
          <div className="w-full px-4 mb-4 lg:w-3/4">
            <div className="p-4 bg-white rounded shadow">
              <h2 className="mb-4 text-lg font-bold">Address Details</h2>
              <div className="mb-4">
                <h3 className="mb-2 font-bold text-md">Billing Address</h3>
                <p className="text-gray-700">
                  {isEditingBillingAddress ? (
                    <input
                      type="text"
                      placeholder="Billing Address"
                      defaultValue="velampRambil House"
                      className="px-2 py-1 border border-gray-300 rounded"
                    />
                  ) : (
                    'velampRambil House'
                  )}
                  {isEditingBillingAddress ? (
                    <div className="mt-2">
                      <button
                        className="px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                        onClick={handleBillingAddressSave}
                      >
                        Save
                      </button>
                      <button
                        className="px-4 py-1 ml-2 border border-gray-300 rounded"
                        onClick={() => setIsEditingBillingAddress(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      className="px-4 py-1 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                      onClick={handleBillingAddressEdit}
                    >
                      Edit Billing Address
                    </button>
                  )}
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-bold text-md">Shipping Address</h3>
                <p className="text-gray-700">
                  {isEditingShippingAddress ? (
                    <input
                      type="text"
                      placeholder="Shipping Address"
                      defaultValue="suprabha Housee"
                      className="px-2 py-1 border border-gray-300 rounded"
                    />
                  ) : (
                    'suprabha House'
                  )}
                  {isEditingShippingAddress ? (
                    <div className="mt-2">
                      <button
                        className="px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                        onClick={handleShippingAddressSave}
                      >
                        Save
                      </button>
                      <button
                        className="px-4 py-1 ml-2 border border-gray-300 rounded"
                        onClick={() => setIsEditingShippingAddress(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      className="px-4 py-1 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                      onClick={handleShippingAddressEdit}
                    >
                      Edit Shipping Address
                    </button>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
