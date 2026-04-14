// Public UI API for dependent modules.

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

export class AugurToolApplication extends HandlebarsApplicationMixin(ApplicationV2) {
    static TOOL_NAME = "";

    static DEFAULT_OPTIONS = {
        tag: "div",
        window: {
            resizable: true
        },
        position: {
            left: 120,
            top: 60
        }
    };

    async close(options) {
        if (ui.controls) {
            const activeTool = ui.controls.tool;
            const toolName = activeTool?.name || activeTool;

            if (this.constructor.TOOL_NAME && toolName === this.constructor.TOOL_NAME) {
                ui.controls.activate({ control: "augurTools", tool: "augur-select" });
            }
        }

        return super.close(options);
    }
}
