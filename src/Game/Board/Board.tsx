import styles from "./Board.module.scss";
import Square from "./Square/Square";
const Board = () => {
  return (
    <div className={styles.Board}>
      {Array.from({ length: 144 }).map(() => (
        <Square />
      ))}
    </div>
  );
};

export default Board;
