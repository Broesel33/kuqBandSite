interface Props {
  gradient?: string;
  dark?: boolean;
}

export default function PlaceholderImage({ gradient = "from-slate-300/30 to-slate-200/20", dark = false }: Props) {
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${gradient} ${dark ? "bg-slate-800" : "bg-slate-100"} flex items-center justify-center`}
    >
      <span className="material-symbols-outlined text-6xl opacity-10 text-slate-600">image</span>
    </div>
  );
}
