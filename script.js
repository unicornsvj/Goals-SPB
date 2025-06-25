const players = [
  {
    place: "🥇 1",
    name: "Пономарёв Артём",
    team: "Спарта СПб",
    goals: 24,
    matches: 13,
  },
  {
    place: "2",
    name: "Иванов Сергей",
    team: "ФК Север",
    goals: 19,
    matches: 15,
  },
  {
    place: "3",
    name: "Егоров Максим",
    team: "Балтика-Нева",
    goals: 17,
    matches: 14,
  },
];

const tableBody = document.getElementById("players-table");

players.forEach(player => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${player.place}</td>
    <td>${player.name}</td>
    <td>${player.team}</td>
    <td>${player.goals}</td>
    <td>${player.matches}</td>
  `;
  tableBody.appendChild(row);
});
