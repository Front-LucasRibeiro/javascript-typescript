// Exclude<UnionType, ExcludedMembers>

// Ele recebe dois parâmetros:

// UnionType: Um conjunto de tipos unidos pelo operador |.
// ExcludedMembers: Os tipos que devem ser removidos de UnionType.
// O TypeScript percorre cada tipo de UnionType e inclui no resultado apenas aqueles que não estão em ExcludedMembers.

type Status = "success" | "error" | "loading";
type WithoutError = Exclude<Status, "error">; // "success" | "loading"

type Events = "click" | "hover" | "keydown" | "keyup";
type WithoutKeyboard = Exclude<Events, "keydown" | "keyup">; // "click" | "hover"
