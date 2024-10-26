"use client";

import { use, Suspense, useState } from "react";

import { fetchMessage } from "@/server/actions";

import { Button } from "./ui/button";

function Message({ messagePromise }: { messagePromise: Promise<string> }) {
  const messageContent = use(messagePromise);
  return <p>Here is the message: {messageContent}</p>;
}

export function MessageContainer({
  messagePromise,
}: {
  messagePromise: Promise<string>;
}) {
  return (
    <Suspense fallback={<p>⌛Downloading message...</p>}>
      <Message messagePromise={messagePromise} />
    </Suspense>
  );
}

export function Use() {
  const [messagePromise, setMessagePromise] = useState<Promise<string> | null>(
    null
  );
  const [show, setShow] = useState(false);

  function download() {
    setMessagePromise(fetchMessage());
    setShow(true);
  }

  return (
    <>
      {show ? (
        <MessageContainer
          messagePromise={messagePromise || Promise.resolve("")}
        />
      ) : (
        <Button onClick={download}>Download message</Button>
      )}
    </>
  );
}
