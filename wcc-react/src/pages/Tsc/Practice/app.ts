export class ProjectInput {
    templateElement: HTMLDivElement;
    hostElement: HTMLElement;
    element: HTMLFormElement;
    descriptionInputElement: HTMLInputElement;
    titleInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;
    constructor() {
        this.templateElement = document.getElementById('project-input') as HTMLDivElement;
        this.hostElement = document.getElementById('app')!;

        console.log(123,this.templateElement)
        //将外部文档的一个节点拷贝一份，然后可以把这个拷贝的节点插入到当前文档中。
        const importedNode = document.importNode(this.templateElement, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id='user-input';

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;


        this.attach()
    }
    private submitHandler(event:Event){
        event.preventDefault();
        console.log(this.titleInputElement.value)

    }
    private configure(){
        this.element.addEventListener('submit',this.submitHandler.bind(this))
    }
    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element)
    }

}

// const prjInput = new ProjectInput('project-input','app')