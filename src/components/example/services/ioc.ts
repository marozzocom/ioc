import { Container } from "inversify"
import getDecorators from "inversify-inject-decorators"
import { IService } from "./IService"
import { Service } from "./Service"

export const container = new Container()
container
    .bind<IService>("service")
    .to(Service)

const { lazyInject } = getDecorators(container)

export { lazyInject }
