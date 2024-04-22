const busdata = [
  {
    from: "Dhaka",
    to: "Chittagong",
    fare: 1100,
    date: "11-06-24",
  },
  {
    from: "Dhaka",
    to: "Chittagong",
    fare: 1100,
    date: "11-06-24",
  },
  {
    from: "Dhaka",
    to: "Chittagong",
    fare: 1100,
    date: "30-04-24",
  },
  {
    from: "Dhaka",
    to: "Chittagong",
    fare: 1100,
    date: "01-05-24",
  },
  {
    from: "Barisal",
    to: "Chittagong",
    fare: 900,
    date: "11-05-24",
  },
  {
    from: "Barisal",
    to: "Chittagong",
    fare: 1200,
    date: "21-05-24",
  },
  {
    from: "Barisal",
    to: "Chittagong",
    fare: 900,
    date: "14-05-24",
  },
  {
    from: "Barisal",
    to: "Rajshahi",
    fare: 1900,
    date: "28-04-24",
  },
  {
    from: "Barisal",
    to: "Rajshahi",
    fare: 1900,
    date: "02-05-24",
  },
];

let showBuses = document.querySelector(".show-buses");

function convertDateFormat(dateString) {
  const components = dateString.split("-");
  const year = components[0].substring(2);
  const month = components[1];
  const day = components[2];
  const convertedDateString = `${day}-${month}-${year}`;
  return convertedDateString;
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const from = urlParams.get("from")?.toLocaleLowerCase();
const to = urlParams.get("to")?.toLocaleLowerCase();
const selectedDate = urlParams.get("date");

if (from && to && selectedDate && selectedDate) {
  let availableBus = busdata.filter((bus) => {
    return (
      bus.from.toLowerCase() === from &&
      bus.to.toLowerCase() === to &&
      bus.date === convertDateFormat(selectedDate)
    );
  });
  if (availableBus.length === 0) {
    showBuses.innerHTML = `<div class="no-bus">
    <img src="./image.gif" width="300px" />
    <h1 style="text-align: center;">Sorry, No bus are available!</h1>
    </div>`;
  } else {
    let displayBus = availableBus.map((bus, index) => {
      return `
        <div class="bus">
          <h2 style="width: 100%">Bus No: ${index + 1}</h2>
            <div class="bus-from">From: ${bus.from}</div>
            <div class="bus-to">To: ${bus.to}</div>
            <div class="bus-fare">Ticket price: ${bus.fare}</div>
            <div class="bus-date">Date: ${bus.date}</div>
        </div>
        `;
    });
    for (let item of displayBus) {
      showBuses.innerHTML += item;
    }
  }
} else {
  window.location.href = `index.html`;
}

const BDTICKETS = () => {
  let h3 = document.querySelector(".h3");
  h3.innerHTML = "BDTICKETS.";
  setTimeout(() => {
    h3.innerHTML = "BDTICKETS..";
  }, 100);
  setTimeout(() => {
    h3.innerHTML = "BDTICKETS...";
  }, 200);
  setTimeout(() => {
    h3.innerHTML = "BDTICKETS....";
  }, 300);
  setTimeout(() => {
    h3.innerHTML = "BDTICKETS.....";
  }, 400);
  setTimeout(() => {
    h3.innerHTML = "BDTICKETS.....";
  }, 500);
  setTimeout(() => {
    h3.innerHTML = "BDTICKETS....";
  }, 600);
  setTimeout(() => {
    h3.innerHTML = "BDTICKETS...";
  }, 700);
  setTimeout(() => {
    h3.innerHTML = "BDTICKETS..";
  }, 800);
  setTimeout(() => {
    h3.innerHTML = "BDTICKETS.";
  }, 900);
};

searching();
setInterval(() => {
  searching();
}, 1000);