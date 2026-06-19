export type CatalogFilter =
  | "all"
  | "one-bedroom"
  | "two-bedrooms"
  | "terrace"
  | "compact";

const filters: { value: CatalogFilter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "one-bedroom", label: "1 dormitorio" },
  { value: "two-bedrooms", label: "2 dormitorios" },
  { value: "terrace", label: "Con terraza" },
  { value: "compact", label: "Compactos" },
];

export function ModelFilters({
  active,
  onChange,
  resultCount,
}: {
  active: CatalogFilter;
  onChange: (filter: CatalogFilter) => void;
  resultCount: number;
}) {
  return (
    <div className="catalog-filters" aria-label="Filtrar modelos">
      <div className="catalog-filters__list" role="group">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={active === filter.value ? "is-active" : ""}
            aria-pressed={active === filter.value}
            onClick={() => onChange(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <span className="catalog-filters__count">
        {resultCount} {resultCount === 1 ? "modelo" : "modelos"}
      </span>
    </div>
  );
}
