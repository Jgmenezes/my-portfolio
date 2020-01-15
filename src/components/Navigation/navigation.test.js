import React from "react"
import Navigation from "./navigation"
import { render } from "@testing-library/react"

describe('<Navigation />', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Navigation/>)
        expect(asFragment()).toMatchSnapshot()
    })
})