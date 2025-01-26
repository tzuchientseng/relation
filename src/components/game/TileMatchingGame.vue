<template>
  <div class="game-container">
    <h1>轉珠遊戲</h1>
    <div class="game-board">
      <div
        v-for="(row, rowIndex) in board"
        :key="rowIndex"
        class="row"
      >
        <div
          v-for="(cell, colIndex) in row"
          :key="colIndex"
          :class="['cell', `type-${cell}`, { exploding: isExploding(rowIndex, colIndex) }]"
          :style="getCellStyle(rowIndex, colIndex)"
          @mousedown="startDrag(rowIndex, colIndex, $event)"
          @mousemove="drag(rowIndex, colIndex, $event)"
          @mouseup="endDrag"
          @touchstart="startDrag(rowIndex, colIndex, $event)"
          @touchmove.prevent="drag(rowIndex, colIndex, $event)"
          @touchend="endDrag"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const ROWS = 5; // 行數 (橫行)
    const COLS = 6; // 列數 (直行)

    const board = ref(generateBoard());
    const explodingCells = ref([]); // 儲存正在爆炸的珠子座標

    function generateBoard() {
      return Array.from({ length: ROWS }, () =>
        Array.from({ length: COLS }, () => Math.floor(Math.random() * 3))
      );
    }

    const dragging = ref(false);
    const startRow = ref(null);
    const startCol = ref(null);
    const path = ref([]); // 記錄拖曳過程

    // 開始拖動
    const startDrag = (row, col, event) => {
      dragging.value = true;
      startRow.value = row;
      startCol.value = col;
      path.value = [[row, col]];
    };

    // 拖動過程
    const drag = (row, col, event) => {
      if (!dragging.value) return;

      const last = path.value[path.value.length - 1];
      if (
        (Math.abs(row - last[0]) === 1 && col === last[1]) ||
        (Math.abs(col - last[1]) === 1 && row === last[0])
      ) {
        // 交換珠子
        [board.value[row][col], board.value[last[0]][last[1]]] = [
          board.value[last[0]][last[1]],
          board.value[row][col],
        ];
        path.value.push([row, col]);
      }
    };

    // 結束拖動
    const endDrag = () => {
      dragging.value = false;

      if (checkMatches()) {
        setTimeout(() => {
          applyExplosions();
          setTimeout(dropAndRefill, 300); // 消除珠子後掉落新珠子
        }, 300);
      } else {
        undoDrag(); // 沒有消除則還原
      }
    };

    // 還原拖動過程
    const undoDrag = () => {
      for (let i = path.value.length - 1; i > 0; i--) {
        const [row1, col1] = path.value[i];
        const [row2, col2] = path.value[i - 1];
        [board.value[row1][col1], board.value[row2][col2]] = [
          board.value[row2][col2],
          board.value[row1][col1],
        ];
      }
    };

    // 檢查是否有匹配
    const checkMatches = () => {
      const toRemove = new Set();

      // 檢查行
      for (let row = 0; row < ROWS; row++) {
        let count = 1;
        for (let col = 1; col < COLS; col++) {
          if (board.value[row][col] === board.value[row][col - 1]) {
            count++;
          } else {
            if (count >= 3) {
              for (let k = 0; k < count; k++) {
                toRemove.add(`${row},${col - 1 - k}`);
              }
            }
            count = 1;
          }
        }
        if (count >= 3) {
          for (let k = 0; k < count; k++) {
            toRemove.add(`${row},${COLS - 1 - k}`);
          }
        }
      }

      // 檢查列
      for (let col = 0; col < COLS; col++) {
        let count = 1;
        for (let row = 1; row < ROWS; row++) {
          if (board.value[row][col] === board.value[row - 1][col]) {
            count++;
          } else {
            if (count >= 3) {
              for (let k = 0; k < count; k++) {
                toRemove.add(`${row - 1 - k},${col}`);
              }
            }
            count = 1;
          }
        }
        if (count >= 3) {
          for (let k = 0; k < count; k++) {
            toRemove.add(`${ROWS - 1 - k},${col}`);
          }
        }
      }

      // 標記要移除的珠子
      explodingCells.value = Array.from(toRemove).map((pos) => {
        const [row, col] = pos.split(",").map(Number);
        return { row, col };
      });

      return explodingCells.value.length > 0;
    };

    // 應用爆炸效果
    const applyExplosions = () => {
      explodingCells.value.forEach(({ row, col }) => {
        board.value[row][col] = null; // 標記為空
      });
      explodingCells.value = []; // 清空爆炸列表
    };

    // 珠子掉落並補充
    const dropAndRefill = () => {
      for (let col = 0; col < COLS; col++) {
        let emptySpaces = 0;
        for (let row = ROWS - 1; row >= 0; row--) {
          if (board.value[row][col] === null) {
            emptySpaces++;
          } else if (emptySpaces > 0) {
            board.value[row + emptySpaces][col] = board.value[row][col];
            board.value[row][col] = null;
          }
        }

        for (let row = 0; row < emptySpaces; row++) {
          board.value[row][col] = Math.floor(Math.random() * 3);
        }
      }

      // 再次檢查是否有新的連消
      if (checkMatches()) {
        setTimeout(() => {
          applyExplosions();
          setTimeout(dropAndRefill, 300);
        }, 300);
      }
    };

    // 判斷是否為爆炸中的珠子
    const isExploding = (row, col) => {
      return explodingCells.value.some(
        (cell) => cell.row === row && cell.col === col
      );
    };

    // 動態設定珠子的掉落動畫
    const getCellStyle = (row, col) => {
      if (board.value[row][col] === null) {
        return { transform: "translateY(100%)", opacity: 0 };
      }
      return { transform: "translateY(0)", opacity: 1 };
    };

    return {
      board,
      startDrag,
      drag,
      endDrag,
      isExploding,
      getCellStyle,
    };
  },
};
</script>

<style scoped>
.game-container {
  text-align: center;
  margin-top: 20px;
}

.game-board {
  display: grid;
  gap: 5px;
  justify-content: center;
}

.row {
  display: flex;
}

.cell {
  width: 50px;
  height: 50px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.type-0 {
  background-color: red;
}

.type-1 {
  background-color: blue;
}

.type-2 {
  background-color: green;
}

.exploding {
  animation: explode 0.3s ease;
}

@keyframes explode {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>
