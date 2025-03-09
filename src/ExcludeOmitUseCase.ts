// Casos de uso para usar o Exlude combinado com o omit

// 1 -> Replicar o type excluindo o valor

type StatusAccount = "active" | "disabled" | "loading";

type RemovedLoadingStatusAccount = Exclude<StatusAccount, "loading">;

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  status: RemovedLoadingStatusAccount;
  createdAt: string;
  updatedAt: string;
}

type CreateUserRequest = Omit<User, "id">;

const createUser: CreateUserRequest = {
  name: "carlos",
  email: "teste@test.com",
  password: "1233456",
  status: "active",
  createdAt: "2025",
  updatedAt: "2025",
};

type CreateUserFiliateRequest = Omit<User, "id"> & {
  codeAccess: string;
};

const createUserFiliate: CreateUserFiliateRequest = {
  name: "carlos",
  email: "teste@test.com",
  password: "1233456",
  status: "active",
  codeAccess: "asdfasdasd",
  createdAt: "2025",
  updatedAt: "2025",
};

type CreateUserPartnerRequest = Omit<User, "id">;

const createUserPartner: CreateUserPartnerRequest = {
  name: "carlos",
  email: "teste@test.com",
  password: "1233456",
  status: "active",
  createdAt: "2025",
  updatedAt: "2025",
};

// 2 -> Remover a propriedade e adicionar novamente com o formato desejado

type FormattedUser = Omit<User, "status"> & {
  status: Exclude<StatusAccount, "loading">;
};

// 3 -> Remover do campo o valor de estrutura

type FormattedAdvancedTypes = {
  [K in keyof User]: K extends "status"
    ? Exclude<User["status"], "loading">
    : User[K];
};

