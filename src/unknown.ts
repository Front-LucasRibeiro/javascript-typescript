// Não permite metodos, props desconhecidas, é preciso fazer uma verificação
let response: unknown;

response = [1, 2, 3];
response = "hello";

const reversed = () => {
  if (Array.isArray(response)) {
    // verificação
    return response.reverse();
  }
};
