import React from "react";
import { createParam } from "solito";
import { useLink } from "solito/link";

const { useParam } = createParam<{ id: string }>();

export function UserDetailScreen() {
  const [id] = useParam("id");
  const linkProps = useLink({ href: "/" });

  // return (
  //   <YStack f={1} jc="center" ai="center" space>
  //     <Paragraph ta="center" fow="800">{`User ID: ${id}`}</Paragraph>
  //     <Button {...linkProps} theme="gray">
  //       Go Home
  //     </Button>
  //   </YStack>
  // );

  return null;
}
