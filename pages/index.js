import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import styles from "../styles/Home.module.css";

export default function Home({ articles }) {
  return (
    <PageLayout title="NotiNext - Home">
      <div className={styles.container}>
        <Link href="/about">
          <button>Go to About</button>
        </Link>
        {articles.length === 0 ? (
          <p>no items...</p>
        ) : (
          articles.map((article, index) => (
            <article key={index}>
              <h2> {article.title}</h2>
              <img src={article.urlToImage} />
              <span>{article.description}</span>
            </article>
          ))
        )}
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2022-10-04&sortBy=publishedAt&apiKey=e4abb5c7bf944af38752fd8294857a50"
  );
  const { articles } = await response.json();
  return {
    props: {
      articles,
    },
  };
}
