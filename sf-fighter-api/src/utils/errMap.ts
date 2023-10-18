const errMap = new Map <string, number>([
  ['NOT_FOUND', 404],
  ['INT_ERROR', 500],
]);

export default function getErr(desc: string) {
  return errMap.get(desc) || 500;
}