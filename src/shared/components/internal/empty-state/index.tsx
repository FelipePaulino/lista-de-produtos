import Image from "next/image";

export const EmptyState = () => (
  <div className="flex flex-col items-center justify-center h-full mt-20">
    <Image
      src="/assets/not-found.svg"
      alt="Empty State"
      width={350}
      height={350}
    />
  </div>
);
