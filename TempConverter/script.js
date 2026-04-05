function calculate() {
    const val = document.getElementById('degrees').value;
    const type = document.getElementById('type').value;
    const res = document.getElementById('result');

    if (val === "") {
        res.innerHTML = "Please enter a value!";
        return;
    }

    let num = parseFloat(val);
    if (type === "CtoF") {
        let f = (num * 9/5) + 32;
        res.innerHTML = num + "°C = " + f.toFixed(2) + "°F";
    } else {
        let c = (num - 32) * 5/9;
        res.innerHTML = num + "°F = " + c.toFixed(2) + "°C";
    }
}