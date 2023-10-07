// JavaScript를 사용하여 <li> 요소를 동적으로 추가
var listData = [
  { 순차번호: "1", 이름: "김솔미", 성별: "여자", 나이: "21", 전화번호: "010-1234-5678", 생일: "11/28", 구매횟수: "15번", 최근방문일: "2023/10/06" },
  // 다른 항목들도 추가할 수 있음
];

var tbody = document.getElementById("list-table");

listData.forEach(function(data) {
  var row = document.createElement("tr");

  Object.values(data).forEach(function(value) {
    var cell = document.createElement("td");
    cell.textContent = value;
    row.appendChild(cell);
  });

  tbody.appendChild(row);
});
