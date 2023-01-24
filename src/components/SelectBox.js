function SelectBox({ setSelected }) {
  const onSelect = (event) => {
    setSelected(event.target.value);
  };

  return (
    <select onChange={onSelect}>
      <option key="title" value="title">
        글 제목 검색
      </option>
      <option key="writer" value="writer">
        작성자 검색
      </option>
    </select>
  );
}

export default SelectBox;
