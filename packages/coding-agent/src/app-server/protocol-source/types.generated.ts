// GENERATED CODE — DO NOT EDIT. Field shapes captured from pinned Rust sources. Source: vendor/app-server.schema.bundle.json.

export type AppServerParams = Record<string, unknown>;
export type AppServerResult = Record<string, unknown>;
export const unresolvedTypeReferences = {
	"account/login/cancel": {
		"params": [],
		"result": []
	},
	"account/login/start": {
		"params": [
			"LoginAccountParams (enum payload shape is not flattened)"
		],
		"result": [
			"LoginAccountResponse (enum payload shape is not flattened)"
		]
	},
	"account/logout": {
		"params": [],
		"result": []
	},
	"account/rateLimitResetCredit/consume": {
		"params": [],
		"result": []
	},
	"account/rateLimits/read": {
		"params": [],
		"result": []
	},
	"account/read": {
		"params": [],
		"result": []
	},
	"account/sendAddCreditsNudgeEmail": {
		"params": [],
		"result": []
	},
	"account/usage/read": {
		"params": [],
		"result": []
	},
	"account/workspaceMessages/read": {
		"params": [],
		"result": []
	},
	"app/installed": {
		"params": [
			"AppsInstalledParams"
		],
		"result": [
			"AppsInstalledResponse"
		]
	},
	"app/list": {
		"params": [
			"AppsListParams"
		],
		"result": [
			"AppsListResponse"
		]
	},
	"app/read": {
		"params": [
			"AppsReadParams"
		],
		"result": [
			"AppsReadResponse"
		]
	},
	"collaborationMode/list": {
		"params": [],
		"result": []
	},
	"command/exec": {
		"params": [],
		"result": []
	},
	"command/exec/resize": {
		"params": [],
		"result": []
	},
	"command/exec/terminate": {
		"params": [],
		"result": []
	},
	"command/exec/write": {
		"params": [],
		"result": []
	},
	"config/batchWrite": {
		"params": [],
		"result": [
			"AbsolutePathBuf"
		]
	},
	"config/mcpServer/reload": {
		"params": [],
		"result": []
	},
	"config/read": {
		"params": [],
		"result": []
	},
	"config/value/write": {
		"params": [
			"JsonValue"
		],
		"result": [
			"AbsolutePathBuf"
		]
	},
	"configRequirements/read": {
		"params": [],
		"result": []
	},
	"environment/add": {
		"params": [],
		"result": []
	},
	"environment/info": {
		"params": [],
		"result": [
			"PathUri"
		]
	},
	"environment/status": {
		"params": [],
		"result": []
	},
	"experimentalFeature/enablement/set": {
		"params": [],
		"result": []
	},
	"experimentalFeature/list": {
		"params": [],
		"result": []
	},
	"externalAgentConfig/detect": {
		"params": [],
		"result": []
	},
	"externalAgentConfig/import": {
		"params": [],
		"result": []
	},
	"externalAgentConfig/import/readHistories": {
		"params": [],
		"result": []
	},
	"externalAgentConfig/import/recordHistory": {
		"params": [],
		"result": []
	},
	"feedback/upload": {
		"params": [],
		"result": []
	},
	"fs/copy": {
		"params": [
			"AbsolutePathBuf"
		],
		"result": []
	},
	"fs/createDirectory": {
		"params": [
			"AbsolutePathBuf"
		],
		"result": []
	},
	"fs/getMetadata": {
		"params": [
			"AbsolutePathBuf"
		],
		"result": []
	},
	"fs/readDirectory": {
		"params": [
			"AbsolutePathBuf"
		],
		"result": []
	},
	"fs/readFile": {
		"params": [
			"AbsolutePathBuf"
		],
		"result": []
	},
	"fs/remove": {
		"params": [
			"AbsolutePathBuf"
		],
		"result": []
	},
	"fs/unwatch": {
		"params": [],
		"result": []
	},
	"fs/watch": {
		"params": [
			"AbsolutePathBuf"
		],
		"result": [
			"AbsolutePathBuf"
		]
	},
	"fs/writeFile": {
		"params": [
			"AbsolutePathBuf"
		],
		"result": []
	},
	"fuzzyFileSearch": {
		"params": [],
		"result": []
	},
	"fuzzyFileSearch/sessionStart": {
		"params": [],
		"result": []
	},
	"fuzzyFileSearch/sessionStop": {
		"params": [],
		"result": []
	},
	"fuzzyFileSearch/sessionUpdate": {
		"params": [],
		"result": []
	},
	"getAuthStatus": {
		"params": [],
		"result": []
	},
	"getConversationSummary": {
		"params": [
			"GetConversationSummaryParams (enum payload shape is not flattened)"
		],
		"result": []
	},
	"gitDiffToRemote": {
		"params": [],
		"result": [
			"GitSha"
		]
	},
	"hooks/list": {
		"params": [],
		"result": []
	},
	"initialize": {
		"params": [],
		"result": [
			"AbsolutePathBuf"
		]
	},
	"marketplace/add": {
		"params": [],
		"result": [
			"AbsolutePathBuf"
		]
	},
	"marketplace/remove": {
		"params": [],
		"result": [
			"AbsolutePathBuf"
		]
	},
	"marketplace/upgrade": {
		"params": [],
		"result": [
			"AbsolutePathBuf"
		]
	},
	"mcpServer/oauth/login": {
		"params": [],
		"result": []
	},
	"mcpServer/resource/read": {
		"params": [],
		"result": [
			"McpResourceContent"
		]
	},
	"mcpServer/tool/call": {
		"params": [
			"JsonValue"
		],
		"result": [
			"JsonValue"
		]
	},
	"mcpServerStatus/list": {
		"params": [],
		"result": []
	},
	"memory/reset": {
		"params": [],
		"result": []
	},
	"mock/experimentalMethod": {
		"params": [],
		"result": []
	},
	"model/list": {
		"params": [],
		"result": []
	},
	"modelProvider/capabilities/read": {
		"params": [],
		"result": []
	},
	"permissionProfile/list": {
		"params": [],
		"result": []
	},
	"plugin/install": {
		"params": [
			"AbsolutePathBuf"
		],
		"result": [
			"AppSummary"
		]
	},
	"plugin/installed": {
		"params": [
			"AbsolutePathBuf"
		],
		"result": []
	},
	"plugin/list": {
		"params": [
			"AbsolutePathBuf"
		],
		"result": []
	},
	"plugin/read": {
		"params": [
			"AbsolutePathBuf"
		],
		"result": []
	},
	"plugin/share/checkout": {
		"params": [],
		"result": [
			"AbsolutePathBuf"
		]
	},
	"plugin/share/delete": {
		"params": [],
		"result": []
	},
	"plugin/share/list": {
		"params": [],
		"result": []
	},
	"plugin/share/save": {
		"params": [
			"AbsolutePathBuf"
		],
		"result": []
	},
	"plugin/share/updateTargets": {
		"params": [],
		"result": []
	},
	"plugin/skill/read": {
		"params": [],
		"result": []
	},
	"plugin/uninstall": {
		"params": [],
		"result": []
	},
	"process/kill": {
		"params": [],
		"result": []
	},
	"process/resizePty": {
		"params": [],
		"result": []
	},
	"process/spawn": {
		"params": [
			"AbsolutePathBuf"
		],
		"result": []
	},
	"process/writeStdin": {
		"params": [],
		"result": []
	},
	"remoteControl/client/list": {
		"params": [],
		"result": []
	},
	"remoteControl/client/revoke": {
		"params": [],
		"result": []
	},
	"remoteControl/disable": {
		"params": [
			"NullableRemoteControlDisableParams"
		],
		"result": []
	},
	"remoteControl/enable": {
		"params": [
			"NullableRemoteControlEnableParams"
		],
		"result": []
	},
	"remoteControl/pairing/start": {
		"params": [],
		"result": []
	},
	"remoteControl/pairing/status": {
		"params": [],
		"result": []
	},
	"remoteControl/status/read": {
		"params": [],
		"result": []
	},
	"review/start": {
		"params": [],
		"result": []
	},
	"skills/config/write": {
		"params": [],
		"result": []
	},
	"skills/extraRoots/set": {
		"params": [
			"AbsolutePathBuf"
		],
		"result": []
	},
	"skills/list": {
		"params": [],
		"result": []
	},
	"thread/approveGuardianDeniedAction": {
		"params": [
			"JsonValue"
		],
		"result": []
	},
	"thread/archive": {
		"params": [],
		"result": []
	},
	"thread/backgroundTerminals/clean": {
		"params": [],
		"result": []
	},
	"thread/backgroundTerminals/list": {
		"params": [],
		"result": []
	},
	"thread/backgroundTerminals/terminate": {
		"params": [],
		"result": []
	},
	"thread/compact/start": {
		"params": [],
		"result": []
	},
	"thread/decrement_elicitation": {
		"params": [],
		"result": []
	},
	"thread/delete": {
		"params": [],
		"result": []
	},
	"thread/fork": {
		"params": [
			"ThreadForkParams"
		],
		"result": [
			"AbsolutePathBuf",
			"ApprovalsReviewer"
		]
	},
	"thread/goal/clear": {
		"params": [],
		"result": []
	},
	"thread/goal/get": {
		"params": [],
		"result": []
	},
	"thread/goal/set": {
		"params": [],
		"result": []
	},
	"thread/increment_elicitation": {
		"params": [],
		"result": []
	},
	"thread/inject_items": {
		"params": [
			"JsonValue"
		],
		"result": []
	},
	"thread/items/list": {
		"params": [],
		"result": []
	},
	"thread/list": {
		"params": [],
		"result": []
	},
	"thread/loaded/list": {
		"params": [],
		"result": []
	},
	"thread/memoryMode/set": {
		"params": [],
		"result": []
	},
	"thread/metadata/update": {
		"params": [],
		"result": []
	},
	"thread/name/set": {
		"params": [],
		"result": []
	},
	"thread/read": {
		"params": [],
		"result": []
	},
	"thread/realtime/appendAudio": {
		"params": [],
		"result": []
	},
	"thread/realtime/appendSpeech": {
		"params": [],
		"result": []
	},
	"thread/realtime/appendText": {
		"params": [
			"ConversationTextRole"
		],
		"result": []
	},
	"thread/realtime/listVoices": {
		"params": [],
		"result": [
			"RealtimeVoicesList"
		]
	},
	"thread/realtime/start": {
		"params": [
			"CodexResponseHandoffMode",
			"RealtimeConversationVersion",
			"RealtimeOutputModality",
			"RealtimeVoice"
		],
		"result": []
	},
	"thread/realtime/stop": {
		"params": [],
		"result": []
	},
	"thread/resume": {
		"params": [
			"ThreadResumeParams"
		],
		"result": [
			"AbsolutePathBuf",
			"ApprovalsReviewer",
			"Personality",
			"ResponseItem"
		]
	},
	"thread/rollback": {
		"params": [
			"ThreadRollbackParams"
		],
		"result": []
	},
	"thread/search": {
		"params": [],
		"result": []
	},
	"thread/searchOccurrences": {
		"params": [],
		"result": []
	},
	"thread/settings/update": {
		"params": [],
		"result": []
	},
	"thread/shellCommand": {
		"params": [],
		"result": []
	},
	"thread/start": {
		"params": [
			"AbsolutePathBuf",
			"ApprovalsReviewer",
			"DynamicToolSpec",
			"MultiAgentMode",
			"Personality",
			"SelectedCapabilityRoot"
		],
		"result": [
			"AbsolutePathBuf",
			"ApprovalsReviewer",
			"LegacyAppPathString",
			"MultiAgentMode",
			"ReasoningEffort"
		]
	},
	"thread/turns/list": {
		"params": [],
		"result": []
	},
	"thread/unarchive": {
		"params": [],
		"result": []
	},
	"thread/unsubscribe": {
		"params": [],
		"result": []
	},
	"turn/interrupt": {
		"params": [],
		"result": []
	},
	"turn/start": {
		"params": [
			"AbsolutePathBuf",
			"ApprovalsReviewer",
			"CollaborationMode",
			"JsonValue",
			"MultiAgentMode",
			"Personality",
			"ReasoningEffort",
			"ReasoningSummary"
		],
		"result": []
	},
	"turn/steer": {
		"params": [],
		"result": []
	},
	"windowsSandbox/readiness": {
		"params": [],
		"result": []
	},
	"windowsSandbox/setupStart": {
		"params": [
			"AbsolutePathBuf"
		],
		"result": []
	},
	"initialized": {
		"params": []
	},
	"account/chatgptAuthTokens/refresh": {
		"params": [],
		"result": []
	},
	"applyPatchApproval": {
		"params": [
			"ThreadId"
		],
		"result": [
			"ReviewDecision"
		]
	},
	"attestation/generate": {
		"params": [],
		"result": []
	},
	"currentTime/read": {
		"params": [],
		"result": []
	},
	"execCommandApproval": {
		"params": [
			"ParsedCommand",
			"ThreadId"
		],
		"result": [
			"ReviewDecision"
		]
	},
	"item/commandExecution/requestApproval": {
		"params": [
			"LegacyAppPathString"
		],
		"result": []
	},
	"item/fileChange/requestApproval": {
		"params": [],
		"result": []
	},
	"item/permissions/requestApproval": {
		"params": [
			"AbsolutePathBuf"
		],
		"result": []
	},
	"item/tool/call": {
		"params": [
			"JsonValue"
		],
		"result": []
	},
	"item/tool/requestUserInput": {
		"params": [],
		"result": []
	},
	"mcpServer/elicitation/request": {
		"params": [],
		"result": []
	},
	"account/login/completed": {
		"params": []
	},
	"account/rateLimits/updated": {
		"params": [
			"AccountRateLimitsUpdatedNotification"
		]
	},
	"account/updated": {
		"params": [
			"PlanType"
		]
	},
	"app/list/updated": {
		"params": [
			"AppListUpdatedNotification"
		]
	},
	"command/exec/outputDelta": {
		"params": []
	},
	"configWarning": {
		"params": []
	},
	"deprecationNotice": {
		"params": []
	},
	"error": {
		"params": []
	},
	"externalAgentConfig/import/completed": {
		"params": []
	},
	"externalAgentConfig/import/progress": {
		"params": []
	},
	"fs/changed": {
		"params": [
			"AbsolutePathBuf"
		]
	},
	"fuzzyFileSearch/sessionCompleted": {
		"params": []
	},
	"fuzzyFileSearch/sessionUpdated": {
		"params": []
	},
	"guardianWarning": {
		"params": []
	},
	"hook/completed": {
		"params": []
	},
	"hook/started": {
		"params": []
	},
	"item/agentMessage/delta": {
		"params": []
	},
	"item/autoApprovalReview/completed": {
		"params": [
			"ItemGuardianApprovalReviewCompletedNotification"
		]
	},
	"item/autoApprovalReview/started": {
		"params": [
			"ItemGuardianApprovalReviewStartedNotification"
		]
	},
	"item/commandExecution/outputDelta": {
		"params": []
	},
	"item/commandExecution/terminalInteraction": {
		"params": []
	},
	"item/completed": {
		"params": []
	},
	"item/fileChange/outputDelta": {
		"params": []
	},
	"item/fileChange/patchUpdated": {
		"params": []
	},
	"item/mcpToolCall/progress": {
		"params": []
	},
	"item/plan/delta": {
		"params": [
			"PlanDeltaNotification"
		]
	},
	"item/reasoning/summaryPartAdded": {
		"params": []
	},
	"item/reasoning/summaryTextDelta": {
		"params": []
	},
	"item/reasoning/textDelta": {
		"params": []
	},
	"item/started": {
		"params": []
	},
	"mcpServer/oauthLogin/completed": {
		"params": []
	},
	"mcpServer/startupStatus/updated": {
		"params": []
	},
	"model/rerouted": {
		"params": []
	},
	"model/safetyBuffering/updated": {
		"params": []
	},
	"model/verification": {
		"params": []
	},
	"process/exited": {
		"params": []
	},
	"process/outputDelta": {
		"params": []
	},
	"rawResponse/completed": {
		"params": []
	},
	"rawResponseItem/completed": {
		"params": [
			"ResponseItem"
		]
	},
	"remoteControl/status/changed": {
		"params": []
	},
	"serverRequest/resolved": {
		"params": [
			"RequestId"
		]
	},
	"skills/changed": {
		"params": []
	},
	"thread/archived": {
		"params": []
	},
	"thread/closed": {
		"params": []
	},
	"thread/compacted": {
		"params": []
	},
	"thread/deleted": {
		"params": []
	},
	"thread/environment/connected": {
		"params": []
	},
	"thread/environment/disconnected": {
		"params": []
	},
	"thread/goal/cleared": {
		"params": []
	},
	"thread/goal/updated": {
		"params": []
	},
	"thread/name/updated": {
		"params": []
	},
	"thread/realtime/closed": {
		"params": []
	},
	"thread/realtime/error": {
		"params": []
	},
	"thread/realtime/itemAdded": {
		"params": [
			"JsonValue"
		]
	},
	"thread/realtime/outputAudio/delta": {
		"params": []
	},
	"thread/realtime/sdp": {
		"params": []
	},
	"thread/realtime/started": {
		"params": [
			"RealtimeConversationVersion"
		]
	},
	"thread/realtime/transcript/delta": {
		"params": []
	},
	"thread/realtime/transcript/done": {
		"params": []
	},
	"thread/settings/updated": {
		"params": []
	},
	"thread/started": {
		"params": []
	},
	"thread/status/changed": {
		"params": []
	},
	"thread/tokenUsage/updated": {
		"params": []
	},
	"thread/unarchived": {
		"params": []
	},
	"turn/completed": {
		"params": []
	},
	"turn/diff/updated": {
		"params": [
			"TurnDiffUpdatedNotification"
		]
	},
	"turn/moderationMetadata": {
		"params": [
			"JsonValue"
		]
	},
	"turn/plan/updated": {
		"params": []
	},
	"turn/started": {
		"params": []
	},
	"warning": {
		"params": []
	},
	"windows/worldWritableWarning": {
		"params": []
	},
	"windowsSandbox/setupCompleted": {
		"params": []
	}
} as const;

