/**
 * LisansPro logo işareti — public/logo.png
 */
export default function LogoMark({ size = 44 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="LisansPro"
      width={size}
      height={size}
      style={{ width: size, height: size, borderRadius: 12, display: "block", flexShrink: 0 }}
    />
  );
}
