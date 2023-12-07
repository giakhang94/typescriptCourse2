//============================ABSTRACT CLASSES==========================
abstract class SinhVien {
  protected subjects: string[] = [];
  static tao = 1994;
  protected abstract grade: string;
  protected newestSubject: string;
  constructor(public name: string, protected age: number) {
    this.newestSubject = this.subjects[0];
  }
  addSubjects(subject: string) {
    this.subjects.push(subject);
    this.newestSubject = subject;
  }
  get getSubject() {
    return this.subjects;
  }
  get getNewestSubject() {
    return this.subjects[0];
  }
  set addSubject(subject: string) {
    if (subject) {
      this.addSubjects(subject);
    } else {
      throw new Error("please provide a subject");
    }
  }
  abstract diThi(dithi: boolean): void;
}
class sinhVien1 extends SinhVien {
  grade: string = "good";
  constructor(name: string, age: number) {
    super(name, age);
  }
  diThi(dithi: boolean) {
    let result = {
      diThi: dithi,
      ketqua: dithi ? true : false,
    };
    console.log(result);
  }
}

let sv1 = new sinhVien1("tao", 29);
console.log(sv1);
sv1.diThi(true);
sv1.addSubjects("Programing");
sv1.addSubject = "Math";
console.log("newst subject: ", sv1.getNewestSubject);
let sv2 = new sinhVien1("sv2", 22);
sv2.diThi(false);
