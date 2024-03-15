import "./App.css";
import Footer from "./modules/footer/Footer";
import Header from "./modules/header/Header";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <Header />
      <main className="App">
        <MainRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
