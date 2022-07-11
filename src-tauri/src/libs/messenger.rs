#[tauri::command]
pub fn fetch_messages() -> Vec<String> {
    vec!["T".into(), "Y".into(), "X".into(), "O".into()]
}