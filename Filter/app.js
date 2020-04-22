const addCarBtn = document.getElementById('add-car-btn');
const searchBtn = document.getElementById('search-btn');
const cars = [];

const renderCars = (filter = '') => {
  const carList = document.getElementById('car-list');

  if (cars.length === 0) {
    carList.classList.remove('visible');
    return;
  } else {
    carList.classList.add('visible');
  }

  let filteredCars;

  if (filter !== '') {
    filteredCars = cars.filter((car) => car.info.title.includes(filter));
  } else {
    filteredCars = cars;
  }

  carList.innerHTML = '';

  filteredCars.forEach((car) => {
    const carEl = document.createElement('li');
    let text = car.info.title + ' - ';
    for (key in car.info) {
      if (key !== 'title') {
        text += `${key}: ${car.info[key]}`;
      }
    }
    carEl.textContent = text;
    carList.append(carEl);
  });
};

const addCarHandler = () => {
  const title = document.getElementById('title').value.toUpperCase();
  const extraName = document.getElementById('extra-name').value.toUpperCase();
  const extraValue = document.getElementById('extra-value').value.toUpperCase();

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    alert('Invalid input');
    return;
  }

  const newCar = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  cars.push(newCar);
  renderCars();
  console.log(cars);
};

const searchCarHandler = () => {
  const filteredTerm = document
    .getElementById('filter-title')
    .value.toUpperCase();
  renderCars(filteredTerm);
};

addCarBtn.addEventListener('click', addCarHandler);
searchBtn.addEventListener('click', searchCarHandler);
