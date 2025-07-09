import Image from "next/image";

type LogoVariant = "primary" | "dark" | "mono" | "mono-dark";

interface Logo {
  variant: LogoVariant;
  name: string;
  path: string;
}

export default function Logos() {
  const logos: Logo[] = [
    { variant: "primary", name: "Primary", path: "/assets/logo/png/ibvi-logo-primary.png" },
    { variant: "dark", name: "Dark", path: "/assets/logo/png/ibvi-logo-dark.png" },
    { variant: "mono", name: "Mono", path: "/assets/logo/png/ibvi-logo-mono.png" },
    { variant: "mono-dark", name: "Mono Dark", path: "/assets/logo/png/ibvi-logo-mono-dark.png" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {logos.map((logo) => (
        <div key={logo.variant} className="flex flex-col items-center justify-center p-4">
          <div className="relative w-32 h-32 mb-2">
            <Image 
              src={logo.path}
              alt={`IBVI Logo ${logo.name}`}
              width={128}
              height={128}
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="text-center text-sm font-medium">{logo.name}</p>
        </div>
      ))}
    </div>
  );
}
