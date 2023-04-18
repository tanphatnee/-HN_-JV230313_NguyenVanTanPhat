let students = [
  {
    id: 1,
    names: "rikkei",
    email: "rikkei@gmail.com",
    phone: "0999999999",
    address: "hà nội",
    sex: "mail",
  },
  {
    id: 2,
    names: "academy",
    email: "academy@gmail.com",
    phone: "0899999888",
    address: "HCM",
    sex: "femail",
  },
];

// Render mảng

const tbody = document.getElementById("tbody");
function renderStudent() {
  tbody.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    tbody.innerHTML =
      tbody.innerHTML +
      `<tr id="${students[i].id}">
            <th>${i + 1}</th>
            <td>${students[i].names}</td>
            <td>${students[i].email}</td>
            <td>${students[i].phone}</td>
            <td>${students[i].address}</td>
            <td>${students[i].sex}</td>
            <td><button class="btn-update">update</button><button class="btn-delete">delete</button></td>
        </tr>`;
  }
}
renderStudent();

// Thêm Mới
const form = document.getElementById("main-form");
document
  .getElementById("save-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (
      form.fullName.value === "" ||
      form.Email.value === "" ||
      form.Phone.value === "" ||
      form.Address.value === "" ||
      form.Gender.value === ""
    ) {
      alert("Vui lòng nhập đủ thông tin vào các trường !");
      return;
    }
    let student = {
      id: Math.floor(Math.random() * 1000000000),
      names: form.fullName.value,
      email: form.Email.value,
      phone: form.Phone.value,
      address: form.Address.value,
      sex: form.Gender.value,
    };
    students.push(student);
    alert("Thêm mới thành công !");
    renderStudent();
  });

// Xóa
function deleteStudent(deleteId) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === deleteId) {
      students.splice(i, 1);
      break;
    }
  }
}
tbody.onclick = function (e) {
  if (e.target.classList.contains("btn-delete")) {
    let deleteElement = e.target.parentElement.parentElement;
    let deleteId = Number(deleteElement.id);
    deleteStudent(deleteId);
    deleteElement.remove();
  }
};

// Tìm Kiếm
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  const keyword = searchInput.value.trim();
  const filteredStudents = filterStudents(keyword);
  renderFilteredStudents(filteredStudents);
});

function renderFilteredStudents(students) {
  tbody.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    tbody.innerHTML =
      tbody.innerHTML +
      `<tr id="${students[i].id}">
            <th>${i + 1}</th>
            <td>${students[i].names}</td>
            <td>${students[i].email}</td>
            <td>${students[i].phone}</td>
            <td>${students[i].address}</td>
            <td>${students[i].sex}</td>
            <td><button class="btn-update">update</button><button class="btn-delete">delete</button></td>
        </tr>`;
  }
}




// const sortTable = () => {
//     const table = document.querySelector("table");
//     const tbody = document.querySelector("#tbody");
//     const rows = Array.from(tbody.querySelectorAll("tr"));
//     const sortedRows = rows.sort((a, b) => {
//       const nameA = a.cells[1].textContent.trim().toLowerCase();
//       const nameB = b.cells[1].textContent.trim().toLowerCase();
//       if (nameA < nameB) return -1;
//       if (nameA > nameB) return 1;
//       return 0;
//     });
//     sortedRows.forEach((row) => {
//       tbody.appendChild(row);
//     });
//   };
  
//   const sortButton = document.querySelector("button");
//   sortButton.addEventListener("click", sortTable);
  

// const fullNameInput = document.getElementById('fullName');
// const fullNameError = document.getElementById('fullNameError');

// if (fullNameInput.value.trim() === '') {
//   fullNameError.innerText = 'Vui lòng nhập họ và tên';
// } else {
//   fullNameError.innerText = '';
// }

// const emailInput = document.getElementById('Email');
// const emailError = document.getElementById('EmailError');
// const emailRegex = /\S+@\S+\.\S+/;

// if (!emailRegex.test(emailInput.value)) {
//   emailError.innerText = 'Email không hợp lệ';
// } else {
//   emailError.innerText = '';
// }

// const phoneInput = document.getElementById('Phone');
// const phoneError = document.getElementById('PhoneError');
// const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

// if (!phoneRegex.test(phoneInput.value)) {
//   phoneError.innerText = 'Số điện thoại không hợp lệ';
// } else {
//   phoneError.innerText = '';
// }

// const addressInput = document.getElementById('Address');
// const addressError = document.getElementById('AddressError');

// if (addressInput.value.trim() === '') {
//   addressError.innerText = 'Vui lòng nhập quê quán';
// } else {
//   addressError.innerText = '';
// }
