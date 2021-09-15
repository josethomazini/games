export default function getBaseUrl(): string {
  if (process.env.NODE_ENV === 'production') {
    return '/games/apps/frontend/';
  }
  return '/';
}
