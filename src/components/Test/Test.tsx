import { useState } from "react";

const filters = [
  { id: "Здоровье", name: "Здоровье" },
  { id: "Фитнес", name: "Фитнес" },
  { id: "Питание", name: "Питание" },
];

const Test = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  console.log(selectedFilters);

  return (
    <>
      {filters.map((el) => (
        <div key={el.id}>
          <input
            type="checkbox"
            id={el.id}
            checked={selectedFilters.includes(el.id)} // проверка: выбран ли фильтр
            onChange={() => {
              if (selectedFilters.includes(el.id)) {
                setSelectedFilters(
                  selectedFilters.filter((id) => id !== el.id)
                ); // убрать из массива
              } else {
                setSelectedFilters([...selectedFilters, el.id]); // добавить в массив
              }
            }}
          />
          <label htmlFor={el.id}>{el.name}</label>
        </div>
      ))}
    </>
  );
};

export default Test;
