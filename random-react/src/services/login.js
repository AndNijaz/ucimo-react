import { data } from "react-router";
import supabase from "./supabase";

async function login(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Login error:", error.message);
      throw error;
    }
    console.log(data);

    return data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}

export default login;