export interface accountLoginCancelParams {

}
export interface accountLoginCancelResult {
	"status": unknown;
}

export interface accountLoginStartParams {

}
export interface accountLoginStartResult {

}

export interface accountLogoutParams {

}
export interface accountLogoutResult {

}

export interface accountRateLimitResetCreditConsumeParams {
	"idempotencyKey": string;
	"creditId"?: string;
}
export interface accountRateLimitResetCreditConsumeResult {
	"outcome": unknown;
}

export interface accountRateLimitsReadParams {

}
export interface accountRateLimitsReadResult {
	"rateLimits": unknown;
	"rateLimitsByLimitId"?: unknown;
	"rateLimitResetCredits"?: unknown;
}

export interface accountReadParams {
	"refreshToken": boolean;
}
export interface accountReadResult {
	"account"?: unknown;
	"requiresOpenaiAuth": boolean;
}

export interface accountSendAddCreditsNudgeEmailParams {
	"creditType": unknown;
}
export interface accountSendAddCreditsNudgeEmailResult {
	"status": unknown;
}

export interface accountUsageReadParams {

}
export interface accountUsageReadResult {
	"summary": unknown;
	"dailyUsageBuckets"?: unknown;
}

export interface accountWorkspaceMessagesReadParams {

}
export interface accountWorkspaceMessagesReadResult {
	"featureEnabled": boolean;
	"messages": unknown;
}

