import Link from "next/link";
import Input from "../components/Input/InputField";
import FilledButton from "../components/Button/FilledButton";
import OutlineButton from "../components/Button/OutlineButton";
import Image from "next/image";
import VariantButton from "../components/Button/VariantButton";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <nav className="w-full bg-button flex items-center justify-center gap-5 sticky py-4 shadow-md">
        <Link href={"/login"} className="hover:underline">
          <VariantButton text="Login" variant="whiteOutline" />
        </Link>
        <Link href={"/register"} className="hover:underline">
          {/* <FilledButton text="Daftar" white /> */}
          <VariantButton text="Daftar" variant="whiteFilled" />
        </Link>
      </nav>
      <div className="w-full h-full flex flex-col items-center justify-center overflow-auto px-20">
        <div className="flex justify-center items-center text-parargaph">
          <div className="w-full flex flex-col gap-5">
            <h1 className="font-bold text-6xl ">
              Selamat Datang di Website kami.
            </h1>
            <p className="font-semibold">
              Dengan hanya satu integrasi, bisnis Anda dapat menerima berbagai
              jenis pembayaran seperti kartu kredit, kartu debit, e-wallet,
              transfer bank, dan metode pembayaran lainnya dengan mudah. Kami
              hadir untuk memberikan kemudahan dalam bertransaksi online dengan
              cepat, aman, dan terpercaya.
            </p>
            <VariantButton text="Daftar Sekarang" />
          </div>
          <div className="w-full">
            <Image
              src={"/Saly-19.svg"}
              alt="Foto 3D"
              width={"680"}
              height={"680"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
