import { ImageResponse } from "next/server";
import { fetchGoogleFonts } from "vercel-og-google-fonts";

export const runtime = "edge";

export async function GET(request: Request) {
  return new ImageResponse(
    (
      <div tw="flex w-full h-full bg-black items-center justify-center">
        <h1 tw="text-white text-[16rem]">A</h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: await fetchGoogleFonts(["Acme"]),
    }
  );
}
