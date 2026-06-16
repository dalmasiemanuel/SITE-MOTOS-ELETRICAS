import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from './components/Nav'
import Hero from './components/Hero'
import Specs from './components/Specs'
import Footer from './components/Footer'
import Estoque from './components/Estoque'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen selection:bg-foston-green selection:text-white flex flex-col">
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Specs />
              </>
            } />
            <Route path="/estoque" element={<Estoque />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
