export function BaseConfigFactory() {
  return {
    port: parseInt(process.env.PORT) ?? 5000,
  }
}
