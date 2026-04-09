import { useState } from "react";
import ThreeBackground from "./components/ThreeBackground";
import NameScreen from "./components/NameScreen";
import CategorySelect from "./components/CategorySelect";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";
import "./App.css";

function App() {
  const [page, setPage] = useState("name");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div>
      <ThreeBackground />

      {page === "name" && (
        <NameScreen
          onStart={(n) => {
            setName(n);
            setPage("category");
          }}
        />
      )}

      {page === "category" && (
        <CategorySelect
          onSelect={(cat) => {
            setCategory(cat);
            setPage("quiz");
          }}
        />
      )}

      {page === "quiz" && (
        <QuizPage
          category={category}
          name={name}
          onFinish={(res) => {
            setResult(res);
            setPage("result");
          }}
        />
      )}

      {page === "result" && <ResultPage result={result} name={name} />}
    </div>
  );
}

export default App;