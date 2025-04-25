document.addEventListener("keydown", (e) => {
    // F12
    if (e.key === "F12") {
      e.preventDefault();
      // alert("개발자 도구는 사용할 수 없습니다.");
    }
    // Ctrl + Shift + I
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      e.preventDefault();
      // alert("개발자 도구는 사용할 수 없습니다.");
    }
    // Ctrl + Shift + J
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
      e.preventDefault();
      // alert("개발자 도구는 사용할 수 없습니다.");
    }
    // Ctrl + U (소스 보기)
    if (e.ctrlKey && e.key === "u") {
      e.preventDefault();
      // alert("페이지 소스보기를 사용할 수 없습니다.");
    }
  });
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    // alert("오른쪽 클릭은 사용할 수 없습니다.");
  });
