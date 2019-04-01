import { IService } from "./IService"
import { injectable } from "inversify"

@injectable()
export class Service implements IService {
    get() {
        return "Real Data"
    }
}