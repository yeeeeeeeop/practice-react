function Items({ id, title, writer }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{writer}</td>
    </tr>
  );
}

export default Items;
