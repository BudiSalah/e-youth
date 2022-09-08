import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../../components/layouts/default";

export async function getServerSideProps({ query }) {
  const { id } = query;
  const API = process.env.NEXT_PUBLIC_API;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const res = await fetch(
    `${API}/${id}?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();

  return { props: { data } };
}

export default function Movie({ data }) {
  const POSTER = process.env.NEXT_PUBLIC_POSTER;

  return (
    <DefaultLayout>
      <h1 className="capitalize text-center mb-5 text-3xl">movie details</h1>

      <div className="flex flex-row flex-wrap gap-5">
        <figure className="overflow-hidden text-center">
          <Image
            src={`${POSTER}/${data?.poster_path}`}
            alt="Picture of the author"
            width={360}
            height={540}
            blurDataURL={`${POSTER}/${data?.poster_path}`}
            placeholder="blur"
          />
        </figure>

        <details
          className="cursor-pointer flex-none grow-0 shrink-0 basis-4/6"
          open
        >
          <ul className="capitalize flex flex-col gap-2">
            <li>
              <span className="font-bold">name:</span>
              <br />
              {data?.title}
            </li>

            <li>
              <span className="font-bold">vote average:</span>
              <br />
              {data?.vote_average}
            </li>

            <li>
              <span className="font-bold">overview:</span>
              <br />
              {data?.overview}
            </li>

            <li>
              <a
                href={data?.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                homepage
              </a>
            </li>
          </ul>
        </details>
      </div>
    </DefaultLayout>
  );
}
