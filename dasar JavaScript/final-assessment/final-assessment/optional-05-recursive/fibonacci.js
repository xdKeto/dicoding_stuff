function fibonacci(n) {
  if (n === 0) return [0];

  if (n === 1) return [0, 1];

  const prev = fibonacci(n - 1);
  const next = prev[n - 1] + prev[n - 2];

  return [...prev, next];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
