export default function CategorySelect({ onSelect }) {
  const categories = ["Programming", "OOP", "DSA"];

  return (
    <div className="card-container">
      {categories.map((cat) => (
        <div className="category-card" key={cat} onClick={() => onSelect(cat)}>
          <h2>{cat}</h2>
          <p>Start {cat} Quiz</p>
        </div>
      ))}
    </div>
  );
}