function resetGame() {
    score = 0;
    rounds = 0;
    document.getElementById("score").textContent = "0";
    document.getElementById("rounds").textContent = "0";
    document.getElementById("result").innerHTML = "";
    document.querySelectorAll(".janken-btn").forEach(btn => btn.disabled = false);
    startAnimation();
  }

  function saveBestScore(current) {
    let scores = JSON.parse(localStorage.getItem("bestScores")) || [];
    scores.push(current);
    scores.sort((a, b) => b - a);
    scores = scores.slice(0, 5);
    localStorage.setItem("bestScores", JSON.stringify(scores));
    updateBestScores(); // ⭐ 表示を即時更新
  }
  
  