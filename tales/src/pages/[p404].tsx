import { useRouter } from "next/router";
import Layout from "../components/layout";

export default function Page404() {
  const router = useRouter();

  return (
    <Layout siteTitle="Not Found">
      <div>
        <p>404 | The following location does not exist</p>
        <br />
        <p>{router.asPath}</p>
      </div>

      <style jsx>
        {`
          div {
            color: #fff;
            position: fixed;
            margin-top: 100px;
            font-size: 20px;
            font-style: italic;
          }
        `}
      </style>
    </Layout>
  );
}
