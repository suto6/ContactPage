import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Section from "./components/Section"

const App = () => {
  return (
    <>
    <Navbar />
    <div className="h-full overflow-hidden">
    <Header />
    <Section />
    {/* <Form /> */}
    </div>
    </>
  )
}

export default App