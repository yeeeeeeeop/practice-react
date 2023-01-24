import Items from "./Items";

function Board({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>글번호</th>
          <th>글제목</th>
          <th>작성자</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <Items
            key={item.id}
            id={item.id}
            title={item.title}
            writer={item.writer}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Board;
