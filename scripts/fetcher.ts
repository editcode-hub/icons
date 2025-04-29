import axios, { type AxiosInstance } from "axios"
import type {
	ComponentsResponse,
	FigmaApiOptions,
	GetFileParams,
	GetImageParams,
} from "."

class FigmaApi {
	private instance: AxiosInstance

	constructor({ personalAccessToken }: FigmaApiOptions) {
		this.instance = axios.create({
			baseURL: "https://api.figma.com/",
			headers: { "X-FIGMA-TOKEN": personalAccessToken },
		})
	}

	public getFile = async ({
		fileKey,
		ids,
		...opts
	}: GetFileParams): Promise<ComponentsResponse> => {
		const response = await this.instance.get(`/v1/files/${fileKey}`, {
			params: {
				ids: ids?.join(","),
				...opts,
			},
		})

		return {
			components: response.data?.components || {},
		}
	}

	public getImage = async ({
		fileKey,
		ids,
		format = "svg",
		...opts
	}: GetImageParams) => {
		const response = await this.instance.get(`/v1/images/${fileKey}`, {
			params: {
				ids: ids?.join(","),
				format,
				...opts,
			},
		})

		return { images: response.data?.images || {} }
	}
}

export { FigmaApi }
