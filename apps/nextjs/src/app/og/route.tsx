import { getImageArrayBuffer } from "@/utils/image";
import { ImageResponse } from "next/server";
import { fetchGoogleFonts } from "vercel-og-google-fonts";

export const runtime = "edge";

export async function GET(request: Request) {
  const image = await getImageArrayBuffer(
    new URL("@/images/image.jpg", import.meta.url)
  );

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full bg-black items-center justify-center">
        <img
          // @ts-expect-error - img doesn't know about src taking an ArrayBuffer here
          src={image}
          tw="w-64 h-64 object-cover rounded-full"
        />
        <h1 tw="text-white text-7xl mt-8">Akshit Kr Nagpal</h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: await fetchGoogleFonts(["Acme"]),
    }
  );
}
