// Discriminated Unions em TypeScript são uma técnica para criar tipos de união com uma propriedade comum que serve como um "discriminador"
// para identificar claramente o tipo ao qual um objeto pertence.

type GuestUser = {
  role: "guest";
};

type AuthenticatedUser = {
  role: "authenticated";
  username: string;
};

type AdminUser = {
  role: "admin";
  username: string;
  permissions: string[];
};

type UserRole = GuestUser | AuthenticatedUser | AdminUser;

function greetUser(user: UserRole) {
  switch (user.role) {
    case "guest":
      console.log("Bem-vindo, visitante!");
      break;
    case "authenticated":
      console.log(`Bem-vindo de volta, ${user.username}!`);
      break;
    case "admin":
      console.log(
        `Bem-vindo, administrador ${
          user.username
        }. Permissões: ${user.permissions.join(", ")}`
      );
      break;
  }
}

const admin: AdminUser = {
  role: "admin",
  username: "Lucas",
  permissions: ["read", "write"],
};
greetUser(admin); // Saída: "Bem-vindo, administrador Lucas. Permissões: read, write"
