export function priceFormatter(price: number | null) {
  if (price === null) return "-";

  const euros = Number.isInteger(price) && price >= 100 ? price / 100 : price;

  return euros.toFixed(2).replace(".", ",");
}

export function currentFormatter(
  currencyCode: string,
  locale = "es-ES"
): string {
  if(!currencyCode) return "";

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: 'symbol'
  });

  const parts = formatter.formatToParts(0);

  const currencyPart = parts.find(
    (part) => part.type === 'currency'
  );

  return currencyPart?.value ?? currencyCode;
}
