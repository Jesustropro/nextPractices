import PageLayout from "../../components/PageLayout";
import styles from "../../styles/Home.module.css";

export default function Article() {
  return (
    <PageLayout title="Id">
      <div className={styles.container}>
        <h1>This is a article</h1>
      </div>
    </PageLayout>
  );
}
