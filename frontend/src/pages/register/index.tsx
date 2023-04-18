/* eslint-disable react-hooks/rules-of-hooks */
import FilledButton from "@/src/components/Button/FilledButton";
import VariantButton from "@/src/components/Button/VariantButton";
import Input from "@/src/components/Input/InputField";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  HiOutlineUser,
  HiOutlineLockClosed,
  HiOutlineOfficeBuilding,
  HiMail,
} from "react-icons/hi";

const index = () => {
  const route = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (true) {
      route.push("/register/confirm_email");
    }
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="bg-backgroundSecondary w-full flex flex-col justify-center items-center">
        <Image
          src={"/register_image.svg"}
          alt="image"
          width={"300"}
          height={"300"}
        />
        <h2 className="text-3xl font-semibold text-parargaph">
          Buat akun untuk tingkatkan bisnismu
        </h2>
      </div>
      <div className="w-full p-5 px-24  shadow-sm h-screen overflow-auto flex flex-col justify-center">
        <form action="">
          <div className="">
            Sudah punya akun?{" "}
            <Link href={"/login"} className="font-semibold text-button">
              Masuk
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-medium my-4">Buat Akunmu</h2>
            <Input
              onChange={(e) => {
                console.log(e);
              }}
              required
              name="name"
              label="Nama"
              type="text"
              placeholder="Daniel Johnson"
              icon={<HiOutlineUser />}
            />
            <Input
              required
              name="business_name"
              label="Nama Bisnis"
              type="text"
              placeholder="Toko Komputer"
              icon={<HiOutlineOfficeBuilding />}
            />
            <Input
              required
              name="email"
              label="Email"
              type="email"
              placeholder="danieljohnson@example.com"
              icon={<HiMail />}
            />
            <Input
              required
              name="password"
              label="Sandi"
              type="password"
              placeholder="S3bu4h S4nd1 kU4T"
              icon={<HiOutlineLockClosed />}
            />
          </div>
          <div className="my-2">
            <VariantButton onClick={handleSubmit} text="Buat Akun" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
