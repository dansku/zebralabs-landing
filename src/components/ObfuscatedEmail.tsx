import { useState, useEffect } from "react";

interface ObfuscatedEmailProps {
  user: string;
  domain: string;
  className?: string;
  children?: React.ReactNode;
}

const ObfuscatedEmail = ({ user, domain, className = "", children }: ObfuscatedEmailProps) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Decode the email on the client side to avoid scrapers
    const decodedEmail = `${user}@${domain}`;
    setEmail(decodedEmail);
  }, [user, domain]);

  if (!email) {
    return <span className={className}>Loading...</span>;
  }

  return (
    <a 
      href={`mailto:${email}`}
      className={className}
    >
      {children || email}
    </a>
  );
};

export default ObfuscatedEmail;