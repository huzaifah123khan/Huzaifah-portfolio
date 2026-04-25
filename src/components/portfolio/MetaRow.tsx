interface MetaItem {
  label: string;
  value: string;
}

interface MetaRowProps {
  year: string;
  items: MetaItem[];
}

const MetaRow = ({ year, items }: MetaRowProps) => {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4 md:gap-x-10">
      <div>
        <div className="label-mono mb-3">Year</div>
        <div className="value-mono">{year}</div>
      </div>
      {items.map((it) => (
        <div key={it.label}>
          <div className="label-mono mb-3">{it.label}</div>
          <div className="value-mono whitespace-pre-line">{it.value}</div>
        </div>
      ))}
    </div>
  );
};

export default MetaRow;
