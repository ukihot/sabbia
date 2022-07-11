mod libs;
use crate::libs::{
  messenger
};

#[cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![messenger::fetch_messages])
        .run(context)
        .expect("error while running tauri application");
}
