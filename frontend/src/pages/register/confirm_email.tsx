import VariantButton from "@/src/components/Button/VariantButton";
import Link from "next/link";
import React from "react";

const confirm_email = () => {
  return (
    <div className="bg-backgroundSecondary  flex h-screen w-screen items-center justify-center">
      <div className="px-10 py-5 flex  flex-col items-center justify-center gap-6 text-center bg-background rounded-md">
        <h2 className="text-3xl font-semibold mb-3">Konfirmasi Emailmu</h2>
        <div className="max-w-md">
          <p>
            kami telah mengirimkan email konfirmasi ke{" "}
            <span className="font-semibold">
              tutorial@test.com <br />{" "}
            </span>{" "}
            silahkan konfirmasi bahwa itu adalah kamu{" "}
          </p>
        </div>
        <p>
          {" "}
          <span className="font-semibold">Cek folder spam</span> jika kamu tidak
          dapat menemuakannya{" "}
        </p>
        <p>Tetap tidak dapat menemukan emailnya?</p>
        <VariantButton text="Resend email" className="w-full" />
        <p>
          butuh bantuan?{" "}
          <Link className="underline" href={"/"}>
            Kontak kita
          </Link>
        </p>
      </div>
    </div>
  );
};

export default confirm_email;
