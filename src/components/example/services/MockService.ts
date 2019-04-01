import { IService } from "./IService"
import { injectable } from "inversify"

@injectable()
export class MockService implements IService {
    public get() {
        return "Mock"
    }
}