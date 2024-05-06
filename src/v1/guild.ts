import { RESTGetAPIGuildResult } from "discord-api-types/v10";

export type GuildSummary = Pick<RESTGetAPIGuildResult, "id" | "name" | "icon">;
export type BelogiaGuildResult = RESTGetAPIGuildResult;