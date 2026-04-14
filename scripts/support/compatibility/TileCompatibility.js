import { isV14OrNewer } from "./FoundryVersion.js";

function applyTopLeftTextureAnchor(texture = {}) {
    return {
        ...texture,
        anchorX: 0,
        anchorY: 0
    };
}

export function normalizeTileCreateData(data) {
    if (!isV14OrNewer()) return data;
    return {
        ...data,
        texture: applyTopLeftTextureAnchor(data.texture)
    };
}

export function normalizeTileUpdateData(data) {
    if (!isV14OrNewer()) return data;
    if (!data.texture) return data;
    return {
        ...data,
        texture: applyTopLeftTextureAnchor(data.texture)
    };
}
