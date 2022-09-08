import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "../../components/layouts/default";

export async function getServerSideProps() {
  const API = process.env.NEXT_PUBLIC_API;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const res = await fetch(
    `${API}/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();

  return { props: { data } };
}

export default function Movies({ data }) {
  const POSTER = process.env.NEXT_PUBLIC_POSTER;

  return (
    <DefaultLayout>
      <h1 className="capitalize text-center mb-5 text-3xl">popular movies</h1>

      <pre>
        <ul className="flex flex-row flex-wrap gap-4 justify-center">
          {data?.results?.map((item, index) => {
            return (
              <li
                key={`poster_${index}`}
                className="w-full md:w-1/2 lg:w-1/5 cursor-pointer"
              >
                <Link href={`/movies/${item?.id}`}>
                  <figure className="overflow-hidden text-center">
                    <Image
                      src={`${POSTER}/${item?.poster_path}`}
                      alt="Picture of the author"
                      width={506}
                      height={760}
                      blurDataURL={`${POSTER}/${item?.poster_path}`}
                      placeholder="blur"
                    />
                  </figure>
                </Link>
              </li>
            );
          })}
        </ul>
      </pre>
    </DefaultLayout>
  );
}
