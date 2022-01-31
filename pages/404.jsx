import Head from "next/head";
import Heading from "../components/Heading";
import styles from "../styles/404.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <Heading tag="h2" text="Error" />
      <Heading tag="h2" text="Someting error" />
    </div>
  );
};

export default Error;
