export async function fetchDevices() {
  const resp = await fetch('https://static.ui.com/fingerprint/ui/public.json');
  const data = await resp.json();
  return data.devices;
}

export async function fetchDeviceDetails(id) {
  const resp = await fetch('https://static.ui.com/fingerprint/ui/public.json');
  const data = await resp.json();
  const result = data.devices.filter((obj) => obj.id === id);
  return result;
}

export async function fetchProductLines() {
  const resp = await fetch('https://static.ui.com/fingerprint/ui/public.json');
  const data = await resp.json();
  const products = data.devices.map((item) => item.line.name);
  return [...new Set(products)];
}

export async function filterDevicesByProductLine(line, searchInput) {
  const resp = await fetch('https://static.ui.com/fingerprint/ui/public.json');
  const data = await resp.json();
  if (searchInput.length > 0) {
    data.devices.filter((obj) => {
      const result = obj.product.name.match(searchInput);
      console.log(result);
      return result;
    });
    if (line === 'All') {
      return data.devices;
    }
    if (line !== 'All') {
      const result = data.devices.filter((obj) => obj.line.name === line);
      return result;
    }
  }
}
// export async function searchDevices(searchInput) {
//   const resp = await fetch('https://static.ui.com/fingerprint/ui/public.json');
//   const data = await resp.json();

//   if (searchInput.length > 0) {
//     data.devices.filter((obj) => {
//       const result = obj.product.name.match(searchInput);
//       console.log(result);
//       return result;
//     });
//   }
