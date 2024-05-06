import { RESTPostOAuth2AccessTokenResult, RESTGetAPIUserResult } from "discord-api-types/v10"
import { GuildSummary } from "./guild";

interface IUserData {
    identify: RESTGetAPIUserResult;
    guilds: GuildSummary[];
    tokenData: RESTPostOAuth2AccessTokenResult;
}

export type BelogiaUserResult = RESTGetAPIUserResult;
export type BelogiaUserData = IUserData;