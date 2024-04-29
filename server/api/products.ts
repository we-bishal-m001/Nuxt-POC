export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const externalApiUrl = `${config.public.productsApiBaseUrl}?limit=100`;

  let response;

  try {
    response = await $fetch(externalApiUrl);
  } catch (error) {
    return error;
  }

  return response;
});
