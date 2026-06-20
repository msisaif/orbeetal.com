import * as staticAdapter from "./adapters/static.js";
import * as laravelAdapter from "./adapters/laravel.js";

function getAdapter() {
  return process.env.CONTENT_SOURCE === "laravel" ? laravelAdapter : staticAdapter;
}

export function adapter() {
  return getAdapter();
}
