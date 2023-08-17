export async function fetchDevices() {
  const resp = await fetch('https://static.ui.com/fingerprint/ui/public.json');
  const data = await resp.json();
  return data.devices;
}
