var EventManager = /** @class */ (function () {
    function EventManager() {
        this.componentEvents = {};
    }
    EventManager.prototype.addComponent = function (componentName, events) {
        this.componentEvents[componentName] = events;
    };
    EventManager.prototype.getComponentEvents = function (componentName) {
        return this.componentEvents[componentName];
    };
    EventManager.prototype.getComponentNames = function () {
        return Object.keys(this.componentEvents);
    };
    EventManager.prototype.getEventNames = function (componentName) {
        var events = this.componentEvents[componentName];
        if (!events) {
            return undefined;
        }
        return Object.keys(events);
    };
    EventManager.prototype.getAllComponentsAndEvents = function () {
        return this.componentEvents;
    };
    return EventManager;
}());
// 创建事件管理器
var eventManager = new EventManager();
// 添加事件到不同组件，接收一个 JSON 对象
eventManager.addComponent("Button Component", {
    onchange: { en: "onchange", cn: "改变事件" },
    onclick: { en: "onclick", cn: "单击事件" },
    ondblclick: { en: "ondblclick", cn: "双击事件" },
});
eventManager.addComponent("Select Component", {
    onchange: { en: "onchange", cn: "改变事件" },
    onmouseover: { en: "onmouseover", cn: "鼠标悬停事件" },
});
// 获取所有组件和它们的事件
var allComponentsAndEvents = eventManager.getAllComponentsAndEvents();
console.log("\u6240\u6709\u7EC4\u4EF6\u548C\u5B83\u4EEC\u7684\u4E8B\u4EF6\uFF1A", allComponentsAndEvents);
