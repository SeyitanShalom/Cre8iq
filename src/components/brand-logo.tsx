import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/images/cre8iq-logo.png"
      alt="Cre8iq"
      width={300}
      height={91}
      priority={priority}
      className={className}
    />
  );
}
