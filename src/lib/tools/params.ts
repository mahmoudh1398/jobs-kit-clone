export default function refactorParams(
  obj: Record<
    string,
    string | string[] | number | number[] | undefined | boolean
  >
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => [k, String(v)])
  );
}
