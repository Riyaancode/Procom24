"use client";

import { Typography } from "@/components/Typography";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { IPayment, ISignIn } from "@/types/interface";
import { Input } from "@/components/input";
import { Button } from "@/components/ui/button";

export default function Payments() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IPayment>({
    defaultValues: {
      userName: "",
      email: "",
      paymentAmount: 0,
      customerAccountNumber: "",
      merchantAccountNumber: "",
      bankName: "",
      paymentPurpose: "",
    },
  });

  const submitHandler = (data: IPayment) => {
    console.log("ds", data);
  };

  return (
    <main className="px-4 py-10">
      <Typography variant="heading" color="secondary" className="text-center">
        Payment Request
      </Typography>

      <div className="border rounded-lg  mt-7 px-5 py-8">
        <form className="gap-6 grid grid-cols-3">
          <Controller
            control={control}
            name="userName"
            rules={{
              required: "*Name is required.",
            }}
            render={({ field: { onChange, value, name } }) => (
              <Input
                name={name}
                label="Customer Name *"
                className="bg-gray-100"
                value={value}
                onChange={onChange}
                placeholder="Enter customer name"
                error={errors}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            rules={{
              required: "*Email address is required.",
            }}
            render={({ field: { onChange, value, name } }) => (
              <Input
                name={name}
                label="Customer Email Address (Optional)"
                value={value}
                className="bg-gray-100"
                contauinerClassName="col-span-2"
                placeholder="Enter customer email address"
                onChange={onChange}
                error={errors}
              />
            )}
          />

          <Controller
            control={control}
            name="paymentAmount"
            rules={{
              required: "*Payment amount is required.",
            }}
            render={({ field: { onChange, value, name } }) => (
              <Input
                name={name}
                type="number"
                label="Payment Amount *"
                className="bg-gray-100"
                contauinerClassName="col-span-3"
                value={value}
                onChange={onChange}
                placeholder="Enter payment amount"
                error={errors}
              />
            )}
          />

          <Controller
            control={control}
            name="merchantAccountNumber"
            rules={{
              required: "*Merchant account number is required.",
            }}
            render={({ field: { onChange, value, name } }) => (
              <Input
                name={name}
                label="Merchant Account Number *"
                className="bg-gray-100"
                contauinerClassName="col-span-3"
                value={value}
                onChange={onChange}
                placeholder="Enter merchant account number"
                error={errors}
              />
            )}
          />

          <Controller
            control={control}
            name="customerAccountNumber"
            rules={{
              required: "*Customer account number is required.",
            }}
            render={({ field: { onChange, value, name } }) => (
              <Input
                name={name}
                label="Customer Account Number *"
                className="bg-gray-100"
                contauinerClassName="col-span-3"
                value={value}
                onChange={onChange}
                placeholder="Enter customer account number"
                error={errors}
              />
            )}
          />

          <Controller
            control={control}
            name="bankName"
            rules={{
              required: "*Bank name is required",
            }}
            render={({ field: { onChange, value, name } }) => (
              <fieldset className="col-span-3">
                <label className="font-semibold">
                  Select Customer Bank Name*
                </label>

                <div className="relative w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg">
                  <select
                    onChange={onChange}
                    value={value}
                    className="appearance-none focus:outline-none w-full py-1 px-2 bg-white"
                    name={name}
                    id="frm-whatever"
                  >
                    <option value="">Please choose&hellip;</option>
                    <option value="1">Bank AL Habib</option>
                    <option value="1">Meezan Bank</option>
                    <option value="2">NayaPay</option>
                    <option value="3">SadaPay</option>
                  </select>
                  <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <ErrorMessage
                  errors={errors}
                  name="bankName"
                  render={({ message }) => (
                    <p className="text-red-500 mt-2">{message}</p>
                  )}
                />
              </fieldset>
            )}
          />

          <Controller
            control={control}
            name="paymentPurpose"
            rules={{
              required: "*Payment purpose is required.",
            }}
            render={({ field: { onChange, value, name } }) => (
              <div className="col-span-3 ">
                <label className="font-semibold">Payment Purpose</label>
                <textarea
                  name={name}
                  className="bg-gray-100  w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                  value={value}
                  onChange={onChange}
                  placeholder="Enter payment purpose"
                />
                <ErrorMessage
                  errors={errors}
                  name="paymentPurpose"
                  render={({ message }) => (
                    <p className="text-red-500 mt-2">{message}</p>
                  )}
                />
              </div>
            )}
          />
          <div className=" col-span-3 text-right">
            <Button onClick={handleSubmit(submitHandler)} className="w-fit">
              Request
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
