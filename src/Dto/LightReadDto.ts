import type {LightStateDto} from "./LightStateDto.ts";

export interface LightReadDto {
    state : LightStateDto
    name : string;
}