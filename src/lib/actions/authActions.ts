"use server";

import { decrypt, encrypt } from "@/features/authentication/jwtActions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AuthServices } from "../services/api/user/authServices";
import { webRoute } from "../services/routes/webRoute";

type TSignIn = {
  identifier: string;
  password: string;
};

const COOKIE_NAME = "auth_token";
const COOKIE_EXPIRATION_DAYS = 7;

const setCookie = async (value: string, expires?: Date) => {
  const cookieStore = await cookies();
  cookieStore.set({
    name: COOKIE_NAME,
    value: value,
    httpOnly: true,
    // secure: process.env.NODE_ENV === "production",
    expires: expires
      ? expires
      : new Date(Date.now() + COOKIE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000),
  });
};

export async function signIn(props: TSignIn) {
  try {
    const { data } = await AuthServices.login(props);

    const JWT = await encrypt({
      token: data.token,
    });

    await setCookie(JWT);
  } catch (error) {
    throw error;
  }
}

export async function getSession() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME);

    if (token) return await decrypt(token);

    return null;
  } catch (error) {
    throw error;
  }
}

export async function signOut() {
  try {
    await setCookie("", new Date(0));

    redirect(webRoute.login());
  } catch (error) {
    throw error;
  }
}
