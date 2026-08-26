import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";
import { products, type Product } from "@/utils/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  const content = (
    <>
      <span className="flex flex-wrap items-center gap-2.5 font-mono text-meta">
        <span className="text-accent">{product.status}</span>
        <span className="text-muted-2">{product.where}</span>
      </span>
      <span className="text-[22px] font-semibold tracking-[-0.025em]">{product.name}</span>
      <span className="text-[13px] tracking-[0.02em] text-muted">{product.tagline}</span>
      <span className="text-[14px] leading-[1.6] text-muted text-pretty">{product.body}</span>
      <span className="flex flex-wrap gap-[7px] pt-1">
        {product.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </span>
    </>
  );

  const className = "flex flex-col gap-[13px] bg-bg px-9 pb-[38px] pt-8";

  // The four products with no public URL render as plain cells rather than
  // dead links — nothing to hover, nothing to click.
  if (!product.href) return <div className={className}>{content}</div>;

  return (
    <Link
      href={product.href}
      target="_blank"
      rel="noopener"
      className={`${className} wash-hover`}
    >
      {content}
    </Link>
  );
};

const ProductsSection = () => (
  <section>
    <SectionHeading
      id="products"
      eyebrow="03 — Products I build on my own"
      title="Six shipped, not six side projects"
      aside={
        <p className="max-w-[380px] text-[15px] leading-[1.6] text-muted text-pretty">
          One live web app, a published Chrome extension, three Tauri desktop apps, and a Figma
          plugin. All designed, built, and released solo.
        </p>
      }
    />

    <div className="grid gap-px border-y border-line bg-line split:grid-cols-2 grid3:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  </section>
);

export default ProductsSection;