export interface appInstalledParams {

}
export interface appInstalledResult {

}

export interface appListParams {

}
export interface appListResult {

}

export interface appReadParams {

}
export interface appReadResult {

}

export interface collaborationModeListParams {

}
export interface collaborationModeListResult {

}

export interface commandExecParams {
	"command": unknown;
	"processId"?: string;
	"tty": boolean;
	"streamStdin": boolean;
	"streamStdoutStderr": boolean;
	"outputBytesCap"?: unknown;
	"disableOutputCap": boolean;
	"disableTimeout": boolean;
	"timeoutMs"?: number;
	"cwd"?: string;
	"env"?: unknown;
	"size"?: unknown;
	"sandboxPolicy"?: unknown;
	"permissionProfile"?: string;
}
export interface commandExecResult {
	"exitCode": number;
	"stdout": string;
	"stderr": string;
}

export interface commandExecResizeParams {
	"processId": string;
	"size": unknown;
}
export interface commandExecResizeResult {

}

export interface commandExecTerminateParams {
	"processId": string;
}
export interface commandExecTerminateResult {

}

export interface commandExecWriteParams {
	"processId": string;
	"deltaBase64"?: string;
	"closeStdin": boolean;
}
export interface commandExecWriteResult {

}

export interface configBatchWriteParams {
	"edits": unknown;
	"filePath"?: string;
	"expectedVersion"?: string;
	"reloadUserConfig": boolean;
}
export interface configBatchWriteResult {
	"status": unknown;
	"version": string;
	"filePath": string;
	"overriddenMetadata"?: unknown;
}

