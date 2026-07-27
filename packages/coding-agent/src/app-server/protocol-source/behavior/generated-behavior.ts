// GENERATED CODE — DO NOT EDIT. Source: vendor/app-server.behavior.json.

import behavior from "../vendor/app-server.behavior.json" with { type: "json" };

export type GoldenErrorEnvelope = { id: string | number; error: { code: number; message: string } };
export const goldenErrorEnvelopes = behavior.errorEnvelopes as Record<string, GoldenErrorEnvelope>;
export const websocketAuthArgs = behavior.cli.AppServerWebsocketAuthArgs as readonly string[];
export const malformedJsonPolicy = behavior.wireProtocol.malformedJson;
