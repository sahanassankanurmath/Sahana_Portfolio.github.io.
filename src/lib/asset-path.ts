const githubPagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string) {
  if (!path.startsWith("/") || !githubPagesBasePath || path.startsWith(`${githubPagesBasePath}/`)) {
    return path;
  }

  return `${githubPagesBasePath}${path}`;
}
