// Taskiniz:
//* 1. Obyekt yaradin.
//* 2. Array icinde coxlu obyektler yaradin
//* 3. Telebeler obyektinde bir nece telebe elave edin. Hobbileri, xususiyettleri kimi icerisindede deyerleri qeyd edin.
//* 4. Students arrayinin qiymet ortalamasini cixardin. (Butun telebelerin qiymetlerini alib sayini bolun.)
//* 5. Qiymeti 90-dan az olan telebeleri Ad ve Soyadi ile birlikde ekrana cixardib onlara xeberdarliq edin.

let students = [
  {
    id: 1,
    name: "veli",
    surname: "eliyev",
    age: 26,
    skill_id: 3,
    address_id: 70,
    grade: 80,
    hobby: "chess",
  },
  {
    id: 2,
    name: "nicat",
    surname: "hesenli",
    age: 26,
    skill_id: 1,
    address_id: 50,
    grade: 94,
    hobby: "swimming",
  },
  {
    id: 3,
    name: "zaur",
    surname: "memmedov",
    age: 26,
    skill_id: 4,
    address_id: 70,
    grade: 70,
    hobby: "football",
  },
  {
    id: 4,
    name: "cosqun",
    surname: "kazimov",
    age: 26,
    skill_id: 2,
    address_id: 90,
    grade: 93,
    hobby: "basketball",
  },
];

let addresses = [
  {
    id: 70,
    name: "Nakhchivan",
  },
  {
    id: 50,
    name: "Sumgait",
  },
  {
    id: 90,
    name: "Baku",
  },
];

let skills = [
  {
    id: 1,
    name: "JAVA",
  },
  {
    id: 2,
    name: "C#",
  },
  {
    id: 3,
    name: "PYTHON",
  },
  {
    id: 4,
    name: "JAVASCRIPT",
  },
];

//- 4
function sinif_ortalamasi() {
  let cemi = 0;
  // let count = 0;
  students.map((student) => {
    // count++;
    cemi += student.grade;
  });

  let ortalama = cemi / students.length;
  console.log(`Telebelerin Ortalamasi: ${ortalama.toFixed(2)}`);
  // console.log(`Telebelerin Ortalamasi: ${(cemi / count).toFixed(2)}`);
  return ortalama;
}
sinif_ortalamasi();

//- 5 - qarisiq
function asagi_neticeler_2() {
  console.log("Neticesi 90-dan asagi olan telebeler:");
  students.map((student) => {
    if (student.grade < 90) {
      let student_skill = skills.find((s) => s.id === student.skill_id);
      let student_address = addresses.find((a) => a.id === student.address_id);
      console.log(
        `Unvani: ${student_address.name} , Programalama Dili: ${student_skill.name}`
      );
      console.log(
        `Ad: ${student.name} Soyad: ${student.surname} - Netice: ${student.grade} --- 90-dan asagidir !`
      );
    }
  });
}
// asagi_neticeler_2();

//- 5 - sade
function asagi_neticeler() {
  console.log("Neticesi 90-dan asagi olan telebeler:");
  let filter_students = students.filter((student) => student.grade < 90);

  if (filter_students.length > 0) {
    filter_students.map((student) =>
      console.log(
        `Ad: ${student.name} Soyad: ${student.surname} - Netice: ${student.grade} --- 90-dan asagidir ! `
      )
    );
  } else console.log("Neticesi 90-dan asagi telebe yoxdur");
}
asagi_neticeler();
