const players = [];
// Common Function
function displayPlayer() {
    if (players.length > 5) {
        return alert("you added maximum players")
    }
    const playerContainer = document.getElementById('players-list');
    playerContainer.textContent = '';
    for (let i = 0; i < players.length; i++) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <tr>
            <th scope="row">${i + 1}</th>
             <td>${players[i]}</td>
         </tr>
        `;
        playerContainer.appendChild(tr);
    }

}
function arrLentgh() {
    const playeradd = players.length;
    if (playeradd > 5) {
        return
    }
    return playeradd;
}
// Common Function for get Input field Value
function getInputFieldByID(inputId) {
    const inputFieldId = document.getElementById(inputId);
    const inputFieldString = inputFieldId.value;
    const inputField = parseFloat(inputFieldString);

    inputFieldId.value = '';
    return inputField;
}
function setInnerText(innerId, newValue) {
    const innerFieldId = document.getElementById(innerId);
    innerFieldId.innerText = newValue;
}
// Calculate total Player Expense
function totalPlayerExpense() {
    const playersLentgh = arrLentgh();
    const inputValue = getInputFieldByID('per-player-cost');
    console.log(inputValue)
    if (isNaN(inputValue) || typeof inputValue !== 'number' || inputValue < 0) {
        return alert('Worng Value! Here just accepted Valid Number')
    }
    const playerExpense = inputValue * playersLentgh;
    if (isNaN(playerExpense)) {
        return;
    }
    setInnerText('calculate-amount', playerExpense)
    return playerExpense;
}
function getInnerFieldAmount(id) {
    const innerFieldId = document.getElementById(id);
    const innerFieldString = innerFieldId.innerText;
    const inner = parseFloat(innerFieldString)
    return inner;
}
// Event Handeler Function
function addPlayer(element) {
    let classes = document.getElementsByClassName('btn-primary');
    for (let i = 0; i < classes.length; i++) {
        element.setAttribute('disabled', '');
    }
    const playerName = element.parentNode.children[0].innerText;
    players.push(playerName);
    displayPlayer();
    arrLentgh();
}
// Add Event Listener
document.getElementById('calculate').addEventListener('click', function () {
    totalPlayerExpense();
})

document.getElementById('calculate-total').addEventListener('click', function () {
    const playerCost = getInnerFieldAmount('calculate-amount');
    // const playerCost = totalPlayerExpense();
    const managerCost = getInputFieldByID('manager');
    if (isNaN(managerCost) || typeof managerCost !== 'number' || managerCost < 0) {
        return alert('Invalid Value! Please Give me Valid Number')
    }
    const coachCost = getInputFieldByID('coach');
    if (isNaN(coachCost) || typeof coachCost !== 'number' || coachCost < 0) {
        return alert('Invalid Value! Please Give me Valid Number')
    }
    const totalCost = playerCost + managerCost + coachCost;
    if (isNaN(totalCost)) {
        return
    }
    setInnerText('total-cost', totalCost)
})