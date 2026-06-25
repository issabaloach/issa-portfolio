import SearchIcon from "../ui/SearchIcon";

export default function FilterBar({ filters, activeFilter, counts, query, onFilterChange, onQueryChange }) {
  return (
    <div className="filter-bar">
      <span className="live-badge">
        <span className="pulse-wrap" />
        <span>$ tail -f /career.log</span>
      </span>

      {filters.map((f) => (
        <button
          key={f.id}
          className={"filter-chip" + (activeFilter === f.id ? " active" : "")}
          onClick={() => onFilterChange(f.id)}
        >
          <span>{f.label}</span>
          <span className="count">{counts[f.id]}</span>
        </button>
      ))}

      <div className="search-wrap">
        <span className="search-icon">
          <SearchIcon />
        </span>
        <input
          className="search-input"
          placeholder="search releases..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </div>
    </div>
  );
}
