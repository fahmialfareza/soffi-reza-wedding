export default function isNullEmptyBlank(str: string): boolean {
  return str === null || str.match(/^ *$/) !== null;
}
