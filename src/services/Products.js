export async function fetchDevices() {
  const resp = await fetch('https://static.ui.com/fingerprint/ui/public.json');
  const data = await resp.json();
  return data.devices;
}

export async function fetchDetails(id) {
  const resp = await fetch('https://static.ui.com/fingerprint/ui/public.json');
  const data = await resp.json();
  const result = data.devices.filter((obj) => obj.id === id);
  console.log(result);
  return result;
}
