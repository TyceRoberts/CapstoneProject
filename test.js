let usersContainer = document.getElementById("container");


const users = [
  {
    name: "Keychron K8 Wireless Keyboard",
    office_address: "$89.99",
    home_address: "365 Bridges road",
    email: "",
    avatar: ""
  },
  {
    name: "Redragon K552 Mechanical Keyboard",
    office_address: "$34.99",
    home_address: "",
    email: "",
    avatar: ""
  },
  {
    name: "Logitech G915 TKL Keyboard, Wireless and Bluetooth Support",
    office_address: "$159.99",
    home_address: "",
    email: "",
    avatar: ""
  },
  {
    name: "Galdas Gaming Mouse Pad",
    office_address: "$15.98",
    home_address: "",
    email: "",
    avatar: ""
  },
  {
    name: "Gerlos Large RGB Mousepad",
    office_address: "$15.99",
    home_address: "",
    email: "",
    avatar: ""
  },
  {
    name: "Razer Goliathus Extended Chroma Gaming Mousepad",
    office_address: "$39.99",
    home_address: "",
    email: "",
    avatar: ""
  },
  {
    name: "Glorious Gaming RGB Gaming Mouse",
    office_address: "$69.20",
    home_address: "",
    email: "",
    avatar: ""
  },
  {
    name: "Logitech G502 SE Hero High Performance RGB Gaming Mouse",
    office_address: "$38.99",
    home_address: "",
    email: "",
    avatar: ""
  },
  {
    name: "Razer Basilisk V3 Gaming Mouse",
    office_address: "$65.90",
    home_address: "",
    email: "",
    avatar: ""
  }
];

let myArray = ['thisOne', 'thatOne', 'thisAndThat']

var PATTERN = /this/,
  filtered = myArray.filter(function (str) { return PATTERN.test(str); });

const mappedUsers = users.map((user, index) => {
  return (`<section class="itemWrapper">
  <div class="project-card" key=${index}>
                  <div class="details">
                   <p id="box${index + 1}">${user.name}</p>
                   <p>${user.home_address}</p>
                   <p>${user.office_address}</p>
                 </div>
                 </div>
                 <div class="btnContainer">
                 <button class="addBtn" onclick="testAdd(${index})">+</button>
                 <button class="delBtn" onclick="testDelete(${index})">x</button>
                 </div>
  </section>`);
});
// usersResult = mappedUsers.replace(/[,]+/g, "");
// console.log(usersResult);
usersContainer.innerHTML = mappedUsers;