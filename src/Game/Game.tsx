import Board from "./Board/Board";
import styles from "./Game.module.scss";
const Game = () => {
  return (
    <div className={styles.Game}>
      <Board />
    </div>
  );
};

export default Game;
