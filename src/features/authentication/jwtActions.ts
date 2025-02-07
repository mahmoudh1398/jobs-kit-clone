import "server-only";
import { jwtVerify, SignJWT } from "jose";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

const key = new TextEncoder().encode(process.env.NEXT_PUBLIC_AUTH_SECRET);

type TJwt = {
  token: string;
};

export async function encrypt(payload: TJwt) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7day")
    .sign(key);
}

export async function decrypt(session: RequestCookie) {
  try {
    const { payload } = await jwtVerify(session.value, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (e) {
    console.log(e);
  }
  return null;
}
