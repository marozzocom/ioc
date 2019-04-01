import * as React from "react"
import { Example } from "../Example"
import { render, cleanup } from "react-testing-library"
import { container } from "../services/ioc"
import { IService } from "../services/IService"
import { MockService } from "../services/MockService"

afterEach(cleanup)

container.rebind<IService>("service").to(MockService)

it("Uses Mock data", () => {
    const { getByText } = render(<Example />)
    const mockData = getByText(/Mock/i)

    expect(mockData)
})