export function formatCurrency(value: number | undefined | null) {
  if (!value) return "R$ 0,00";

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
