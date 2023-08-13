import Input from "./Components/Input";
import MainPage from "./Pages/Main-page";

function App() {
  return (
    <div className="App">
      <h1>Hola mundo, app_model, second pc</h1>
      <MainPage/>
      <Input
        name="SampleInput"
        value="SampleInput"
        placeholder="Value"
      />
    </div>
  );
}

export default App;
