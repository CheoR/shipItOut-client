import React from "react"
import { Route } from "react-router-dom"

import { Home } from "./home/Home"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            {/* <Route exact path="/">
                console.log("made it here")
                <Home />
            </Route> */}
        </main>
    </>
}
