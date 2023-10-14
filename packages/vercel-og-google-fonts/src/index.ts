const isFulfilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => input.status === "fulfilled";

const fetchGoogleFont = async (name: string) => {
  const response = await fetch(
    `https://fonts.googleapis.com/css2?family=${name}`,
    {
      headers: {
        // Make sure it returns TTF.
        "User-Agent":
          "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.1+ (KHTML, like Gecko) Version/10.0.0.1337 Mobile Safari/537.1+",
      },
    }
  );
  const css = await response.text();

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (!resource) {
    throw new Error("Failed to fetch font");
  }

  const res = await fetch(resource[1]);

  return {
    name,
    data: await res.arrayBuffer(),
  };
};

export const fetchGoogleFonts = async (fontNames: string[]) => {
  const results = await Promise.allSettled(fontNames.map(fetchGoogleFont));
  const fulfilledResults = results.filter(isFulfilled);
  return fulfilledResults.map((result) => result.value);
};
