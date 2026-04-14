// Public tile compatibility helpers for dependent modules.

import {
    normalizeTileCreateData as normalizeTileCreateDataInternal,
    normalizeTileUpdateData as normalizeTileUpdateDataInternal
} from "../support/compatibility/TileCompatibility.js";

export function normalizeTileCreateData(data) {
    return normalizeTileCreateDataInternal(data);
}

export function normalizeTileUpdateData(data) {
    return normalizeTileUpdateDataInternal(data);
}
