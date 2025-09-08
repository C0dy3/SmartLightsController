import type {LightStateDto} from "./LightStateDto.ts";

export interface LightReadDto {
    id: number
    name: string
    state: LightStateDto
}