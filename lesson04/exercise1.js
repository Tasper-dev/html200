const applicantName = [
  "Abby Apple",
  "Bella Baker",
  "Carl Close",
  "Danny Drake",
  "Elvis Escott",
];

console.log(applicantName);

applicantName.push("Franco Felix");

console.log(applicantName);

applicantName.splice(2, 2);

console.log(applicantName);

const applicantNamelist = applicantName.join(",");

console.log(applicantNamelist);

// [object Array] (5)
["Abby Apple", "Bella Baker", "Carl Close", "Danny Drake", "Elvis Escott"][
  // [object Array] (6)
  ("Abby Apple",
  "Bella Baker",
  "Carl Close",
  "Danny Drake",
  "Elvis Escott",
  "Franco Felix")
][
  // [object Array] (4)
  ("Abby Apple", "Bella Baker", "Elvis Escott", "Franco Felix")
];
("Abby Apple,Bella Baker,Elvis Escott,Franco Felix");
