export const confidentialityDef = `
sequenceDiagram
  participant A as Alice
  participant A_priv as Alice's private key
  participant A_pub as Alice's public key
  participant B_pub as Bob's public key
  participant B_priv as Bob's private key
  participant B as Bob
  rect rgb(255, 255, 255)
    A ->> B_pub: Hello Bob, how are you?
    B_pub ->> B_priv: <cipher>
    B_priv ->> B: Hello Bob, how are you?
    B ->> A_pub: Not too bad, how about you?
    A_pub ->> A_priv: <cipher>
    A_priv ->> A: Not too bad, how about you? 
  end
`;

export const authenticityDef = `
sequenceDiagram
  participant A as Alice
  participant A_priv as Alice's private key
  participant A_pub as Alice's public key
  participant B as Bob
  rect rgb(255, 255, 255)
    A ->> A_priv: My new telephone number is YYY XXX XXX XXX
    A_priv ->> B: <cipher>
    B ->> A_pub: <cipher>
    A_pub ->> B: My new telephone number is YYY XXX XXX XXX
  end
`;
