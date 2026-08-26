const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="border border-line-3 px-2 py-1 font-mono text-[10.5px] tracking-[0.08em] text-muted-2">
    {children}
  </span>
);

export default Tag;
