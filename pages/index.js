import Head from "next/head";
import { useEffect } from "react";
import DefaultLayout from "../components/layouts/default";

export default function Home() {
  useEffect(() => {
    document?.body?.classList?.add?.("home-page");

    return () => {
      document?.body?.classList?.remove?.("home-page");
    };
  }, []);

  return (
    <DefaultLayout>
      <h1 className="uppercase text-white text-3xl lg:text-6xl text-center">
        welcome to movies website
      </h1>
    </DefaultLayout>
  );
}
