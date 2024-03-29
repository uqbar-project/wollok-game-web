import p5 from "p5"
import { buildEnvironment, WRENatives } from 'wollok-ts'
import interpret from 'wollok-ts/dist/interpreter/interpreter'
import { GameProject, getProgramIn } from "./gameProject"
import sketch from "./sketch"


class Game {
    environment: any
    project: GameProject
    evaluation: any

    constructor(project: GameProject) {
        this.project = project
        this.environment = buildEnvironment(project.sources)
    }

    start(canvasParent?: Element) {
        const interpreter = interpret(this.environment, WRENatives)
        interpreter.exec(getProgramIn(this.project.main, this.environment))
        return new p5(sketch(this.project, interpreter, canvasParent))
    }
}

export default Game