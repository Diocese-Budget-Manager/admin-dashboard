// import React from 'react'

import { DialogTitle } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import InputField from "./InputField";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useParish } from "../../hooks/useParish";

import { Formik } from "formik";

export default function CreateParishForm({
  setOpen,
}: {
  setOpen: (state: boolean) => void;
}) {
  const { createParishHook, refresh } = useParish();
  const inintialValues = {
    name: "",
    phone: "",
    diocese: "6776809e0a833127d520f562",
    address: "",
    description: "",
    email: "",
    image:
      "https://images.unsplash.com/photo-1707753911009-99d073f04fed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhcmlzaHxlbnwwfHwwfHx8MA%3D%3D",
    budgetAllocation: 0,
    budgetYear: 2025,
    budgetMonth: 1,
    budgetQuarter: 1,
  };
  return (
    <div>
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
            <ExclamationTriangleIcon
              aria-hidden="true"
              className="size-6 text-red-600"
            />
          </div>
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <DialogTitle
              as="h3"
              className="text-base font-semibold text-gray-900"
            >
              Create Parish
            </DialogTitle>
          </div>
        </div>
      </div>
      <Formik
        initialValues={inintialValues}
        onSubmit={(values) => {
          console.log("Payload: ", values);

          createParishHook(values).then(() => refresh()).finally(() => setOpen(false));
        }}
      >
        {({ handleSubmit, handleChange, values, setFieldValue }) => (
          <form
            className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
            onSubmit={handleSubmit}
          >
            <InputField
              label="Parish Name"
              name="name"
              type="text"
              onChange={handleChange}
              required
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              onChange={handleChange}
              required
            />
            <PhoneInput
              className="shadow form-input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter phone number"
              onChange={(value) => setFieldValue("phone", value)}
              name="phone"
              required
            />
            <InputField
              label="Address"
              name="address"
              type="text"
              onChange={handleChange}
              required
            />
            <InputField
              label="image"
              name="image"
              type="file"
              onChange={handleChange}
            />
            <InputField
              label="Description"
              name="description"
              type="text"
              onChange={handleChange}
            />
            <InputField
              label="Diocese ID"
              name="diocese"
              type="text"
              value={values.diocese}
              // className="hidden"
              onChange={handleChange}
            />

            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
              >
                Add Parish
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
