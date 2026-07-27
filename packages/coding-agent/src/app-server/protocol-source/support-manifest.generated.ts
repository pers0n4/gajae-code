// GENERATED CODE — DO NOT EDIT. Support defaults to planned; exceptions are hand-authored in support-manifest.overrides.ts. Source: vendor/app-server.schema.bundle.json.

import { supportManifestOverrides, type SupportManifestOverride } from "./support-manifest.overrides";

export type SupportStatus = "implemented" | "not_supported" | "planned";
export type SupportManifestRow = { method: string; stability: "stable" | "experimental"; support: SupportStatus; gjcSeam: string | null; gjcBackendPath: string | null; semanticGaps: readonly string[]; translationNotes: readonly string[]; owner: string | null; testIds: readonly string[]; reason: string };
const generatedMethods = [
	{
		"method": "account/login/cancel",
		"stability": "stable"
	},
	{
		"method": "account/login/start",
		"stability": "stable"
	},
	{
		"method": "account/logout",
		"stability": "stable"
	},
	{
		"method": "account/rateLimitResetCredit/consume",
		"stability": "stable"
	},
	{
		"method": "account/rateLimits/read",
		"stability": "stable"
	},
	{
		"method": "account/read",
		"stability": "stable"
	},
	{
		"method": "account/sendAddCreditsNudgeEmail",
		"stability": "stable"
	},
	{
		"method": "account/usage/read",
		"stability": "stable"
	},
	{
		"method": "account/workspaceMessages/read",
		"stability": "stable"
	},
	{
		"method": "app/installed",
		"stability": "stable"
	},
	{
		"method": "app/list",
		"stability": "stable"
	},
	{
		"method": "app/read",
		"stability": "stable"
	},
	{
		"method": "collaborationMode/list",
		"stability": "stable"
	},
	{
		"method": "command/exec",
		"stability": "stable"
	},
	{
		"method": "command/exec/resize",
		"stability": "stable"
	},
	{
		"method": "command/exec/terminate",
		"stability": "stable"
	},
	{
		"method": "command/exec/write",
		"stability": "stable"
	},
	{
		"method": "config/batchWrite",
		"stability": "stable"
	},
	{
		"method": "config/mcpServer/reload",
		"stability": "stable"
	},
	{
		"method": "config/read",
		"stability": "stable"
	},
	{
		"method": "config/value/write",
		"stability": "stable"
	},
	{
		"method": "configRequirements/read",
		"stability": "stable"
	},
	{
		"method": "environment/add",
		"stability": "stable"
	},
	{
		"method": "environment/info",
		"stability": "stable"
	},
	{
		"method": "environment/status",
		"stability": "stable"
	},
	{
		"method": "experimentalFeature/enablement/set",
		"stability": "stable"
	},
	{
		"method": "experimentalFeature/list",
		"stability": "stable"
	},
	{
		"method": "externalAgentConfig/detect",
		"stability": "stable"
	},
	{
		"method": "externalAgentConfig/import",
		"stability": "stable"
	},
	{
		"method": "externalAgentConfig/import/readHistories",
		"stability": "stable"
	},
	{
		"method": "externalAgentConfig/import/recordHistory",
		"stability": "stable"
	},
	{
		"method": "feedback/upload",
		"stability": "stable"
	},
	{
		"method": "fs/copy",
		"stability": "stable"
	},
	{
		"method": "fs/createDirectory",
		"stability": "stable"
	},
	{
		"method": "fs/getMetadata",
		"stability": "stable"
	},
	{
		"method": "fs/readDirectory",
		"stability": "stable"
	},
	{
		"method": "fs/readFile",
		"stability": "stable"
	},
	{
		"method": "fs/remove",
		"stability": "stable"
	},
	{
		"method": "fs/unwatch",
		"stability": "stable"
	},
	{
		"method": "fs/watch",
		"stability": "stable"
	},
	{
		"method": "fs/writeFile",
		"stability": "stable"
	},
	{
		"method": "fuzzyFileSearch",
		"stability": "stable"
	},
	{
		"method": "fuzzyFileSearch/sessionStart",
		"stability": "experimental"
	},
	{
		"method": "fuzzyFileSearch/sessionStop",
		"stability": "experimental"
	},
	{
		"method": "fuzzyFileSearch/sessionUpdate",
		"stability": "experimental"
	},
	{
		"method": "getAuthStatus",
		"stability": "stable"
	},
	{
		"method": "getConversationSummary",
		"stability": "stable"
	},
	{
		"method": "gitDiffToRemote",
		"stability": "stable"
	},
	{
		"method": "hooks/list",
		"stability": "stable"
	},
	{
		"method": "initialize",
		"stability": "stable"
	},
	{
		"method": "marketplace/add",
		"stability": "stable"
	},
	{
		"method": "marketplace/remove",
		"stability": "stable"
	},
	{
		"method": "marketplace/upgrade",
		"stability": "stable"
	},
	{
		"method": "mcpServer/oauth/login",
		"stability": "stable"
	},
	{
		"method": "mcpServer/resource/read",
		"stability": "stable"
	},
	{
		"method": "mcpServer/tool/call",
		"stability": "stable"
	},
	{
		"method": "mcpServerStatus/list",
		"stability": "stable"
	},
	{
		"method": "memory/reset",
		"stability": "experimental"
	},
	{
		"method": "mock/experimentalMethod",
		"stability": "stable"
	},
	{
		"method": "model/list",
		"stability": "stable"
	},
	{
		"method": "modelProvider/capabilities/read",
		"stability": "stable"
	},
	{
		"method": "permissionProfile/list",
		"stability": "stable"
	},
	{
		"method": "plugin/install",
		"stability": "stable"
	},
	{
		"method": "plugin/installed",
		"stability": "stable"
	},
	{
		"method": "plugin/list",
		"stability": "stable"
	},
	{
		"method": "plugin/read",
		"stability": "stable"
	},
	{
		"method": "plugin/share/checkout",
		"stability": "stable"
	},
	{
		"method": "plugin/share/delete",
		"stability": "stable"
	},
	{
		"method": "plugin/share/list",
		"stability": "stable"
	},
	{
		"method": "plugin/share/save",
		"stability": "stable"
	},
	{
		"method": "plugin/share/updateTargets",
		"stability": "stable"
	},
	{
		"method": "plugin/skill/read",
		"stability": "stable"
	},
	{
		"method": "plugin/uninstall",
		"stability": "stable"
	},
	{
		"method": "process/kill",
		"stability": "stable"
	},
	{
		"method": "process/resizePty",
		"stability": "stable"
	},
	{
		"method": "process/spawn",
		"stability": "stable"
	},
	{
		"method": "process/writeStdin",
		"stability": "stable"
	},
	{
		"method": "remoteControl/client/list",
		"stability": "experimental"
	},
	{
		"method": "remoteControl/client/revoke",
		"stability": "experimental"
	},
	{
		"method": "remoteControl/disable",
		"stability": "experimental"
	},
	{
		"method": "remoteControl/enable",
		"stability": "experimental"
	},
	{
		"method": "remoteControl/pairing/start",
		"stability": "experimental"
	},
	{
		"method": "remoteControl/pairing/status",
		"stability": "experimental"
	},
	{
		"method": "remoteControl/status/read",
		"stability": "experimental"
	},
	{
		"method": "review/start",
		"stability": "stable"
	},
	{
		"method": "skills/config/write",
		"stability": "stable"
	},
	{
		"method": "skills/extraRoots/set",
		"stability": "stable"
	},
	{
		"method": "skills/list",
		"stability": "stable"
	},
	{
		"method": "thread/approveGuardianDeniedAction",
		"stability": "stable"
	},
	{
		"method": "thread/archive",
		"stability": "stable"
	},
	{
		"method": "thread/backgroundTerminals/clean",
		"stability": "experimental"
	},
	{
		"method": "thread/backgroundTerminals/list",
		"stability": "experimental"
	},
	{
		"method": "thread/backgroundTerminals/terminate",
		"stability": "experimental"
	},
	{
		"method": "thread/compact/start",
		"stability": "stable"
	},
	{
		"method": "thread/decrement_elicitation",
		"stability": "stable"
	},
	{
		"method": "thread/delete",
		"stability": "stable"
	},
	{
		"method": "thread/fork",
		"stability": "stable"
	},
	{
		"method": "thread/goal/clear",
		"stability": "stable"
	},
	{
		"method": "thread/goal/get",
		"stability": "stable"
	},
	{
		"method": "thread/goal/set",
		"stability": "stable"
	},
	{
		"method": "thread/increment_elicitation",
		"stability": "stable"
	},
	{
		"method": "thread/inject_items",
		"stability": "stable"
	},
	{
		"method": "thread/items/list",
		"stability": "experimental"
	},
	{
		"method": "thread/list",
		"stability": "stable"
	},
	{
		"method": "thread/loaded/list",
		"stability": "stable"
	},
	{
		"method": "thread/memoryMode/set",
		"stability": "experimental"
	},
	{
		"method": "thread/metadata/update",
		"stability": "stable"
	},
	{
		"method": "thread/name/set",
		"stability": "stable"
	},
	{
		"method": "thread/read",
		"stability": "stable"
	},
	{
		"method": "thread/realtime/appendAudio",
		"stability": "experimental"
	},
	{
		"method": "thread/realtime/appendSpeech",
		"stability": "experimental"
	},
	{
		"method": "thread/realtime/appendText",
		"stability": "experimental"
	},
	{
		"method": "thread/realtime/listVoices",
		"stability": "experimental"
	},
	{
		"method": "thread/realtime/start",
		"stability": "experimental"
	},
	{
		"method": "thread/realtime/stop",
		"stability": "experimental"
	},
	{
		"method": "thread/resume",
		"stability": "stable"
	},
	{
		"method": "thread/rollback",
		"stability": "stable"
	},
	{
		"method": "thread/search",
		"stability": "experimental"
	},
	{
		"method": "thread/searchOccurrences",
		"stability": "experimental"
	},
	{
		"method": "thread/settings/update",
		"stability": "experimental"
	},
	{
		"method": "thread/shellCommand",
		"stability": "stable"
	},
	{
		"method": "thread/start",
		"stability": "stable"
	},
	{
		"method": "thread/turns/list",
		"stability": "experimental"
	},
	{
		"method": "thread/unarchive",
		"stability": "stable"
	},
	{
		"method": "thread/unsubscribe",
		"stability": "stable"
	},
	{
		"method": "turn/interrupt",
		"stability": "stable"
	},
	{
		"method": "turn/start",
		"stability": "stable"
	},
	{
		"method": "turn/steer",
		"stability": "stable"
	},
	{
		"method": "windowsSandbox/readiness",
		"stability": "stable"
	},
	{
		"method": "windowsSandbox/setupStart",
		"stability": "stable"
	}
] as const;
export const supportManifest: readonly SupportManifestRow[] = generatedMethods.map(entry => {
	const override: SupportManifestOverride | undefined = supportManifestOverrides[entry.method];
	return override ? { method: entry.method, stability: entry.stability, ...override } : { method: entry.method, stability: entry.stability, support: "planned", gjcSeam: null, gjcBackendPath: null, semanticGaps: [], translationNotes: ["No GJC app-server router exists yet."], owner: null, testIds: [], reason: "No GJC app-server router exists yet." };
});
