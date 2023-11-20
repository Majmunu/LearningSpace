import React from "react";
import './app.css'


const Practice: React.FC = () => {
    // class ProjectInput {
    //     element: HTMLFormElement
    //
    //     constructor(public templateElement: HTMLTemplateElement, public hostElement: HTMLDivElement) {
    //         this.templateElement = document.getElementById('project-input') as HTMLTemplateElement
    //         this.hostElement = document.getElementById('app') as HTMLDivElement
    //         const importedNode = document.importNode(this.templateElement.content, true)
    //         this.element = importedNode.firstElementChild as HTMLFormElement;
    //         this.attach()
    //     }
    //
    //
    //     private attach() {
    //         this.hostElement.insertAdjacentElement('afterbegin', this.element)
    //     }
    //
    // }
    //
    // const projectInput = new ProjectInput(document.getElementById('project-input') as HTMLTemplateElement, document.getElementById('app') as HTMLDivElement)

    return (
        <div>
            <h1>123123</h1>
            <template id="project-input">
                <form>
                    <div className="form-control">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" rows={3}></textarea>
                    </div>
                    <div className="form-control">
                        <label htmlFor="people">People</label>
                        <input type="number" id="people" step="1" min="0" max="10"/>
                    </div>
                    <button type="submit">ADD PROJECT</button>
                </form>
            </template>
            <template id="single-project">
                <li></li>
            </template>
            <template id="project-list">
                <section className="projects">
                    <header>
                        <h2>123</h2>
                    </header>
                    <ul></ul>
                </section>
            </template>
            <div id="app"></div>
        </div>
    )
}
export default Practice