export interface configMcpServerReloadParams {

}
export interface configMcpServerReloadResult {

}

export interface configReadParams {
	"includeLayers": boolean;
	"cwd"?: string;
}
export interface configReadResult {
	"config": unknown;
	"origins": unknown;
	"layers"?: unknown;
}

export interface configValueWriteParams {
	"keyPath": string;
	"value": unknown;
	"mergeStrategy": unknown;
	"filePath"?: string;
	"expectedVersion"?: string;
}
export interface configValueWriteResult {
	"status": unknown;
	"version": string;
	"filePath": string;
	"overriddenMetadata"?: unknown;
}

export interface configRequirementsReadParams {

}
export interface configRequirementsReadResult {
	"requirements"?: unknown;
}

export interface environmentAddParams {
	"environmentId": string;
	"execServerUrl": string;
	"connectTimeoutMs"?: number;
}
export interface environmentAddResult {

}

export interface environmentInfoParams {
	"environmentId": string;
}
export interface environmentInfoResult {
	"shell": unknown;
	"cwd"?: unknown;
}

export interface environmentStatusParams {
	"environmentId": string;
}
export interface environmentStatusResult {
	"status": unknown;
	"error"?: string;
}

export interface experimentalFeatureEnablementSetParams {
	"enablement": unknown;
}
export interface experimentalFeatureEnablementSetResult {
	"enablement": unknown;
}

export interface experimentalFeatureListParams {
	"cursor"?: string;
	"limit"?: number;
	"threadId"?: string;
}
export interface experimentalFeatureListResult {
	"data": unknown;
	"nextCursor"?: string;
}

export interface externalAgentConfigDetectParams {
	"includeHome": boolean;
	"cwds"?: unknown;
	"maxSessionAgeDays"?: number;
	"maxSessions"?: number;
	"source"?: string;
	"migrationSource"?: string;
}
export interface externalAgentConfigDetectResult {
	"items": unknown;
}

export interface externalAgentConfigImportParams {
	"migrationItems": unknown;
	"source"?: string;
	"providerId"?: string;
	"migrationSource"?: string;
}
export interface externalAgentConfigImportResult {
	"importId": string;
}

export interface externalAgentConfigImportReadHistoriesParams {

}
export interface externalAgentConfigImportReadHistoriesResult {
	"data": unknown;
	"connectors": unknown;
}

export interface externalAgentConfigImportRecordHistoryParams {
	"providerId": string;
	"itemTypeResults": unknown;
}
export interface externalAgentConfigImportRecordHistoryResult {
	"importId": string;
}

export interface feedbackUploadParams {
	"classification": string;
	"reason"?: string;
	"threadId"?: string;
	"includeLogs": boolean;
	"extraLogFiles"?: unknown;
	"tags"?: unknown;
}
export interface feedbackUploadResult {
	"threadId": string;
}

export interface fsCopyParams {
	"sourcePath": string;
	"destinationPath": string;
	"recursive": boolean;
}
export interface fsCopyResult {

}

export interface fsCreateDirectoryParams {
	"path": string;
	"recursive"?: boolean;
}
export interface fsCreateDirectoryResult {

}

export interface fsGetMetadataParams {
	"path": string;
}
export interface fsGetMetadataResult {
	"isDirectory": boolean;
	"isFile": boolean;
	"isSymlink": boolean;
	"createdAtMs": number;
	"modifiedAtMs": number;
}

export interface fsReadDirectoryParams {
	"path": string;
}
export interface fsReadDirectoryResult {
	"entries": unknown;
}

export interface fsReadFileParams {
	"path": string;
}
export interface fsReadFileResult {
	"dataBase64": string;
}

export interface fsRemoveParams {
	"path": string;
	"recursive"?: boolean;
	"force"?: boolean;
}
export interface fsRemoveResult {

}

export interface fsUnwatchParams {
	"watchId": string;
}
export interface fsUnwatchResult {

}

export interface fsWatchParams {
	"watchId": string;
	"path": string;
}
export interface fsWatchResult {
	"path": string;
}

export interface fsWriteFileParams {
	"path": string;
	"dataBase64": string;
}
export interface fsWriteFileResult {

}

export interface fuzzyFileSearchParams {

}
export interface fuzzyFileSearchResult {
	"files": unknown;
}

export interface fuzzyFileSearchSessionStartParams {
	"sessionId": string;
	"roots": unknown;
}
export interface fuzzyFileSearchSessionStartResult {

}

export interface fuzzyFileSearchSessionStopParams {
	"sessionId": string;
}
export interface fuzzyFileSearchSessionStopResult {

}

export interface fuzzyFileSearchSessionUpdateParams {
	"sessionId": string;
	"query": string;
}
export interface fuzzyFileSearchSessionUpdateResult {

}

export interface getAuthStatusParams {
	"includeToken"?: boolean;
	"refreshToken"?: boolean;
}
export interface getAuthStatusResult {
	"authMethod"?: unknown;
	"authToken"?: string;
	"requiresOpenaiAuth"?: boolean;
}

export interface getConversationSummaryParams {

}
export interface getConversationSummaryResult {

}

export interface gitDiffToRemoteParams {
	"cwd": string;
}
export interface gitDiffToRemoteResult {
	"sha": unknown;
	"diff": string;
}

export interface hooksListParams {
	"cwds": unknown;
}
export interface hooksListResult {
	"data": unknown;
}

export interface initializeParams {
	"clientInfo": unknown;
	"capabilities"?: unknown;
}
export interface initializeResult {
	"userAgent": string;
	"codexHome": string;
	"platformFamily": string;
	"platformOs": string;
}

export interface marketplaceAddParams {
	"source": string;
	"refName"?: string;
	"sparsePaths"?: unknown;
}
export interface marketplaceAddResult {
	"marketplaceName": string;
	"installedRoot": string;
	"alreadyAdded": boolean;
}

export interface marketplaceRemoveParams {
	"marketplaceName": string;
}
export interface marketplaceRemoveResult {
	"marketplaceName": string;
	"installedRoot"?: string;
}

export interface marketplaceUpgradeParams {
	"marketplaceName"?: string;
}
export interface marketplaceUpgradeResult {
	"selectedMarketplaces": unknown;
	"upgradedRoots": unknown;
	"errors": unknown;
}

export interface mcpServerOauthLoginParams {
	"name": string;
	"threadId"?: string;
	"scopes"?: unknown;
	"timeoutSecs"?: number;
}
export interface mcpServerOauthLoginResult {
	"authorizationUrl": string;
}

export interface mcpServerResourceReadParams {
	"threadId"?: string;
	"server": string;
	"uri": string;
}
export interface mcpServerResourceReadResult {
	"contents": unknown;
}

export interface mcpServerToolCallParams {
	"threadId": string;
	"server": string;
	"tool": string;
	"arguments"?: unknown;
	"_meta"?: unknown;
}
export interface mcpServerToolCallResult {
	"content": unknown;
	"structuredContent"?: unknown;
	"isError"?: boolean;
	"_meta"?: unknown;
}

