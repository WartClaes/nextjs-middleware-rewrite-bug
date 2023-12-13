import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const hrefs = [
    '/detail/foo/bar/123',
    '/article/foo/bar/123',
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      { hrefs.map((href) => (
        <div key={href}>
          <Link href={href}>
            {href}
          </Link>
        </div>
      ))}
    </div>
  );
}
