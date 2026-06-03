async function saveData() {

    const name = document.getElementById("name").value;

    const response = await fetch('/api/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
    });

    const result = await response.json();

    document.getElementById("result").innerHTML =
        "Saved Employee ID: " + result._id;
}