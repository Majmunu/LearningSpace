class EventManager {
  constructor() {
    this.commonEvents = new Set();
  }

  addCommonEvent(event) {
    this.commonEvents.add(event);
  }
}

class Component {
  constructor(name, eventManager) {
    this.name = name;
    this.events = [];
    this.eventManager = eventManager;
  }

  addEvent(event) {
    if (this.eventManager.commonEvents.has(event)) {
      this.events.push(event);
    } else {
      console.log(`Event '${event}' is not a common event.`);
    }
  }

  removeEvent(event) {
    const index = this.events.indexOf(event);
    if (index !== -1) {
      this.events.splice(index, 1);
    }
  }
}

// 创建事件管理器
const eventManager = new EventManager();
eventManager.addCommonEvent('Common Event 1');
eventManager.addCommonEvent('Common Event 2');
// 创建组件对象
const component1 = new Component('Component 1', eventManager);
component1.addEvent('Event A');
component1.addEvent('Event B');
component1.addEvent('Common Event 1');
const component2 = new Component('Component 2', eventManager);
component2.addEvent('Event C');
component2.addEvent('Common Event 1');
const component3 = new Component('Component 3', eventManager);
component3.addEvent('Event X');
component3.addEvent('Common Event 2');
// 打印组件和事件信息
console.log(component1);
console.log(component2);
console.log(component3);
