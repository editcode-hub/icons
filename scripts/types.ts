export interface FigmaApiOptions {
	personalAccessToken: string
}

export interface GetFileParams {
	fileKey: string
	ids?: string[]
	[key: string]: any
}

export interface GetImageParams {
	fileKey: string
	ids?: string[]
	format?: string
	[key: string]: any
}

export interface ComponentMetadata {
	key: string
	name: string
	description: string
	remote: boolean
	documentationLinks: string[]
}

export interface ComponentsResponse {
	components: Record<string, ComponentMetadata>
}