export interface mcpServerStatusListParams {
	"cursor"?: string;
	"limit"?: number;
	"detail"?: unknown;
	"threadId"?: string;
}
export interface mcpServerStatusListResult {
	"data": unknown;
	"nextCursor"?: string;
}

export interface memoryResetParams {

}
export interface memoryResetResult {

}

export interface mockExperimentalMethodParams {
	"value"?: string;
}
export interface mockExperimentalMethodResult {
	"echoed"?: string;
}

export interface modelListParams {
	"cursor"?: string;
	"limit"?: number;
	"includeHidden"?: boolean;
}
export interface modelListResult {
	"data": unknown;
	"nextCursor"?: string;
}

export interface modelProviderCapabilitiesReadParams {

}
export interface modelProviderCapabilitiesReadResult {
	"namespaceTools": boolean;
	"imageGeneration": boolean;
	"webSearch": boolean;
}

export interface permissionProfileListParams {
	"cursor"?: string;
	"limit"?: number;
	"cwd"?: string;
}
export interface permissionProfileListResult {
	"data": unknown;
	"nextCursor"?: string;
}

export interface pluginInstallParams {
	"marketplacePath"?: string;
	"remoteMarketplaceName"?: string;
	"pluginName": string;
}
export interface pluginInstallResult {
	"authPolicy": unknown;
	"appsNeedingAuth": unknown;
}

export interface pluginInstalledParams {
	"cwds"?: unknown;
	"installSuggestionPluginNames"?: unknown;
}
export interface pluginInstalledResult {
	"marketplaces": unknown;
	"marketplaceLoadErrors": unknown;
}

export interface pluginListParams {
	"cwds"?: unknown;
	"marketplaceKinds"?: unknown;
	"forceRefetch": boolean;
}
export interface pluginListResult {
	"marketplaces": unknown;
	"marketplaceLoadErrors": unknown;
	"featuredPluginIds": unknown;
}

export interface pluginReadParams {
	"marketplacePath"?: string;
	"remoteMarketplaceName"?: string;
	"pluginName": string;
}
export interface pluginReadResult {
	"plugin": unknown;
}

export interface pluginShareCheckoutParams {
	"remotePluginId": string;
}
export interface pluginShareCheckoutResult {
	"remotePluginId": string;
	"pluginId": string;
	"pluginName": string;
	"pluginPath": string;
	"marketplaceName": string;
	"marketplacePath": string;
	"remoteVersion"?: string;
}

export interface pluginShareDeleteParams {
	"remotePluginId": string;
}
export interface pluginShareDeleteResult {

}

export interface pluginShareListParams {

}
export interface pluginShareListResult {
	"data": unknown;
}

export interface pluginShareSaveParams {
	"pluginPath": string;
	"remotePluginId"?: string;
	"discoverability"?: unknown;
	"shareTargets"?: unknown;
}
export interface pluginShareSaveResult {
	"remotePluginId": string;
	"shareUrl": string;
}

export interface pluginShareUpdateTargetsParams {
	"remotePluginId": string;
	"discoverability": unknown;
	"shareTargets": unknown;
}
export interface pluginShareUpdateTargetsResult {
	"principals": unknown;
	"discoverability": unknown;
}

export interface pluginSkillReadParams {
	"remoteMarketplaceName": string;
	"remotePluginId": string;
	"skillName": string;
}
export interface pluginSkillReadResult {
	"contents"?: string;
}

export interface pluginUninstallParams {
	"pluginId": string;
}
export interface pluginUninstallResult {

}

export interface processKillParams {
	"processHandle": string;
}
export interface processKillResult {

}

export interface processResizePtyParams {
	"processHandle": string;
	"size": unknown;
}
export interface processResizePtyResult {

}

export interface processSpawnParams {
	"command": unknown;
	"processHandle": string;
	"cwd": string;
	"tty": boolean;
	"streamStdin": boolean;
	"streamStdoutStderr": boolean;
	"outputBytesCap"?: unknown;
	"timeoutMs"?: number;
	"env"?: unknown;
	"size"?: unknown;
}
export interface processSpawnResult {

}

export interface processWriteStdinParams {
	"processHandle": string;
	"deltaBase64"?: string;
	"closeStdin": boolean;
}
export interface processWriteStdinResult {

}

export interface remoteControlClientListParams {
	"environmentId": string;
	"cursor"?: string;
	"limit"?: number;
	"order"?: unknown;
}
export interface remoteControlClientListResult {
	"data": unknown;
	"nextCursor"?: string;
}

export interface remoteControlClientRevokeParams {
	"environmentId": string;
	"clientId": string;
}
export interface remoteControlClientRevokeResult {

}

export interface remoteControlDisableParams {

}
export interface remoteControlDisableResult {
	"status": unknown;
	"serverName": string;
	"installationId": string;
	"environmentId"?: string;
}

export interface remoteControlEnableParams {

}
export interface remoteControlEnableResult {
	"status": unknown;
	"serverName": string;
	"installationId": string;
	"environmentId"?: string;
}

export interface remoteControlPairingStartParams {
	"manualCode": boolean;
}
export interface remoteControlPairingStartResult {
	"pairingCode": string;
	"manualPairingCode"?: string;
	"environmentId": string;
	"expiresAt": number;
}

export interface remoteControlPairingStatusParams {
	"pairingCode"?: string;
	"manualPairingCode"?: string;
}
export interface remoteControlPairingStatusResult {
	"claimed": boolean;
}

export interface remoteControlStatusReadParams {

}
export interface remoteControlStatusReadResult {
	"status": unknown;
	"serverName": string;
	"installationId": string;
	"environmentId"?: string;
}

export interface reviewStartParams {
	"threadId": string;
	"target": unknown;
	"delivery"?: unknown;
}
export interface reviewStartResult {
	"turn": unknown;
	"reviewThreadId": string;
}

export interface skillsConfigWriteParams {

}
export interface skillsConfigWriteResult {
	"effectiveEnabled": boolean;
}

export interface skillsExtraRootsSetParams {
	"extraRoots": unknown;
}
export interface skillsExtraRootsSetResult {

}

export interface skillsListParams {
	"cwds": unknown;
	"forceReload": boolean;
}
export interface skillsListResult {
	"data": unknown;
}

export interface threadApproveGuardianDeniedActionParams {
	"threadId": string;
	"event": unknown;
}
export interface threadApproveGuardianDeniedActionResult {

}

export interface threadArchiveParams {

}
export interface threadArchiveResult {

}

export interface threadBackgroundTerminalsCleanParams {
	"threadId": string;
}
export interface threadBackgroundTerminalsCleanResult {

}

export interface threadBackgroundTerminalsListParams {
	"threadId": string;
	"cursor"?: string;
	"limit"?: number;
}
export interface threadBackgroundTerminalsListResult {
	"data": unknown;
	"nextCursor"?: string;
}

export interface threadBackgroundTerminalsTerminateParams {
	"threadId": string;
	"processId": string;
}
export interface threadBackgroundTerminalsTerminateResult {
	"terminated": boolean;
}

