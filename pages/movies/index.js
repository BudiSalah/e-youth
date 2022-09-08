import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../../components/layouts/default";

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  return { props: { data } };
}

export default function Movies({ data }) {
  return (
    <DefaultLayout>
      <pre>{data?.map((item) => item?.name)}</pre>
    </DefaultLayout>
  );
}
