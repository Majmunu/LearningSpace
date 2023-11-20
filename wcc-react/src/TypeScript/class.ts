class Department {
    // name: string;
    private employees: string[] = []

    constructor(public readonly id: string, public name: string) {
        this.id = id
        this.name = name
    }

    describe(this: Department) {
        console.log('Department:' + this.name + this.id)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }

}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }

}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string) {
        this.reports.push(text)
    }

    printReports() {
        console.log(this.reports)
    }
}

const it = new ITDepartment("d1", ['MAX'])
// const itAccounting = new ITDepartment("d1", "TEST")

it.addEmployee("Max")
it.addEmployee("Manu")
it.describe();
it.printEmployeeInformation()
console.log(it)
// const itCopy = {name: 's', describe: it.describe};
// itCopy.describe()
const accounting = new AccountingDepartment("a1", [])
accounting.addReport("Something went wrong........")
accounting.printReports()
export default Department
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement
// userInputElement.value = 'Hi there'

const userInput = ''
const storedData = userInput ?? 'DEFAULT'

console.log(storedData)
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {title: 'CEO', description: 'My own company'}
}
console.log(111, fetchedUserData?.job?.title)
const name: Array<string> = []
console.log(name)


