export function createAllDoctorsContainerHtml() {
  const userInputContainer = document.getElementById("user-input-container");
  let doctorsContainerHtml = document.createElement("div");
  doctorsContainerHtml.id = "doctors-container";
  userInputContainer.append(doctorsContainerHtml);
}

export function createDoctorContainerHtml() {
  //const doctorsContainerHtml = document.getElementById("doctors-container");
  let doctorHtml = document.createElement("div");
  doctorHtml.className = "doctor";
  return doctorHtml;
}

export function createDoctorFirstNameHtml(doctor) {
  let doctorFirstName = document.createElement("p");
  doctorFirstName.innerHTML = `Name: ${doctor.profile.first_name}`;
  doctorFirstName.classList.add("first-name");
  return doctorFirstName;
}

export function createDoctorLastNameHtml(doctor) {
  let doctorLastName = document.createElement("p");
  doctorLastName.innerHTML = doctor.profile.last_name;
  doctorLastName.classList.add("last-name");
  return doctorLastName;
}

export function createDoctorNumberHtml(doctor) {
  let doctorNumber = document.createElement("p");
  doctorNumber.innerHTML = "Phone: " + doctor.practices[0].phones[0].number;
  return doctorNumber;
}

export function createDoctorAddressHtml(doctor) {
  let address = doctor.practices[0].visit_address;
  let doctorAddress = document.createElement("p");
  doctorAddress.innerHTML = `Address: ${address.street} ${address.city}, ${address.state} ${address.zip}`;
  return doctorAddress;
}

export function createDoctorWebsiteHtml(doctor) {
  let doctorWebsite = document.createElement("p");
  doctorWebsite.innerHTML = "Website: " + doctor.practices[0].website;
  return doctorWebsite;
}

export function createDoctorAcceptingNewPatientsHtml(doctor) {
  let doctorAcceptingPatients = document.createElement("p");
  doctorAcceptingPatients.innerHTML = "Accepting new patients: " + doctor.practices[0].accepts_new_patients;
  return doctorAcceptingPatients;
}

export function createDoctor(doctor) {
  let doctorFragment = document.createDocumentFragment();
  let doctorContainer = createDoctorContainerHtml(doctor);
  let doctorFirstNameHtml = createDoctorFirstNameHtml(doctor);
  let doctorLastNameHtml = createDoctorLastNameHtml(doctor);
  let doctorAddress = createDoctorAddressHtml(doctor);
  let doctorNumberHtml = createDoctorNumberHtml(doctor);
  let doctorAcceptingPatients = createDoctorAcceptingNewPatientsHtml(doctor);
  
  doctorFragment.appendChild(doctorContainer);
  doctorContainer.appendChild(doctorFirstNameHtml);
  doctorContainer.appendChild(doctorLastNameHtml);
  doctorContainer.appendChild(doctorAddress);
  doctorContainer.appendChild(doctorNumberHtml);
  
  let doctorWebsiteHtml;
  if(doctor.practices[0].website) {
    doctorWebsiteHtml = createDoctorWebsiteHtml(doctor);
    doctorContainer.appendChild(doctorWebsiteHtml);
  }
  doctorContainer.appendChild(doctorAcceptingPatients);
  return doctorFragment;
}

export function createAllDoctors(response) {
  const doctorsContainer = document.getElementById("doctors-container");
  let doctorsFragmet = document.createDocumentFragment();
  let doctors = response.data;
  console.log(doctors," response data")
  for(let i = 0; i < doctors.length; i++) {
    doctorsFragmet.appendChild(createDoctor(doctors[i]));
  }
  doctorsContainer.appendChild(doctorsFragmet);
}
//address, phone, website, new patients?
export function displayZeroMatchesMessage() {
  const error = document.getElementById("error");
  let errorMessage = document.createElement("p");
  errorMessage.innerHTML = "No available doctors matching that query";
  errorMessage.id = "zero-matches";
  error.appendChild(errorMessage);
}