export interface threadCompactStartParams {
	"threadId": string;
}
export interface threadCompactStartResult {

}

export interface threadDecrementElicitationParams {
	"threadId": string;
}
export interface threadDecrementElicitationResult {
	"count": number;
	"paused": boolean;
}

export interface threadDeleteParams {
	"threadId": string;
}
export interface threadDeleteResult {

}

export interface threadForkParams {

}
export interface threadForkResult {
	"threadId": string;
	"lastTurnId"?: string;
	"beforeTurnId"?: string;
	"path"?: string;
	"model"?: string;
	"modelProvider"?: string;
	"serviceTier"?: string;
	"cwd"?: string;
	"runtimeWorkspaceRoots"?: unknown;
	"approvalPolicy"?: unknown;
	"approvalsReviewer"?: unknown;
	"sandbox"?: unknown;
	"permissions"?: string;
	"config"?: unknown;
	"baseInstructions"?: string;
	"developerInstructions"?: string;
	"ephemeral": boolean;
	"threadSource"?: unknown;
	"excludeTurns": boolean;
	"deferGoalContinuation": boolean;
}

export interface threadGoalClearParams {
	"threadId": string;
}
export interface threadGoalClearResult {
	"cleared": boolean;
}

export interface threadGoalGetParams {
	"threadId": string;
}
export interface threadGoalGetResult {
	"goal"?: unknown;
}

export interface threadGoalSetParams {

}
export interface threadGoalSetResult {
	"goal": unknown;
}

export interface threadIncrementElicitationParams {
	"threadId": string;
}
export interface threadIncrementElicitationResult {
	"count": number;
	"paused": boolean;
}

export interface threadInjectItemsParams {
	"threadId": string;
	"items": unknown;
}
export interface threadInjectItemsResult {

}

export interface threadItemsListParams {
	"threadId": string;
	"turnId"?: string;
	"cursor"?: string;
	"limit"?: number;
	"sortDirection"?: unknown;
}
export interface threadItemsListResult {
	"data": unknown;
	"nextCursor"?: string;
	"backwardsCursor"?: string;
}

export interface threadListParams {
	"cursor"?: string;
	"limit"?: number;
	"sortKey"?: unknown;
	"sortDirection"?: unknown;
	"modelProviders"?: unknown;
	"sourceKinds"?: unknown;
	"archived"?: boolean;
	"isPinned"?: boolean;
	"cwd"?: unknown;
	"useStateDbOnly": boolean;
	"searchTerm"?: string;
	"parentThreadId"?: string;
	"ancestorThreadId"?: string;
}
export interface threadListResult {
	"data": unknown;
	"nextCursor"?: string;
	"backwardsCursor"?: string;
}

export interface threadLoadedListParams {
	"cursor"?: string;
	"limit"?: number;
}
export interface threadLoadedListResult {
	"data": unknown;
	"nextCursor"?: string;
}

export interface threadMemoryModeSetParams {
	"threadId": string;
	"mode": unknown;
}
export interface threadMemoryModeSetResult {

}

export interface threadMetadataUpdateParams {
	"threadId": string;
	"gitInfo"?: unknown;
	"isPinned"?: boolean;
}
export interface threadMetadataUpdateResult {
	"thread": unknown;
}

export interface threadNameSetParams {
	"threadId": string;
	"name": string;
}
export interface threadNameSetResult {

}

export interface threadReadParams {
	"threadId": string;
	"includeTurns": boolean;
}
export interface threadReadResult {
	"thread": unknown;
}

export interface threadRealtimeAppendAudioParams {
	"threadId": string;
	"audio": unknown;
}
export interface threadRealtimeAppendAudioResult {

}

export interface threadRealtimeAppendSpeechParams {
	"threadId": string;
	"text": string;
}
export interface threadRealtimeAppendSpeechResult {

}

export interface threadRealtimeAppendTextParams {
	"threadId": string;
	"text": string;
	"role": unknown;
}
export interface threadRealtimeAppendTextResult {

}

export interface threadRealtimeListVoicesParams {

}
export interface threadRealtimeListVoicesResult {
	"voices": unknown;
}

export interface threadRealtimeStartParams {
	"threadId": string;
	"clientManagedHandoffs"?: boolean;
	"flushTranscriptTailOnSessionEnd"?: boolean;
	"codexResponsesAsItems"?: boolean;
	"codexResponseItemPrefix"?: string;
	"codexResponseHandoffMode"?: unknown;
	"codexResponseHandoffChannelPrefixes"?: unknown;
	"model"?: string;
	"outputModality": unknown;
	"includeStartupContext"?: boolean;
	"initialItems"?: unknown;
	"prompt"?: string;
	"realtimeSessionId"?: string;
	"transport"?: unknown;
	"version"?: unknown;
	"voice"?: unknown;
}
export interface threadRealtimeStartResult {

}

export interface threadRealtimeStopParams {
	"threadId": string;
}
export interface threadRealtimeStopResult {

}

export interface threadResumeParams {

}
export interface threadResumeResult {
	"threadId": string;
	"history"?: unknown;
	"path"?: string;
	"model"?: string;
	"modelProvider"?: string;
	"serviceTier"?: string;
	"cwd"?: string;
	"runtimeWorkspaceRoots"?: unknown;
	"approvalPolicy"?: unknown;
	"approvalsReviewer"?: unknown;
	"sandbox"?: unknown;
	"permissions"?: string;
	"config"?: unknown;
	"baseInstructions"?: string;
	"developerInstructions"?: string;
	"personality"?: unknown;
	"excludeTurns": boolean;
	"initialTurnsPage"?: unknown;
}

export interface threadRollbackParams {

}
export interface threadRollbackResult {
	"threadId": string;
	"numTurns": number;
}

export interface threadSearchParams {
	"cursor"?: string;
	"limit"?: number;
	"sortKey"?: unknown;
	"sortDirection"?: unknown;
	"sourceKinds"?: unknown;
	"archived"?: boolean;
	"searchTerm": string;
}
export interface threadSearchResult {
	"data": unknown;
	"nextCursor"?: string;
	"backwardsCursor"?: string;
}

export interface threadSearchOccurrencesParams {
	"threadId": string;
	"searchTerm": string;
	"cursor"?: string;
	"limit"?: number;
}
export interface threadSearchOccurrencesResult {
	"data": unknown;
	"nextCursor"?: string;
}

export interface threadSettingsUpdateParams {

}
export interface threadSettingsUpdateResult {

}

export interface threadShellCommandParams {
	"threadId": string;
	"command": string;
}
export interface threadShellCommandResult {

}

