import Link from "next/link";
import PageLayout from "../components/PageLayout";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <PageLayout title="NotiNext - About">
      <div className={styles.container}>
        <h1>About</h1>
        <Link href={"/"}>
          <button>Go to Home</button>
        </Link>
      </div>
    </PageLayout>
  );
}
