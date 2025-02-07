"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AuthServices } from "../services/api/user/authServices";
import { webRoute } from "../services/routes/webRoute";
import { ILoginValues } from "../types/api/user";

const COOKIE_NAME = "token";

const setCookie = async (value: string) => {
  const cookieStore = await cookies();
  cookieStore.set({
    name: COOKIE_NAME,
    value: value,
  });
};

export async function signIn(props: ILoginValues) {
  try {
    const { data } = await AuthServices.login(props);
    await setCookie(data.token);
  } catch (error) {
    throw error;
  }
}

export async function getToken() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME);
    if (token?.value) {
      return token.value;
    }
    return null;
  } catch (error) {
    throw error;
  }
}

export async function signOut() {
  try {
    await setCookie("");

    redirect(webRoute.login());
  } catch (error) {
    throw error;
  }
}
