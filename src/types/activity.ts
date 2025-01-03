export type ActivityType =
  | "user_login"
  | "user_created"
  | "user_updated"
  | "diocese_updated"
  | "parish_updated"
  | "contribution_added"
  | "contribution_updated"
  | "settings_updated";

export interface Activity {
  id: string;
  type: ActivityType;
  userId: string;
  entityId?: string;
  entityType?: string;
  description: string;
  metadata?: Record<string, any>;
  createdAt: string;
}
