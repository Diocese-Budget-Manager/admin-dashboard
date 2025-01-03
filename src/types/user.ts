export type UserRole = "admin" | "diocese_admin" | "parish_admin" | "viewer";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  dioceseId?: string;
  parishId?: string;
  createdAt: string;
  lastLogin?: string;
}

export interface UserPermission {
  canManageUsers: boolean;
  canManageDiocese: boolean;
  canManageParishes: boolean;
  canViewFinancials: boolean;
  canEditFinancials: boolean;
}
