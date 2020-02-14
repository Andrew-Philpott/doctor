export function createAllDoctorsContainerHtml() {
  const userInputContainer = document.getElementById("user-input-container");
  let doctorsContainerHtml = document.createElement("div");
  doctorsContainerHtml.id = "doctors-container";
  userInputContainer.append(doctorsContainerHtml);
}

export function createDoctorContainerHtml() {
  const doctorsContainerHtml = document.getElementById("doctors-container");
  let doctorHtml = document.createElement("div");
  doctorHtml.className = "doctor";
  return doctorHtml;
}

export function createDoctorFirstNameHtml(doctor) {
  let doctorFirstName = document.createElement("p");
  doctorFirstName.innerHTML = doctor[0].profile.first_name;
  return doctorFirstName;
}

export function createDoctorLastNameHtml(doctor) {
  let doctorLastName = document.createElement("p");
  doctorLastName.innerHTML = doctor[0].profile.last_name;
  return doctorLastName;
}

export function createDoctorNumberHtml(doctor) {
  let doctorNumber = document.createElement("p");
  doctorNumber.innerHTML = doctor[0].practices[0].phones[0].number;
  return doctorNumber;
}

export function createDoctorWebsiteHtml(doctor) {
  let doctorWebsite = document.createElement("p");
  doctorWebsite.innerHTML = doctor[0].practices[0].website;
  return doctorWebsite;
}

//address, phone, website, new patients?
