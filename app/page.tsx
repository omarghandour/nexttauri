import { invoke } from "@tauri-apps/api/tauri";
import {
  isPermissionGranted,
  requestPermission,
} from "@tauri-apps/api/notification";

export default async function Home() {
  let permissionGranted = await isPermissionGranted();
  if (!permissionGranted) {
    const permission = await requestPermission();
    permissionGranted = permission === "granted";
  }
  let hi = invoke("say_hello");
  console.log(hi);

  return <main>hi</main>;
}
