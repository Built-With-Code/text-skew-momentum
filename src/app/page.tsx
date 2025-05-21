import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <section className="bg-yellow-500 h-screen w-full flex items-center justify-center">
        <h1 className="text-white text-8xl font-bold">{"Hi, I'm Charles"}</h1>
      </section>
      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full object-cover -z-10">
          <Image
            className="w-full h-full object-cover"
            src="/bg-image.jpg"
            alt="Racecar driver"
            fill
          />
          <div className="absolute inset-0 bg-black/70 w-full h-full object-cover" />
        </div>
        <h1 className="uppercase font-bold text-white text-8xl text-nowrap">
          {"It's more about hard work than talent"}
        </h1>
      </section>
    </div>
  );
}
