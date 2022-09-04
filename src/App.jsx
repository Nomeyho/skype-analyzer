import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/screen/HomeScreen";
import StatisticsScreen from "./components/screen/StatisticsScreen";

export function App() {
  return (
    <BrowserRouter basename="/skype-analyzer">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/statistics" element={<StatisticsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
