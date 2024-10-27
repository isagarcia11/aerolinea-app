import { Car } from "./car";

export class Dequedata {
    private data: Car[] = [];

    addFront(car: Car) { /* implementación */ }
    addBack(car: Car) { /* implementación */ }
    //removeFront(): Car | null { /* implementación */ }
    //removeBack(): Car | null { /* implementación */ }
    get length() { return this.data.length; }
}
