import styles from "./Spinner.module.css";
import { spinner } from "@/assets/icons";

const Spinner = ({ size, accent, className, children }) => {
  const sAccent = styles[accent] ?? styles["light"];
  const classes = [sAccent];
  if (className) {
    classes.push(className);
  }

  return (
    <div className={styles["spinner"]}>
      <img
        src={spinner}
        style={{ width: `${size}rem` }}
        className={classes.join(" ")}
        alt="Spinner icon"
      />
      {children && (
        <h4 style={{ fontSize: `${size / 2}rem` }} className={styles["spinner-text"]}>
          {children}
        </h4>
      )}
    </div>
  );
};

export default Spinner;
