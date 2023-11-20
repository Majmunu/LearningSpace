//部门
export default class Department {
    private employees: string[] = [];

    constructor(private id: string, public name: string) {
        this.name = name;
    }

    //方法 避免捕获不需要的行为
    describe(this: Department) {
        console.log('Department:', this.id, ',', this.name)
    }

    //添加员工
    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    //输出员工信息
    printEmployeeInformation() {
        console.log(`length:${this.employees.length},employee:${this.employees}`)
    }

}


//IT部门
class ITDepartment extends Department {
    constructor(id: string, name: string, public admins: string[]) {
        super(id, name);
        this.admins = admins
    }
}

const accounting = new Department(Math.random().toString(), "Accounting")
// accounting.describe()
accounting.addEmployee('Max')
accounting.addEmployee('Aok')
accounting.addEmployee('Zkl')

accounting.printEmployeeInformation()
console.log(accounting)
const IT = new ITDepartment('D1', 'IT', ['Me'])
console.log('it:', IT)
IT.describe()

//会计部门
class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'account');

    }

    addReport(text: string) {
        this.reports.push(text)
    }

    printReports() {
        console.log(this.reports)
    }
}

const account = new AccountingDepartment('a1', [])
account.addReport('hello word')
console.log(account)

const MyArray = [
    {name: "Alice", age: 15},
    {name: "Bob", age: 23},
    {name: "Eve", age: 38},
    {name: "EVA", age: 38}
];


type Person = typeof MyArray[0];

// type Person = {
//    name: string;
//    age: number;
// }