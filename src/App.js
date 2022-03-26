import React from 'react'
import Data from './components/Data'
import Navbar from './components/Navbar'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="" element={<Data fetchUrl={``} />} />
                    <Route exact path="/category/men's clothing" element={<Data category="men's clothing" fetchUrl={`/category/men's clothing`} />} />
                    <Route exact path="/category/women's clothing" element={<Data category="women's clothing" fetchUrl={`/category/women's clothing`} />} />
                    <Route exact path="/category/electronics" element={<Data category="electronics" fetchUrl={`/category/electronics`} />} />
                    <Route exact path="/category/jewelery" element={<Data category="jewelery" fetchUrl={`/category/jewelery`} />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App