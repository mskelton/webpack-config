export const truthy = Boolean as unknown as <T>(
  x: T | false | undefined | null
) => x is T
