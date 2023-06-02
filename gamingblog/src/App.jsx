import { Route, Routes } from "react-router-dom"
import Footer from "./components/shared/Footer"
import Header from "./components/shared/Header"
import HomePage from "./components/Home/HomePage"
import Article from "./components/Article"
import Author from "./components/Author"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="articles/:slug" element={<Article />} />
        <Route path="authors/:slug" element={<Author />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
