const longRunningTask = () => {
  // 엄청나게 오래 걸리는 작업!
  console.log("-END WORK-");
};

// BLOCKING 처리 방식
console.log("✅ START WORK! [BLOCKING]");
longRunningTask();

console.log("================================================");
console.log("================================================");

// NONE-BLOCKING 처리 방식
console.log("✅ START WORK! [NONE-BLOCKING]");
setTimeout(longRunningTask, 0);
console.log("다음 작업 실행!");
