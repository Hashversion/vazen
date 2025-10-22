import * as React from "react";
import { Body, Container, Font, Head, Heading, Hr, Html, Img, Tailwind, Text } from "@react-email/components";

type PrelaunchEmailProps = {
  inviteeEmail: string;
};

const PrelaunchEmail = ({ inviteeEmail = "alan.turing@example.com" }: PrelaunchEmailProps) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Geist"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/geist/v4/gyByhwUxId8gMEwcGFU.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Tailwind>
        <Body className="bg-[#dadade]">
          <Container className="p-3">
            <Img
              src="https://cdn.cosmos.so/ef6e8bc0-bed6-4f75-8a3b-db80020dcadf?format=webp"
              width={32}
              height={32}
              alt="flower"
            />
            <Heading>Vazen</Heading>
            <Text>Thankyou for signing up for the waitlist! we'll let you know when we launch!</Text>
            <Hr className="h-1px border bg-neutral-400" />
            <Text className="text-[12px] leading-[24px] text-neutral-500">
              This invitation was intended for <span className="text-neutral-800">{inviteeEmail}</span>. If
              you were not expecting this invitation, you can ignore this email. If you are concerned about
              your account's safety, please reply to this email to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PrelaunchEmail;
