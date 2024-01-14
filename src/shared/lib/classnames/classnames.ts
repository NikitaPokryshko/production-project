type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_className, value]) => Boolean(value))
      .map(([className]) => className)
  ]
    .join(' ')
}

// Usage
// classNames('remove-btn', { hovered: true, selectable: true, red: false }, ['pgd'])

// Result
// 'remove-btn hovered selectable pdg'