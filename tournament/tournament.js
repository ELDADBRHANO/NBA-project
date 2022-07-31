let API = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
async function getUsers() {
  try {
    return await fetch(API).then((res) => res.json());
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function printUsersToTable() {
  let myTable = document.getElementById("tbody");
  getUsers().then((res) => {
    res.forEach((element) => {
      myTable.innerHTML += `
      <tr>
      <td class="td-border"> ${element.age}</td>
      <td class="td-border">${element.name.first}</td>
      <td class="td-border">${element.name.last}</td>
      <td class="td-border">${element.phone}</td>
      </tr>
      `;
    });
  });
}
printUsersToTable();

async function getUser() {
  let myTable = document.getElementById("userTable");
  const newUser = {
    info: {
      phone: input_phone.value,
      name: {
        last: input_lastName.value,
        first: nameRegister.value,
      },
      age: input_birth.value,
    },
  };
  try {
    await fetch(API, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    myTable.innerHTML += `
  <tr>
  <td class="td-border">
  ${input_birth.value}
  </td>
  <td class="td-border">
  ${nameRegister.value}
  </td>
  <td class="td-border">
  ${input_lastName.value}
  </td>
  <td class="td-border">
  ${input_phone.value}
  </td>
  </tr>
  
  `;
  }
}

function registerUser() {
  getUser();
}

function championshipInfo(){
  location.href="https://thetournament.com/regions/dayton/"
}