export interface threadStartParams {
	"model"?: string;
	"modelProvider"?: string;
	"allowProviderModelFallback": boolean;
	"serviceTier"?: string;
	"cwd"?: string;
	"runtimeWorkspaceRoots"?: unknown;
	"approvalPolicy"?: unknown;
	"approvalsReviewer"?: unknown;
	"sandbox"?: unknown;
	"permissions"?: string;
	"config"?: unknown;
	"serviceName"?: string;
	"baseInstructions"?: string;
	"developerInstructions"?: string;
	"personality"?: unknown;
	"multiAgentMode"?: unknown;
	"ephemeral"?: boolean;
	"historyMode"?: unknown;
	"sessionStartSource"?: unknown;
	"threadSource"?: unknown;
	"environments"?: unknown;
	"dynamicTools"?: unknown;
	"selectedCapabilityRoots"?: unknown;
	"mockExperimentalField"?: string;
	"experimentalRawEvents": boolean;
}
export interface threadStartResult {
	"thread": unknown;
	"model": string;
	"modelProvider": string;
	"serviceTier"?: string;
	"cwd": string;
	"runtimeWorkspaceRoots": unknown;
	"instructionSources": unknown;
	"approvalPolicy": unknown;
	"approvalsReviewer": unknown;
	"sandbox": unknown;
	"activePermissionProfile"?: unknown;
	"reasoningEffort"?: unknown;
	"multiAgentMode": unknown;
}

export interface threadTurnsListParams {
	"threadId": string;
	"cursor"?: string;
	"limit"?: number;
	"sortDirection"?: unknown;
	"itemsView"?: unknown;
}
export interface threadTurnsListResult {
	"data": unknown;
	"nextCursor"?: string;
	"backwardsCursor"?: string;
}

export interface threadUnarchiveParams {
	"threadId": string;
}
export interface threadUnarchiveResult {
	"thread": unknown;
}

export interface threadUnsubscribeParams {
	"threadId": string;
}
export interface threadUnsubscribeResult {
	"status": unknown;
}

export interface turnInterruptParams {
	"threadId": string;
	"turnId": string;
}
export interface turnInterruptResult {

}

export interface turnStartParams {
	"threadId": string;
	"clientUserMessageId"?: string;
	"input": unknown;
	"responsesapiClientMetadata"?: unknown;
	"additionalContext"?: unknown;
	"environments"?: unknown;
	"cwd"?: string;
	"runtimeWorkspaceRoots"?: unknown;
	"approvalPolicy"?: unknown;
	"approvalsReviewer"?: unknown;
	"sandboxPolicy"?: unknown;
	"permissions"?: string;
	"model"?: string;
	"serviceTier"?: string;
	"effort"?: unknown;
	"summary"?: unknown;
	"personality"?: unknown;
	"outputSchema"?: unknown;
	"collaborationMode"?: unknown;
	"multiAgentMode"?: unknown;
}
export interface turnStartResult {
	"turn": unknown;
}

export interface turnSteerParams {
	"threadId": string;
	"clientUserMessageId"?: string;
	"input": unknown;
	"responsesapiClientMetadata"?: unknown;
	"additionalContext"?: unknown;
	"expectedTurnId": string;
}
export interface turnSteerResult {
	"turnId": string;
}

export interface windowsSandboxReadinessParams {

}
export interface windowsSandboxReadinessResult {
	"status": unknown;
}

export interface windowsSandboxSetupStartParams {
	"mode": unknown;
	"cwd"?: string;
}
export interface windowsSandboxSetupStartResult {
	"started": boolean;
}

export interface initializedParams {

}

export interface accountChatgptAuthTokensRefreshParams {
	"reason": unknown;
	"previousAccountId"?: string;
}
export interface accountChatgptAuthTokensRefreshResult {
	"accessToken": string;
	"chatgptAccountId": string;
	"chatgptPlanType"?: string;
}

export interface applyPatchApprovalParams {
	"conversationId": unknown;
	"callId": string;
	"fileChanges": unknown;
	"reason"?: string;
	"grantRoot"?: string;
}
export interface applyPatchApprovalResult {
	"decision": unknown;
}

export interface attestationGenerateParams {

}
export interface attestationGenerateResult {
	"token": string;
}

export interface currentTimeReadParams {
	"threadId": string;
}
export interface currentTimeReadResult {
	"currentTimeAt": number;
}

export interface execCommandApprovalParams {
	"conversationId": unknown;
	"callId": string;
	"approvalId"?: string;
	"command": unknown;
	"cwd": string;
	"reason"?: string;
	"parsedCmd": unknown;
}
export interface execCommandApprovalResult {
	"decision": unknown;
}

export interface itemCommandExecutionRequestApprovalParams {
	"threadId": string;
	"turnId": string;
	"itemId": string;
	"startedAtMs": number;
	"approvalId"?: string;
	"environmentId"?: string;
	"reason"?: string;
	"networkApprovalContext"?: unknown;
	"command"?: string;
	"cwd"?: unknown;
	"commandActions"?: unknown;
	"additionalPermissions"?: unknown;
	"proposedExecpolicyAmendment"?: unknown;
	"proposedNetworkPolicyAmendments"?: unknown;
	"availableDecisions"?: unknown;
}
export interface itemCommandExecutionRequestApprovalResult {

}

export interface itemFileChangeRequestApprovalParams {
	"threadId": string;
	"turnId": string;
	"itemId": string;
	"startedAtMs": number;
	"reason"?: string;
	"grantRoot"?: string;
}
export interface itemFileChangeRequestApprovalResult {
	"decision": unknown;
}

export interface itemPermissionsRequestApprovalParams {
	"threadId": string;
	"turnId": string;
	"itemId": string;
	"environmentId"?: string;
	"startedAtMs": number;
	"cwd": string;
	"reason"?: string;
	"permissions": unknown;
}
export interface itemPermissionsRequestApprovalResult {
	"permissions": unknown;
	"scope": unknown;
	"strictAutoReview"?: boolean;
}

export interface itemToolCallParams {
	"threadId": string;
	"turnId": string;
	"callId": string;
	"namespace"?: string;
	"tool": string;
	"arguments": unknown;
}
export interface itemToolCallResult {
	"contentItems": unknown;
	"success": boolean;
}

export interface itemToolRequestUserInputParams {
	"thread_id": string;
	"turn_id": string;
	"item_id": string;
	"questions": unknown;
	"auto_resolution_ms"?: number;
}
export interface itemToolRequestUserInputResult {
	"answers": unknown;
}

export interface mcpServerElicitationRequestParams {
	"threadId": string;
	"turnId"?: string;
	"serverName": string;
	"request": unknown;
}
export interface mcpServerElicitationRequestResult {

}

export interface accountLoginCompletedParams {

}

export interface accountRateLimitsUpdatedParams {

}

export interface accountUpdatedParams {
	"authMode"?: unknown;
	"planType"?: unknown;
}

export interface appListUpdatedParams {

}

export interface commandExecOutputDeltaParams {
	"processId": string;
	"stream": unknown;
	"deltaBase64": string;
	"capReached": boolean;
}

export interface configWarningParams {
	"summary": string;
	"details"?: string;
	"path"?: string;
	"range"?: unknown;
}

export interface deprecationNoticeParams {
	"summary": string;
	"details"?: string;
}

export interface errorParams {
	"error": unknown;
	"willRetry": boolean;
	"threadId": string;
	"turnId": string;
}

export interface externalAgentConfigImportCompletedParams {
	"importId": string;
	"itemTypeResults": unknown;
}

