import FilledButton from "@/src/components/Button/FilledButton";
import OutlineButton from "@/src/components/Button/OutlineButton";
import Input from "@/src/components/Input/InputField";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  HiOutlineUser,
  HiOutlineLockClosed,
  HiOutlineOfficeBuilding,
  HiMail,
} from "react-icons/hi";

const index = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="bg-backgroundSecondary w-full flex flex-col justify-center items-center">
        <Image
          src={"/login_image.svg"}
          alt="image"
          width={"500"}
          height={"500"}
        />
        <h2 className="text-3xl font-semibold text-parargaph">
          Yuk Login ke akunmu
        </h2>
      </div>
      <div className="w-full p-5 px-24  shadow-sm h-screen overflow-auto flex flex-col justify-center">
        <form action="">
          <div className="">
            Belum Mempunyai akun?{" "}
            <Link href={"/register"} className="font-semibold text-button">
              Yuk Daftar
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-medium my-4">Masuk ke Dashboard</h2>
            <Input
              name="email"
              required
              label="Email"
              type="email"
              placeholder="danieljohnson@example.com"
              icon={<HiOutlineUser />}
            />
            <div>
              <Input
                required
                name="password"
                label="Sandi"
                type="password"
                placeholder="S3bu4h S4nd1 kU4T"
                icon={<HiOutlineLockClosed />}
              />
              <Link href={"/login/reset_password"} className="text-slate-600">
                Lupa sandi?
              </Link>
            </div>
            <div className="my-2">
              <OutlineButton text="Login" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
