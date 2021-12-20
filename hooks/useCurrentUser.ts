export const useCurrentUser = () => {
  const storage = window.localStorage;

  const item = storage.getItem(
    `firebase:authUser:${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}:[DEFAULT]`
  );

  let currentUser: { displayName: string; email: string } | null = null;

  if (item) {
    const parsed = JSON.parse(item);
    currentUser = { displayName: parsed.displayName, email: parsed.email };
  }

  return { currentUser };
};
