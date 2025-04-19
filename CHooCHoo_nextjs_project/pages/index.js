
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const artworks = [
    {
      src: "/your-artwork-1.jpg",  // public 폴더 내에 이미지 파일이 있어야 함
      alt: "Artwork 1"
    },
    {
      src: "/your-artwork-2.jpg",
      alt: "Artwork 2"
    },
    {
      src: "/your-artwork-3.jpg",
      alt: "Artwork 3"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black p-8 font-sans">
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-2">CHooCHoo</h1>
        <p className="text-xl text-gray-500">전달하는 사람입니다.</p>
      </section>

      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artworks.map((art, index) => (
            <Card key={index} className="overflow-hidden shadow-md rounded-2xl">
              <CardContent className="p-0">
                <Image
                  src={art.src}
                  alt={art.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-24 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="text-gray-700 leading-relaxed">
          감정을 전하고, 이야기를 그리는 것을 좋아합니다.<br />
          다양한 색감과 형태로 표현하며, 보는 사람에게 무언가를 "전달"하는 작업을 합니다.
        </p>
      </section>

      <section className="border-t pt-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="flex justify-center items-center gap-2 text-gray-800 text-lg">
          <Mail className="w-5 h-5" /> rladlsgud0307@gmail.com
        </p>
      </section>
    </main>
  );
}
