function addStudent(){

    let name = document.getElementById("name").value;
    let c++ = Number(document.getElementById("c++").value);
    let java = Number(document.getElementById("java").value);
    let python = Number(document.getElementById("python").value);

    if(name === "" || c++ === 0 || java === 0 || python === 0){
        alert("Please fill all fields");
        return;
    }

    let total = c++ + java + python;
    let percentage = (total / 300) * 100;

    let grade = "";

    if(percentage >= 90){
        grade = "A+";
    }
    else if(percentage >= 75){
        grade = "A";
    }
    else if(percentage >= 60){
        grade = "B";
    }
    else if(percentage >= 40){
        grade = "C";
    }
    else{
        grade = "Fail";
    }

    let table = document.getElementById("resultBody");

    let row = `
        <tr>
            <td>${name}</td>
            <td>${c++}</td>
            <td>${java}</td>
            <td>${python}</td>
            <td>${total}</td>
            <td>${percentage.toFixed(2)}%</td>
            <td>${grade}</td>
        </tr>
    `;

    table.innerHTML += row;

    document.getElementById("name").value = "";
    document.getElementById("maths").value = "";
    document.getElementById("science").value = "";
    document.getElementById("english").value = "";
}