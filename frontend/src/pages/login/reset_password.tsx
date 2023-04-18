import VariantButton from "@/src/components/Button/VariantButton";
import Input from "@/src/components/Input/InputField";
import React from "react";

const reset_password = () => {
  return (
    <div className="bg-backgroundSecondary flex items-center justify-center h-screen w-screen">
      <div className="rounded-md bg-background w-fit px-5 py-10 flex flex-col gap-5 items-center justify-center">
        <h2 className="text-3xl font-medium text-button">Reset passwordmu</h2>
        <form action="">
          <div className="flex flex-col gap-3">
            <p className="max-w-[30rem]">
              Silahkann masukkan email yang telah diregistrasi dan kami akan
              mengirimmu link untuk mereset password
            </p>
            <Input
              name="email"
              type="email"
              className="w-full"
              placeholder="danieljohnson@example.com"
            />
            <VariantButton className="w-full" text="Reset sekarang" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default reset_password;
