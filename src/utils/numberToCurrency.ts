const RealConversion = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function numberToCurrency(value: number) {
  return RealConversion.format(value);
}
