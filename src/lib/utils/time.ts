export function pause(t: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}