export interface externalAgentConfigImportProgressParams {
	"importId": string;
	"itemTypeResults": unknown;
}

export interface fsChangedParams {
	"watchId": string;
	"changedPaths": unknown;
}

export interface fuzzyFileSearchSessionCompletedParams {
	"sessionId": string;
}

export interface fuzzyFileSearchSessionUpdatedParams {
	"sessionId": string;
	"query": string;
	"files": unknown;
}

export interface guardianWarningParams {
	"threadId": string;
	"message": string;
}

export interface hookCompletedParams {
	"threadId": string;
	"turnId"?: string;
	"run": unknown;
}

export interface hookStartedParams {

}

export interface itemAgentMessageDeltaParams {
	"threadId": string;
	"turnId": string;
	"itemId": string;
	"delta": string;
}

export interface itemAutoApprovalReviewCompletedParams {

}

export interface itemAutoApprovalReviewStartedParams {

}

export interface itemCommandExecutionOutputDeltaParams {
	"threadId": string;
	"turnId": string;
	"itemId": string;
	"delta": string;
}

export interface itemCommandExecutionTerminalInteractionParams {
	"threadId": string;
	"turnId": string;
	"itemId": string;
	"processId": string;
	"stdin": string;
}

export interface itemCompletedParams {
	"threadId": string;
	"turnId": string;
	"startedAtMs": number;
	"reviewId": string;
	"targetItemId"?: string;
	"review": unknown;
	"action": unknown;
}

export interface itemFileChangeOutputDeltaParams {
	"threadId": string;
	"turnId": string;
	"itemId": string;
	"delta": string;
}

export interface itemFileChangePatchUpdatedParams {
	"threadId": string;
	"turnId": string;
	"itemId": string;
	"changes": unknown;
}

export interface itemMcpToolCallProgressParams {
	"threadId": string;
	"turnId": string;
	"itemId": string;
	"message": string;
}

export interface itemPlanDeltaParams {

}

export interface itemReasoningSummaryPartAddedParams {
	"threadId": string;
	"turnId": string;
	"itemId": string;
	"summaryIndex": number;
}

export interface itemReasoningSummaryTextDeltaParams {
	"threadId": string;
	"turnId": string;
	"itemId": string;
	"delta": string;
}

export interface itemReasoningTextDeltaParams {
	"threadId": string;
	"turnId": string;
	"itemId": string;
	"delta": string;
	"contentIndex": number;
}

export interface itemStartedParams {
	"item": unknown;
	"threadId": string;
	"turnId": string;
	"startedAtMs": number;
}

export interface mcpServerOauthLoginCompletedParams {
	"name": string;
	"threadId"?: string;
	"success": boolean;
	"error"?: string;
}

export interface mcpServerStartupStatusUpdatedParams {
	"threadId"?: string;
	"name": string;
	"status": unknown;
	"error"?: string;
	"failureReason"?: unknown;
}

export interface modelReroutedParams {
	"threadId": string;
	"turnId": string;
	"fromModel": string;
	"toModel": string;
	"reason": unknown;
}

export interface modelSafetyBufferingUpdatedParams {
	"threadId": string;
	"turnId": string;
	"model": string;
	"useCases": unknown;
	"reasons": unknown;
	"showBufferingUi": boolean;
	"fasterModel"?: string;
}

export interface modelVerificationParams {
	"threadId": string;
	"turnId": string;
	"verifications": unknown;
}

export interface processExitedParams {
	"processHandle": string;
	"exitCode": number;
	"stdout": string;
	"stdoutCapReached": boolean;
	"stderr": string;
	"stderrCapReached": boolean;
}

export interface processOutputDeltaParams {
	"processHandle": string;
	"stream": unknown;
	"deltaBase64": string;
	"capReached": boolean;
}

export interface rawResponseCompletedParams {
	"threadId": string;
	"turnId": string;
	"responseId": string;
	"usage"?: unknown;
}

export interface rawResponseItemCompletedParams {
	"threadId": string;
	"turnId": string;
	"item": unknown;
}

export interface remoteControlStatusChangedParams {
	"status": unknown;
	"serverName": string;
	"installationId": string;
	"environmentId"?: string;
}

export interface serverRequestResolvedParams {
	"threadId": string;
	"requestId": unknown;
}

export interface skillsChangedParams {

}

export interface threadArchivedParams {
	"threadId": string;
}

export interface threadClosedParams {
	"threadId": string;
}

export interface threadCompactedParams {
	"threadId": string;
	"turnId": string;
}

export interface threadDeletedParams {
	"threadId": string;
}

export interface threadEnvironmentConnectedParams {
	"threadId": string;
	"environmentId": string;
}

export interface threadEnvironmentDisconnectedParams {
	"threadId": string;
	"environmentId": string;
}

export interface threadGoalClearedParams {
	"threadId": string;
}

export interface threadGoalUpdatedParams {
	"threadId": string;
	"turnId"?: string;
	"goal": unknown;
}

export interface threadNameUpdatedParams {
	"threadId": string;
	"threadName"?: string;
}

export interface threadRealtimeClosedParams {
	"threadId": string;
	"reason"?: string;
}

export interface threadRealtimeErrorParams {
	"threadId": string;
	"message": string;
}

export interface threadRealtimeItemAddedParams {
	"threadId": string;
	"item": unknown;
}

export interface threadRealtimeOutputAudioDeltaParams {
	"threadId": string;
	"audio": unknown;
}

export interface threadRealtimeSdpParams {
	"threadId": string;
	"sdp": string;
}

export interface threadRealtimeStartedParams {
	"threadId": string;
	"realtimeSessionId"?: string;
	"version": unknown;
}

export interface threadRealtimeTranscriptDeltaParams {
	"threadId": string;
	"role": string;
	"delta": string;
}

export interface threadRealtimeTranscriptDoneParams {
	"threadId": string;
	"role": string;
	"text": string;
}

export interface threadSettingsUpdatedParams {
	"threadId": string;
	"threadSettings": unknown;
}

export interface threadStartedParams {

}

export interface threadStatusChangedParams {
	"threadId": string;
	"status": unknown;
}

export interface threadTokenUsageUpdatedParams {
	"threadId": string;
	"turnId": string;
	"tokenUsage": unknown;
}

export interface threadUnarchivedParams {
	"threadId": string;
}

export interface turnCompletedParams {
	"threadId": string;
	"turn": unknown;
}

export interface turnDiffUpdatedParams {

}

export interface turnModerationMetadataParams {
	"threadId": string;
	"turnId": string;
	"metadata": unknown;
}

export interface turnPlanUpdatedParams {
	"threadId": string;
	"turnId": string;
	"diff": string;
}

export interface turnStartedParams {

}

export interface warningParams {
	"threadId"?: string;
	"message": string;
}

export interface windowsWorldWritableWarningParams {
	"samplePaths": unknown;
	"extraCount": unknown;
	"failedScan": boolean;
}

export interface windowsSandboxSetupCompletedParams {
	"mode": unknown;
	"success": boolean;
	"error"?: string;
}
