import Card from "./components/Card";
import { AVAILABLE_DATA } from "./data";
function App() {
  return (
    <>
      <header>
        <h1>My Items</h1>
      </header>

      <div class="cards-view">
        <div class="cards-grid">
          {AVAILABLE_DATA.map((data)=>(
            <Card card={data} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
