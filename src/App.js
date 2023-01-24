import { useState, useEffect } from "react";
import data from "./data.json";
import Board from "./components/Board";
import SelectBox from "./components/SelectBox";

function App() {
  const [items, setItems] = useState(data);
  const [search, setSearch] = useState("");
  const [select, setSelected] = useState("title");
  let testValue = "id";

  const onInput = (event) => {
    setSearch(event.target.value);
    setItems(data);
  };

  // 검색 옵션
  useEffect(() => {
    setItems(
      items.filter((item) => {
        if (select === "title") {
          if (item.title.includes(search)) {
            return item;
          }
        }
        if (select === "writer") {
          if (item.writer.includes(search)) {
            return item;
          }
        }
      })
    );
  }, [search]);

  return (
    <div>
      <h1>Board</h1>
      <SelectBox setSelected={setSelected} />
      <input
        value={search}
        onChange={onInput}
        type="text"
        placeholder="검색어를 입력하세요."
      />
      <Board items={items} />
    </div>
  );
}

export default App;
