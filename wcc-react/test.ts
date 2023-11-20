class EventManager {
  private componentEvents: {
    [componentName: string]: {
      [eventName: string]: { en: string; cn: string };
    };
  } = {};

  addComponent(
    componentName: string,
    events: { [eventName: string]: { en: string; cn: string } },
  ) {
    this.componentEvents[componentName] = events;
  }

  getComponentEvents(
    componentName: string,
  ): { [eventName: string]: { en: string; cn: string } } | undefined {
    return this.componentEvents[componentName];
  }

  getComponentNames(): string[] {
    return Object.keys(this.componentEvents);
  }

  getEventNames(componentName: string): string[] | undefined {
    const events = this.componentEvents[componentName];
    if (!events) {
      return undefined;
    }
    return Object.keys(events);
  }

  getAllComponentsAndEvents(): {
    [componentName: string]: {
      [eventName: string]: { en: string; cn: string };
    };
  } {
    return this.componentEvents;
  }
}

// 创建事件管理器
const eventManager = new EventManager();
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
const allComponentsAndEvents = eventManager.getAllComponentsAndEvents();
console.log(`所有组件和它们的事件：`, allComponentsAndEvents);
