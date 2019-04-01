import "reflect-metadata"
import * as React from "react"
import { lazyInject } from "./services/ioc"
import { IService } from "./services/IService"

interface IExampleState {
    data: string
}

export class Example extends React.Component<{}, IExampleState> {
    @lazyInject("service")
    private readonly service: IService

    constructor (props: {}) {
        super(props)

        this.state = {
            data: ""
        }
    } 

    public componentDidMount() {
        const data = this.service.get()
        this.setState({
            data
        })
    }

    public render() {
        const { data } = this.state
        return <div>{data}</div>
    }
}