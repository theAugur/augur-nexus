// Public site contribution API for dependent modules.

import { getSiteGenre } from "../features/site/registry/SiteGenreRegistry.js";
import { registerSiteSceneType } from "../features/site/registry/SiteSceneTypeRegistry.js";

export function registerSceneType(definition) {
    return registerSiteSceneType(definition);
}

export function getSiteGenerationProfile(genreId, state = {}) {
    const genre = getSiteGenre(genreId);

    return {
        genreId: genre.id,
        requiredPackId: genre.requiredPackId ?? "__default__",
        generationOverrides: genre.resolveGenerationOverrides?.(state) || {}
    };
}

