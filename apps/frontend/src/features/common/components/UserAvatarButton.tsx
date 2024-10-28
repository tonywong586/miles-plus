import { UserProfileModal } from "./UserAccountModal";
import { useState } from "react";
import { UserAvatar } from "./UserAvatar";

export function UserAvatarButton() {
  const [userModalOpened, setUserModalOpened] = useState(false);

  return (
    <>
      <UserAvatar role="button" onClick={() => setUserModalOpened(true)} />

      <UserProfileModal
        opened={userModalOpened}
        onClosed={() => setUserModalOpened(false)}
      />
    </>
  );
}
