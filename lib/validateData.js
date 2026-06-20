export function validateData(schema, data, label) {
  const result = schema.safeParse(data);
  if (!result.success) {
    const formatted = JSON.stringify(result.error.format(), null, 2);
    throw new Error(`Data validation failed for "${label}":\n${formatted}`);
  }
  return result.data;
}
